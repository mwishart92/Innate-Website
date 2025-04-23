"use client";
import React from "react";
import Text from "@/components/ui/Text";
import "./collective.css";

interface CollectiveProps {
  videoSrc?: string;
  contentText?: string;
}

const Collective = ({
  videoSrc = "https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0",
  contentText = "Innate offers boutique kitchen remodel services, combining modern design with functionality in order to transform spaces into personalized havens of comfort and style. Our dedicated project management and design team ensures that there is no difference between the product you envisioned and the product that you got.",
}: CollectiveProps) => {
  return (
    <>
      {/* <div className="lowergradient h-10 border-none"></div> */}
      <div className="flex justify-center items-center pt-20 pb-20 mob:pb-10 mob:mt-0 mob:pt-10 mob:bg-black">
        <div className="max-w-[1203px] xl:px-8 mx-auto">
          <div className="w-full grid grid-cols-2 tab:grid-cols-1 gap-[50px] items-center justify-around">
            <div className="flex justify-items-center mob:mt-8 mob:px-0 w-full">
              <iframe
                src={videoSrc}
                frameBorder="0"
                allowFullScreen
                className="mob:mr-0 h-[300px] mob:h-[204px] w-full"
              ></iframe>
            </div>
            <div className="flex flex-col">
              <Text className="mob:text-[14px] font-normal">{contentText}</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collective;
