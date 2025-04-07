import React from 'react'
import Image from 'next/image'
import Text from '@/components/ui/Text'
import avatar from '@/public/images/home/avatarimg.png'
import leftdot from '@/public/images/home/left“.png'
import rightdot from '@/public/images/home/right“.png'

interface ReviewsProps {
  text: string
  name: string
  title: string
}

const Reviews: React.FC<ReviewsProps> = ({ text, name, title }) => {
  return (
    <div className="pt-32 pb-20">
      <div className="w-full max-w-[1104px] mx-auto relative">
        <Image
          className="absolute left-0 top-[-40px] mob:top-[-40px] w-[74.95px] h-[64px] mob:w-[46.84px] mob:h-[40px] mob:bottom-[40px]"
          src={leftdot}
          alt=""
        />
        <Image
          className="absolute right-0 bottom-[50px] mob:bottom-[74px] w-[74.95px] h-[64px] mob:w-[46.84px] mob:h-[40px] mob:bottom-[40px]"
          src={rightdot}
          alt=""
        />

        <Text className="text-center text-[24px] font-light leading-[31.2px] text-white max-w-[879px] mx-auto mob:text-[18px] mob:leading-[25.2px] mob:font-normal">
          {text}
        </Text>
        <div className="flex gap-[11px] items-center justify-center mt-10">
          <Image
            src={avatar}
            alt=""
            className="w-[70px] h-[70px] mob:w-[56px] mob:h-[56px]"
          />
          <div className="">
            <Text className="text-[24px] font-medium leading-[31.2px] text-white mob:text-[20px]">
              {name}
            </Text>
            <Text className="text-[16px] mt-1 text-white mob:text-[14px] font-normal">
              {title}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
