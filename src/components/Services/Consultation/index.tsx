import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import leftbg from "@/public/images/home/logo-text-sin-texto 1.png";
import rightbg from "@/public/images/home/logo-text-sin-texto 2.png";
import ButtonGetStarted from "@/components/ui/ButtonGetStarted";

const Consultation = () => {
  return (
    <div className="py-16 px-5">
      <div className="w-full max-w-[1140px] mx-auto  min-h-[410px] mob:py-16 rounded-[10px] relative flex items-center justify-center">
        <Image
          className="bottom-0 left-0 absolute"
          src={leftbg}
          alt=""
          width={308}
          height={328}
        />
        <Image
          className="top-0 right-0 absolute"
          src={rightbg}
          alt=""
          width={308}
          height={328}
        />
        <div className=" py-6">
          <Text as="h1" className="text-[40px] leading-[52px] text-center font-medium max-w-[596px] mx-auto">
          Not sure how to start? Get a free consultation
          </Text>
          <Text className="text-[#D9D9D9] text-center mt-3">One of our experts will get back to you as soon as possible.</Text>
          <div className="flex justify-center mt-12">
         <ButtonGetStarted text="Free Estimate"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
