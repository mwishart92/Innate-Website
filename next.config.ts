import { NextConfig } from "next";
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: isDev
      ? "default-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:;"
      : "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Bundle optimization
  experimental: {
    optimizePackageImports: ["@mui/material", "react-icons", "gsap"],
  },

  // Bundle analyzer
  ...(process.env.ANALYZE === "true" && {
    webpack: (config, { isServer, webpack }) => {
      if (!isServer) {
        try {
          const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              openAnalyzer: false,
              reportFilename: "./bundle-analyzer-report.html",
            }),
          );
        } catch (error) {
          console.warn(
            "Bundle analyzer not available:",
            error instanceof Error ? error.message : String(error),
          );
        }
      }
      return config;
    },
  }),

  // Headers for caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              isDev
                ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: http://localhost:* ws://localhost:* https://www.youtube.com https://s.ytimg.com"
                : "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.gstatic.com https://www.youtube.com https://s.ytimg.com",
              isDev
                ? "connect-src 'self' ws://localhost:* http://localhost:*"
                : "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net https://firebasestorage.googleapis.com",
              "img-src 'self' data: blob: https:",
              "frame-src https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "media-src 'self' https://firebasestorage.googleapis.com",
            ].join("; "),
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize bundle size
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          // Separate large libraries
          mui: {
            test: /[\\/]node_modules[\\/]@mui[\\/]/,
            name: "mui",
            chunks: "all",
            priority: 20,
          },
          gsap: {
            test: /[\\/]node_modules[\\/]gsap[\\/]/,
            name: "gsap",
            chunks: "all",
            priority: 15,
          },
          swiper: {
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            name: "swiper",
            chunks: "all",
            priority: 15,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
