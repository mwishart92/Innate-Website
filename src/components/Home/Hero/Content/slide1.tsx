import React from 'react'

// import Text from "@/components/ui/Text";
const Slide1 = () => {
  return (
    <div className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center">
      <video
        preload="none"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
       
        <source
          src="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/bosma-adu.webm?alt=media&token=b1ac720a-d1b2-4c3c-bf26-44930e7a890d"
          type="video/webm"
        />
      </video>
    </div>
  )
}

export default Slide1
