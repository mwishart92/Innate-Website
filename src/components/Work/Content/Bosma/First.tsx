import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Text from '@/components/ui/Text'
import arrowwhite from '@/public/images/work/Arrowwhite.png'

const First = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <>
      <div className="gradient relative w-full z-10 mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          controls={false} 
          onLoadedData={() => {
            setVideoLoaded(true)
            console.log('Video loaded')
          }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/bosma-adu.mp4?alt=media&token=0c906c3e-ed25-4082-8230-f5941f54e9ce"
            type="video/mp4"
          />
        </video>
        {videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.5)] pagination-gradient z-10 pointer-events-none"></div>
        )}

        <div className="w-full relative z-10 min-h-[350px] flex items-center justify-center">
          {/* {videoLoaded && ( */}
            <div className="text-center">
              <Text
                as="h1"
                className="text-[74px] font-semibold text-[#FFFFFF] mob:text-[29.29px]"
              >
                Wedgewood ADU
              </Text>
              <Text className="text-[28px] font-normal  text-[#FFFFFF] mb-3 flex items-center gap-1 text-center justify-center mob:text-[11.84px]">
                North Seattle, Washington
              </Text>
              <Link
                href="/project"
                className="mt-10 mob:mt-6 font-normal max-w-[200px] h-[62.69px] mx-auto flex items-center justify-center text-center gap-1 text-[18px] mob:text-[12px] text-white border border-[#FFFFFF] px-[3px] py-[17.34px] mob:max-w-[140px] mob:px-[7px] mob:py-[7.33px] mob:h-[40px] z-20 relative"
              >
                LEARN MORE
                <Image src={arrowwhite} alt="" width={18} height={18} />
              </Link>
            </div>
          {/* )} */}
        </div>
      </div>
    </>
  )
}

export default First
