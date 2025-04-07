import React from 'react'
interface FirstProps {
  setVideoLoaded: (loaded: boolean) => void // Function that takes a boolean and returns void
}
const Second: React.FC<FirstProps> = ({ setVideoLoaded }) => {
  return (
    <div className="relative w-full z-10  mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        webkit-playsinline="true" // ✅ Fix warning
        onLoadedData={() => {
          setVideoLoaded(true)
        }}
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/pellegrino-remodel.mp4?alt=media&token=d42fe844-9e50-4b63-8e43-3fcf398e1240"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Second
