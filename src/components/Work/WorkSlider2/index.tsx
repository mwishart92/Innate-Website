'use client'
import Image from 'next/image'
import Link from 'next/link'
import Text from '@/components/ui/Text'
import arrowwhite from '@/public/images/work/Arrowwhite.png'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Keyboard, Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

import '../slider.css'
import First from '../Content/GrayBathroom/First'
import Second from '../Content/GrayBathroom/Second'
import Third from '../Content/GrayBathroom/Third'
import Fourth from '../Content/GrayBathroom/Fourth'
import Fifth from '../Content/GrayBathroom/Fifth'
import Sixth from '../Content/GrayBathroom/Sixth'
import Seventh from '../Content/GrayBathroom/Seventh'
import Eight from '../Content/GrayBathroom/Eight'
// import leftarrow from '@/public/images/work/Arrowleftblue.png'
import arrow from '@/public/images/work/Arrow.png'
import { useState } from 'react'

function WorkSlider2() {
  const [imageLoaded, setImageLoaded] = useState(false)

  const swiper = useSwiper()

  const handleprevbtn = () => {
    swiper?.slidePrev()
    console.log('slidePrev')
  }

  const handleNextvbtn = () => {
    swiper?.slideNext()
    console.log('slideNext')
  }

  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
        <div className="absolute left-0 p-5 mob:p-10 w-full z-20 bg-opacity-50 text-center">
          {imageLoaded && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-center z-10">
              <Text
                as="h1"
                className="text-[74px] font-semibold text-[#FFFFFF] mob:text-[29.29px]"
              >
                Gray Bathroom
              </Text>
              <Text className="text-[28px] font-normal  text-[#FFFFFF] mb-3 flex items-center gap-1 text-center justify-center mob:text-[11.84px]">
                Seattle, Washington
              </Text>
              <Link
                href="/project"
                className="mt-8 mob:mt-6 font-normal max-w-[260px] h-[62.69px] mx-auto flex items-center justify-center text-center gap-1 text-[18px] mob:text-[12px] text-white border border-[#FFFFFF] px-[28px] py-[17.34px] mob:max-w-[140px] mob:px-[14px] mob:py-[7.33px] mob:h-[40px]"
              >
                LEARN MORE
                <Image src={arrowwhite} alt="" width={18} height={18} />
              </Link>
            </div>
          )}
        </div>

        {/* Swiper slider */}
        <div className="w-full work1-slider-parent flex justify-center items-center relative">
          {/* Navigation arrows */}
          <Image
            className="cards-custom-prev2 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer rotate-180"
            onClick={handleprevbtn}
            src={arrow}
            alt="moveprevbtn"
          />
          <Image
            className="cards-custom-next2 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleNextvbtn}
            src={arrow}
            alt="movenextbtn"
          />

          <Swiper
            slidesPerView={1}
            speed={2000}
            loop={true}
            navigation={{
              nextEl: '.cards-custom-next2',
              prevEl: '.cards-custom-prev2',
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
            className="w-full h-full"
          >
            <SwiperSlide>
              <First setImageLoaded={setImageLoaded} />
            </SwiperSlide>

            <SwiperSlide>
              <Second />
            </SwiperSlide>

            <SwiperSlide>
              <Third />
            </SwiperSlide>

            <SwiperSlide>
              <Fourth />
            </SwiperSlide>

            <SwiperSlide>
              <Fifth />
            </SwiperSlide>

            <SwiperSlide>
              <Sixth />
            </SwiperSlide>

            <SwiperSlide>
              <Seventh />
            </SwiperSlide>

            <SwiperSlide>
              <Eight />
            </SwiperSlide>
          </Swiper>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.5)] pagination-gradient z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}

export default WorkSlider2
