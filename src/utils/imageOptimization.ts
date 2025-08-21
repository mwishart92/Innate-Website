// Image optimization utilities
export const getOptimizedImageUrl = (
  src: string,
  width: number,
  quality: number = 75
): string => {
  // If it's already a Next.js optimized image, return as is
  if (src.startsWith('/_next/image')) {
    return src;
  }

  // If it's an external URL, return as is (will be handled by Next.js Image component)
  if (src.startsWith('http')) {
    return src;
  }

  // For local images, return the path (Next.js will optimize automatically)
  return src;
};

export const getResponsiveImageSizes = (containerWidth: number): string => {
  return `(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, ${containerWidth}px`;
};

export const getImagePriority = (isAboveFold: boolean = false): boolean => {
  return isAboveFold;
};

// Preload critical images
export const preloadImage = (src: string): void => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }
};

// Lazy load images with intersection observer
export const lazyLoadImage = (
  imgElement: HTMLImageElement,
  src: string,
  callback?: () => void
): void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgElement.src = src;
          imgElement.classList.remove('lazy');
          observer.unobserve(imgElement);
          callback?.();
        }
      });
    },
    {
      rootMargin: '50px',
    }
  );

  observer.observe(imgElement);
};

// Convert Firebase Storage URLs to optimized versions
export const optimizeFirebaseUrl = (url: string): string => {
  if (url.includes('firebasestorage.googleapis.com')) {
    // Add optimization parameters to Firebase Storage URLs
    return `${url}&alt=media&format=webp&quality=75`;
  }
  return url;
};

// Get appropriate image format based on browser support
export const getImageFormat = (): 'webp' | 'avif' | 'jpeg' => {
  if (typeof window === 'undefined') return 'webp';
  
  // Check for AVIF support
  const avifCanvas = document.createElement('canvas');
  avifCanvas.width = 1;
  avifCanvas.height = 1;
  const avifContext = avifCanvas.getContext('2d');
  if (avifContext) {
    avifContext.fillStyle = 'red';
    avifContext.fillRect(0, 0, 1, 1);
    const avifDataUrl = avifCanvas.toDataURL('image/avif');
    if (avifDataUrl.indexOf('data:image/avif') === 0) {
      return 'avif';
    }
  }
  
  // Check for WebP support
  const webpCanvas = document.createElement('canvas');
  webpCanvas.width = 1;
  webpCanvas.height = 1;
  const webpContext = webpCanvas.getContext('2d');
  if (webpContext) {
    webpContext.fillStyle = 'red';
    webpContext.fillRect(0, 0, 1, 1);
    const webpDataUrl = webpCanvas.toDataURL('image/webp');
    if (webpDataUrl.indexOf('data:image/webp') === 0) {
      return 'webp';
    }
  }
  
  return 'jpeg';
};
