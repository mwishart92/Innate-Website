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
      <div className="flex justify-center items-center pt-24 pb-24 mob:pb-10 mob:mt-0 mob:pt-10 mob:pb-14 mob:bg-black">
        <div className="w-[80%] mob:w-full flex flex-wrap mob:flex-col items-center justify-around">
          <div className="flex flex-row mob:flex-col mob:px-0 w-full ipad-service pl-24 mob:pl-0 gap-8 mob:gap-0">
            <div className="flex-1 mob:w-full">
              <Text className="text-[36px] font-light leading-[31.2px] mb-4">
                We’re a team of designers, engineers, and craftsmen who take on complex residential projects from start to finish — design, permitting, and construction all under one roof.
              </Text>
            </div>
            <div className="flex-1 mob:w-full flex flex-col">
              <Text className="mob:text-[14px] font-light">
                Innate is a design, engineering and construction firm capable of handling the entire project from permit to build. We handpick consultants, craftsman and subcontractors who share our values. Detailed, beautiful and durable work is often expensive, but the cost guarantees the lasting satisfaction of a quality build.
              </Text>
              <Button
                className="max-w-[137px] h-[50px] text-[16px] px-[24px] py-[14px] font-normal mt-7 mob:max-w-[126px] mob:h-[48px] mob:text-[14px] mob:mt-10"
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
