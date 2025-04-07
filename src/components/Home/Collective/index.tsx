import React from 'react'
import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import { useRouter } from 'next/navigation'
import './collective.css'

const Collective = () => {
  const router = useRouter()

  return (
    <>
      {/* <div className="lowergradient h-10 border-none"></div> */}
      <div className="flex justify-center items-center pt-20 pb-20 mob:pb-10 mob:mt-0 mob:pt-10 mob:pb-14 mob:bg-black">
        <div className="w-full flex flex-wrap mob:flex-col items-center justify-around">
          <div className="flex flex-col mob:px-0 w-2/5 mob:w-4/5 ipad-service pl-24 mob:pl-0">
            <Text className="text-[24px] font-medium leading-[31.2px] mb-4">
              We are a collective of architects, engineers and craftsmen
              collaborating to create beautiful spaces and structures that meet
              the unique needs of our clients.
            </Text>
            <Text className="mob:text-[14px] font-normal">
              Innate is an architecture, engineering and construction firm
              capable of handling the entire project from permit to build. Our
              approach focuses on quality design and construction that will
              stand the test of time. In order to do this, we handpick craftsman
              and subcontractors who share our values. Detailed, beautiful work
              is often expensive, and so we are typically not the cheapest bid.
            </Text>
            <Button
              className="max-w-[137px] h-[50px] text-[16px] px-[24px] py-[14px] font-normal mt-7 mob:max-w-[126px] mob:h-[48px] mob:text-[14px] mob:mt-10"
              onClick={() => router.push('/about')}
            >
              Learn More
            </Button>
          </div>
          <div className="flex justify-items-center mob:mt-8 mob:px-0">
            <iframe
              src="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
              frameBorder="0"
              allowFullScreen
              className="mob:mr-0 w-[631px] h-[360px] mob:w-[354px] mob:h-[204px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collective
