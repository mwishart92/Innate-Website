'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Keyboard, Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import Text from '@/components/ui/Text'
import arrowwhite from '@/public/images/work/Arrowwhite.png'
import '../slider.css'
import First from '../Content/Norman/First'
import Second from '../Content/Norman/Second'
import Third from '../Content/Norman/Third'
import Fourth from '../Content/Norman/Fourth'
import Fifth from '../Content/Norman/Fifth'
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
        <div className="text-center p-5 mob:p-14 w-full z-10 bg-opacity-50">
          {imageLoaded && (
            <div>
              <Text
                as="h1"
                className="text-[74px] font-semibold text-[#FFFFFF] mob:text-[29.29px]"
              >
                Norman Bathroom
              </Text>
              <Text className="text-[28px] font-normal mob:text-[11.84px] text-[#FFFFFF] mb-3 flex items-center gap-1 text-center justify-center mob:text-[11.84px]">
                West Seattle, Washington
              </Text>
              <Link
                href="/project"
                className="mt-10 mob:mt-6 font-normal max-w-[200px] h-[62.69px] mx-auto flex items-center justify-center text-center gap-1 text-[18px] mob:text-[12px] text-white border border-[#FFFFFF] px-[3px] py-[17.34px] mob:max-w-[140px] mob:px-[7px] mob:py-[7.33px] mob:h-[40px]"
              >
                LEARN MORE{' '}
                <Image src={arrowwhite} alt="" width={18} height={18} />
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="w-full overflow-hidden flex justify-center items-center relative">
        {/* Navigation arrows */}
        <Image
          className="cards-custom-prev8 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer rotate-180"
          onClick={handleprevbtn}
          src={arrow}
          alt="moveprevbtn"
        />
        <Image
          className="cards-custom-next8 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleNextvbtn}
          src={arrow}
          alt="movenextbtn"
        />

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          speed={2000}
          loop={true}
          navigation={{
            nextEl: '.cards-custom-next8',
            prevEl: '.cards-custom-prev8',
          }}
          modules={[Keyboard, Navigation, Scrollbar, Autoplay]}
          className="mySwiper swiper-backface-hidden"
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
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.5)] pagination-gradient z-10 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default WorkSlider3
