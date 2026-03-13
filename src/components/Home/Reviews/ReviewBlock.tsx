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

interface Review {
  heading?: string;
  text: string;
  name: string;
  title: string;
  photo?: string;
}
interface ReviewsProps {
  review: Review;
  handleOpenDailog: (review: Review) => void;
}

const ReviewBlock: React.FC<ReviewsProps> = ({ review, handleOpenDailog }) => {
  const { text, heading, name, photo, title } = review;
  return (
    <div className="mb-10">
      <div className="w-full mx-auto relative">
        <div className="">
          {heading && (
            <Text
              className={cn(
                "text-[26px] leading-[31.2px] text-black mob:text-[16px] mob:leading-[25.2px] font-normal mb-[30px]",
              )}
            >
              {heading}
            </Text>
          )}
          <Text
            className={cn(
              "text-[16px] leading-[31.2px] text-black mob:leading-[25.2px] font-light italic",
            )}
          >
            {text.length > 150 ? `${text.slice(0, 150)}...` : text}
          </Text>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOpenDailog({ text, title, name });
            }}
            className="text-black text-[14px] mob:text-[16px]"
          >
            Read more
          </a>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-[15px]">
            <div className="flex min-w-[43px] min-h-[43px] rounded-full overflow-hidden bg-black/20 text-black justify-center items-center font-bold">
              {photo ? (
                <img
                  src={photo}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                `${name.split(" ")[0][0]} ${name.split(" ")?.[1]?.[0] || ""}`
              )}
            </div>
            <div className="">
              <Text className="text-[16px] font-bold leading-[31.2px] text-black mb-0">
                {name}
              </Text>
              <Text className="text-[10px] text-black font-normal">
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
