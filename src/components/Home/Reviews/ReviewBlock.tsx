import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import avatar from "@/public/images/home/avatarimg.png";
import leftdot from "@/public/images/home/left“.png";
import rightdot from "@/public/images/home/right“.png";

interface ReviewsProps {
  text: string;
  name: string;
  title: string;
}

const ReviewBlock: React.FC<ReviewsProps> = ({ text, name, title }) => {
  return (
    <div className="">
      <div className="w-full max-w-[1104px] mx-auto relative">
        <div className="bg-[#7A7A7A] rounded-[16px] p-[25px]">
          <div className="flex justify-between mt-10">
            <div className="flex gap-[34px]">
              <div className="bg-[#747373] w-[50px] h-[50px] mob:w-[56px] mob:h-[56px] text-white flex justify-center items-center text-[40px] rounded-full relative">
                {name[0]}
                <div className=" absolute right-0 bottom-0 bg-white p-[2px] rounded-full flex justify-center items-center w-[20px] h-[20px]">
                  <img
                    src="/Google__G__logo.svg"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
              <div className="">
                <Text className="text-[16px] font-medium leading-[31.2px] text-white mob:text-[16px]">
                  {name}
                </Text>
                <Text className="text-[16px] mt-1 text-white mob:text-[14px] font-semibold">
                  {title}
                </Text>
              </div>
            </div>
            <div className="w-[21px]">
              <img src="/Approval.png" alt="" />
            </div>
          </div>
          <div className="flex gap-[1px] mt-4">
            <img src="/Star.png" className="w-[22px]" />
            <img src="/Star.png" className="w-[22px]" />
            <img src="/Star.png" className="w-[22px]" />
            <img src="/Star.png" className="w-[22px]" />
            <img src="/Star.png" className="w-[22px]" />
          </div>
          <Text className="text-[16px] leading-[31.2px] text-white max-w-[879px] mob:text-[16px] mob:leading-[25.2px] mob:font-normal font-semibold">
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ReviewBlock;
