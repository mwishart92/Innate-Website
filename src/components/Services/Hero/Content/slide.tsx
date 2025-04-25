import Image from "next/image";
import React from "react";

// import Text from "@/components/ui/Text";

interface SlideProps {
  image: string;
  video: string | null;
}

const Slide = ({ image, video }: SlideProps) => {
  return (
    <div className="relative h-screen mob:h-screen min-h-[784px] flex justify-center items-center">
      {video ? (
        <video
          preload="none"
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              video
                ? video
                : "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/bosma-adu.mp4?alt=media&token=0c906c3e-ed25-4082-8230-f5941f54e9ce"
            }
            type="video/mp4"
          />
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
