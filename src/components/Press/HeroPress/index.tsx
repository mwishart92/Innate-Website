import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

import filter from "@/public/images/press/filter.png";
const HeroPress = () => {
  return (
    <div className="gradient  flex justify-center items-center">
      <div className="w-full max-w-full mob:mx-5 min-h-[488px] relative h-full flex justify-center items-center">
        <Text
          as="h1"
          className="text-[64px] text-[#D9D9D9] mob:text-[40px] font-bold mob:font-medium leading-[70.4px] text-center mt-6"
        >
          Press
        </Text>
        <div className="flex gap-[18px] items-center absolute left-0 bottom-10 px-16 md:px-20 mob:px-0">
          <Image src={filter} alt="" width={37} height={37} />
          <Text className="text-[20px] mob:font-normal">
            Filter{" "}
            <span className="text-[18px] text-[#D9D9D9] ml-[12px] mob:font-normal">
              18 Results
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HeroPress;
