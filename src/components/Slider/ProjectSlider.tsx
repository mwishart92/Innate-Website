"use client";
import Text from "@/components/ui/Text";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import { slidesData } from "@/data/workSlides";

const ProjectSlider = () => {
  // Get 5 random elements from slidesData
  const getRandomProjects = () => {
    // First filter out projects that don't have any images
    const projectsWithImages = slidesData.filter((project) =>
      project.media?.some((media) => media.type === "image")
    );

    // Then get random 5 from filtered projects
    const shuffled = [...projectsWithImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  const randomProjects = getRandomProjects();

  return (
    <>
      <Text
        as="h2"
        className="text-[34px] mob:text-[30px] text-white font-semibold text-center mb-16 mob:mb-6"
      >
        More Projects
      </Text>
      <div>
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
          {randomProjects.map((item, index) => {
            // Find first image from media array
            const firstImage = item.media?.find(
              (media) => media.type === "image"
            );

            return (
              <SwiperSlide key={index} className="relative !w-[1133px]">
                <div className="w-full h-[358px]">
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
                  <Text as="p" className="text-white text-[28px]">
                    {item.location}
                  </Text>
                  {item.url && (
                    <Link href={item.url}>
                      <button
                        type="button"
                        className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
                      >
                        Learn More
                      </button>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProjectSlider;
