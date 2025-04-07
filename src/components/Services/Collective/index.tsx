import React from "react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

import rightimg from "@/public/images/home/collective.png";
import Image from "next/image";
const Collective = () => {
  return (
    <div className="flex justify-center items-center pt-20 mob:my-12 mob:px-5 ">
      <div className="w-full max-w-[1203px] flex mob:flex-wrap items-center justify-between">
        <div className="max-w-[517px]">
          {/* <Text className="text-[24px] text-white font-medium leading-[31.2px] mb-4">
            We are a collective of architects, engineers and craftsmen
            collaborating to create beautiful spaces and structures that meet
            the unique needs of our clients.
          </Text> */}
          <Text className="text-white">
          <span className="italic">Innate</span> offers boutique kitchen and bathroom remodel services, combining modern design with functionality in order to transform spaces into personalized havens of comfort and style.
          </Text>
          <Button className="max-w-[137px] text-white border-white h-[50px] text-[16px] font-normal mt-7">
            Free Estimate
          </Button>
        </div>
        <div className="mob:mt-5">
          <Image
           data-aos="zoom-in"
           data-aos-duration="1000"  
           data-aos-delay="200" 
          className="mr-8 mob:mr-0" src={rightimg} alt="rightimg" width={339} height={222} />
        </div>
      </div>
    </div>
  );
};

export default Collective;
