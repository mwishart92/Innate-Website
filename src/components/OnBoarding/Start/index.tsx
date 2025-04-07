import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";

import phone from "@/public/images/onboarding/phone.png";
import hammer from "@/public/images/onboarding/hammer.png";
import Link from "next/link";
interface StartProps {
    onNext: () => void; // Function type indicating no parameters and no return value
  }
  const Start: React.FC<StartProps> = ({ onNext })  => {
  return (
    <div className="gradient min-h-screen flex items-center justify-center mob:pt-44">
      <div className="">
        <Text
          as="h1"
          className="text-[40px] mob:text-[30px] font-firaSans font-normal mob:font-semibold mb-10 mob:text-center pl-10 mob:pl-0"
        >
          How do you want to get started?
        </Text>
        <div className="flex flex-wrap gap-5 justify-center max-w-[100%]">
          <Link href="/contact"  className="max-w-[45%] h-[245px] mob:max-w-full  flex justify-center items-center p-4 bg-transparent border border-[#FFFFFF3D] rounded-[10px] cursor-pointer ransition-all duration-300 hover:bg-[#141414] hover:backdrop-blur-md"
          >
            <div className="">
              <Image src={phone} alt="" width={60} height={60} />
              <Text className="text-[24px] mob:text-[20px] font-inter font-medium mob:font-normal mt-3 mb-2">
                Talk to an expert
              </Text>
              <Text className="text-[#D9D9D9] font-normal mob:text-[14px]">
                Schedule a call or free in-person project consultation{" "}
              </Text>
            </div>
          </Link>
          <div onClick={onNext} className="max-w-[45%] mob:max-w-full h-[245px] flex justify-center items-center p-4 bg-transparent border border-[#FFFFFF3D] rounded-[10px] cursor-pointer ransition-all duration-300 hover:bg-[#141414] hover:backdrop-blur-md">
            <div className="">
              <Image src={hammer} alt="" width={60} height={60} />
              <Text className="text-[24px] mob:text-[20px] font-inter font-medium mob:font-normal mt-3 mb-2">
                Start on my own
              </Text>
              <Text className="text-[#D9D9D9] font-normal mob:text-[14px]">
                Schedule a call or free in-person project consultation
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
