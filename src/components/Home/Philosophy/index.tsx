import React from 'react'

import Text from '@/components/ui/Text'

import rightimg from '@/public/images/home/collective.png'
import Image from 'next/image'
const Philosophy = () => {
  return (
    <>
      <div className="flex justify-center items-center py-20 mob:my-12 px-14 mob:py-0 mob:px-0">
        <div className="w-[84%] flex mob:flex-col items-center justify-between mob:w-[100%] gap-[20px] mob:gap-[80px]">
          <div className="w-[80%] mob:px-0 mob:w-[90%]">
            <Text className="text-[32px] text-white font-serif leading-[41.6px] mt-3 mb-4 mob:text-[28px] mob:leading-[36.4px] mob:text-medium">
              When design is both functional and beautiful,
              <span className="block lg:inline">
                it has the most impact on people&apos;s lives.
              </span>
            </Text>
          </div>
          <div className="mob:px-0 aspect-[7/5] relative  w-[398px] h-[261px] mob:h-[229.52px] mob:w-[350px]">
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="mr-24 mob:mr-0 object-cover"
              src={rightimg}
              alt="rightimg"
              fill
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Philosophy
