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
// Swiper CSS is now imported centrally in layout.tsx
import "./slider.css";
import Slide from "../Content/slide";
import LazySlide from "../Content/LazySlide";
import Text from "@/components/ui/Text";
import { useRouter } from "next/navigation";

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      video: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/bosma-adu.webm?alt=media&token=b1ac720a-d1b2-4c3c-bf26-44930e7a890d",
      delay: 36000,
      projectName: "Bosma ADU",
      priority: true, // First slide loads immediately
    },
    {
      video: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Norman-bath.webm?alt=media&token=35c5155c-f7e2-490e-940d-f864bf782980",
      delay: 26000,
      projectName: "Norman Residence",
      priority: false, // Lazy load
    },
    {
      video: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/05.25_Innate-NW_16x9%20No%20SpeedRamp_No%20Sound.webm?alt=media&token=b30f1fba-154c-495e-870e-8058cebddedc",
      delay: 26000,
      projectName: "Knight Residence",
      priority: false, // Lazy load
    },
    // {
    //   component: <Slide3 />,
    //   delay: 42000,
    //   projectName: "Pellegrino Residence",
    // },
    // { component: <Slide4 />, delay: 14000, projectName: "Innate NW" },
  ];

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
              <span className="text-[40px] mob:text-[28px] font-light">
                Design+ Build
              </span>
              <br />
              <span className="text-[40px] mob:text-[28px] font-light">
                It’s{" "}
              </span>
              <span className="italic text-[40px] mob:text-[28px]">Innate</span>
            </Text>

            <button
              className="mt-[20px] mb-[60px] border border-[#FFFFFF] font-normal max-w-[200px] h-[50px] text-[16px] hover:bg-white hover:text-black hover:border-black transition duration-300 bg-transparent px-[24px] py-[14px] mob:text-[14px] mob:max-w-[181px] mob:h-[48px]"
              // onClick={() => scrollToSection('contactHome')}
              onClick={() => {
                localStorage?.setItem(
                  "onboardingRedirectUrl",
                  location?.pathname
                );
                router.push("/onboarding");
              }}
            >
              Book Consultation
            </button>
          </div>

          <Text className="text-[20px] leading-[28px] mob:leading-[25px] text-[#FFFFFF] mt-5 mob:text-[18px] font-normal font-bentonMedium">
            Project
          </Text>
          <Text className="text-[28px] mob:text-[24px] leading-[36.4px] mob:leading-[31.2px] text-[#FFFFFF] font-light">
            {slides[currentSlide]?.projectName}
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
                slides[currentSlide]?.delay || 5000;
              swiper.autoplay.start();
            }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <LazySlide 
                video={slide.video}
                isActive={currentSlide === index}
                priority={slide.priority}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,1)]  pagination-gradient bg-black/40 z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default HomeSlider;
