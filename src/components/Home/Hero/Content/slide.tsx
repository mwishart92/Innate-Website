import React from "react";

// import Text from "@/components/ui/Text";
const Slide1 = ({ video }: { video: string }) => {
  return (
    <div className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center">
      <video
        preload="none"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Slide1;
