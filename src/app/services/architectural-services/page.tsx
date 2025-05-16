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
        image="/images/services/architectural-services/Hero/cover.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "architectural services",
  },
  {
    component: (
      <Slide
        image="/images/services/architectural-services/Hero/h1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "architectural services",
  },
  {
    component: (
      <Slide
        image="/images/services/architectural-services/Hero/h2.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "architectural services",
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "We begin with a thorough site visit and consultation to understand your project vision and outline a clear scope and budget.",
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
      "Our architectural partners create drawings and structural plans, while we handle the permit application process and code compliance.",
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
      "Our construction team works from the approved plans to deliver your design exactly as envisioned—no compromises, no surprises.",
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
      "We ensure your completed project aligns with your vision, final inspections are passed, and the space is fully ready for use.",
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
    question: "Do you offer architectural plans for permits?",
    answer:
      "Yes, our architectural team prepares plans suitable for Seattle permitting and construction.",
  },
  {
    question:
      "Can I work with your architect even if I already have a builder?",
    answer:
      "Absolutely. Our architectural services can be provided independently or alongside your preferred contractor.",
  },
  {
    question: "What's the difference between an architect and a designer?",
    answer:
      "An architect focuses on structural integrity and code compliance; a designer typically focuses on layout and aesthetics. Our team does both.",
  },
  {
    question: "How long does the design phase take?",
    answer:
      "Design timelines range from 4 to 12 weeks depending on complexity, revisions, and city approvals.",
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/architectural-services/Projects/p1.webp" },
      { image: "/images/services/architectural-services/Projects/p2.webp" },
      { image: "/images/services/architectural-services/Projects/p3.webp" },
      { image: "/images/services/architectural-services/Projects/p4.webp" },
      { image: "/images/services/architectural-services/Projects/p5.webp" },
    ],
    []
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Innate partners with skilled architects and structural engineers to deliver custom designs that work in harmony with your lifestyle and the unique constraints of your home. Whether you're opening up a floorplan, adding a second story, or building from scratch—we make the design process easy."
      />
      <LatestProjects
        title="See Our Architectural Design Projects"
        content="Explore examples of architectural design work completed for homeowners in Seattle, Washington. Our architectural services help bring your vision to life with innovative, functional, and beautiful design solutions."
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
        title="Architectural Services – FAQs"
        description="We've answered some of the most common questions homeowners in the Seattle area ask before starting a project. From timelines and costs to permits and materials, our goal is to make your renovation as smooth and transparent as possible."
        faqItems={faqItems}
      />

      {/* <OurPartners /> */}
    </div>
  );
};

export default ServicesPage;

export const metadata: Metadata = {
  title: "Architectural Design Services in Seattle | Innate NW",
  description:
    "Innate NW offers architectural design services in Seattle. Work with expert architects to create a space tailored to your lifestyle and future vision.",
};
