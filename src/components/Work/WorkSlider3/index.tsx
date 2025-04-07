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
import First from '../Content/Japandi/First'
import Second from '../Content/Japandi/Second'
import Third from '../Content/Japandi/Third'
import Fourth from '../Content/Japandi/Fourth'
import Fifth from '../Content/Japandi/Fifth'
import Sixth from '../Content/Japandi/Sixth'
import Seventh from '../Content/Japandi/Seventh'
import Eight from '../Content/Japandi/Eight'
// import leftarrow from '@/public/images/work/Arrowleftblue.png'
import arrow from '@/public/images/work/Arrow.png'
import { useState } from 'react'

function WorkSlider3() {
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
    <div className="w-full h-screen overflow-hidden flex justify-center items-center relative">
      <div className="absolute inset-0 flex justify-center items-center z-20">
        {/* Text and Button Content */}
        <div className="text-center p-5 mob:p-14 w-full z-10 bg-opacity-50">
          {imageLoaded && (
            <>
              <Text
                as="h1"
                className="text-[74px] font-semibold text-[#FFFFFF] mob:text-[29.29px]"
              >
                Japandi ADU
              </Text>
              <Text className="text-[28px] font-normal mob:text-[11.84px] text-[#FFFFFF] mb-3 flex items-center gap-1 text-center justify-center mob:text-[11.84px]">
                Magnolia, Washington
              </Text>
              <Link
                href="/project"
                className="mt-10 mob:mt-6 font-normal max-w-[200px] h-[62.69px] mx-auto flex items-center justify-center text-center gap-1 text-[18px] mob:text-[12px] text-white border border-[#FFFFFF] px-[3px] py-[17.34px] mob:max-w-[140px] mob:px-[7px] mob:py-[7.33px] mob:h-[40px]"
              >
                LEARN MORE{' '}
                <Image src={arrowwhite} alt="" width={18} height={18} />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full overflow-hidden flex justify-center items-center relative">
        <Image
          className="cards-custom-prev3 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rotate-180"
          onClick={handleprevbtn}
          src={arrow}
          alt="moveprevbtn"
        />
        <Image
          className="cards-custom-next3 absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={handleNextvbtn}
          src={arrow}
          alt="movenextbtn"
        />
        <Swiper
          slidesPerView={1}
          speed={2000}
          loop={true}
          navigation={{
            nextEl: '.cards-custom-next3',
            prevEl: '.cards-custom-prev3',
          }}
          modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
          className="mySwiper"
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
  )
}

export default WorkSlider3
