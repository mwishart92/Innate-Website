import React from "react";
// import Image from "next/image";

import Text from "@/components/ui/Text";

// import leftbg from "@/public/images/home/logo-text-sin-texto 1.png";
// import rightbg from "@/public/images/home/logo-text-sin-texto 2.png";
import ButtonGetStarted from "@/components/ui/ButtonGetStarted";
import clsx from "clsx";

interface ConsultationProps {
  title?: string;
  description?: string;
  subHeading?: string;
  mainClass?: string;
}

const Consultation = ({
  title,
  description,
  subHeading,
  mainClass,
}: ConsultationProps) => {
  return (
    <div className={clsx("mob:py-4 py-16 px-5", mainClass)}>
      <div className="w-full max-w-[1140px] mx-auto  min-h-[410px] mob:py-16 rounded-[10px] relative flex items-center justify-center">
        {/* <Image
          className="bottom-0 left-0 absolute"
          src={leftbg}
          alt=""
          width={308}
          height={328}
        />
        <Image
          className="top-0 right-0 absolute"
          src={rightbg}
          alt=""
          width={308}
          height={328}
        /> */}
        <div className=" py-6">
          <Text
            as="h2"
            className="text-[40px] leading-[52px] text-center font-medium max-w-[750px] mx-auto"
          >
            {title ? title : "Not sure how to start? Get a free consultation"}
          </Text>
          <Text className="text-[#D9D9D9] text-center mt-3">
            {description ? (
              <span dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              "One of our experts will get back to you as soon as possible."
            )}
          </Text>
          {subHeading && (
            <Text
              as="h3"
              className="text-[30px] leading-[52px] text-center font-medium mt-4"
            >
              {subHeading}
            </Text>
          )}
          <div className="flex justify-center mt-12">
            <ButtonGetStarted
              text="Free Estimate"
              className="bg-gradient-to-r from-[#4b4b4b] via-[#595a5d] to-[#616275] hover:from-[#616275] hover:to-[#4b4b4b] hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
