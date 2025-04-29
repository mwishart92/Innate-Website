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
import matrialbg from "@/public/images/services/matrial.png";
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
      <Slide image="/images/services/Decks/Hero/cover.webp" video={null} />
    ),
    delay: 36000,
    projectName: "decks",
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "We evaluate your yard and discuss how best to complement your home’s architecture and landscape.",
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
      "We create a deck design tailored to your needs, and secure any necessary local permits for safety and compliance.",
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
      "Choose from hardwoods, pressure-treated lumber, or low-maintenance composites—whatever fits your vision and budget.",
    image: {
      src: matrialbg,
      alt: "Materials Consultation",
      className: "w-[340.46px]  mob:w-[260.71px]  rounded-[18px] bg-[#b6b6b6]",
      // additionalImages: [
      //   {
      //     src: stresstop,
      //     alt: "Materials Consultation Top",
      //     className:
      //       "absolute top-[-86px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]",
      //   },
      // ],
    },
    layout: "right" as const,
  },
  {
    title: "Construction",
    description:
      "Our skilled craftsmen build each deck with long-term structural integrity, visual appeal, and comfort in mind.",
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
      "We complete the finishing touches, clean the site, and ensure your new outdoor space is ready for relaxing, entertaining, or anything in between.",
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

const faqTitle = "Decks – FAQs";
const faqItems = [
  {
    question: "What materials do you use for deck construction?",
    answer:
      "We work with wood, composite, and PVC materials, helping you choose what fits your aesthetic and maintenance goals.",
  },
  {
    question: "Do you design custom decks?",
    answer:
      "Yes, every deck is custom-designed to complement your home and outdoor lifestyle.",
  },
  {
    question: "Do I need a permit to build a deck in Seattle?",
    answer:
      "Permits are usually required for decks over 18 inches off the ground — we handle all permitting.",
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/Decks/Projects/p1.webp" },
      { image: "/images/services/Decks/Projects/p2.webp" },
    ],
    []
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Transform your outdoor space with a custom-built deck designed for relaxation and connection. From classic wood to modern composites, Innate designs and constructs decks that expand your living space and elevate your lifestyle."
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
  title: "Custom Deck Building Services in Seattle | Innate NW",
  description:
    "Expand your outdoor living space with a custom-built deck by Innate NW. Premium materials and expert design tailored to your lifestyle in Seattle.",
};
