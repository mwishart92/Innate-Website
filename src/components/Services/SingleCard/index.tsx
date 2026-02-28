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
import Link from "next/link";
import clsx from "clsx";

interface Section {
  title?: string;
  description?: string;
  link: string;
  thumbnail: {
    src: any;
    alt: string;
  };
  userdata?: {
    src: any;
    name: string;
    role: string;
    info: string;
  };
}

interface SingleCardProps {
  title?: string;
  type?: string;
  containerClass?: string;
  columnClass?: string;
  sections?: Section[];
}

const SingleCard = ({
  title = "Design and build the Innate way",
  sections = [],
  type,
  containerClass,
  columnClass,
}: SingleCardProps) => {
  const router = useRouter();
  return (
    <div className="w-full h-full gradient py-16 px-5 mob:pt-5">
      {title && (
        <Text
          as="h2"
          className="text-center font-normal mob:text-[30px] mb-16  mob:mb-4 mob:leading-[33px] mob:px-5"
        >
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Text>
      )}
      <div className={clsx("max-w-[1203px]  mx-auto ", containerClass)}>
        <div className="w-full max-w-full flex flex-wrap justify-center gap-[24px] mb-[44px] mob:mb-[24px] mob:px-0">
          {sections.map((section, key) => (
            <div
              className={clsx(
                "flex-grow max-w-[calc(25%-18px)] tab:max-w-[calc(50%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col relative",
                {
                  "border-none  max-w-[calc(33.333%-18px)]":
                    type === "video_content",
                },
                columnClass,
              )}
              key={key}
            >
              <Link
                href={`${section.link}`}
                className={clsx(
                  "h-[192px] relative w-full rounded-t-[9px]  overflow-hidden",
                  {
                    "h-[213px]": type === "video_content",
                  },
                )}
              >
                <Image
                  src={section.thumbnail?.src}
                  alt={section.thumbnail?.alt}
                  fill
                  className=" object-cover w-full h-full object-top"
                />
              </Link>
              <div className="flex flex-col justify-between flex-grow p-4 pt-[46px] min-h-[206px]">
                <Link href={`${section.link}`} className="">
                  <div>
                    {section.title && (
                      <Text className="text-[#D9D9D9] text-[20px] leading-[28px] mt-0 mb-2 font-normal">
                        {section.title}
                      </Text>
                    )}
                    {section.description && (
                      <Text className="text-[#999]  text-[16px] font-normal">
                        {section.description}
                      </Text>
                    )}
                    {section.userdata && (
                      <>
                        <div className="flex gap-3">
                          <div className="flex w-[48px] h-[48px] overflow-hidden rounded-l-full">
                            <Image
                              src={section.userdata?.src}
                              alt={section.userdata?.name}
                              fill
                              className="rounded-full object-cover w-full h-full !relative"
                            />
                          </div>
                          <div>
                            <Text className="text-white  text-[20px] font-normal">
                              {section.userdata?.name}
                            </Text>
                            <Text className="text-white  text-[16px] font-normal">
                              {section.userdata?.role}
                            </Text>
                          </div>
                        </div>
                        <Text className="text-white  text-[16px] font-normal">
                          {section.userdata?.info}
                        </Text>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
