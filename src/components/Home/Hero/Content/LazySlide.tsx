"use client";

import React, { useState, useRef, useEffect } from "react";

interface LazySlideProps {
  video: string;
  isActive?: boolean;
  priority?: boolean;
}

const LazySlide: React.FC<LazySlideProps> = ({ 
  video, 
  isActive = false, 
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(priority); // Load immediately if priority
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If priority (first slide), load immediately
    if (priority) {
      setIsLoaded(true);
      return;
    }

    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px' // Start loading when element is 50px away
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    // Play/pause video based on active state
    if (videoRef.current) {
      if (isActive && isLoaded) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, isLoaded]);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center"
    >
      {!isLoaded ? (
        // Loading placeholder
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 z-0 flex items-center justify-center">
          <div className="animate-pulse text-white text-lg">Loading...</div>
        </div>
      ) : (
        <video
          ref={videoRef}
          preload={priority ? "auto" : "none"}
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          autoPlay={isActive}
          loop
          muted
          playsInline
          onLoadedData={() => {
            // Video is ready to play
            if (isActive) {
              videoRef.current?.play().catch(console.error);
            }
          }}
          onError={(e) => {
            console.error("Video loading error:", e);
          }}
        >
          <source src={video} type="video/webm" />
          <source src={video.replace('.webm', '.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LazySlide;
