import React from 'react'
// import Text from "@/components/ui/Text";
const Slide4 = () => {
  // const scrollToSection = (id: string) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //     }
  // };
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
          src="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/website-homepage.mp4?alt=media&token=3a0019cb-9ce1-4740-abe6-41c3f53bbe3e"
          type="video/mp4"
        />
      </video>

      {/* <div className="w-full px-20 mob:px-5 relative z-10  mt-[140px]">
                <Text as="h2" className="my-3 ">
                    Design+ Build <br />
                    It’s Innate
                </Text>
                <button
                    className="mt-[20px] border border-[#FFFFFF] font-medium font-inter backdrop-blur-[15px] bg-opacity-5 w-full max-w-[208px] h-[50px] text-[16px] leading-[22.4px] hover:bg-white hover:text-black hover:border-black transition duration-300"
                    onClick={() => scrollToSection('contactHome')}
                >
                    Book Consultation
                </button>

                <Text className="text-[20px] leading-[28px] text-[#FFFFFF] mt-20">Project</Text>
                <Text className="text-[28px] leading-[36.4px] text-[#FFFFFF]">Palm Springs ADU</Text>
            </div> */}
    </div>
  )
}

export default Slide4
