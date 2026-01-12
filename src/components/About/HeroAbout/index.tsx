import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import firm from "@/public/images/about/firm.jpg";
import michael from "@/public/images/about/michael2.jpg";
import gelberg from "@/public/images/about/rangul1.jpg";
import andres from "@/public/images/about/andres.jpg";
import nayeli from "@/public/images/about/nayeli.jpg";
import ivan from "@/public/images/about/ivan.jpg";
// import amin from '@/public/images/about/amin.png'
import mary from "@/public/images/about/mary.jpg";
// import mridul from '@/public/images/about/mridul.png'
import arrow from "@/public/images/about/arrow.png";
import userImg from "@/public/images/about/user.jpg";
const HeroAbout = () => {
  return (
    <div className="min-h-screen pt-32 px-5 mob:pt-16">
      <Text
        as="h2"
        className="max-w-[971px] font-bold text-center text-[4em] mob:text-[40px] leading-[70px] mob:leading-[43.2px] pt-[4rem] pb-[4rem] mx-auto font-light font-serif mob:pb-24"
      >
        "Architecture and craftsmanship is in our DNA"
      </Text>
      <Text className="text-center max-w-[971px] mx-auto py-[50px] pb-[8rem] text-[16px] mob:text-[14px] font-light">
        At Innate, We believe every client and every <a href="/services">project</a> have unique needs that require unique solutions. Whether it is a small residential remodel or a large commercial project, effective construction begins with good architecture, and this process is a participatory one where the clients individual needs, and wishes are heard and respected.
      </Text>
      <Text
        as="h2"
        className="text-center text-[40px] mt-8 font-inter font-medium mob:text-[30px] mob:font-semibold mob:mt-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Our Team
      </Text>

      <div className="w-full max-w-full px-16 mob:px-0 grid grid-cols-3 gap-[25px] justify-center items-start pt-16 pb-16 mob:pt-12 mob:pb-24 mob:grid-cols-1">
        {/* Row 1 */}
        <div className="w-full max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={michael}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Michael Wishart
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Designer
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={ivan}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Ivan K
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Interior Craftsman
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={mary}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Mary Padasas
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Social Media
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="w-full max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={nayeli}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Nayeli Flores Herbert
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Office Manager
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={andres}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Andres Quiroga
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Superintendent
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
        <div className="w-full max-w-full">
          <div
            className="aspect-[2/2] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <Image
              className="object-cover w-[266px] h-[261px] mob:w-[350px] rounded-[10px]"
              src={userImg}
              alt=""
              fill
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
            <Text className="text-[30px] font-semibold leading-[39px] mt-5 mob:font-medium mob:text-[28px]">
              Felix Lopez
            </Text>
          </div>
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1100"
          >
            <Text className="text-[18px] font-normal leading-[24px] mob:text-[16px]">
              Exteriors
            </Text>
            <Image className="" src={arrow} alt="" width={41} height={41} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
