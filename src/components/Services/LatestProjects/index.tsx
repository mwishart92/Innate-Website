import React from "react";
import Text from "@/components/ui/Text";
import { StaticImageData } from "next/image";
import Projects from "./Projects";

interface MediaData {
  image: string | StaticImageData;
}

interface LatestProjectsProps {
  title?: string;
  content?: string;
  sliderAlbum?: MediaData[];
}

const LatestProjects = ({
  title = "",
  content = "",
  sliderAlbum = [],
}: LatestProjectsProps) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1203px] xl:px-8 mx-auto">
        <div className="w-full grid grid-cols-2 tab:grid-cols-1 tab:gap-8 min-h-[700px] py-16 items-center">
          <div className="w-full pr-[78px] tab:pr-0">
            {title && (
              <Text
                as="h2"
                className="text-[40px] font-medium text-white mob:leading-normal leading-[52px] tab:text-center w-full"
              >
                {title}
              </Text>
            )}
            <Text className="text-white mt-4 tab:text-center w-full">
              {content}
            </Text>
          </div>
          {/*  */}
          <div className="w-full">
            <Projects sliderAlbum={sliderAlbum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
