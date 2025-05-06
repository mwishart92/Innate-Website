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
        image="/images/services/whole-home-remodels/Hero/cover.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "whole home remodeling",
  },
  {
    component: (
      <Slide
        image="/images/services/whole-home-remodels/Hero/h1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "whole home remodeling",
  },
  {
    component: (
      <Slide
        image="/images/services/whole-home-remodels/Hero/h2.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "whole home remodeling",
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "We conduct an in-depth walkthrough to understand your entire home's layout, identify structural opportunities, and provide a detailed bid broken down by scope and trade.",
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
      "From layout reconfiguration to full structural overhauls, our architectural team crafts plans that reflect your goals—while we manage all city and zoning approvals.",
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
      "From foundation to finish work, our experienced tradespeople and project managers ensure every room is brought to life with quality and precision.",
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
      "Once the project is complete, we address all punch-list items, conduct a detailed walk-through, and leave your home clean, polished, and ready to enjoy.",
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

const faqItems = [
  {
    question: "How long does a whole home remodel take in Seattle?",
    answer:
      "Most whole home remodels in Seattle take between 4 to 8 months, depending on the scope, permitting, and customizations involved.",
  },
  {
    question: "Do I need to move out during my home remodel?",
    answer:
      "It depends on the extent of the work. For full gut renovations or major structural changes, we often recommend temporarily relocating.",
  },
  {
    question: "What's included in a whole home remodel?",
    answer:
      "Our whole home remodeling service covers everything from design and planning to kitchens, bathrooms, flooring, lighting, and structural upgrades.",
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/whole-home-remodels/Projects/p1.webp" },
      { image: "/images/services/whole-home-remodels/Projects/p2.webp" },
    ],
    []
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Innate offers comprehensive whole home remodeling services that turn your current space into the home of your dreams. From floorplan redesigns to full-scale structural upgrades, our team is committed to blending aesthetics with functionality to create spaces that are cohesive, practical, and distinctly yours."
      />
      <LatestProjects
        title="See Our Full Home Renovation Projects in Seattle"
        content="This gallery features before-and-after transformations of entire homes across the Greater Seattle area."
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
        title="Whole Home Remodels – FAQs"
        description="We've answered some of the most common questions homeowners in the Seattle area ask before starting a project. From timelines and costs to permits and materials, our goal is to make your renovation as smooth and transparent as possible."
        faqItems={faqItems}
      />

      {/* <OurPartners /> */}
    </div>
  );
};

export default ServicesPage;

export const metadata: Metadata = {
  title: "Whole Home Remodeling Services in Seattle | Innate NW",
  description:
    "Transform your entire home with Innate NW's expert whole home remodeling services in Seattle. Personalized design, dedicated project management, and flawless execution.",
};
