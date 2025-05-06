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
        image="/images/services/natural-disaster-mitigation/Hero/cover.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "natural disaster mitigation",
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "We conduct a thorough structural and site assessment to determine your property's vulnerabilities and provide a custom mitigation plan.",
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
      "Our team ensures all upgrades follow FEMA, state, and local regulations, preparing architectural or engineering documents as needed.",
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
      "Our trained crews install retrofits and reinforcements with careful attention to your home's safety, appearance, and integrity.",
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
      "We walk through the upgrades with you, review all safety improvements, and provide documentation for insurance or future resale.",
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
    question:
      "What types of natural disaster risks affect homes in the Seattle area?",
    answer:
      "Seattle homeowners face risks from earthquakes, heavy rain and flooding, landslides, and wildfires—especially in more wooded or hillside neighborhoods.",
  },
  {
    question: "What does natural disaster mitigation include?",
    answer:
      "Our mitigation services may include seismic retrofitting, grading and drainage improvements, fire-resistant landscaping, siding upgrades, sump pump installation, and more—based on your property's specific risks.",
  },
  {
    question: "Do I need a permit for natural disaster mitigation work?",
    answer:
      "Yes, most structural and drainage-related upgrades require permits in Seattle. We handle all permitting and ensure the work meets city codes and safety standards.",
  },
  {
    question: "How do I know if my home needs earthquake retrofitting?",
    answer:
      "Homes built before 1980 are often not bolted to their foundations and may be at risk. We offer inspections to determine if your home needs seismic reinforcement.",
  },
  {
    question: "Can you help protect my home from future flooding?",
    answer:
      "Absolutely. We assess your property's grading, downspouts, foundation, and existing drainage systems to prevent water damage during Seattle's heavy rain seasons.",
  },
  {
    question: "How much does natural disaster mitigation cost?",
    answer:
      "Costs vary depending on the type of work needed. Earthquake retrofits may start around $10,000, while drainage or wildfire prevention work will depend on property size and complexity.",
  },
  {
    question: "Will this improve my home's resale value?",
    answer:
      "Yes—buyers are increasingly interested in homes that are disaster-prepared. Retrofitting and mitigation improvements can boost value and provide a strong selling point.",
  },
  {
    question: "How long does a mitigation project usually take?",
    answer:
      "Timelines range from a few days to a few weeks depending on the scope of work. We'll provide a detailed timeline during your estimate.",
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      {
        image: "/images/services/natural-disaster-mitigation/Projects/p1.webp",
      },
    ],
    []
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Protect your home against future disaster with Innate's mitigation services. From seismic retrofits to flood-resistant construction, we help safeguard your home and family with proactive, expert solutions tailored to your region and property."
      />
      {/* <LatestProjects
        title="See Our Full Home Renovation Projects in Seattle"
        content="This gallery features before-and-after transformations of entire homes across the Greater Seattle area."
        sliderAlbum={sliderAlbum}
      /> */}
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
  title: "Natural Disaster Mitigation Services | Innate NW Seattle",
  description:
    "Protect your home with disaster mitigation solutions from Innate NW. We offer seismic retrofits and flood-resistant construction services in Seattle.",
};
