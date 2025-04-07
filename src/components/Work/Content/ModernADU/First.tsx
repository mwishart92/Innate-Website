import React from 'react'
import Image from 'next/image'
import slide from '@/public/images/work/MA1.jpg'
interface FirstProps {
  setImageLoaded: (loaded: boolean) => void // Function that takes a boolean and returns void
}
const First: React.FC<FirstProps> = ({ setImageLoaded }) => {
  return (
    <div className="relative w-full z-10  mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={slide}
        alt=""
        width={1440}
        height={757}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  )
}

export default First
