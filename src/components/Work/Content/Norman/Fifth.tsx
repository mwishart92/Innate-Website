import React from 'react'
const Fifth = () => {
  return (
    <div className="relative w-full z-10  mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Norman-bath.mp4?alt=media&token=963a355e-149c-4735-87f2-911ad70f6445"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Fifth
