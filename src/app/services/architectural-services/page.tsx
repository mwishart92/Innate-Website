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
    isH1: true,
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
];

const sections = [
  {
    title: "Free Estimate / Site Visit",
    description:
      "After doing an in-person site visit, we will provide an accurate, comprehensive and transparent bid, broken down by trade.",
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
    title: "Feasibility Study",
    description:
      "We will perform a feasibility study to assess zoning, setbacks, FAR, and site conditions to determine if your proposed project is viable and cost-effective.",
    image: {
      src: savetime,
      alt: "Feasibility Study",
      className: "w-[431.81px] mob:w-[324px] ",
    },
    layout: "left" as const,
  },
  {
    title: "Schematic Design",
    description:
      "We will develop initial design drawings that explore layout, size, and appearance of the project, helping you visualize the concept and ensure it fits your goals and site.",
    image: {
      src: matrialbg,
      alt: "Schematic Design",
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
    title: "Design Development",
    description:
      "We will refine the approved schematic design by adding detail to the layout, materials, and systems, and coordinate with consultants like the structural engineer to ensure the project is functional, buildable, and ready for permitting.",
    image: {
      src: track,
      alt: "Design Development",
      className: "w-[448px] mob:w-[324px] rounded-[18px] bg-[#b6b6b6]",
    },
    layout: "left" as const,
  },
  {
    title: "Construction Documentation",
    description:
      "We will create detailed construction documents—including drawings and specifications—that clearly communicate the design to contractors, while coordinating with consultants to meet all code and permitting requirements.",
    image: {
      src: stressbg,
      alt: "Post Construction",
      className:
        "w-[340.46px] h-[288.42px] mob:w-[260.71px] mob:h-[220.77px] rounded-[18px] bg-[#b6b6b6]",
      additionalImages: [
        {
          src: stresstop,
          alt: "Consturction Documentation",
          className:
            "absolute top-[-70px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]",
        },
      ],
    },
    layout: "right" as const,
  },
  {
    title: "Permit Management",
    description:
      "We will prepare and submit the necessary documents for permit review, respond to city comments, and coordinate with consultants to ensure timely approval and code compliance.",
    image: {
      src: stressbg,
      alt: "Post Construction",
      className:
        "w-[340.46px] h-[288.42px] mob:w-[260.71px] mob:h-[220.77px] rounded-[18px] bg-[#b6b6b6]",
      additionalImages: [
        {
          src: stresstop,
          alt: "Permit Management",
          className:
            "absolute top-[-70px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]",
        },
      ],
    },
    layout: "left" as const,
  },
  {
    title: "Bidding",
    description:
      "As a design-build firm, we will manage the entire bidding process, providing detailed pricing based on the design and ensuring the project stays within <a href='https://www.innate-nw.com/blogs/2' style='text-decoration: underline;'>budget</a> while meeting all specifications.",
    image: {
      src: stressbg,
      alt: "Bidding",
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
      "An architect focuses on structural integrity and code compliance; a designer typically focuses on layout and aesthetics. <a href='https://www.innate-nw.com/about' style='text-decoration: underline;'>Our team</a> does both.",
  },
  {
    question: "How long does the design phase take?",
    answer:
      "Design timelines range from 4 to 12 weeks depending on complexity, revisions, and city approvals.",
  },
  {
    question: "What is included in your architectural services?",
    answer:
      "Our architectural services cover every stage of the design and building process. This includes initial consultations, site analysis, concept design, planning applications, detailed drawings, and coordination with engineers and consultants. We also provide full guidance on materials, sustainability, and functionality to ensure your project meets both your vision and practical requirements. At Innate NW, with extensive building design services, we guarantee architecture that is not only beautiful but also functional and enduring.",
  },
  {
    question:
      "How do you handle changes to the project scope and potential additional fees?",
    answer:
      "Each project may evolve as ideas develop differently, and Innate NW is here to handle all the potential issues for you. If changes to the project scope occur, we discuss these with you upfront, outlining any adjustments to the timeline or budget. Transparency is a key part of our architectural project management services, so you will always know about any additional fees before decisions are made. Aiming for exceptional outcomes and customer satisfaction, our experts ensure that your project remains on track while still allowing flexibility for design refinements.",
  },
  {
    question: "Will you stay involved during the construction phase?",
    answer:
      "Yes. Our custom architectural solutions extend beyond drawings and approvals, as we remain actively involved during construction at every phase for close and immediate support when needed. This includes site visits, liaising with contractors, responding to inquiries, and ensuring that the promised modern architectural design is executed to a high standard. By staying involved throughout the construction phase, Innate NW helps safeguard the quality of your project and provides peace of mind that the finished result aligns with the agreed vision.",
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
        contentText="<a href='https://www.innate-nw.com/' style='text-decoration: underline;'>Innate</a> partners with skilled architects and structural engineers to deliver custom designs that work in harmony with your lifestyle and the unique constraints of your home. Whether you're opening up a floorplan, adding a second story, or <a href='https://www.innate-nw.com/services/adus' style='text-decoration: underline;'>building from scratch</a>—we make the design process easy."
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
  alternates: {
    canonical: 'https://innate-nw.com/services/architectural-services',
  },
  openGraph: {
    title: "Architectural Design Services in Seattle | Innate NW",
    description: "Innate NW offers architectural design services in Seattle. Work with expert architects to create a space tailored to your lifestyle and future vision.",
    url: 'https://innate-nw.com/services/architectural-services',
    siteName: 'Innate NW',
    images: [
      {
        url: '/images/innate-nw.jpg',
        width: 1200,
        height: 630,
        alt: 'Innate NW - Architectural Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Architectural Design Services in Seattle | Innate NW",
    description: "Innate NW offers architectural design services in Seattle. Work with expert architects to create a space tailored to your lifestyle and future vision.",
  },
};
