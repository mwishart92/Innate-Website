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
      <div className="flex justify-center items-center pt-0 pb-24 mob:pb-10 mob:pt-0 mob:pb-14 mob:bg-black">
        <div className="w-[80%] mob:w-full flex flex-wrap mob:flex-col items-center justify-around bg-white text-[#000] rounded-[20px] p-8 pt-[100px] pb-[75px] mob:p-5 mob:pt-[100px] mob:pb-[75px]">
          <div className="flex flex-row mob:flex-col mob:px-0 w-full ipad-service pl-24 mob:pl-0 gap-8 mob:gap-0">
            <div className="flex-1 mob:w-full">
              <Text className="text-[36px] mob:text-[30px] font-light leading-[45px] mb-4 text-[#000]">
                We’re a team of designers, engineers, and craftsmen who take on complex residential projects from start to finish. Design, permitting, and construction all under one roof.
              </Text>
            </div>
            <div className="flex-1 mob:w-full flex flex-col">
              <Text className="mob:text-[14px] font-light text-[#000]">
                Innate is a design, engineering and construction firm capable of handling the entire project from permit to build. We handpick consultants, craftsman and subcontractors who share our values. Detailed, beautiful and durable work is often expensive, but the cost guarantees the lasting satisfaction of a quality build.
              </Text>
              <Button
                className="max-w-[137px] h-[50px] text-[16px] px-[24px] py-[14px] font-normal italic mt-7 mob:max-w-[126px] mob:h-[48px] mob:text-[14px] mob:mt-10 border-[#000] text-[#000] hover:bg-[#000] hover:text-white hover:border-[#000] bg-transparent"
                onClick={() => router.push('/about')}
              >
                Let's Chat!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collective
