import React, {  } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import SlideBar from "./SlideBar";

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { selectedOptions: string[] }) => void; // Data structure
}

const Step4: React.FC<Step2Props> = ({ onNext, onPrevious, onChange }) => {
 

  return (
    <div className=" gradient flex py-20 items-center justify-center px-5 mob:px-0 min-h-[858px]">
      <div className="max-w-[90%] mob:max-w-full w-full ">
        <div className="mob:w-full">
          <Text className="text-[20px] mob:text-[18px]  font-firaSans font-normal mb-2 ">
            OPTIONAL
          </Text>
          <Text
            as="h1"
            className="text-[40px] mob:text-[30px]  font-firaSans font-medium mob:font-semibold mb-5 "
          >
            What’s your budget range?
          </Text>
          {/* <Image src={range} alt="" width={1140} height={278} /> */}
          <SlideBar onChange={onChange}/>
        </div>

        <div className="flex mob:flex-wrap justify-end mt-5">
          <div className="flex gap-5 mt-6">
          <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px]      bg-transparent   h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image className="rotate-180" src={arrow} alt="" width={24} height={24} />
              Previous
            </button>
            <button
              onClick={()=>{onNext();console.log(sessionStorage.getItem("step4"))}}
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

export default Step4;
