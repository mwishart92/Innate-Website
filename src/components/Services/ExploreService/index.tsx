"use client";
import Text from "@/components/ui/Text";
import Image from "next/image";
import React from "react";
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
}

interface ExploreServiceProps {
  title?: string;
  sections?: Section[];
}

const ExploreService = ({ title, sections = [] }: ExploreServiceProps) => {
  return (
    <div className="w-full h-full gradient py-16 px-5 mob:pt-5">
      {title && (
        <Text
          as="h2"
          className="text-center font-normal mob:text-[30px] mb-16  mob:mb-8 mob:leading-[33px] mob:px-5"
        >
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Text>
      )}
      <div className="max-w-[1203px] xl:px-8 mx-auto">
        <div className="w-full max-w-full flex flex-wrap justify-center gap-[24px] mb-[44px] mob:mb-[24px] px-16 md:px-20 mob:px-0">
          {sections.map((section, key) => (
            <div
              className={clsx(
                "flex gap-[60px] mob:gap-[10px] items-center mob:flex-col w-full",
              )}
              key={key}
            >
              <Link
                href={`${section.link}`}
                className={clsx("min-h-[250px] min-w-[250px] relative ", {})}
              >
                <Image
                  src={section.thumbnail?.src}
                  alt={section.thumbnail?.alt}
                  fill
                  className="rounded-[6px] object-cover w-full h-full object-top"
                />
              </Link>
              <div className="flex flex-col justify-between flex-grow p-4">
                <Link href={`${section.link}`} className="">
                  <div>
                    {section.title && (
                      <Text className="text-white text-[20px] leading-[28px] my-2 font-normal underline">
                        {section.title}
                      </Text>
                    )}
                    {section.description && (
                      <Text className="text-gray-400  text-[16px] font-normal">
                        {section.description}
                      </Text>
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

export default ExploreService;
