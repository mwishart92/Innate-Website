import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import firm from "@/public/images/about/firm.png";
import innate from "@/public/images/project/innate.jpg";
import USCDL from "@/public/images/project/UCSDL.svg";
import USCDM from "@/public/images/project/UCSDM.svg";
import HACM from "@/public/images/project/HACM.svg";
import HACL from "@/public/images/project/HACML.svg";
import GeiselL from "@/public/images/project/GeiselL.svg";
import GeiselM from "@/public/images/project/GeiselM.svg";
import Michel from "@/public/images/about/michael.png";
import MichaelM from "@/public/images/project/MichealM.svg";
import Link from "next/link";
import Form from "@/components/Contact/Form";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import { cn } from "@/libs/utils/twMerge";
import ProjectSlider from "@/components/Slider/ProjectSlider";

const ProjectDescription = ({ projectDetails }: { projectDetails: any }) => {
  return (
    <div className="max-w-[1203px] mx-auto">
      <div className="w-full px-10 flex flex-col gap-20 mb-28">
        <div
          className="w-full flex justify-between mob:justify-center gap-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="flex flex-col justify-center items-center">
            <Image
              src={firm}
              alt=""
              className="w-[639px]  mob:w-[400px] rounded-[10px] mt-[76px] mob:mt-[100px] mob:hidden"
            />
            <Image
              src={innate}
              alt=""
              className="w-[180px] rounded-[10px] mt-[28px] md:hidden"
            />
          </div>
          <div className="text-end">
            <div className="mt-16 mob:mt-8">
              {projectDetails.projectScope.map((detail: any, index: any) => (
                <div key={index} className="flex flex-col mb-4">
                  <Text className="font-normal text-[24px] mob:text-[16px]">
                    {detail.key}
                  </Text>
                  <Text className="text-[20px] font-extralight mob:text-[14px]">
                    {detail.value}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Text className="text-[#D9D9D9] font-normal mob:text-[14px]">
            {projectDetails.scopedescription}
          </Text>
          <Link href="/onboarding">
            <button
              type="submit"
              className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
            >
              Start project
              <Image src={rightarrow} alt="" width={18} height={18} />
            </button>
          </Link>
        </div>

        {projectDetails?.media?.desktop && (
          <div className="relative w-full h-full">
            <Image
              src={projectDetails?.media?.desktop}
              alt=""
              className="w-full object-cover mob:hidden !relative"
              fill
              sizes="100vw"
            />
            {projectDetails?.media?.mobile && (
              <Image
                src={projectDetails?.media?.mobile}
                alt=""
                className="w-full object-cover md:hidden !relative"
                fill
                priority
                sizes="100vw"
              />
            )}
          </div>
        )}
        <div className="flex flex-col gap-10">
          {projectDetails?.description.map((d: string, key: number) => (
            <Text
              className="text-[#D9D9D9] font-normal mob:text-[14px]"
              key={key}
            >
              {d}
            </Text>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[18px] mob:gap-2">
          {projectDetails.gallery.map((image: any, index: any) => (
            <div key={index} className={cn(image.class)}>
              <Image
                src={image.image}
                alt=""
                className={cn("w-full object-cover !relative")}
                fill
              />
            </div>
          ))}
        </div>
        <div>
          <Text className="text-[#D9D9D9] font-normal mob:text-[14px] ">
            {projectDetails.galleryDescription}
          </Text>
        </div>
        <div>
          <ProjectSlider projectDetails={projectDetails} />
        </div>
        <Text
          as="h2"
          className="text-[34px] mob:text-[30px] text-white font-semibold text-center"
        >
          Meet the Lead Designer and Builder
        </Text>
        <div className="grid grid-cols-2 mob:grid-cols-1 gap-10">
          <div>
            <Image
              src={MichaelM}
              alt=""
              className="w-full object-cover rounded-[10px] md:hidden"
            />

            <Image
              src={Michel}
              alt=""
              className="h-[598px]  object-cover rounded-[10px] mob:hidden"
            />
          </div>
          <div className="flex flex-col md:items-end justify-center ">
            <div className="md:max-w-[441px]">
              <Text className="self-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
              <Link href="/onboarding">
                <button
                  type="submit"
                  className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
                >
                  Start project
                  <Image src={rightarrow} alt="" width={18} height={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
