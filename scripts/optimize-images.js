const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('Sharp not found. Installing...');
  execSync('npm install sharp', { stdio: 'inherit' });
  sharp = require('sharp');
}

const IMAGES_DIR = path.join(__dirname, '../public/images');
const QUALITY = 80;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

// Skip directories that don't need optimization
const SKIP_DIRS = ['node_modules', '.git', '.next', 'optimized'];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const {
      width = MAX_WIDTH,
      height = MAX_HEIGHT,
      quality = QUALITY,
      format = 'webp'
    } = options;

    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
    
    return {
      originalSize,
      optimizedSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath, outputDir, processedCount = 0, totalSavings = 0) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      if (!SKIP_DIRS.includes(item)) {
        const relativePath = path.relative(IMAGES_DIR, itemPath);
        const newOutputDir = path.join(outputDir, relativePath);
        
        if (!fs.existsSync(newOutputDir)) {
          fs.mkdirSync(newOutputDir, { recursive: true });
        }
        
        const result = await processDirectory(itemPath, outputDir, processedCount, totalSavings);
        processedCount = result.count;
        totalSavings = result.savings;
      }
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        const relativePath = path.relative(IMAGES_DIR, itemPath);
        const outputPath = path.join(outputDir, relativePath.replace(ext, '.webp'));
        
        // Ensure output directory exists
        const outputDirPath = path.dirname(outputPath);
        if (!fs.existsSync(outputDirPath)) {
          fs.mkdirSync(outputDirPath, { recursive: true });
        }
        
        // Skip if already optimized and newer
        if (fs.existsSync(outputPath)) {
          const inputTime = stat.mtime;
          const outputTime = fs.statSync(outputPath).mtime;
          if (outputTime > inputTime) {
            console.log(`⏭️  Skipping ${item} (already optimized)`);
            continue;
          }
        }

        const result = await optimizeImage(itemPath, outputPath);
        if (result) {
          totalSavings += result.savings;
          processedCount++;
        }
      }
    }
  }

  return { savings: totalSavings, count: processedCount };
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('❌ Images directory not found:', IMAGES_DIR);
    process.exit(1);
  }

  const outputDir = path.join(IMAGES_DIR, 'optimized');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const startTime = Date.now();
  const result = await processDirectory(IMAGES_DIR, outputDir);
  const endTime = Date.now();

  console.log('\n📊 Optimization Summary:');
  console.log(`   Processed: ${result.count} images`);
  console.log(`   Total savings: ${result.savings.toFixed(1)}%`);
  console.log(`   Time taken: ${((endTime - startTime) / 1000).toFixed(1)}s`);
  console.log(`   Output directory: ${outputDir}`);

  // Create a mapping file for easy reference
  const mapping = {
    originalDir: IMAGES_DIR,
    optimizedDir: outputDir,
    processedAt: new Date().toISOString(),
    totalImages: result.count,
    totalSavings: result.savings
  };

  fs.writeFileSync(
    path.join(outputDir, 'optimization-mapping.json'),
    JSON.stringify(mapping, null, 2)
  );

  console.log('\n✅ Image optimization complete!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, processDirectory };
