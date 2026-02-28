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
  image: {
    src: any;
    alt: string;
    className?: string;
  };
}

interface ThreeCardDesignProps {
  title?: string;
  sections?: Section[];
  cardParentClass?: string;
  cardClass?: string;
  imageParentClass?: string;
}

const ThreeCardDesign = ({
  title = "Design and build the Innate way",
  sections = [],
  cardParentClass,
  cardClass,
  imageParentClass,
}: ThreeCardDesignProps) => {
  const router = useRouter();
  return (
    <div className="w-full py-16 px-5 mob:pt-5">
      <Text
        as="h2"
        className="text-center font-normal mob:text-[30px] mb-16  mob:mb-4 mob:leading-[33px] mob:px-5 "
      >
        {title}
      </Text>
      <div
        className={cn(
          "flex flex-col md:flex-row gap-[18px] max-w-[1203px] xl:px-8 mx-auto justify-center",
          cardParentClass,
        )}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={cn("w-full md:w-[calc(33.333%-18px)]", cardClass)}
          >
            <>
              <div
                className={cn(
                  "w-full relative flex justify-center items-center mb-5 md:mb-[68px] h-[238px] md:h-[538px] rounded-[18px] ",
                  imageParentClass,
                )}
              >
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="0"
                  className={cn(
                    "!relative object-cover rounded-[10px]",
                    section.image.className,
                  )}
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                />
              </div>
              <div className="">
                <Text
                  as="h2"
                  className="text-[40px] leading-[44px] text-[#FFFFFF] mt-2 mob:text-[20px] font-semibold mb-3 md:mb-7 md:pr-[6px]"
                >
                  {section.title}
                </Text>
                <div
                  className="mt-3 md:mb-12 text-[16px] mob:text-[15px] text-[#fff]/[0.6] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter"
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

export default ThreeCardDesign;
