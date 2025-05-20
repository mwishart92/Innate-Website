"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";
import Text from "@/components/ui/Text";

interface Slide {
  component: React.ReactNode;
  delay: number;
  projectName?: string;
  projectType?: string;
}

interface ProjectSliderProps {
  slides?: Slide[];
}

function ProjectSlider({ slides }: ProjectSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperSlides = slides?.length ? slides : [];

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id)
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full overflow-hidden home-slider-parent">
        <div className="absolute bottom-[128px] mob:bottom-[70px] left-16 p-5 z-20 bg-opacity-50 mob:left-0">
          <Text as="h1" className="mb-4 text-[28px] font-medium">
            <span className="font-normal text-[20px]">
              {swiperSlides[currentSlide]?.projectType}
            </span>{" "}
            <br />
            {swiperSlides[currentSlide]?.projectName}
          </Text>
        </div>

        <Swiper
          slidesPerView={1}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
          className="mySwiper swiper-backface-hidden"
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex);

            if (
              swiper.params.autoplay &&
              typeof swiper.params.autoplay === "object"
            ) {
              const currentSlide = swiper.realIndex;
              swiper.params.autoplay.delay =
                swiperSlides[currentSlide]?.delay || 5000;
              swiper.autoplay.start();
            }
          }}
        >
          {swiperSlides.map((slide, index) => (
            <SwiperSlide key={index}>{slide.component}</SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.5)]  pagination-gradient z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default ProjectSlider;
