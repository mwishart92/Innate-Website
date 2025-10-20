"use client";
import React, { useState } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import avatar from "@/public/images/home/avatarimg.png";
import leftdot from "@/public/images/home/left“.png";
import rightdot from "@/public/images/home/right“.png";
import { cn } from "@/libs/utils/twMerge";

interface Review {
  text: string;
  name: string;
  title: string;
}

interface ReviewsProps {
  text: string;
  name: string;
  title: string;
  handleOpenDailog: (review: Review) => void;
}

const ReviewBlock: React.FC<ReviewsProps> = ({
  text,
  name,
  title,
  handleOpenDailog,
}) => {
  return (
    <div className="mb-10">
      <div className="w-full mx-auto relative">
        <div className="">
          <Text
            className={cn(
              "text-[21px] leading-[31.2px] text-white mob:text-[16px] mob:leading-[25.2px] mob:font-normal font-light",
              "text-ellipsis"
            )}
          >
            {text}
          </Text>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOpenDailog({ text, title, name });
            }}
            className="text-gray-200 text-[18px] mob:text-[16px]"
          >
            Read more
          </a>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-[34px]">
            <div className="">
              <Text className="text-[16px] font-normal leading-[31.2px] text-white mob:text-[16px]">
                - {name}
              </Text>
              <Text className="text-[16px] mt-1 text-white mob:text-[14px] font-normal">
                {title}
              </Text>
            </div>
          </div>
          <div className="w-[21px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBlock;
