"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getResponsiveImageSizes, getImagePriority } from '@/utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  quality = 75,
  placeholder = 'empty',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine if this image is above the fold
  const isAboveFold = priority || (typeof window !== 'undefined' && window.scrollY < window.innerHeight);

  // Get responsive sizes if not provided
  const responsiveSizes = sizes || getResponsiveImageSizes(width || 1200);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Show loading placeholder
  if (!isLoaded && !hasError) {
    return (
      <div 
        ref={containerRef}
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
        }}
      />
    );
  }

  // Show error placeholder
  if (hasError) {
    return (
      <div 
        className={`bg-gray-300 flex items-center justify-center ${className}`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
        }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        fill={fill}
        sizes={responsiveSizes}
        priority={getImagePriority(isAboveFold)}
        quality={quality}
        placeholder={placeholder}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

export default OptimizedImage;
