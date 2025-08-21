"use client";

import React, { useState, useRef, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  onLoad?: () => void;
  priority?: boolean;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  onLoad,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [priority]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    console.error('Video failed to load:', src);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isInView ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload={priority ? "auto" : "metadata"}
          poster={poster}
          onLoadedData={handleLoadedData}
          onError={handleError}
          disablePictureInPicture
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        </video>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 animate-pulse" />
      )}
      
      {isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.5)] z-10 pointer-events-none" />
      )}
    </div>
  );
};

export default OptimizedVideo;
