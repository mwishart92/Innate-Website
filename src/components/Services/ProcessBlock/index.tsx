"use client";
import Text from "@/components/ui/Text";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/libs/utils/twMerge";

interface Section {
  title: string;
  description: string;
}

interface ProcessBlockProps {
  title?: string;
  subTitle?: string;
  bgImage: {
    src: any;
    alt: string;
  };
  sections?: Section[];
}

const ProcessBlock = ({
  title = "Design and build the Innate way",
  subTitle,
  bgImage,
  sections = [],
}: ProcessBlockProps) => {
  const router = useRouter();
  return (
    <div className="w-full py-16 px-5 mob:pt-5">
      <div className="max-w-[1264px] xl:px-8 mx-auto">
        <div className="flex tab:flex-col gap-[60px]  tab:gap-[30px]">
          <div className="relative flex justify-center items-center rounded-[18px] min-w-[427px] tab:min-w-full  tab:h-[200px] md:min-h-[946px] tab:min-h-auto">
            <Image
              className={cn("!relative object-cover rounded-[10px]")}
              src={bgImage.src}
              alt={bgImage.alt}
              fill
            />
            <div className="bg-black/80 flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0">
              <Text
                as="h2"
                className=" font-normal text-[48px] tab:text-[30px] mb-4 tab:mb-0 mob:leading-[33px] mob:px-5 text-white w-[289px] tab:w-auto mob:w-full"
              >
                {title}
              </Text>
              {subTitle && (
                <Text
                  as="h3"
                  className="mb-0 text-[16px] mob:text-[15px] text-[#fff]/[0.6] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter mob:text-center w-[309px]"
                >
                  {subTitle}
                </Text>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[33px] ">
            {sections.map((section, index) => (
              <div
                key={index}
                className={cn(
                  "gradient2 rounded-[15px] py-3 mob:py-3 px-8 mob:px-4 flex mob:flex-col gap-8 mob:gap-2",
                )}
              >
                <div className="mob:flex mob:justify-center mob:mt-2">
                  <div className="bg-white rounded-full flex justify-center items-center text-[64px] font-bold text-black w-[100px] h-[100px] mob:w-[50px] mob:h-[50px] mob:text-[30px]">
                    {index + 1}
                  </div>
                </div>
                <div className="">
                  <Text
                    as="h2"
                    className="text-[40px] leading-[44px] text-[#FFFFFF] mt-2 mob:text-[20px] font-normal mb-3 md:mb-4 mob:text-center"
                  >
                    {section.title}
                  </Text>
                  <div
                    className="mt-3 mb-0 text-[16px] mob:text-[15px] text-[#fff]/[0.6] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter mob:text-center"
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessBlock;
