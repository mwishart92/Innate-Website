'use client'
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import {
//   Keyboard,
//   Navigation,
//   Scrollbar,
//   Autoplay,
//   // Pagination,
// } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../slider.css'
import First from '../Content/Bosma/First'
// import leftarrow from "@/public/images/work/Arrowleftblue.png"
// import rightarrow from "@/public/images/work/Arrowrightblue.png"

function WorkSlider3() {
  // const swiper = useSwiper();

  return (
    <div className=" w-full overflow-hidden">
      <div
      // className="overflow-hidden w-full "
      // data-aos="fade-up"
      // data-aos-delay="200"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      >
        <div className=" w-full overflow-hidden  flex justify-center items-center relative">
          <First />
        </div>
      </div>
    </div>
  )
}

export default WorkSlider3
