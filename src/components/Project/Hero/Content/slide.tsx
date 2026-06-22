import Image from "next/image";
import React from "react";

// import Text from "@/components/ui/Text";

const getVideoMimeType = (source: string) => {
  const path = source.split("?")[0];
  if (path.endsWith(".webm")) return "video/webm";
  if (path.endsWith(".ogg")) return "video/ogg";
  return "video/mp4";
};

interface SlideProps {
  image: string;
  video: string | string[] | null;
}

const Slide = ({ image, video }: SlideProps) => {
  const showVideo = Array.isArray(video) ? video.length > 0 : !!video;

  return (
    <div className="relative h-screen mob:h-screen min-h-[784px] flex justify-center items-center">
      {showVideo ? (
        <video
          preload="none"
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          {Array.isArray(video)
            ? video.map((src, index) => (
                <source key={index} src={src} type={getVideoMimeType(src)} />
              ))
            : video && (
                <source src={video} type={getVideoMimeType(video)} />
              )}
        </video>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
};

export default Slide;
