import React from 'react'
import Image from 'next/image'
import Text from '@/components/ui/Text'
import firm from '@/public/images/about/firm.png'
import innate from '@/public/images/project/innate.jpg'
import USCDL from '@/public/images/project/UCSDL.svg'
import USCDM from '@/public/images/project/UCSDM.svg'
import HACM from '@/public/images/project/HACM.svg'
import HACL from '@/public/images/project/HACML.svg'
import GeiselL from '@/public/images/project/GeiselL.svg'
import GeiselM from '@/public/images/project/GeiselM.svg'
import Michel from '@/public/images/about/michael.png'
import MichaelM from '@/public/images/project/MichealM.svg'
import Link from 'next/link'
import Form from '@/components/Contact/Form'
import rightarrow from '@/public/images/press/RightArrowblue.png'

const ProjectDescription = () => {
  const projectDetails = [
    { key: 'Scope', value: 'Architecture' },
    { key: 'Type', value: 'New Construction' },
    { key: 'Location', value: 'Shoreline, Washington' },
    { key: 'Design Principle', value: 'Jane Smith' },
    { key: 'Photographer', value: 'Marcus Davies' },
    { key: 'General Contractor', value: 'Builders Inc' },
  ]

  return (
    <div className="w-full px-10 md:px-48 flex flex-col gap-20 mb-28">
      <div
        className="w-full flex justify-between mob:justify-center mob:gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Image
          src={firm}
          alt=""
          className="w-[639px] h-[457px] mob:w-[400px] mob:h-[205px] rounded-[10px] mt-[76px] mob:mt-[100px] mob:hidden"
        />
        <Image
          src={innate}
          alt=""
          className="w-[180px] h-[440px] rounded-[10px] mt-[28px] md:hidden"
        />
        <div className="text-end">
          <div className="mt-16 mob:mt-8">
            {projectDetails.map((detail, index) => (
              <div key={index} className="flex flex-col mb-4">
                <Text className="font-normal text-[24px] mob:text-[16px]">
                  {detail.key}
                </Text>
                <Text className="text-[20px] font-extralight mob:text-[14px]">
                  {detail.value}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex">
        <Image src={USCDL} alt="" className="w-full object-cover mob:hidden" />
        <Image src={USCDM} alt="" className="w-full object-cover md:hidden" />
      </div>
      <div className="flex lg:flex-wrap gap-10">
        <Image src={HACM} alt="" className="w-full object-cover md:hidden" />
        <Text className="self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Image src={HACL} alt="" className="w-full object-cover mob:hidden" />
      </div>
      <div className="flex">
        <Image
          src={GeiselL}
          alt=""
          className="w-full object-cover mob:hidden"
        />
        <Image
          src={GeiselM}
          alt=""
          className="w-full object-cover md:hidden "
        />
      </div>
      <div className="flex lg:flex-wrap gap-10">
        {/* <Image src={HACM} alt="" className="w-full object-cover md:hidden" /> */}
        <Image
          src={MichaelM}
          alt=""
          className="w-full object-cover rounded-[10px] md:hidden"
        />

        <Image
          src={Michel}
          alt=""
          className="h-[598px] w-[558px] object-cover rounded-[10px] mob:hidden"
        />
        <Text className="self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </div>
      <div className="py-5 flex flex-col justify-center">
        <div className="mx-auto w-full max-w-full flex justify-bewteen lg:flex-wrap gap-[200px] lg:gap-[50px]">
          <div className="fmax-w-[40%] mob:max-w-[100%] ">
            <Text
              as="h1"
              className="text-[34px] mob:text-[30px] text-white font-semibold"
            >
              Contact Us
            </Text>
            <Text className="mt-4 text-[#D9D9D9] font-normal mob:text-[14px]">
              If you’re looking for an architect, engineer, or builder to help
              with your project, this form is the best way to reach us. We are
              based in Bellevue, Washington, but are open to working with
              clients both near and far.
            </Text>
            <Text className="mt-4 text-[#D9D9D9] font-normal mob:text-[14px]">
              To determine whether your project might be a good fit for us,
              please briefly describe the scope, timing, location, and other
              relevant details in the form, and we’ll be in touch shortly to
              review your project in detail.
            </Text>
            <Text className="mt-4 text-[#D9D9D9] font-normal mob:text-[14px]">
              Alternatively, if you are only interested in getting a rough
              estimate, follow the link below and fill in your project details
              to receive a rough AI-generated estimate.
            </Text>
            <Link href="/onboarding">
              <button
                type="submit"
                className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
              >
                Start project
                <Image src={rightarrow} alt="" width={18} height={18} />
              </button>
            </Link>
          </div>
          {/* right form */}
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ProjectDescription
