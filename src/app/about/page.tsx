import Navbar from "@/components/Navbar";
import HeroAbout from "@/components/About/HeroAbout";
import AboutFaq from "@/components/About/AboutFaq";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Design & Construction in Seattle | Innate",
  description:
    "At Innate, we believe every client and project has unique needs—whether a small remodel or a large-scale commercial construction. Call us now (425) 866-5206.",
  alternates: {
    canonical: 'https://innate-aec.com/about',
  },
  openGraph: {
    title: "About Us | Design & Construction in Seattle | Innate",
    description: "At Innate, we believe every client and project has unique needs—whether a small remodel or a large-scale commercial construction. Call us now (425) 866-5206.",
    url: 'https://innate-aec.com/about',
    siteName: 'Innate',
    images: [
      {
        url: '/images/innate-nw.jpg',
        width: 1200,
        height: 630,
        alt: 'Innate - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us | Design & Construction in Seattle | Innate",
    description: "At Innate, we believe every client and project has unique needs—whether a small remodel or a large-scale commercial construction. Call us now (425) 866-5206.",
  },
};

const AboutPage = () => {
  return (
    <div className="w-full h-full gradient ">
      <Navbar />
      <HeroAbout />
      <div className="w-full max-w-[971px] mx-auto px-5 py-16 mob:py-10">
        <h2
          className="text-[32px] mob:text-[26px] font-semibold leading-[42px] mb-6 text-white font-inter"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Building the Future of Seattle: Our Integrated Approach
        </h2>
        <p
          className="text-[#D9D9D9] text-[16px] mob:text-[14px] font-light leading-[28px] mb-6 font-inter"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          As a top design &amp; build firm located in Seattle, our team at Innate combines creative ideas with practical execution. We believe that a space that is both attractive and durable stems from a perfect blend of aesthetics and structure. As we provide comprehensive design and building services, any friction between the architect and builder can be avoided in the construction process. Regardless of urban zoning or suitable materials for the area&apos;s weather conditions, we will work hard to create buildings with functionality and beauty.
        </p>
        <p
          className="text-[#D9D9D9] text-[16px] mob:text-[14px] font-light leading-[28px] font-inter"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          As professional custom builders, we recognize that there is always a story to tell about the property and each customer will have different objectives to achieve. We specialize in our superior craftsmanship and our expertise in designing solutions to spatial problems in an innovative way. With us, you can be assured that your project is handled by professionals whose enthusiasm reflects through their work. Let Innate show you the difference of working with builders who not only love what they do but also are technically proficient in Northwest architecture.
        </p>
      </div>
      <AboutFaq />
    </div>
  );
};

export default AboutPage;
