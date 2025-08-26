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
import type { Metadata } from "next";
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

import KB1 from "@/public/images/services/kitchen/KB1.png";
import KB2 from "@/public/images/services/kitchen/KB2.png";
import Slide from "@/components/Services/Hero/Content/slide";
interface MediaData {
  image: string | StaticImageData;
}

const slides = [];

const sections = [
  {
    title: "Free Estimate",
    description:
      "After doing an in-person site visit, we will provide an accurate, comprehensive and transparent bid, broken down by trade.",
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
      "If needed, our network of vetted architects, engineers and interior designers save you the time and hassle of putting together your own team.",
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
      "Our industry connections, exclusive suppliers and contractor discounts mean you have access to the best materials at the best price.",
    image: {
      src: matrialbg,
      alt: "Materials Consultation",
      className: "w-[340.46px]  mob:w-[260.71px]  rounded-[18px] bg-[#b6b6b6]",
      additionalImages: [
        {
          src: stresstop,
          alt: "Materials Consultation Top",
          className:
            "absolute top-[-86px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]",
        },
      ],
    },
    layout: "right" as const,
  },
  {
    title: "Construction",
    description:
      "Our dedicated project managers attend to every detail of your project to make sure it get done right, on time and on budget. Our subcontractors are vetted, experienced and highly skilled.",
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
      "Our job is not complete until all the details are double checked, punch-list items are addressed, and the job site has been cleaned of all mess and debris.",
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
    question: "How long does a kitchen remodel usually take?",
    answer:
      "A standard kitchen remodel in Seattle takes 6–12 weeks, depending on the size and materials selected.",
  },
  {
    question: "Can I use my kitchen during the remodel?",
    answer:
      "During a kitchen remodel, your kitchen will be largely unusable. We recommend setting up a temporary kitchen space and making arrangements for meals during the renovation period.",
  },
  {
    question: "How long does a kitchen remodel usually take?",
    answer:
      "A typical kitchen remodel takes between 6-12 weeks to complete. The exact timeline depends on factors like project scope, material availability, and any unforeseen issues.",
  },
  {
    question: "Do you help with kitchen design and material selection?",
    answer:
      "Yes, we provide comprehensive design assistance and material selection guidance to ensure your kitchen meets both your aesthetic preferences and functional needs.",
  },
];

export const metadata: Metadata = {
  title: "Design & Construction Services in Seattle | Innate NW",
  description: "Explore Innate NW's comprehensive range of design and construction services in Seattle. From kitchen remodeling to ADUs, we deliver custom solutions with expert craftsmanship.",
  openGraph: {
    title: "Design & Construction Services in Seattle | Innate NW",
    description: "Explore Innate NW's comprehensive range of design and construction services in Seattle. From kitchen remodeling to ADUs, we deliver custom solutions with expert craftsmanship.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Design & Construction Services in Seattle | Innate NW",
    description: "Explore Innate NW's comprehensive range of design and construction services in Seattle. From kitchen remodeling to ADUs, we deliver custom solutions with expert craftsmanship.",
  },
};

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/kitchen/KB1.png" },
      { image: "/images/services/kitchen/KB2.png" },
    ],
    []
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Innate offers boutique kitchen remodel services, combining modern design with functionality in order to transform spaces into personalized havens of comfort and style. Our dedicated project management and design team ensures that there is no difference between the product you envisioned and the product that you got."
      />
      <LatestProjects
        title="Check Out Some of Our Latest Bathroom & Kitchen Projects"
        content="This gallery showcases some of the projects we have done for clients in both Colorado and Washington."
        sliderAlbum={sliderAlbum}
      />
      <DesignAndBuild
        title="Design and build the Innate way"
        sections={sections}
      />
      <ReviewsSlider />
      <Testimonials />
      <Consultation />
      <Faq
        title="FAQ"
        description="We've answered some of the most common questions homeowners in the Seattle area ask before starting a project. From timelines and costs to permits and materials, our goal is to make your renovation as smooth and transparent as possible."
        faqItems={faqItems}
      />

      {/* <OurPartners /> */}
    </div>
  );
};

export default ServicesPage;
