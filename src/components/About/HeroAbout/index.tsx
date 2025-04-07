import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import firm from '@/public/images/about/firm.jpg'
import michel from '@/public/images/about/michael.jpg'
import gelberg from '@/public/images/about/rangul1.jpg'
// import amin from '@/public/images/about/amin.png'
import mary from '@/public/images/about/mary.jpg'
// import mridul from '@/public/images/about/mridul.png'
import arrow from '@/public/images/about/arrow.png'
import userImg from '@/public/images/about/user.jpg'
const HeroAbout = () => {
  return (
    <div className="min-h-screen pt-32 px-5 mob:pt-16">
      <Text
        as="h1"
        className="max-w-[971px] font-bold text-center text-[2.71vw] mob:text-[40px] leading-[70px] mob:leading-[43.2px] pt-20 pb-32 mx-auto font-light font-serif mob:pb-24"
      >
        “Architecture and craftsmanship is in our DNA”
      </Text>
      <div
        className="w-full max-w-full px-16 mob:px-0 flex lg:flex-wrap justify-around tab:justify-start gap-20 items-start mob:gap-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Image
          src={firm}
          alt=""
          className="w-[558px] h-[397px] tab:w-full mob:h-[311px] rounded-[10px]"
        />
        <div className="w-full max-w-1/2 tab:ms-0 ms-10">
          <Text
            as="h1"
            className="font-inter font-light font-medium text-[40px] mob:text-[30px] mob:font-semibold"
          >
            The Firm
          </Text>
          <Text className="text-[24px] font-medium leading-[31.2px] my-5 mob:font-normal mob:text-[20px]">
            Culture
          </Text>
          <Text className="text-[16px] mob:text-[14px] font-light">
            At Innate, We believe every client and every project have unique
            needs that require unique solutions. Whether it is a small
            residential remodel or a large commercial project, effective
            construction begins with good architecture, and this process is a
            participatory one where the clients individual needs, and wishes are
            heard and respected.
          </Text>
        </div>
      </div>
      <div
        className="w-full max-w-full px-16 mob:px-0 flex lg:flex-wrap justify-between mob:justify-center gap-32 mob:gap-10 items-center py-16 "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="w-full max-w-1/3 me-10 mob:order-2 mob:me-0">
          <Text
            as="h1"
            className="font-inter font-light font-medium text-[40px] mob:text-[30px] mob:font-semibold"
          >
            Michael Wishart
          </Text>
          <Text className="text-[24px] font-medium leading-[31.2px] my-5 mob:text-[20px] mob:font-normal">
            Founder
          </Text>
          <Text className="font-light text-[16px] mob:text-[14px]">
            My love of architecture began at a very young age. As a child
            growing up in Australia I would create structures with blocks and
            sketch my dream house. Many years later I found myself studying
            architecture at the Community College of Denver where I discovered
            the timeless art of hand drafting. Although we fully embrace the
            capabilities of modern technology at Innate, I believe something
            profound occurs when you put pencil to paper. It’s a tactile
            connection that brings a unique authenticity to every project we do.
          </Text>
          <Text className="my-4 font-light text-[16px] mob:text-[14px]">
            Since our inception, our philosophy has always been to enhance the
            quality of life of our clients. By collaborating with architects,
            engineers and craftsmen that share our values, I have formed a
            multi-disciplinary firm capable of handling the entire project from
            initial concept to finished construction. I believe that when design
            is both functional and beautiful, it can have the most impact on
            peoples lives.
          </Text>
        </div>
        <Image
          src={michel}
          alt=""
          className="w-1/3 tab:w-full mob:order-1 rounded-[10px]"
          // height={357}
        />
      </div>
      <Text
        as="h2"
        className="text-center text-[40px] mt-8 font-inter font-medium mob:text-[30px] mob:font-semibold mob:mt-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Our Team
      </Text>

      <div className="w-full max-w-full px-16 mob:px-0 flex lg:flex-wrap gap-[25px] justify-center items-center pt-16 pb-16 mob:pt-12 mob:pb-24">
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={gelberg}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Ran Gelberg
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Project Manager
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={mary}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Mary Padasas
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Office Manager
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={userImg}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Andres Quiroga
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Project Manager
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-[25%] mob:max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={userImg}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Felix Lopez
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Exteriors
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
