'use client'
import React from 'react'
import Image from 'next/image'

import Text from '../ui/Text'

import logo from '@/public/logo-innate.png'

import insta from '@/public/insta.svg'
import fb from '@/public/fb.svg'
import linkedin from '@/public/linkedin.svg'
import './Footer.css'

const Footer = () => {

  return (
    <div className=" pt-16 pb-6 mob:pt-12 px-5  relative gradient">
      <div className="mx-auto w-full max-w-[90%] sm:flex mob:flex-1 tab:flex-wrap tab:gap-[20px] mob:flew-row justify-between mob:justify-center ">
        <div className="mob:flex mob:justify-center">
          <Image src={logo} alt="" width={222.17} height={48} />
        </div>
        <div className="max-w-[20%] mob:max-w-full mob:text-center mob:mt-10">
          
          <Text className="text-[#D9D9D9] mt-3 font-light mob:text-[14px]">
            12819 SE 38th St #340 <br /> Bellevue, WA 98006 <br /> (425)
            866-5206
          </Text>
        </div>

        <div className="max-w-[20%] mob:max-w-full mob:text-center mob:mt-10">

        </div>
        <div className="mob:flex mob:flex-col mob:justify-center text-center mob:mt-10 mob:mx-auto">
          <div className="flex gap-4 ml-3 mob:justify-center">
            <a href="https://www.instagram.com/innate_nw/" target="_blank">
              <Image
                src={insta}
                alt="Instagram"
                width={32}
                height={32}
                className="transition-transform duration-300 hover:scale-[1.1] cursor-pointer opacity-60"
              />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61572482916976"
              target="_blank"
            >
              <Image
                src={fb}
                alt="Facebook"
                width={32}
                height={32}
                className="transition-transform duration-300  hover:scale-[1.1] cursor-pointer opacity-60"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/innate-nw/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="LinkedIn"
                width={32}
                height={32}
                className="transition-transform duration-300 hover:scale-[1.1] cursor-pointer  opacity-60"

              />
            </a>
          </div>
          <Text className="text-[#D9D9D9] mt-3 font-normal mob:text-[14px]">
            © Innate NW, LLC
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Footer
