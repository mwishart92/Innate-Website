"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface MediaSlideProps {
  setImageLoaded?: (loaded: boolean) => void;
  src: string | string[];
  type: string;
  fixedBackground?: boolean;
  mobilePlaceholder?: string;
  isMobile?: boolean;
}

const MediaSlide: React.FC<MediaSlideProps> = ({
  src,
  type,
  setImageLoaded,
  fixedBackground,
  mobilePlaceholder,
  isMobile,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(
        typeof window !== "undefined" && window.innerWidth <= 767
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getVideoMimeType = (source: string) => {
    if (source.endsWith(".webm")) return "video/webm";
    if (source.endsWith(".ogg")) return "video/ogg";
    return "video/mp4";
  };

  const shouldShowPlaceholder =
    (isMobile || isMobileDevice) && mobilePlaceholder && !videoLoaded;

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setImageLoaded?.(true);
  };

  const imageSrc = Array.isArray(src) ? src[0] : src;

  return (
    <div className="relative w-full z-10 px-20 mob:px-5 mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center">
      {type === "image" ? (
        fixedBackground ? (
          <div
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          ></div>
        ) : (
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={imageSrc}
            alt=""
            fill
            sizes="100vw"
            priority
            onLoad={() => setImageLoaded?.(true)}
          />
        )
      ) : (
        <>
          {/* Mobile Placeholder Image */}
          {shouldShowPlaceholder && mobilePlaceholder && (
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src={mobilePlaceholder}
              alt=""
              fill
              sizes="100vw"
              priority
            />
          )}
          <video
            className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${
              shouldShowPlaceholder ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleVideoLoaded}
          >
            {Array.isArray(src) ? (
              src.map((s, index) => (
                <source key={index} src={s} type={getVideoMimeType(s)} />
              ))
            ) : (
              <source src={src} type={getVideoMimeType(src)} />
            )}
          </video>
        </>
      )}
    </div>
  );
};

export default MediaSlide;
