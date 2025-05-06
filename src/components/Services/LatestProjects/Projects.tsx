"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

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
import "swiper/css/effect-fade";

import "./slider.css";
interface MediaData {
  image: string | StaticImageData;
}

interface ProjectsProps {
  sliderAlbum?: MediaData[];
}

function Projects({ sliderAlbum = [] }: ProjectsProps) {
  return (
    <div className=" w-full ">
      <div
      // className="overflow-hidden w-full "
      // data-aos="fade-up"
      // data-aos-delay="200"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      >
        <div className="w-full project-slider-parent flex justify-center items-center relative">
          <Swiper
            slidesPerView={1}
            speed={2000}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[
              Keyboard,
              Navigation,
              Scrollbar,
              Autoplay,
              Pagination,
              EffectFade,
            ]}
            className="mySwiper w-full"
          >
            {sliderAlbum?.map((item: MediaData, index) => (
              <SwiperSlide key={index} className="px-2 mb-[18px]">
                <div className="w-full relative h-[412px] mob:h-[282px]">
                  {/* Make the image fill and cover the parent container */}

                  <Image
                    src={item.image}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="absolute inset-0 rounded-[10px] object-cover" // Ensures the image is positioned correctly
                  />
                  <div className="h-[20px]"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;
