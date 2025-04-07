import React from "react";
import ReactMarquee from "react-fast-marquee";

import { cn } from "@/libs/utils/twMerge";
import Image from "next/image";

interface Props {
  className?: string;
}
// import e from "@/public/images/services/bt.png.png"
const Marquee = (props: Props) => {
  const {  className, ...rest } = props;

  // Define image URLs directly within the component
  const imageUrls = [
    "/images/services/autocad.png.png",
    "/images/services/andersen.png.png",
    "/images/services/autodesk.png.png",
    "/images/services/milgard.png.png",
    "/images/services/timber.png.png",
    "/images/services/vitrocsa.png.png",
    "/images/services/american.png.png",
    "/images/services/bt.png.png",
    
  ];
  const duplicatedImageUrls = [...imageUrls, ...imageUrls];

  return (
    <div className="py-14">
      <h2 className="text-[24px] text-white font-medium text-center mb-8">
        Partnered with top brands in the industry
      </h2>
      <ReactMarquee {...rest} className="flex items-center">
      {duplicatedImageUrls.map((image, index) => (
          <Image
            src={image}
            alt={`Brand ${index + 1}`}
            className={cn("mx-10 mob:mx-4", className)}
            key={index}
            width={114}
            height={114}
          />
        ))}
         
      </ReactMarquee>
    </div>
  );
};

export default Marquee;
