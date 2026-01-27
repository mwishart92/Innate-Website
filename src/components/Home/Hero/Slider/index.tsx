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
import Text from "@/components/ui/Text";
import { useRouter } from "next/navigation";
import Image from "next/image";

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      image: "/images/home/innate-hero_1--web.jpg",
      delay: 5000,
      projectName: "Innate NW",
      priority: false,
    },
    {
      image: "/images/home/innate-hero_2--web.jpg",
      delay: 5000,
      projectName: "Innate NW",
      priority: false,
    },
    {
      image: "/images/home/innate-hero_3--web.jpg",
      delay: 5000,
      projectName: "Innate NW",
      priority: false,
    },
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
              <span className="text-[22px] mob:text-[22px] font-light font-inter">
                Seattle Design+ Build
              </span>
              <br />
              <span className="text-[40px] mob:text-[28px] font-light">
                It's{" "}
              </span>
              <span className="italic text-[40px] mob:text-[28px]">Innate</span>
            </Text>
            <Text className="text-[22px] mob:text-[22px] font-light font-inter mt-6 mb-4">
              
              We manage every piece, so you don't have to.
            </Text>

            <button
              className="mt-[20px] mb-[20px] border border-white bg-white text-black font-normal max-w-[200px] h-[50px] text-[16px] hover:bg-transparent hover:text-white hover:border-white transition duration-300 px-[24px] py-[14px] mob:text-[14px] mob:max-w-[181px] mob:h-[48px]"
              // onClick={() => scrollToSection('contactHome')}
              onClick={() => {
                localStorage?.setItem(
                  "onboardingRedirectUrl",
                  location?.pathname
                );
                router.push("/onboarding");
              }}
            >
              Let's Work Together
            </button>
            <div className="home-hero-pagination"></div>
          </div>

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
            el: ".home-hero-pagination",
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
              <div className="relative h-screen mob:h-full min-h-[784px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.projectName}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={slide.priority}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,1)]  pagination-gradient z-10 pointer-events-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}></div>
      </div>
    </div>
  );
}

export default HomeSlider;
