import Text from '@/components/ui/Text'
import Image from 'next/image'
import React from 'react'
import Button from '@/components/ui/Button'
import stressbg from '@/public/images/home/dsignbuild/avoidbg.png'
import stresstop from '@/public/images/home/dsignbuild/avoidtop.png'
import avoidleft from '@/public/images/home/dsignbuild/avoidleft.png'
import avoidright from '@/public/images/home/dsignbuild/avoidright.png'
import avoidcenter from '@/public/images/home/dsignbuild/avoidcenter.png'
import savetime from '@/public/images/home/savetimee.png'
import track from '@/public/images/home/cabinetry.png'
import rightarrow from '@/public/images/press/RightArrowblue.png'
import { useRouter } from 'next/navigation'

const DesignAndBuild = () => {
  const router = useRouter()
  return (
    <div className="w-full h-full gradient py-16 px-5 mob:pt-5">
      <Text
        as="h1"
        className="text-center font-normal mob:text-[30px] mb-16  mob:mb-4 mob:leading-[33px] mob:px-5"
      >
        Design and build the <span className="italic">Innate </span> way
      </Text>
      {/* avoid surprise */}
      <div className="flex lg:flex-wrap gap-[47px] items-center px-[43px] pt-[43px] pb-[43px] mob:px-[16px] w-[80%] mob:w-full min-h-[500px] mt-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center mob:gap-[40px] mob:pt-[12px] mob:pb-[28px]">
        <div className="w-full max-w-[437.84px] relative flex justify-center items-center mob:order-2">
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
            className="relative z-20 w-[251.2px] h-[279.13px] sm:w-[340.31px] sm:h-[360.99px]"
            src={avoidcenter}
            alt=""
          />
          <Image
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="absolute left-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px]"
            src={avoidleft}
            alt=""
          />
          <Image
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="absolute right-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px]"
            src={avoidright}
            alt=""
          />
        </div>
        <div className="mob:order-1">
          <Text as="h2" className="">
            Avoid Surprises
          </Text>
          <Text className="mt-3 mb-12 text-[22px] mob:text-[15px] text-[#FFFFFF66] leading-[30.14px] mob:leading-[20.55px] mob:mt-0">
            After doing an in-person site visit, we will provide an accurate,
            comprehensive and transparent bid, broken down by trade.
          </Text>
          <Button
            className="max-w-[202px] mob:max-w-[116.38px] mob:h-[35.61px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md mob:text-[11.21px]"
            onClick={() => router.push('/onboarding')}
          >
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
      </div>

      {/* Save Time */}
      <div className="flex lg:flex-wrap gap-[47px] items-center px-[43px] pt-[43px] pb-[43px] mob:px-[16px] w-[80%] mob:w-full min-h-[500px] mt-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center mob:gap-[40px] mob:pt-[12px] mob:pb-[28px]">
        <div className="mob:order-1">
          <Text as="h2" className="">
            Save Time
          </Text>
          <Text className="mt-3 mb-12 text-[22px] mob:text-[15px] text-[#FFFFFF66] leading-[30.14px] mob:leading-[20.55px] mob:mt-0">
            Our network of vetted architects, engineers and craftsmen save you
            the time and hassle of putting together your own team.
          </Text>
          <Button
            className="max-w-[202px] mob:max-w-[116.38px] mob:h-[35.61px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md mob:text-[11.21px]"
            onClick={() => router.push('/onboarding')}
          >
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
        <div className="w-full max-w-[431.81px] flex justify-center items-center mob:order-2">
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
            src={savetime}
            className="w-[431.81px] h-[369px] mob:w-[324px] mob:h-[276.87px]"
            alt=""
          />
        </div>
      </div>

      {/* Avoid Stress */}
      <div className="flex lg:flex-wrap gap-[47px] items-center px-[43px] pt-[43px] pb-[43px] mob:px-[16px] w-[80%] mob:w-full min-h-[500px] mt-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center mob:gap-[40px] mob:pt-[12px] mob:pb-[28px]">
        <div className="w-full max-w-[430px] flex justify-end items-end relative mob:mt-12 mob:order-2">
          <Image
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-[340.46px] h-[288.42px] mob:w-[260.71px] mob:h-[220.77px]"
            src={stressbg}
            alt=""
          />
          <Image
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            className="absolute top-[-70px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]"
            src={stresstop}
            alt=""
          />
        </div>
        <div className="mob:order-1">
          <Text as="h2" className="">
            Avoid Stress
          </Text>
          <Text className="mt-3 mb-12 text-[22px] mob:text-[15px] text-[#FFFFFF66] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 mob:mb-6">
            Our dedicated project managers attend to every detail of your
            project to make sure it gets done right, on time, and on budget. Our
            subcontractors are vetted, experienced, and highly skilled.
          </Text>
          <Button
            className="max-w-[202px] mob:max-w-[116.38px] mob:h-[35.61px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md mob:text-[11.21px] mob:mt-2"
            onClick={() => router.push('/onboarding')}
          >
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
      </div>

      {/* Track Progress */}
      <div className="flex lg:flex-wrap gap-[47px] items-center px-[43px] pt-[43px] pb-[43px] mob:px-[16px] w-[80%] mob:w-full min-h-[500px] mt-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center mob:gap-[40px] mob:pt-[16px] mob:pb-[34px]">
        <div className="mob:order-1">
          <Text as="h2" className="">
            Track Progress
          </Text>
          <Text className="mt-3 mb-12 text-[22px] mob:text-[15px] text-[#FFFFFF66] leading-[30.14px] mob:leading-[20.55px] mob:mt-0">
            Our proprietary software, JobSync, centralizes timeline progress,
            payments, budget, and material selections.
          </Text>
          <Button
            className="max-w-[202px] mob:max-w-[116.38px] mob:h-[35.61px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md mob:text-[11.21px]"
            onClick={() => router.push('/onboarding')}
          >
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
        <div className="w-full max-w-[448px] flex justify-center items-center mob:order-2">
          <Image
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            src={track}
            alt=""
            className="w-[448px] h-[364.8px] mob:w-[324px] mob:h-[263.83px]"
          />
        </div>
      </div>
    </div>
  )
}

export default DesignAndBuild
