"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Text from "@/components/ui/Text";
import arrowwhite from "@/public/images/work/Arrowwhite.png";
import "../slider.css";
import MediaSlide from "../MediaSlide";
// import leftarrow from '@/public/images/work/Arrowleftblue.png'
import arrow from "@/public/images/work/Arrow.png";
import { cn } from "@/libs/utils/twMerge";

function WorkSlider({
  title,
  location,
  media,
  url,
  className,
  showSlider,
  hover,
  isMobile,
  index,
}: {
  title: string;
  location: string;
  url: string;
  media: { src: string; type: "image" | "video" }[] | undefined;
  className?: string;
  showSlider?: boolean;
  isMobile?: boolean;
  hover?: {
    title: string;
    subTitle: string;
  };
  index?: number;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  // Intersection Observer for mobile scroll effect
  useEffect(() => {
    if (!isMobile || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show when 90% visible, hide when below 50%
        const ratio = entry.intersectionRatio;
        if (ratio >= 0.9) {
          setIsInViewport(true);
        } else if (ratio < 0.5) {
          setIsInViewport(false);
        }
      },
      {
        threshold: [0.5, 0.9],
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, [isMobile]);
  return (
    <div
      ref={sectionRef}
      className={cn(
        "w-full h-screen overflow-hidden flex justify-center items-center",
        {
          "section-in-viewport": isInViewport && isMobile,
        },
        className
      )}
    >
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <div className="text-center p-5 mob:p-14 w-full bg-opacity-50 relative max-w-[1024px]">
          <div
            className={cn({
              "hide-on-hover": hover?.title && !isMobile,
              "hide-on-scroll": hover?.title && isMobile,
            })}
          >
            <Text
              as="h2"
              className="text-[74px] font-semibold text-[#FFFFFF] mob:text-[29.29px] relative"
            >
              <span>{title}</span>
            </Text>
            <Text className="text-[28px] font-normal  text-[#FFFFFF] mb-3 flex items-center gap-1 text-center justify-center mob:text-[11.84px] relative">
              <span>{location}</span>
            </Text>
            {url && (
              <Link
                href={url}
                className="mt-10 mob:mt-6 font-normal max-w-[200px] h-[62.69px] mx-auto flex items-center justify-center text-center gap-1 text-[18px] mob:text-[12px] text-white border border-[#FFFFFF] px-[3px] py-[17.34px] mob:max-w-[140px] mob:px-[7px] mob:py-[7.33px] mob:h-[40px] z-20 relative"
              >
                LEARN MORE
                <Image src={arrowwhite} alt="" width={18} height={18} />
              </Link>
            )}
          </div>

          {hover?.title && (
            <div
              className={cn({
                "show-on-hover": !isMobile,
                "show-on-scroll px-3": isMobile,
              })}
            >
              <Text
                as="h2"
                className="text-[54px] font-semibold text-[#FFFFFF] mob:text-[29.29px] relative"
              >
                <span>{hover?.title}</span>
              </Text>
              <Text className="text-[18px] font-normal  text-[#FFFFFF] mb-3 flex items-center gap-1 text-center justify-center mob:text-[11.84px] relative">
                <span>{hover?.subTitle}</span>
              </Text>
              {url && (
                <Link
                  href={url}
                  className="mt-10 mob:mt-6 font-normal max-w-[200px] h-[62.69px] mx-auto flex items-center justify-center text-center gap-1 text-[18px] mob:text-[12px] text-white border border-[#FFFFFF] px-[3px] py-[17.34px] mob:max-w-[140px] mob:px-[7px] mob:py-[7.33px] mob:h-[40px] z-20 relative"
                >
                  LEARN MORE
                  <Image src={arrowwhite} alt="" width={18} height={18} />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full overflow-hidden flex justify-center items-center relative">
        <Image
          className="cards-custom-prev10 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-20 rotate-180"
          onClick={handleprevbtn}
          src={arrow}
          alt="moveprevbtn"
        />
        <Image
          className="cards-custom-next10 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
          onClick={handleNextvbtn}
          src={arrow}
          alt="movenextbtn"
        />

        {/* Swiper Slider */}
        {showSlider ? (
          <Swiper
            slidesPerView={1}
            speed={2000}
            loop={true}
            navigation={{
              nextEl: ".cards-custom-next10",
              prevEl: ".cards-custom-prev10",
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
            className="mySwiper"
          >
            {media?.map((item, index) => (
              <SwiperSlide key={index}>
                <MediaSlide
                  src={item.src}
                  type={item.type}
                  setImageLoaded={index === 0 ? setImageLoaded : undefined}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          ""
        )}

        {/* Gradient Overlay */}
        {showSlider ? (
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.5)] pagination-gradient z-10 pointer-events-none"></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default WorkSlider;
