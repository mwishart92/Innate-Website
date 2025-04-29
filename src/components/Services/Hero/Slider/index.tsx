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
import Slide1 from "../Content/slide1";
import Slide2 from "../Content/slide2";
import Slide3 from "../Content/slide3";
import Slide4 from "../Content/slide4";
import Text from "@/components/ui/Text";
import { useRouter } from "next/navigation";

interface Slide {
  component: React.ReactNode;
  delay: number;
  projectName: string;
}

interface HomeSliderProps {
  slides?: Slide[];
}

function HomeSlider({ slides }: HomeSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const defaultSlides = [
    { component: <Slide1 />, delay: 36000, projectName: "Bosma ADU" },
    { component: <Slide2 />, delay: 26000, projectName: "Norman Residence" },
    {
      component: <Slide3 />,
      delay: 42000,
      projectName: "Pellegrino Residence",
    },
    { component: <Slide4 />, delay: 14000, projectName: "Innate NW" },
  ];

  const swiperSlides = slides?.length ? slides : defaultSlides;

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
          <div className="mb-[40px]">
            <Text
              as="h2"
              className="my-3 text-white leading-[44px] mob:leading-[36.4px]"
            >
              <span className="text-[40px] mob:text-[28px] font-light uppercase">
                {swiperSlides[currentSlide]?.projectName}
              </span>
            </Text>

            <button
              className="mt-[20px] mb-[60px] border border-[#FFFFFF] font-normal max-w-[200px] h-[50px] text-[16px] hover:bg-white hover:text-black hover:border-black transition duration-300 bg-transparent px-[24px] py-[14px] mob:text-[14px] mob:max-w-[181px] mob:h-[48px]"
              // onClick={() => scrollToSection('contactHome')}
              onClick={() => router.push("/onboarding")}
            >
              Book Consultation
            </button>
          </div>

          {/* <Text className="text-[20px] leading-[28px] mob:leading-[25px] text-[#FFFFFF] mt-5 mob:text-[18px] font-normal font-bentonMedium">
            Project
          </Text> */}
          <Text className="text-[28px] mob:text-[24px] leading-[36.4px] mob:leading-[31.2px] text-[#FFFFFF] font-light">
            Design+ Build
          </Text>
          <span className="text-[40px] mob:text-[28px] font-light">It's </span>
          <span className="italic text-[40px] mob:text-[28px]">Innate</span>
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

export default HomeSlider;
