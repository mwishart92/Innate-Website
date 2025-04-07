import React from 'react'
// import Image from 'next/image'

import Text from '@/components/ui/Text'

// import leftbg from '@/public/images/home/logo1.png'
// import rightbg from '@/public/images/home/logo2.png'
import ButtonGetStarted from '@/components/ui/ButtonGetStarted'

const Confidence = () => {
  return (
    <div>
      <div className="pb-16 px-5 mob:hidden">
        <div className="w-full max-w-[1140px] mx-auto h-[300px] rounded-[10px] relative flex items-center justify-center">
          {/* <Image
            className="bottom-0 left-0 absolute mob:max-w-[45%] mob:bottom-32"
            src={leftbg}
            alt=""
            width={308}
            height={328}
          />
          <Image
            className="top-36 right-0 absolute mob:max-w-[45%] mob:top-[340px]"
            src={rightbg}
            alt=""
            width={308}
            height={328}
          /> */}
          <div className="pt-0">
            <Text
              as="h1"
              className="text-[40px] text-center font-medium mob:text-[30px] mob:"
            >
              Design and Build with confidence
            </Text>
            <div className="flex justify-center mt-8">
              <ButtonGetStarted />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full gradient pt-16 pb-20 px-5 mob:pt-5 sm:hidden">
        <div className="flex lg:flex-wrap gap-[47px] items-center pt-[43px] pb-[43px] w-[350px] mob:w-full min-h-[320px] mt-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center mob:gap-[40px] mob:pt-[0px] mob:pb-[0px]">
          <div className="w-full max-w-[1140px] mx-auto h-[300px] rounded-[10px] relative flex items-center justify-center">
            {/* <Image
              className="bottom-0 left-0 absolute bottom-[152px] w-[248.27px] h-[264.39px]"
              src={leftbg}
              alt=""
            />
            <Image
              className="top-36 right-0 absolute w-[248.27px] h-[264.39px] mob:top-[152px]"
              src={rightbg}
              alt=""
            /> */}
            <div className="">
              <Text
                as="h1"
                className="text-[40px] text-center font-medium mob:text-[30px]"
              >
                Design and Build with confidence
              </Text>
              <div className="flex justify-center mt-10">
                <ButtonGetStarted />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confidence
