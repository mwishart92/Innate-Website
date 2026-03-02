"use client";
import Text from "@/components/ui/Text";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import { slidesData } from "@/data/workSlides";
import clsx from "clsx";
import { cn } from "@/libs/utils/twMerge";

// Configure which projects to feature in the carousel
// Add or remove project titles from this array to control what's displayed
// Projects will be displayed in the order listed here
const FEATURED_PROJECT_TITLES = [
  "West Seattle Residence",
  "Magnolia Bathroom",
  "Knight Residence",
  "Madrona Remodel",
  "Wedgewood ADU",
];

interface Media {
  src: any;
  type: string;
}
interface Section {
  title: string;
  location: string;
  description?: string;
  url: string;
  media: Media[];
}

interface SingleCardProps {
  title?: string | null;
  subTitle?: string | null;
  mainClass?: string | null;
  sliderWidthClass?: string | null;
  sections?: Section[];
}

const ProjectSlider = ({
  title = null,
  subTitle = null,
  sections = [],
  mainClass,
  sliderWidthClass,
}: SingleCardProps) => {
  // Get featured projects based on configuration
  const getFeaturedProjects = () => {
    // Filter to only projects that:
    // 1. Are in the FEATURED_PROJECT_TITLES array
    // 2. Have at least one image in their media array
    const featuredProjects = FEATURED_PROJECT_TITLES.map((title) => {
      return slidesData.find(
        (project) =>
          project.title === title &&
          project.media?.some((media) => media.type === "image"),
      );
    }).filter(
      (project): project is NonNullable<typeof project> =>
        project !== undefined,
    );

    return featuredProjects;
  };

  const featuredProjects = getFeaturedProjects();
  const featuredProjectsData = sections?.length ? sections : featuredProjects;

  return (
    <>
      <Text
        as="h2"
        className="text-[34px] pt-4  mob:text-[30px] text-white font-semibold text-center mb-6 "
      >
        {title ? title : "Featured projects we’re proud of"}
      </Text>
      {subTitle && (
        <Text
          as="p"
          className="text-[16px] pb-4  text-white font-normal text-center mb-16 mob:mb-6 max-w-[774px] mx-auto px-4"
        >
          <span dangerouslySetInnerHTML={{ __html: subTitle }} />{" "}
        </Text>
      )}
      <div className={sections?.length ? "" : "pb-36"}>
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          centeredSlides={true}
          speed={2000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          {featuredProjectsData.map((item, index) => {
            // Find first image from media array
            const firstImage = item.media?.find(
              (media) => media.type === "image",
            );

            const slideContent = (
              <>
                <div className={clsx("relative w-full h-[358px]", mainClass)}>
                  <Image
                    src={firstImage?.src || ""}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50">
                  <Text
                    as="h3"
                    className="text-white text-[35px] md:text-[74px] font-semibold text-center"
                  >
                    {item.title}
                  </Text>
                  {item.location && (
                    <Text as="p" className="text-white text-[28px]">
                      {item.location}
                    </Text>
                  )}
                  {item.description && (
                    <Text
                      as="p"
                      className="text-white text-[28px] mob:text-[18px] mob:text-center font-normal max-w-[1048px] w-full px-4 text-center"
                    >
                      {item.description}
                    </Text>
                  )}
                  {item.url && (
                    <span
                      className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Learn More
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <SwiperSlide
                key={index}
                className={cn(
                  "relative !w-[1246px] mob:!max-w-full",
                  sliderWidthClass,
                )}
              >
                {item.url ? (
                  <Link href={item.url} className="block w-full h-full absolute inset-0 z-10">
                    {slideContent}
                  </Link>
                ) : (
                  slideContent
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProjectSlider;
