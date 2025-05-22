import ReviewsSlider from "@/components/Services/Reviews/Slider";
// import Services from "@/components/Home/Services";
import Testimonials from "@/components/Services/Testimonials";
import Navbar from "@/components/Navbar";
import Collective from "@/components/Services/CollectiveVideo";
import Consultation from "@/components/Services/Consultation";
import HeroService from "@/components/Services/HeroService";
import LatestProjects from "@/components/Services/LatestProjects";
// import Marquee from "@/components/Services/Marquee";
// import OurProcess from "@/components/Services/OurProcess";
// import OurPartners from "@/components/Home/OurPartners";
import React, { useMemo } from "react";
import HomeSlider from "@/components/Services/Hero/Slider";
import DesignAndBuild from "@/components/Services/DesignAndBuild";
import Faq from "@/components/Services/Faq";
import avoidcenter from "@/public/images/home/dsignbuild/avoidcenter.png";
import avoidleft from "@/public/images/home/dsignbuild/avoidleft.png";
import avoidright from "@/public/images/home/dsignbuild/avoidright.png";
import savetime from "@/public/images/home/savetimee.png";
import matrialbg from "@/public/images/services/matrial-info.png";
import matrialicon from "@/public/images/services/matrial-heading.png";
import stresstop from "@/public/images/home/dsignbuild/avoidtop.png";
import track from "@/public/images/home/cabinetry.png";
import stressbg from "@/public/images/home/dsignbuild/avoidbg.png";
import { StaticImageData } from "next/image";
import { Metadata } from "next";

import Slide from "@/components/Services/Hero/Content/slide";
interface MediaData {
  image: string | StaticImageData;
}

const slides = [
  {
    component: (
      <Slide image="/images/services/adus/Hero/cover.webp" video={null} />
    ),
    delay: 36000,
    projectName: "ADU",
  },
  {
    component: (
      <Slide image="/images/services/adus/Hero/h1.webp" video={null} />
    ),
    delay: 36000,
    projectName: "ADU",
  },
  {
    component: (
      <Slide image="/images/services/adus/Hero/h2.webp" video={null} />
    ),
    delay: 36000,
    projectName: "ADU",
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "We begin with a feasibility consultation and site assessment to understand your goals and local ADU regulations.",
    image: {
      src: avoidcenter,
      alt: "Free Estimate",
      className: "w-[251.2px]  sm:w-[340.31px] z-20",
      additionalImages: [
        {
          src: avoidleft,
          alt: "Free Estimate Left",
          className:
            "absolute left-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px] bg-[#b8b8b8] rounded-[18px]",
        },
        {
          src: avoidright,
          alt: "Free Estimate Right",
          className:
            "absolute right-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px] bg-[#b8b8b8] rounded-[18px]",
        },
      ],
    },
    layout: "right" as const,
  },
  {
    title: "Design & Permitting",
    description:
      "Our design team works closely with you to ensure the unit is functional, beautiful, and compliant with all city, zoning, and utility standards.",
    image: {
      src: savetime,
      alt: "Design & Permitting",
      className: "w-[431.81px] mob:w-[324px] ",
    },
    layout: "left" as const,
  },
  {
    title: "Materials Consultation",
    description:
      "We help you select durable, space-conscious materials suited for small-space living with maximum comfort and appeal.",
    image: {
      src: matrialbg,
      alt: "Materials Consultation",
      className: "w-[430.46px]  mob:w-[260.71px]  rounded-[18px] bg-[#b6b6b6]",
      additionalImages: [
        {
          type: "heading" as const,
          src: matrialicon,
          alt: "Innate's Material Hub",
          className:
            "flex items-center gap-2 text-white text-[24px] font-bold leading-[24px] font-inter absolute top-0 left-0 px-3 pt-4",
        },
      ],
    },
    layout: "right" as const,
  },
  {
    title: "Construction",
    description:
      "Our project managers oversee every detail, keeping your ADU on schedule and on budget while ensuring quality workmanship.",
    image: {
      src: track,
      alt: "Construction",
      className: "w-[448px] mob:w-[324px] rounded-[18px] bg-[#b6b6b6]",
    },
    layout: "left" as const,
  },
  {
    title: "Post Construction",
    description:
      "We walk through the completed ADU with you, complete final clean-up, and hand off a move-in-ready unit.",
    image: {
      src: stressbg,
      alt: "Post Construction",
      className:
        "w-[340.46px] h-[288.42px] mob:w-[260.71px] mob:h-[220.77px] rounded-[18px] bg-[#b6b6b6]",
      additionalImages: [
        {
          src: stresstop,
          alt: "Post Construction Top",
          className:
            "absolute top-[-70px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]",
        },
      ],
    },
    layout: "right" as const,
  },
];

const faqTitle = "Accessory Dwelling Units (ADUs) – FAQs";
const faqItems = [
  {
    question: "What types of ADUs do you build?",
    answer:
      "We design and build detached ADUs (DADUs), basement conversions, and garage apartments, depending on your property.",
  },
  {
    question: "Do I need permits for an ADU in Seattle?",
    answer:
      "Yes, and we manage the entire permitting process in compliance with Seattle's ADU regulations.",
  },
  {
    question: "How long does it take to build an ADU?",
    answer:
      "Most ADU projects take 6 to 12 months from design to completion, including permitting.",
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/adus/Projects/p1.webp" },
      { image: "/images/services/adus/Projects/p2.webp" },
      { image: "/images/services/adus/Projects/p3.webp" },
      { image: "/images/services/adus/Projects/p4.webp" },
    ],
    []
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Innate designs and builds custom ADUs that maximize your property's value, provide rental income, or support multigenerational living. We streamline the complex permitting process and provide complete build solutions for detached or attached ADUs."
      />
      <LatestProjects
        title="Discover Our ADU Design & Build Projects"
        content="Browse recent accessory dwelling unit (ADU) projects we’ve completed in Seattle, Washington. From backyard cottages to garage conversions, see how we create high-quality, efficient living spaces."
        sliderAlbum={sliderAlbum}
      />
      <DesignAndBuild
        title="Design and Build the Innate Way"
        sections={sections}
      />
      <ReviewsSlider />
      <Testimonials />
      <Consultation />
      <Faq
        title={faqTitle}
        description="We've answered some of the most common questions homeowners in the Seattle area ask before starting a project. From timelines and costs to permits and materials, our goal is to make your renovation as smooth and transparent as possible."
        faqItems={faqItems}
      />

      {/* <OurPartners /> */}
    </div>
  );
};

export default ServicesPage;

export const metadata: Metadata = {
  title: "Exterior Remodeling in Seattle | Siding, Windows & Doors | Innate NW",
  description:
    "Boost your home's curb appeal with exterior remodeling from Innate NW in Seattle. Expert siding, windows, and door upgrades with precision craftsmanship.",
};
