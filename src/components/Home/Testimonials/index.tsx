'use client'
import React from 'react'
// import Image from 'next/image'

import Text from '@/components/ui/Text'

// import profile1 from '@/public/images/home/profile.png'
// import profile2 from '@/public/images/home/profile (1).png'
// import profile3 from '@/public/images/home/profile (2).png'
import './Testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Testimonials() {
  return (
    <div className=" w-full mx-auto pt-44 pb-20 tab:px-5 mob:py-10 mob:pt-[80px]">
      <div className="flex flex-wrap justify-center gap-[20px] mob:hidden">
        <div className="w-full max-w-[25%] border mob:max-w-[100%] border-[#0000001A] rounded-[10px]">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/RdjFPFmJqmw?start=6&rel=0"
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="pl-0 py-4 pr-4">
            <div className="flex gap-[11px] items-center">
              {/* <Image
                src={profile1}
                alt=""
                width={48}
                height={48}
                className="self-start"
              /> */}
              <div>
                <Text className="text-[20px] leading-[28px] text-white font-normal">
                  Pellegrino Residence
                </Text>
                <Text className="mt-1 text-gray-400 font-normal">
                  Interior Remodel Project
                </Text>
              </div>
            </div>
            <Text className="text-gray-400 text-sm mt-3 text-[16px]">
              The team did a superb job
            </Text>
          </div>
        </div>
        <div className="w-full max-w-[25%] border mob:max-w-[100%] border-[#0000001A] rounded-[10px]">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
            {' '}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/CIfc5KXFhx8?si=ka96dqKPIVHT7MoX?rel=0"
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="pl-0 py-4 pr-4">
            <div className="flex gap-[11px] items-center">
              {/* <Image
                src={profile2}
                alt=""
                width={48}
                height={48}
                className="self-start"
              /> */}
              <div>
                <Text className="text-[20px] mob:text-[18px]leading-[28px] text-white ">
                  Wedgewood ADU 950 SF
                </Text>
                <Text className="mt-1 text-gray-400">ADU Project</Text>
              </div>
            </div>
            <Text className="text-gray-400 text-sm mt-3 text-[16px]">
              From excavation to finishes
            </Text>
          </div>
        </div>
        <div className="w-full max-w-[25%] border mob:max-w-[100%] border-[#0000001A] rounded-[10px]">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
            {' '}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/BTdFMnOx__Q?si=Blwi7ryULoMUMXVZ"
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="pl-0 py-4 pr-4">
            <div className="flex gap-[11px] items-center">
              {/* <Image
                src={profile3}
                alt=""
                width={48}
                height={48}
                className="self-start"
              /> */}
              <div>
                <Text className="text-[20px] leading-[28px] text-white">
                  Norman Residence
                </Text>
                <Text className="mt-1 text-gray-400">
                  Kitchen and Bathroom Remodel
                </Text>
              </div>
            </div>
            <Text className="text-gray-400 text-sm mt-3 text-[16px]">
              Michael had a great vision
            </Text>
          </div>
        </div>
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
                nextEl: '.custom-next',
                prevEl: '.custom-prev ',
              }}
              pagination={{
                el: '.custom-pagination-parent',
                clickable: true,
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
              }}
              modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="mob:px-3">
                <div className="w-full max-w-[25%] border mob:max-w-[100%] border-gray-800 rounded-[10px]">
                  <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
                    {' '}
                    {/* 16:9 Aspect Ratio */}
                    <iframe
                      src="https://www.youtube.com/embed/RdjFPFmJqmw?start=6&rel=0"
                      title="YouTube Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                    <a
                      href="https://www.youtube.com/watch?v=RdjFPFmJqmw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                      aria-label="Open video in a new tab"
                    ></a>
                  </div>
                  <div className="pl-2 py-4 pr-4">
                    <div className="flex gap-[11px] items-center">
                      {/* <Image src={profile1} alt="" width={48} height={48} /> */}
                      <div>
                        <Text className="text-[18px] leading-[25.2px] text-white font-normal">
                          Pellegrino Residence
                        </Text>
                        <Text className="mt-1 text-gray-400 text-[14px] font-normal leading-[21px]">
                          Interior Remodel Project
                        </Text>
                      </div>
                    </div>
                    <Text className="text-gray-400 mt-3 text-[14px] leading-[21px] font-normal">
                      The team did a superb job
                    </Text>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="mob:px-3">
                <div className="w-full max-w-[25%] border mob:max-w-[100%] border-gray-800 rounded-[10px]">
                  <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
                    {/* 16:9 Aspect Ratio */}
                    <iframe
                      src="https://www.youtube.com/embed/CIfc5KXFhx8?si=ka96dqKPIVHT7MoX?rel=0"
                      title="YouTube Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    ></iframe>

                    <a
                      href="https://www.youtube.com/watch?v=CIfc5KXFhx8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                      aria-label="Open video in a new tab"
                    ></a>
                  </div>

                  <div className="pl-2 py-4 pr-4">
                    <div className="flex gap-[11px] items-center">
                      {/* <Image src={profile2} alt="" width={48} height={48} /> */}
                      <div>
                        <Text className="text-[18px] leading-[25.2px] text-white font-normal">
                          Wedgewood ADU 950 SF
                        </Text>
                        <Text className="mt-1 text-gray-400 text-[14px] font-normal leading-[21px]">
                          ADU Project
                        </Text>
                      </div>
                    </div>
                    <Text className="text-gray-400 mt-3 text-[14px] leading-[21px] font-normal">
                      From excavation to finishes
                    </Text>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="mob:px-3">
                <div className="w-full max-w-[25%] border mob:max-w-[100%] border-gray-800 rounded-[10px]">
                  <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
                    {' '}
                    {/* 16:9 Aspect Ratio */}
                    <iframe
                      src="https://www.youtube.com/embed/BTdFMnOx__Q?si=Blwi7ryULoMUMXVZ"
                      title="YouTube Video Player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture rounded-10"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                    <a
                      href="https://www.youtube.com/watch?v=BTdFMnOx__Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                      aria-label="Open video in a new tab"
                    ></a>
                  </div>
                  <div className="pl-2 py-4 pr-4">
                    <div className="flex gap-[11px] items-center">
                      {/* <Image src={profile3} alt="" width={48} height={48} /> */}
                      <div>
                        <Text className="text-[18px] leading-[25.2px] text-white font-normal">
                          Norman Residence
                        </Text>
                        <Text className="mt-1 text-gray-400 text-[14px] font-normal leading-[21px]">
                          Kitchen and Bathroom Remodel
                        </Text>
                      </div>
                    </div>
                    <Text className="text-gray-400 mt-3 text-[14px] leading-[21px] font-normal">
                      Michael had a great vision
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="custom-pagination-parent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
