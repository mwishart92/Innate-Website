import React from 'react'
import Image from 'next/image'
import slide from '@/public/images/work/WSD2.jpg'
interface FirstProps {
  setImageLoaded: (loaded: boolean) => void // Function that takes a boolean and returns void
}
const First: React.FC<FirstProps> = ({ setImageLoaded }) => {
  return (
    <>
      <div className="relative w-full z-10  mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
    
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={slide}
          alt=""
          width={1440}
          height={757}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-black"></div> */}
      </div>

      {/* <div className="lowergradient h-10 border-none"></div> */}
    </>
  )
}

export default First
