'use client'
import { useEffect } from 'react'
import Collective from '@/components/Home/Collective'
import Confidence from '@/components/Home/Confidence'
import ContactHome from '@/components/Home/ContactHome'
import DesignAndBuild from '@/components/Home/DesignAndBuild'
// import Hero from "@/components/Home/Hero";
import HomeSlider from '@/components/Home/Hero/Slider'
import OurPartners from '@/components/Home/OurPartners'
import Philosophy from '@/components/Home/Philosophy'
// import Reviews from "@/components/Home/Reviews/Index";
import ReviewsSlider from '@/components/Home/Reviews/Slider'
import Services from '@/components/Home/Services'
import Testimonials from '@/components/Home/Testimonials'
import Navbar from '@/components/Navbar'

export default function Home() {
  useEffect(() => {
    const s = localStorage.getItem('link')

    if (s === '#contactHome') {
      const element = document.getElementById('contactHome')
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      localStorage.removeItem('link')
    }
  }, [])
  return (
    <>
      <div className="gradient">
        <Navbar />
        <HomeSlider />
        <Collective />
        <Services />
        <DesignAndBuild />
        <Philosophy />
        <ReviewsSlider />
        <Testimonials />
        <Confidence />
        <ContactHome />
        <OurPartners />
      </div>
    </>
  )
}
