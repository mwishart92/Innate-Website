"use client";
import React from "react";
import Text from "@/components/ui/Text";
import VideoThumbnail from "@/components/ui/VideoThumbnail";
import VideoThumbnailMobile from "@/components/ui/VideoThumbnailMobile";
import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from "swiper/modules";
// Swiper CSS is now imported centrally in layout.tsx

function Testimonials() {
  return (
    <div className=" w-full mx-auto pt-44 pb-20 tab:px-5 mob:py-10 mob:pt-[80px] mob:hidden">
      <div className="flex flex-wrap justify-center gap-[20px]">
        <VideoThumbnail
          videoId="RdjFPFmJqmw"
          title="Pellegrino Residence"
          subtitle="Interior Remodel Project"
        />
        <VideoThumbnail
          videoId="CIfc5KXFhx8"
          title="Wedgewood ADU 950 SF"
          subtitle="ADU Project"
        />
        <VideoThumbnail
          videoId="BTdFMnOx__Q"
          title="Norman Residence"
          subtitle="Kitchen and Bathroom Remodel"
        />
      </div>
      <div className="w-full overflow-hidden sm:hidden">
        <div
        // className="overflow-hidden w-full "
        // data-aos="fade-up"
        // data-aos-delay="200"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        >
          <div className=" w-full overflow-hidden TestimonialSlider-slider-parent">
            <Swiper
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1180: {
                  slidesPerView: 1,
                },
                1323: {
                  slidesPerView: 1,
                },
              }}
              slidesPerView={1}
              speed={4000}
              autoplay={{
                delay: 18000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev ",
              }}
              pagination={{
                el: ".custom-pagination-parent",
                clickable: true,
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="mob:px-3">
                <VideoThumbnailMobile
                  videoId="RdjFPFmJqmw"
                  title="Pellegrino Residence"
                  subtitle="Interior Remodel Project"
                />
              </SwiperSlide>

              <SwiperSlide className="mob:px-3">
                <VideoThumbnailMobile
                  videoId="CIfc5KXFhx8"
                  title="Wedgewood ADU 950 SF"
                  subtitle="ADU Project"
                />
              </SwiperSlide>

              <SwiperSlide className="mob:px-3">
                <VideoThumbnailMobile
                  videoId="BTdFMnOx__Q"
                  title="Norman Residence"
                  subtitle="Kitchen and Bathroom Remodel"
                />
              </SwiperSlide>
            </Swiper>
            <div className="custom-pagination-parent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
