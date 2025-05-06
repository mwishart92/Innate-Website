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
      <Slide
        image="/images/services/bathroom-remodeling/Hero/cover.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "bathroom remodeling",
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "We assess your current bathroom and provide a full-scope bid that reflects the specific layout, plumbing, and finish choices.",
    image: {
      src: avoidcenter,
      alt: "Free Estimate",
      className: "w-[251.2px]  sm:w-[340.31px] z-20",
      additionalImages: [
        {
          type: "image" as const,
          src: avoidleft,
          alt: "Free Estimate Left",
          className:
            "absolute left-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px] bg-[#b8b8b8] rounded-[18px]",
        },
        {
          type: "image" as const,
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
      "Whether it's adding a walk-in shower or reworking plumbing for dual sinks, we design functional, stylish solutions and take care of permit applications.",
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
      "Our experienced crews work swiftly to transform your bathroom while ensuring meticulous waterproofing, tile work, and fixture installation.",
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
      "After final inspections and touch-ups, your bathroom will be sparkling clean and ready to use immediately.",
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

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/bathroom-remodeling/Projects/p1.webp" },
      { image: "/images/services/bathroom-remodeling/Projects/p2.webp" },
    ],
    []
  );

  const faqItems = [
    {
      question: "What's the timeline for remodeling a bathroom?",
      answer:
        "Most bathroom remodels take 3–8 weeks, depending on the size and scope.",
    },
    {
      question: "Do you handle permits for bathroom remodels in Seattle?",
      answer:
        "Yes, we handle all necessary permitting and code compliance as part of your project.",
    },
    {
      question: "Can you remodel small or oddly shaped bathrooms?",
      answer:
        "Absolutely. We specialize in transforming tight spaces into stylish, functional bathrooms.",
    },
  ];

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="From compact powder rooms to luxurious spa-like retreats, Innate's bathroom remodel services combine elegant design with functional upgrades. We help you reimagine your bathroom into a space that brings peace, value, and utility to your daily life."
      />
      <LatestProjects
        title="Explore Our Bathroom Remodel Work Across Seattle"
        content="See how we've transformed outdated bathrooms into high-style sanctuaries of comfort and efficiency."
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
        title="Bathroom Remodels – FAQs"
        description="We've answered some of the most common questions homeowners in the Seattle area ask before starting a project. From timelines and costs to permits and materials, our goal is to make your renovation as smooth and transparent as possible."
        faqItems={faqItems}
      />

      {/* <OurPartners /> */}
    </div>
  );
};

export default ServicesPage;

export const metadata: Metadata = {
  title: "Bathroom Remodeling Experts in Seattle | Innate NW",
  description:
    "Create a spa-like bathroom retreat with Innate NW's remodeling services in Seattle. Tailored design, moisture-resistant materials, and expert construction.",
};
