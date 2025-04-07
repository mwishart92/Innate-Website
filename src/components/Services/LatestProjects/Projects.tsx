"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState, useMemo } from "react";

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
// import bath from "@/public/images/services/bathroom.png";

import KB1 from "@/public/images/services/kitchen/KB1.png";
import KB2 from "@/public/images/services/kitchen/KB2.png";
import KB3 from "@/public/images/services/kitchen/KB3.png";
import KB4 from "@/public/images/services/kitchen/KB4.png";
import KB5 from "@/public/images/services/kitchen/KB5.png";
import KB6 from "@/public/images/services/kitchen/KB6.png";
import KB7 from "@/public/images/services/kitchen/KB7.png";
import KB8 from "@/public/images/services/kitchen/KB8.png";

import D1 from "@/public/images/services/Decks/D1.png";
import D2 from "@/public/images/services/Decks/D2.png";
import D3 from "@/public/images/services/Decks/D3.png";
import D4 from "@/public/images/services/Decks/D4.png";
import D5 from "@/public/images/services/Decks/D5.png";
import D6 from "@/public/images/services/Decks/D6.png";

import C1 from "@/public/images/services/Construction/C1.png";
import C2 from "@/public/images/services/Construction/C2.png";
import C3 from "@/public/images/services/Construction/C3.png";
import C4 from "@/public/images/services/Construction/C4.png";
import C5 from "@/public/images/services/Construction/C5.png";
import C6 from "@/public/images/services/Construction/C6.png";
import C7 from "@/public/images/services/Construction/C7.png";
import C8 from "@/public/images/services/Construction/C8.png";
import C9 from "@/public/images/services/Construction/C9.png";
import C10 from "@/public/images/services/Construction/C10.png";
import C11 from "@/public/images/services/Construction/C11.png";

import R1 from "@/public/images/services/Roofing/R1.png";
import R2 from "@/public/images/services/Roofing/R2.png";
import R3 from "@/public/images/services/Roofing/R3.png";
import R4 from "@/public/images/services/Roofing/R4.png";
import R5 from "@/public/images/services/Roofing/R5.png";
import R6 from "@/public/images/services/Roofing/R6.png";
import R7 from "@/public/images/services/Roofing/R7.png";
import R8 from "@/public/images/services/Roofing/R8.png";
import R9 from "@/public/images/services/Roofing/R9.png";
import R10 from "@/public/images/services/Roofing/R10.png";
import R11 from "@/public/images/services/Roofing/R11.png";

interface ServiceData {
  image: string | StaticImageData;
}

function Projects() {



  const kitchen = useMemo<ServiceData[]>(() => [
    { image: KB1 },
    { image: KB2 },
    { image: KB3 },
    { image: KB4 },
    { image: KB5 },
    { image: KB6 },
    { image: KB7 },
    { image: KB8 },
  ], []);
  

  const Decks = useMemo<ServiceData[]>(() => [
    { image: D1 },
    { image: D2 },
    { image: D3 },
    { image: D4 },
    { image: D5 },
    { image: D6 },
  ], []);

  const Roofing = useMemo<ServiceData[]>(() => [
    { image: R1 },
    { image: R2 },
    { image: R3 },
    { image: R4 },
    { image: R5 },
    { image: R6 },
    { image: R7 },
    { image: R8 },
    { image: R9 },
    { image: R10 },
    { image: R11 },
  ], []);

  const Construction = useMemo<ServiceData[]>(() => [
    { image: C1 },
    { image: C2 },
    { image: C3 },
    { image: C4 },
    { image: C5 },
    { image: C6 },
    { image: C7 },
    { image: C8 },
    { image: C9 },
    { image: C10 },
    { image: C11 },
  ], []);

  const [serviceData, setServiceData] = useState<ServiceData[] | null>(kitchen);

  useEffect(() => {
    const serviceType = sessionStorage.getItem("serviceType");
    if (serviceType === "KitchensAndBathrooms") {
      setServiceData(kitchen);
    } else if (serviceType === "Construction") {
      setServiceData(Construction);
    } else if (serviceType === "Roofing") {
      setServiceData(Roofing);
    } else if (serviceType === "Decks") {
      setServiceData(Decks);
    }
  }, [kitchen, Construction, Roofing, Decks]);

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
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
            className="mySwiper"
          >
            {serviceData?.map((item, index) => (
              <SwiperSlide key={index} className="px-2">
                <div className="w-full h-[412px] relative">
                  {/* Make the image fill and cover the parent container */}
                  <Image
                    src={item.image}
                    alt=""
                    layout="fill"  // This will make the image fill the container
                    objectFit="cover"  // Ensure the image covers the entire area
                    className="absolute inset-0" // Ensures the image is positioned correctly
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
