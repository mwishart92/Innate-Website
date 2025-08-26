"use client";
import React from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import firm from "@/public/images/about/firm.png";
import innate from "@/public/images/project/innate.jpg";
import USCDL from "@/public/images/project/UCSDL.svg";
import USCDM from "@/public/images/project/UCSDM.svg";
import HACM from "@/public/images/project/HACM.svg";
import HACL from "@/public/images/project/HACML.svg";
import GeiselL from "@/public/images/project/GeiselL.svg";
import GeiselM from "@/public/images/project/GeiselM.svg";
import Michel from "@/public/images/about/michael.png";
import MichaelM from "@/public/images/project/MichealM.svg";
import Link from "next/link";
import Form from "@/components/Contact/Form";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import { cn } from "@/libs/utils/twMerge";
import ProjectSlider from "@/components/Slider/ProjectSlider";
import { trackButtonClick } from "@/utils/gtm";

const ProjectDescription = ({ projectDetails }: { projectDetails: any }) => {
  console.log(
    "projectDetails.gallery[0]?.image >",
    projectDetails.gallery[0]?.image
  );
  return (
    <>
      <div className="max-w-[1203px] mx-auto">
        <div className="w-full px-10 flex flex-col md:gap-20 gap-4 mb-10 md:mb-28">
          <div
            className="w-full flex mob:flex-col justify-between mob:justify-center gap-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="flex flex-col justify-center items-center w-full relative overflow-hidden rounded-[10px]">
              {projectDetails.gallery[0]?.image ? (
                <Image
                  src={projectDetails.gallery[0]?.image || ""}
                  alt=""
                  className="w-full mob:w-[400px] rounded-[10px] mt-20 mob:mt-10 object-cover object-top mob:!relative"
                  fill
                />
              ) : (
                <Image
                  src={firm}
                  alt=""
                  className="w-full  mob:w-[400px] rounded-[10px] mt-20 mob:mt-10 object-cover object-top"
                />
              )}
            </div>
            <div className="text-end">
              <div className="mt-20 mob:mt-4">
                {projectDetails.projectScope.map((detail: any, index: any) => (
                  <div key={index} className="flex flex-col mb-4">
                    <Text className="font-normal text-[24px] mob:text-[16px]">
                      {detail.key}
                    </Text>
                    <Text className="text-[20px] font-extralight mob:text-[14px]">
                      {detail.value}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <Text className="text-[#D9D9D9] font-normal mob:text-[14px]">
              {projectDetails.scopedescription}
            </Text>
            <Link href="/onboarding">
              <button
                type="submit"
                onClick={() => {
                  trackButtonClick('start_project_button', {
                    button_location: 'project_description',
                    project_slug: location?.pathname,
                    button_text: 'Start project'
                  });
                  localStorage?.setItem(
                    "onboardingRedirectUrl",
                    location?.pathname
                  );
                }}
                className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
              >
                Start project
                <Image src={rightarrow} alt="" width={18} height={18} />
              </button>
            </Link>
          </div>

          {projectDetails?.media?.desktop && (
            <div className="relative w-full h-full">
              <Image
                src={projectDetails?.media?.desktop}
                alt=""
                className="w-full object-cover mob:hidden !relative rounded-[10px]"
                fill
                sizes="100vw"
              />
              {projectDetails?.media?.mobile && (
                <Image
                  src={projectDetails?.media?.mobile}
                  alt=""
                  className="w-full object-cover md:hidden !relative rounded-[10px]"
                  fill
                  priority
                  sizes="100vw"
                />
              )}
            </div>
          )}
          <div className="flex flex-col gap-2">
            {projectDetails?.description.map((d: any, key: number) => (
              <div
                className="text-[#D9D9D9] font-normal mob:text-[14px]"
                key={key}
                dangerouslySetInnerHTML={{ __html: d || "" }}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mob:gap-4">
            {projectDetails.gallery.map((image: any, index: any) => (
              <div
                key={index}
                className={cn(
                  image.class, 
                  "w-full mob:col-span-3 relative rounded-[10px] overflow-hidden",
                  // Default aspect ratio for gallery items
                  !image.class?.includes('aspect-') && "aspect-[4/3]"
                )}
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            ))}
          </div>
          <div>
            <Text className="text-[#D9D9D9] font-normal mob:text-[14px] ">
              {projectDetails.galleryDescription}
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col gap-20 mb-10 md:mb-28">
          <div>
            <ProjectSlider />
          </div>
        </div>
      </div>
      <div className="max-w-[1203px] mx-auto">
        <div className="w-full px-10 flex flex-col md:gap-20 gap-4 mb-10 md:mb-28">
          <Text
            as="h2"
            className="text-[34px] mob:text-[30px] text-white font-semibold text-center"
          >
            Meet the Lead Designer and Builder
          </Text>
          <div className="grid grid-cols-2 mob:grid-cols-1 gap-10">
            <div>
              <Image
                src={MichaelM}
                alt=""
                className="w-full object-cover rounded-[10px] md:hidden"
              />

              <Image
                src={Michel}
                alt=""
                className="h-[598px]  object-cover rounded-[10px] mob:hidden"
              />
            </div>
            <div className="flex flex-col md:items-end justify-center ">
              <div className="md:max-w-[441px]">
                <Text className="self-center">
                  My love of architecture began at a very young age. As a child
                  growing up in Australia I would create structures with blocks
                  and sketch my dream house. Many years later I found myself
                  studying architecture at the Community College of Denver where
                  I discovered the timeless art of hand drafting. Although we
                  fully embrace the capabilities of modern technology at Innate,
                  I believe something profound occurs when you put pencil to
                  paper. It’s a tactile connection that brings a unique
                  authenticity to every project we do. Since our inception, our
                  philosophy has always been to enhance the quality of life of
                  our clients. By collaborating with architects, engineers and
                  craftsmen that share our values, I have formed a
                  multi-disciplinary firm capable of handling the entire project
                  from initial concept to finished construction. I believe that
                  when design is both functional and beautiful, it can have the
                  most impact on peoples lives.
                </Text>
                <Link href="/onboarding">
                  <button
                    type="submit"
                    onClick={() =>
                      localStorage?.setItem(
                        "onboardingRedirectUrl",
                        location?.pathname
                      )
                    }
                    className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
                  >
                    Start project
                    <Image src={rightarrow} alt="" width={18} height={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDescription;
