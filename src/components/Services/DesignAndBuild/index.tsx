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
    additionalImages?: {
      src: any;
      alt: string;
      className: string;
      type?: "heading" | "image";
    }[];
  };
  imageContainerClass?: string;
  layout: "left" | "right";
}

interface DesignAndBuildProps {
  title?: string;
  sections?: Section[];
}

const DesignAndBuild = ({
  title = "Design and build the Innate way",
  sections = [],
}: DesignAndBuildProps) => {
  const router = useRouter();
  return (
    <div className="w-full h-full gradient py-16 px-5 mob:pt-5">
      <Text
        as="h2"
        className="text-center font-normal mob:text-[30px] mb-16  mob:mb-4 mob:leading-[33px] mob:px-5"
      >
        {title}
      </Text>
      {sections.map((section, index) => (
        <div
          key={index}
          className={cn(
            "flex lg:flex-wrap gap-[47px] items-center px-[43px] pt-[43px] pb-[43px] mob:px-[16px] w-[80%] mob:w-full min-h-[500px] mt-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center mob:gap-[40px] mob:pt-[12px] mob:pb-[28px]",
            section.imageContainerClass
          )}
        >
          {section.layout === "right" ? (
            <>
              <div className="w-full max-w-[437.84px] relative flex justify-center items-center mob:order-2">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="0"
                  className={cn("relative", section.image.className)}
                  src={section.image.src}
                  alt={section.image.alt}
                  style={{
                    width: section.image.className?.includes("w-[")
                      ? undefined
                      : "100%",
                    height: "auto",
                  }}
                />
                {section.image.additionalImages?.map((img, idx) => (
                  <Image
                    key={idx}
                    data-aos={
                      img.type === "heading"
                        ? "fade-down"
                        : idx === 0
                        ? "fade-left"
                        : "fade-right"
                    }
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    src={img.src}
                    alt={img.alt}
                    className={img.className}
                  />
                ))}
              </div>
              <div className="mob:order-1">
                <Text as="h2">{section.title}</Text>
                <Text className="mt-3 mb-12 text-[22px] mob:text-[15px] text-[#ffffffcc] leading-[30.14px] mob:leading-[20.55px] mob:mt-0">
                  {section.description}
                </Text>
              </div>
            </>
          ) : (
            <>
              <div className="mob:order-1">
                <Text as="h2">{section.title}</Text>
                <Text className="mt-3 mb-12 text-[22px] mob:text-[15px] text-[#ffffffcc] leading-[30.14px] mob:leading-[20.55px] mob:mt-0">
                  {section.description}
                </Text>
              </div>
              <div className="w-full max-w-[431.81px] flex justify-center items-center mob:order-2">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="0"
                  src={section.image.src}
                  alt={section.image.alt}
                  className={section.image.className}
                />
                {section.image.additionalImages?.map((img, idx) =>
                  img.type === "heading" ? (
                    <div key={idx} className={img.className}>
                      <Text as="h2">{img.alt}</Text>
                    </div>
                  ) : (
                    <Image
                      key={idx}
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="0"
                      src={img.src}
                      alt={img.alt}
                      className={img.className}
                    />
                  )
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesignAndBuild;
