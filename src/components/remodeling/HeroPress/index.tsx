import React from "react";
import Text from "@/components/ui/Text";

const HeroPress = () => {
  return (
    <div className="gradient  ">
      <div className="max-w-[992px] mx-auto">
        <div className="w-full max-w-full mob:px-5 min-h-[488px] mob:min-h-[388px] relative h-full flex flex-col justify-center items-center mt-[100px]">
          <Text
            as="h1"
            className="text-[48px] text-[#D9D9D9] mob:text-[30px] font-bold mob:font-medium leading-[70.4px] mob:leading-[50.4px] text-center mt-6"
          >
            Design-Build & Remodeling Cost Guide
          </Text>
          <div className="w-full">
            <Text
              as="p"
              className="text-[#D9D9D9] font-inter text-center  mx-auto py-[50px] pb-[1rem] text-[20px] mob:text-[14px] font-light"
            >
              Explore our Ultimate Design-Build & Remodeling Cost Guide — a
              practical starting point for homeowners planning kitchen and
              bathroom remodels, whole-home renovations, additions, or ADUs.
              Learn what drives cost, complexity, and timelines, and get a
              clearer sense of what’s realistic before you begin.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPress;
