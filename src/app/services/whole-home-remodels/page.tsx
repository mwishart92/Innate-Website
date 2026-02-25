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
import ThreeCardDesign from "@/components/Services/ThreeCardDesign";
import ProcessBlock from "@/components/Services/ProcessBlock";
import SingleCard from "@/components/Services/SingleCard";
import ProjectSlider from "@/components/Slider/ProjectSlider";
import WhyChoose from "@/components/Services/WhyChoose";
import Text from "@/components/ui/Text";
import ExploreService from "@/components/Services/ExploreService";
import ButtonGetStarted from "@/components/ui/ButtonGetStarted";
interface MediaData {
  image: string | StaticImageData;
}

const slides = [
  {
    component: (
      <Slide
        image="/images/services/whole-home-remodels/Hero/h1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Whole Home Remodeling in Seattle",
    isH1: true,
  },
  {
    component: (
      <Slide
        image="/images/services/whole-home-remodels/Hero/h2.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Whole Home Remodeling in Seattle",
  },
  {
    component: (
      <Slide
        image="/images/services/whole-home-remodels/Hero/h3.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Whole Home Remodeling in Seattle",
  },
];

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
          type: "image" as const,
          src: avoidleft,
          alt: "Free Estimate Left",
          className:
            "absolute left-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px] bg-[#b8b8b8] rounded-[18px] bg-[#262626]",
        },
        {
          type: "image" as const,
          src: avoidright,
          alt: "Free Estimate Right",
          className:
            "absolute right-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px] bg-[#b8b8b8] rounded-[18px] bg-[#262626]",
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
      src: stressbg,
      alt: "Materials Consultation",
      className:
        "w-[340.46px] h-[288.42px] mob:w-[260.71px] mob:h-[220.77px] rounded-[18px] ",
      additionalImages: [
        {
          src: stresstop,
          alt: "Materials Consultation Top",
          className:
            "absolute top-[-70px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]",
        },
      ],
    },

    //
    layout: "right" as const,
  },
  {
    title: "Construction",
    description:
      "Our dedicated project managers attend to every detail of your project to make sure it get done right, on time and on budget. Our subcontractors are vetted, experienced and highly skilled.",
    image: {
      src: track,
      alt: "Construction",
      className: "w-[448px] mob:w-[324px] rounded-[18px] ",
    },
    layout: "left" as const,
  },
  {
    title: "Post Construction",
    description:
      "Our job is not complete until all the details are double checked, punch-list items are addressed, and the job site has been cleaned of all mess and debris.",
    image: {
      src: stressbg,
      alt: "Materials Consultation",
      className:
        "w-[340.46px] h-[288.42px] mob:w-[260.71px] mob:h-[220.77px] rounded-[18px] ",
      additionalImages: [
        {
          src: stresstop,
          alt: "Materials Consultation Top",
          className:
            "absolute top-[-70px] left-0 w-[263px] h-[98px] mob:w-[198.17px] mob:h-[73.84px] mob:top-[-60px]",
        },
      ],
    },
    layout: "right" as const,
  },
];
const threeCardDesignSections = [
  {
    title: "Client-Centric Design Process",
    description:
      "We begin by listening. Your lifestyle, goals, and style preferences shape every step of your custom home remodeling project.",
    image: {
      src: "/images/services/whole-home-remodels/r1.webp",
      alt: "Client-Centric Design Process",
      className: "",
    },
  },
  {
    title: "Integrated Design-Build Services",
    description:
      "Innate’s in-house team manages the entire process—from drawings to demo to final finishes—ensuring fast communication, budget control, and design alignment.",
    image: {
      src: "/images/services/whole-home-remodels/r2.webp",
      alt: "Integrated Design-Build Services",
      className: "",
    },
  },
  {
    title: "Attention to Detail",
    description:
      "From cabinet placement to lighting flow and finishing trims, our eye for detail ensures no element goes unnoticed.",
    image: {
      src: "/images/services/whole-home-remodels/r3.webp",
      alt: "Attention to Detail",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Initial Consultation",
    description:
      "We walk through your home, assess its potential, and uncover how to align your space with your evolving needs.",
  },
  {
    title: "Design Development",
    description:
      "Our home remodeling contractor team creates comprehensive plans and renderings—balancing creativity with building feasibility.",
  },
  {
    title: "Material Selection",
    description:
      "We help you select finishes, fixtures, and materials that reflect your style and meet your budget—guiding you through flooring, cabinetry, lighting, and more.",
  },
  {
    title: "Construction and Installation",
    description:
      "Our experienced builders coordinate every trade, maintain a clean and safe site, and stay focused on delivering high-quality work.",
  },
  {
    title: "Final Walkthrough",
    description:
      "Before we call it done, we walk your home with you to ensure every detail is complete, polished, and exactly as promised.",
  },
];

const whyChooseSections = [
  {
    title: "Experienced Team",
    description:
      "With years of experience in home remodeling services, we bring construction know-how and thoughtful design to every project.",
  },
  {
    title: "Customized Solutions",
    description:
      "We don’t do one-size-fits-all. Our custom home remodeling solutions are tailored to your family, budget, and architecture.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "From the framing to the final paint stroke, we deliver precision, integrity, and craftsmanship built to last.",
  },
  {
    title: "Seamless Project Management",
    description:
      "We coordinate your remodel from start to finish—ensuring timelines are met and communication is constant.",
  },
];
const threeBlockSections = [
  {
    link: "#",
    thumbnail: {
      src: "/images/services/r10.webp",
      alt: "",
    },
    userdata: {
      src: "/images/services/profile3.png",
      name: "Pellegrino Remodel",
      role: "CEO at TechCorp",
      info: "This service is amazing!",
    },
  },
  {
    link: "#",
    thumbnail: {
      src: "/images/services/r11.webp",
      alt: "",
    },
    userdata: {
      src: "/images/services/profile2.png",
      name: "Norman Remodel",
      role: "CEO at TechCorp",
      info: "This service is amazing!",
    },
  },
  {
    link: "#",
    thumbnail: {
      src: "/images/services/r10.webp",
      alt: "",
    },
    userdata: {
      src: "/images/services/profile1.png",
      name: "Eleanor Pena",
      role: "CEO at TechCorp",
      info: "This service is amazing!",
    },
  },
];
const fourBlockSections = [
  {
    title: "Kitchen Renovations",
    description:
      "Elevate your kitchen with better flow, premium materials, and smart storage.",
    link: "/",
    thumbnail: {
      src: "/images/services/whole-home-remodels/r5.webp",
      alt: "",
    },
  },
  {
    title: "Bathroom Upgrades",
    description:
      "Create spa-like sanctuaries with luxury finishes, natural lighting, and functional design.",
    link: "/",
    thumbnail: {
      src: "/images/services/whole-home-remodels/r6.webp",
      alt: "",
    },
  },
  {
    title: "Living Spaces",
    description:
      "Refresh your family room, entryway, or home office with integrated layouts and consistent style.",
    link: "/",
    thumbnail: {
      src: "/images/services/whole-home-remodels/r7.webp",
      alt: "",
    },
  },
  {
    title: "Home Additions",
    description:
      "Expand with purpose—new bedrooms, home gyms, or second-story additions that feel seamless.",
    link: "/",
    thumbnail: {
      src: "/images/services/whole-home-remodels/r8.webp",
      alt: "",
    },
  },
  {
    title: "Exterior Enhancements",
    description:
      "Upgrade curb appeal and performance with siding, windows, roofing, and outdoor living improvements.",
    link: "/",
    thumbnail: {
      src: "/images/services/whole-home-remodels/r9.webp",
      alt: "",
    },
  },
];

const faqItems = [
  {
    question: "How long does a whole home remodel take in Seattle?",
    answer:
      "Timelines vary depending on the scope, but most whole home remodeling projects take between 3–6 months from planning through completion.",
  },
  {
    question: "Do I need to move out during my home remodel?",
    answer:
      "Depending on the scope, yes. For full-scale custom home remodeling, moving out temporarily ensures efficiency and safety.",
  },
  {
    question: "What's included in a whole home remodel?",
    answer:
      "We cover everything from kitchen renovations, bathroom upgrades, and layout changes to exterior enhancements like siding and roofing.",
  },
  {
    question: "Can you remodel just part of my home?",
    answer:
      "Yes—we also offer partial home remodeling services, but full-home projects benefit from cohesive planning and better long-term value.",
  },
  {
    question: "Do you use home remodeling software for design previews?",
    answer:
      "Absolutely. We utilize home remodeling software to create 3D renderings, walkthroughs, and accurate construction plans—helping you visualize the final result before we build it.",
  },
];

const portfolio = [
  {
    title: "Shoreline Residence",
    location: "",
    description:
      "A bold, full-home remodel balancing modern design and comfort. Rich textures, custom millwork, and elevated finishes throughout.",
    url: "",
    media: [
      {
        src: "/images/services/whole-home-remodels/r11.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Desert Oasis",
    location: "",
    description:
      "An open-plan renovation emphasizing warmth, light, and calm. Features include custom cabinetry, natural wood tones, and layered textures.",
    url: "",
    media: [
      {
        src: "/images/services/whole-home-remodels/r12.webp",
        type: "image",
      },
    ],
  },
];

const exploreData = [
  {
    title: "Architectural Services",
    description:
      "Bring your vision to life with architectural design and permitting services that blend creativity with code compliance.",
    link: "",
    thumbnail: {
      src: "/images/services/image 94.webp",
      alt: "",
    },
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Redesign your kitchen into a beautiful, functional space with custom layouts, high-end materials, and smart storage.",
    link: "",
    thumbnail: {
      src: "/images/services/whole-home-remodels/r10.webp",
      alt: "",
    },
  },
  {
    title: "Bathroom Remodeling",
    description:
      " Create a spa-like retreat with modern bathroom upgrades, elegant fixtures, and optimized comfort.",
    link: "",
    thumbnail: {
      src: "/images/services/image 93.webp",
      alt: "",
    },
  },
  {
    title: "Accessory Dwelling Units (ADUs)",
    description:
      "Add space and value to your property with custom-built ADUs designed for rental income, multigenerational living, or flexible use.",
    link: "",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r11.webp",
      alt: "",
    },
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/whole-home-remodels/Projects/p1.webp" },
      { image: "/images/services/whole-home-remodels/Projects/p2.webp" },
      { image: "/images/services/whole-home-remodels/Projects/p3.webp" },
    ],
    [],
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="At Innate, we understand that your home should grow with you. Whether you’re modernizing a longtime residence or transforming a new fixer-upper, we offer whole home remodeling services that reimagine your space from the ground up.
<br/>
From rethinking floorplans to executing structural upgrades, our integrated team provides complete home remodeling services that bring clarity, cohesion, and creativity to every project
"
      />
      <LatestProjects
        title="Transform Your Entire Living Space"
        content="We combine aesthetics with functionality to turn disconnected rooms into a unified, modern living environment. Our design-build approach ensures that every detail is aligned—from vision to execution."
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to Whole Home Remodeling"
        sections={threeCardDesignSections}
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our Whole Home Remodeling Process"
        bgImage={{
          src: "/images/services/whole-home-remodels/r4.webp",
          alt: "Our Whole Home Remodeling Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Areas of Focus in Whole Home Remodeling"
        sections={fourBlockSections}
      />

      <ProjectSlider
        title="Portfolio Highlights"
        sections={portfolio}
        mainClass="h-[562px]"
      />

      <WhyChoose title="Why Choose Innate?" sections={whyChooseSections} />

      <SingleCard
        title="What our clients say about us"
        type="video_content"
        sections={threeBlockSections}
      />

      <Consultation
        title="Get Started with Your Whole Home Remodel"
        description="Looking for a home remodeling contractor you can trust? Innate delivers expert whole home remodeling backed by design integrity, construction excellence, and a commitment to your vision."
        subHeading="Serving Seattle, Bellevue, Redmond, and the surrounding areas"
        mainClass="pt-0"
      />
      <Faq
        title="Whole Home Remodel – FAQ"
        description=""
        faqItems={faqItems}
      />

      <ExploreService
        title="Explore Our Other Services"
        sections={exploreData}
      />

      <div className="w-full py-16 px-5 mob:pt-5">
        <div className="max-w-[1264px] xl:px-8 mx-auto">
          <div className="gradient2 rounded-[15px] py-6 mob:py-3 px-8 mob:px-4 flex mob:flex-col gap-8 mob:gap-2 ">
            <div className="md:w-[50%]">
              <Text
                as="h2"
                className="text-[40px] text-center leading-[44px] text-[#FFFFFF] mt-2 mob:text-[20px] font-semibold mb-3 md:mb-7"
              >
                Explore Our Projects
              </Text>
              <div className="mt-3 md:mb-12 text-center text-[16px] mob:text-[15px] text-[#fff]/[0.6] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter">
                See how Innate brings design and craftsmanship together in
                full-home transformations, renovations, and outdoor builds
                across Seattle.
              </div>
              <div className="flex justify-center mt-12">
                <ButtonGetStarted
                  text="Free Estimate"
                  className="bg-gradient-to-r from-[#4b4b4b] via-[#595a5d] to-[#616275] hover:from-[#616275] hover:to-[#4b4b4b] hover:text-white"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <Text
                as="h2"
                className="text-[40px] text-center leading-[44px] text-[#FFFFFF] mt-2 mob:text-[20px] font-semibold mb-3 md:mb-7"
              >
                Meet Our Team
              </Text>
              <div className="mt-3 md:mb-12 text-center text-[16px] mob:text-[15px] text-[#fff]/[0.6] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter">
                Get to know the designers, builders, and project leads who bring
                expertise, creativity, and care to every remodel.
              </div>
              <div className="flex justify-center mt-12">
                <ButtonGetStarted
                  text="Free Estimate"
                  className="bg-gradient-to-r from-[#4b4b4b] via-[#595a5d] to-[#616275] hover:from-[#616275] hover:to-[#4b4b4b] hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ReviewsSlider /> */}
      {/* <Testimonials /> */}

      {/* <OurPartners /> */}
    </div>
  );
};

export default ServicesPage;

export const metadata: Metadata = {
  title: "Whole Home Remodeling Services in Seattle | Innate NW",
  description:
    "Transform your entire home with Innate NW's expert whole home remodeling services in Seattle. Personalized design, dedicated project management, and flawless execution.",
  alternates: {
    canonical: "https://innate-nw.com/services/whole-home-remodels",
  },
};
