import React from "react";
import Image from "next/image";
import slide from "@/public/images/home/slide1innate.png";
import Text from "@/components/ui/Text";
import downarrow from "@/public/images/project/union-1 (1).svg";

const HeroProject = () => {
  return (
    <div className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center px-20 mob:px-5">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={slide}
        alt=""
        width={1440}
        height={757}
      />

      <div className="px-0  relative mob:absolute h-full w-full">
        <div className="w-full absolute z-10 mt-[0px] bottom-0 mob:bottom-8 left-0 mob:w-[88%]  mob:left-[0px] mob:px-6">
          <Text as="h1" className="mb-4 text-[28px] font-medium">
            <span className="font-normal text-[20px]">Residential</span> <br />
            Palm Springs ADU
          </Text>

          {/* <Text className="mt-[4px] font-inter flex items-center">
          Learn More
          <Image
            className="ml-2"
            src={downarrow}
            alt=""
            width={10}
            height={10}
          />
        </Text> */}
        </div>
      </div>
    </div>
  );
};

export default HeroProject;
