"use client";
import Text from "@/components/ui/Text";
import Image from "next/image";
import React from "react";
import Button from "@/components/ui/Button";
import stressbg from "@/public/images/home/dsignbuild/avoidbg.png";
import matrialbg from "@/public/images/services/matrial.png";
import stresstop from "@/public/images/home/dsignbuild/avoidtop.png";
import avoidleft from "@/public/images/home/dsignbuild/avoidleft.png";
import avoidright from "@/public/images/home/dsignbuild/avoidright.png";
import avoidcenter from "@/public/images/home/dsignbuild/avoidcenter.png";
import savetime from "@/public/images/home/savetimee.png";
import track from "@/public/images/home/cabinetry.png";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import { useRouter } from "next/navigation";
import { cn } from "@/libs/utils/twMerge";

interface Section {
  title: string;
  description: string;
}

interface WhyChooseProps {
  title?: string;
  sections?: Section[];
}

const WhyChoose = ({
  title = "Design and build the Innate way",
  sections = [],
}: WhyChooseProps) => {
  const router = useRouter();
  return (
    <div className="w-full py-16 px-5 mob:pt-5">
      <Text
        as="h2"
        className="text-center font-normal mob:text-[30px] mb-16  mob:mb-4 mob:leading-[33px] mob:px-5"
      >
        {title}
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mob:gap-[25px] max-w-[1203px] xl:px-8 mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className={cn(
              "border border-white rounded-[15px] p-[54px] mob:p-[25px]",
            )}
          >
            <>
              <div className="text-center flex flex-col items-center justify-center h-full">
                <Text
                  as="h2"
                  className="text-[40px] leading-[44px] text-[#FFFFFF] mt-2 mob:text-[20px] font-semibold mb-3 md:mb-7"
                >
                  {section.title}
                </Text>
                <div
                  className=" text-[16px] mob:text-[15px] text-[#fff]/[0.6] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter"
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
