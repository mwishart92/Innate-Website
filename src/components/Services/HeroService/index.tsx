import React from "react";
import Image from "next/image";

import slide from "@/public/images/home/slide1innate.png";
import Text from "@/components/ui/Text";
const HeroService = () => {
  return (
    <div className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center px-20 mob:px-5">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={slide}
        alt=""
        width={1440}
        height={757}
      />

      <div className="w-full  relative z-10  mt-[0px]">
        <Text as="h1" className="my-3 text-[40px] font-[300] leading-[52px]">
          <span className="font-normal italic">Innate</span> <br />
          Kitchens & <br /> Bathrooms
        </Text>
        <button className="mt-[20px] font-inter font-bold border border-[#FFFFFF]  bg-transparent w-full max-w-[137px] h-[50px] text-[16px] leading-[22.4px]  hover:bg-white hover:text-black hover:border-black transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroService;
