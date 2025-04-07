import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import savetime from "@/public/images/home/saveTime.svg";

interface Step1Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Step3: React.FC<Step1Props> = ({ onNext, onPrevious }) => {
  
  return (
    <div className="gradient py-20 flex items-start justify-center px-5 min-h-[858px]">
      <div className="max-w-[90%] w-full ">
        <div className="flex flex-wrap items-center justify-between mob:gap-10">
          <div className="max-w-[499px]">
            <Text
              as="h1"
              className="text-[40px] mob:text-[30px]  font-firaSans font-medium mob:font-semibold mb-2 "
            >
              You’re in the right place!
            </Text>
            <Text className="text-[#D9D9D9] text-[16px] mob:text-[14px] font-normal">
              Innate has a team of in-house architects, engineers and craftsmen
              ready to complete your project!
            </Text>
          </div>
          <div className="">
            <Image data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="0"
              src={savetime}
              alt=""
              width={473}
              height={404} />
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

export default Step3;
