import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";
import slide from "@/public/images/home/slide1innate.png";
import arrowwhite from "@/public/images/work/Arrowwhite.png";
import arrowblue from "@/public/images/work/Arrowblue.png";
const First = () => {
  return (
    <div className="relative w-full z-10 px-20 mob:px-5 mob:h-full h-screen min-h-[700px] flex justify-center items-center">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={slide}
        alt=""
        width={1440}
        height={757}
      />

      <div className="w-full  relative z-10  h-screen min-h-[700px]">
        <div className="absolute bottom-14 left-0">
          <Text className="text-[20px] leading-[28px] text-[#FFFFFF] mt-24">
            Residential
          </Text>
          <Text className="text-[28px] leading-[36.4px] text-[#FFFFFF] mb-3 flex items-center gap-1">
            Palm Springs ADU{" "}
            <Image src={arrowblue} alt="" width={31} height={31} />
          </Text>
          <Link
            href=""
            className="max-w-[126px] flex items-center gap-1 text-[16px] font-inter text-white pt-4"
          >
            LEARN MORE <Image src={arrowwhite} alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
