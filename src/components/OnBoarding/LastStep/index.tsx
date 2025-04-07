import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import Link from "next/link";

interface LastStepProps {
  onPrevious: () => void;
}

const LastStep: React.FC<LastStepProps> = ({ onPrevious }) => {
  const cleanStorage = () => {
    sessionStorage.setItem("currentStep", "0");
     sessionStorage.removeItem("step1"); 
     sessionStorage.removeItem("step2"); 
     sessionStorage.removeItem("step4"); 
     sessionStorage.removeItem("step4Alternative"); 
     sessionStorage.removeItem("step5"); 
     sessionStorage.removeItem("step6");      
     sessionStorage.removeItem("step8"); 
     sessionStorage.removeItem("formData")
  }
  return (
    <div className="gradient flex items-center justify-center px-5 min-h-[858px]">
      <div className="max-w-[90%] mob:max-w-full w-full py-20">
        <div className="">
          <Text
            as="h1"
            className="text-[40px] mob:text-[30px] font-firaSans font-medium mob:font-semibold mb-3"
          >
            Thanks for telling us about your project!
          </Text>
          <Text className="text-[16px] font-normal mob:text-[14px]">We’ll be in touch soon to schedule a consultation.</Text>
          <Link
            href="/"
            className="mt-16 flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px]      bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            onClick={cleanStorage}
          >
            Home
            <Image src={arrow} alt="" width={24} height={24} />
          </Link>
        </div>

        <div className="flex mob:flex-wrap justify-end mt-5">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px]      bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image
                className="rotate-180"
                src={arrow}
                alt=""
                width={24}
                height={24}
              />
              Previous
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[116px]     bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
              onClick={cleanStorage}
            >
              Next
              <Image src={arrow} alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastStep;
