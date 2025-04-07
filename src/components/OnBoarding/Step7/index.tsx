import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
// import step7 from "@/public/images/onboarding/step7.png";

import avoidleft from '@/public/images/home/dsignbuild/left.svg'
import avoidright from '@/public/images/home/dsignbuild/right.svg'
import avoidcenter from '@/public/images/home/dsignbuild/center.svg'

interface Step7Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Step7: React.FC<Step7Props> = ({ onNext, onPrevious }) => {
  return (
    <div className=" gradient flex items-center justify-center px-5 min-h-[858px]">
      <div className="max-w-[90%] mob:max-w-full w-full py-20">
        <div className="flex flex-wrap items-center justify-around mob:gap-10">
          <div className="max-w-[90%]">
            <Text
              as="h1"
              className="text-[40px] mob:text-[30px] font-firaSans font-medium mob:font-semibold mb-2"
            >
              Transparent Bids
            </Text>
            <Text className="text-[#D9D9D9] text-[16px] font-normal mob:text-[14px]">
              You’ll get a transparent bid that breaks down the price per trade.
            </Text>
          </div>
          <div className="">
            <div className="w-full max-w-[437.84px] relative flex justify-center items-center mob:order-2">
              <Image
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="0"
                className="relative z-20 w-[251.2px] h-[279.13px] sm:w-[340.31px] sm:h-[360.99px]"
                src={avoidcenter}
                alt=""
              />
              <Image
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="absolute left-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px]"
                src={avoidleft}
                alt=""
              />
              <Image
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="absolute right-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px]"
                src={avoidright}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex mob:flex-wrap justify-end mt-10">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px]      bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image className="rotate-180" src={arrow} alt="" width={24} height={24} />
              Previous
            </button>
            <button
              onClick={onNext}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[116px]     bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              Next
              <Image src={arrow} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step7;
