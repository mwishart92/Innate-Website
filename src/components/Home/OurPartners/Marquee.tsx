import React from 'react'
import ReactMarquee from 'react-fast-marquee'

import { cn } from '@/libs/utils/twMerge'
import Image from 'next/image'
import abc from '@/public/images/home/abc.png'
import ad from '@/public/images/home/ad.png'
import bt1 from '@/public/images/home/bt1.png'
import dt from '@/public/images/home/dt.png'
import and from '@/public/images/home/and.png'
import dunn from '@/public/images/home/dunn.png'
import gaf from '@/public/images/home/gaf.png'
import ch from '@/public/images/home/ch.png'
import JH from '@/public/images/home/JH.png'
import js from '@/public/images/home/js.png'
import lic from '@/public/images/home/lic.png'
import marvin from '@/public/images/home/marvin.png'
import mg from '@/public/images/home/mg.png'
import NU from '@/public/images/home/NU.png'
import tt from '@/public/images/home/tt.png'
import Xactimate from '@/public/images/home/Xactimate.png'

const Marquee = () => {
  // const { className, ...rest } = props

  // Define image URLs and their specific widths
  // const imageData = [
  //   { url: '/images/home/abc.png', width: 268, height: 120 },
  //   { url: '/images/home/ad.png', width: 268, height: 120 },
  //   { url: '/images/home/bt1.png', width: 95, height: 120 },
  //   { url: '/images/home/dt.png', width: 178, height: 120 },
  //   { url: '/images/home/and.png', width: 228, height: 120 },
  //   { url: '/images/home/dunn.png', width: 228, height: 120 },
  //   { url: '/images/home/gaf.png', width: 98, height: 120 },
  //   { url: '/images/home/ml.png', width: 228, height: 120 },
  //   { url: '/images/home/ch.png', width: 228, height: 120 },
  //   { url: '/images/home/JH.png', width: 238, height: 80 },
  //   { url: '/images/home/js.png', width: 228, height: 120 },
  //   { url: '/images/home/lic.png', width: 168, height: 120 },
  //   { url: '/images/home/marvin.png', width: 226, height: 120 },
  //   { url: '/images/home/mg.png', width: 188, height: 120 },
  //   { url: '/images/home/NU.png', width: 158, height: 120 },
  //   { url: '/images/home/tt.png', width: 366, height: 150 },
  //   { url: '/images/home/Xactimate.png', width: 98, height: 120 },
  // ]

  // Duplicate the images for seamless scrolling
  // const duplicatedImageData = [...imageData, ...imageData]

  return (
    <div className="pb-14 pt-0 overflow-hidden mob:pb-[0px] mob:pt-[60px]">
      <ReactMarquee className="flex items-center">
        <Image
          src={abc}
          alt="abc"
          className={cn('mx-10 mob:mx-4')}
          width={200}
          height={200} // You can modify height independently if needed
        />
        <Image
          src={ad}
          alt="abc"
          className={cn('mx-10 mob:mx-4')}
          width={220}
          height={220} // You can modify height independently if needed
        />

        <Image
          src={dt}
          alt="abc"
          className={cn('mx-10 mob:mx-4')}
          width={120}
          height={120} // You can modify height independently if needed
        />
        <Image
          src={and}
          alt="abc"
          className={cn('mx-10 mob:mx-4 mt-5')}
          width={220}
          height={220} // You can modify height independently if needed
        />
        <Image
          src={dunn}
          alt="abc"
          className={cn('mx-10 mob:mx-4')}
          width={220}
          height={220} // You can modify height independently if needed
        />
        <Image
          src={gaf}
          alt="abc"
          className={cn('mx-10 mob:mx-4 mt-3')}
          width={100}
          height={100} // You can modify height independently if needed
        />
        <Image
          src={ch}
          alt="abc"
          className={cn('mx-10 mob:mx-4')}
          width={200}
          height={200} // You can modify height independently if needed
        />
        <Image
          src={js}
          alt="abc"
          className={cn('mx-10 mob:mx-4 mb-4')}
          width={200}
          height={200} // You can modify height independently if needed
        />
        <Image
          src={JH}
          alt="abc"
          className={cn('mx-10 mob:mx-4 mb-8')}
          width={230}
          height={230} // You can modify height independently if needed
        />
        <Image
          src={lic}
          alt="abc"
          className={cn('mx-10 mob:mx-4 mb-2')}
          width={120}
          height={120} // You can modify height independently if needed
        />
        <Image
          src={marvin}
          alt="abc"
          className={cn('mx-10 mob:mx-4 mb-4')}
          width={200}
          height={200} // You can modify height independently if needed
        />
        <Image
          src={mg}
          alt="abc"
          className={cn('mx-10 mob:mx-4 mb-4')}
          width={200}
          height={120} // You can modify height independently if needed
        />
        <Image
          src={NU}
          alt="abc"
          className={cn('ml-10 mr-0 mob:mx-4 mb-2')}
          width={140}
          height={140} // You can modify height independently if needed
        />
        <Image
          src={tt}
          alt="abc"
          className={cn('ml-10 mr-10 mob:ml-2 mob:mr-2 mb-3 mb-8')}
          width={300}
          height={300} // You can modify height independently if needed
        />
        <Image
          src={Xactimate}
          alt="abc"
          className={cn('ml-10 mr-16 mob:ml-10 mob:mr-16')}
          width={90}
          height={90} // You can modify height independently if needed
        />
        <Image
          src={bt1}
          alt="abc"
          className={cn('mx-10 mob:mx-4')}
          width={100}
          height={100} // You can modify height independently if needed
        />
      </ReactMarquee>
    </div>
  )
}

export default Marquee
