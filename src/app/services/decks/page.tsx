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
      <Slide image="/images/services/Decks/Hero/cover.webp" video={null} />
    ),
    delay: 36000,
    projectName: "decks",
    isH1: true,
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "We evaluate your yard and discuss how best to complement your <a href='https://www.innate-nw.com/services/architectural-services' style='text-decoration: underline;'>home's architecture</a> and landscape.",
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
      "Our <a href='https://www.innate-nw.com/about' style='text-decoration: underline;'>skilled craftsmen</a> build each deck with long-term structural integrity, visual appeal, and comfort in mind.",
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
  {
    question:
      "What kind of maintenance is required for different deck materials?",
    answer:
      "Deck maintenance needs greatly depend on the chosen materials. Wood decks, such as cedar or redwood, typically require regular cleaning, sealing, and occasional staining to protect against moisture and sun exposure. Composite decks, on the other hand, are low-maintenance and only need periodic washing to remove dirt and debris. PVC and other synthetic decking options offer even greater durability with minimal upkeep. At Innate NW, we help you choose the right materials for a deck that’s easy to maintain and suitable for your lifestyle.",
  },
  {
    question: "What is the typical cost of a custom deck design in Seattle?",
    answer:
      "The cost of a custom deck design in Seattle can vary depending on the size, materials, and design complexity. On average, homeowners can expect to prepare a budget anywhere from $15,000 to $40,000 for high-quality, custom-built services from a Seattle deck builder. Premium materials like hardwood or composite may increase the price, while additional features such as built-in seating, railings, or pergolas will also raise the budget. During consultation, Innate provides a detailed estimate so you have a clear understanding of your investment before construction begins.",
  },
  {
    question:
      "How will you ensure my property is protected during the deck construction?",
    answer:
      "Protecting your property is an essential part of our deck construction process. We take care to minimize disruption by using protective barriers, managing debris, and ensuring safe access around your home during the build. Our Seattle deck repair specialists work with precision to avoid damage to landscaping, existing structures, and outdoor spaces. At Innate NW, we’re proud to be the leading Seattle deck contractor. Count on us to treat every property with respect, ensuring your home and yard remain safe and clean throughout the build.",
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
        contentText="Transform your <a href='https://www.innate-nw.com/services/exterior-remodeling' style='text-decoration: underline;'>outdoor space</a> with a custom-built deck designed for relaxation and connection. From classic wood to modern composites, Innate designs and constructs decks that expand your living space and elevate your lifestyle."
      />
      <LatestProjects
        title="View Our Custom Deck Projects"
        content="This gallery features some of our custom deck builds for clients in Seattle and surrounding areas. Discover how we design and construct beautiful, durable outdoor spaces perfect for relaxing and entertaining."
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
  openGraph: {
    title: "Custom Deck Building Services in Seattle | Innate NW",
    description: "Expand your outdoor living space with a custom-built deck by Innate NW. Premium materials and expert design tailored to your lifestyle in Seattle.",
    url: 'https://innate-nw.com/services/decks',
    siteName: 'Innate NW',
    images: [
      {
        url: '/images/innate-nw.jpg',
        width: 1200,
        height: 630,
        alt: 'Innate NW - Deck Building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custom Deck Building Services in Seattle | Innate NW",
    description: "Expand your outdoor living space with a custom-built deck by Innate NW. Premium materials and expert design tailored to your lifestyle in Seattle.",
  },
};
