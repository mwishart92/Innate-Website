"use client";
import React from "react";
import Image from "next/image";

interface MediaSlideProps {
  setImageLoaded?: (loaded: boolean) => void;
  src: string;
  type: string;
}

const MediaSlide: React.FC<MediaSlideProps> = ({
  src,
  type,
  setImageLoaded,
}) => {
  return (
    <div className="relative w-full z-10 px-20 mob:px-5 mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center">
      {type === "image" ? (
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority
          onLoad={() => setImageLoaded?.(true)}
        />
      ) : (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          onLoad={() => setImageLoaded?.(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default MediaSlide;
