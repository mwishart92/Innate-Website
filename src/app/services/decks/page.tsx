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
      <Slide image="/images/services/Decks/Hero/h1.webp" video={null} />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Deck Construction in Seattle and Surrounding Areas",
    isH1: true,
  },
  {
    component: (
      <Slide image="/images/services/Decks/Hero/h2.webp" video={null} />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Deck Construction in Seattle and Surrounding Areas",
  },
  {
    component: (
      <Slide image="/images/services/Decks/Hero/h3.webp" video={null} />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Deck Construction in Seattle and Surrounding Areas",
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
            "absolute left-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px] rounded-[18px]",
        },
        {
          type: "image" as const,
          src: avoidright,
          alt: "Free Estimate Right",
          className:
            "absolute right-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px] rounded-[18px]",
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
      "We begin by understanding how you want to live outdoors. Your goals shape every decision—from layout and style to lighting and material.",
    image: {
      src: "/images/services/Decks/r1.webp",
      alt: "",
      className: "",
    },
  },
  {
    title: "Integrated Design-Build Services",
    description:
      "As a full-service team of custom deck builders, we handle everything in-house: design, engineering, permits, and construction.",
    image: {
      src: "/images/services/Decks/r2.webp",
      alt: "",
      className: "",
    },
  },
  {
    title: "Attention to Detail",
    description:
      "We obsess over the small things—board pattern, railing height, fastener visibility—so the final product exceeds expectations.",
    image: {
      src: "/images/services/Decks/r3.webp",
      alt: "",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Initial Consultation",
    description:
      "We visit your home to evaluate the space, understand your lifestyle, and offer recommendations for optimal deck construction.",
  },
  {
    title: "Design Development",
    description:
      "Our custom deck design experts draft plans that reflect your home’s architecture, grade, and sun exposure—ensuring seamless indoor-outdoor flow.",
  },
  {
    title: "Material Selection",
    description:
      "Choose from natural woods like cedar or composite decking for low-maintenance luxury. We walk you through every option for form and function.",
  },
  {
    title: "Construction and Installation",
    description:
      "Our licensed deck construction contractors build with precision and care—managing every detail of your custom deck installation.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We inspect your finished deck with you to guarantee satisfaction, safety, and durability.",
  },
];

const whyChooseSections = [
  {
    title: "Experienced Team",
    description:
      "Our skilled custom deck contractors bring years of experience in Seattle’s climate, codes, and construction techniques.",
  },
  {
    title: "Customized Solutions",
    description:
      "Every deck is unique. We offer fully tailored custom deck designs to match your home, terrain, and vision.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "We use premium materials and proven practices to ensure each custom deck construction project is built to last.",
  },
  {
    title: "Seamless Project Management",
    description:
      "With one team managing everything—from plans to permits—you enjoy a stress-free experience from day one.",
  },
];
const fourBlockSections = [
  {
    title: "Traditional Wood Decks",
    description:
      "Natural beauty with options like cedar, redwood, or pressure-treated lumber.",
    link: "/",
    thumbnail: {
      src: "/images/services/Decks/r5.webp",
      alt: "",
    },
  },
  {
    title: "Composite Decks",
    description:
      "Long-lasting, low-maintenance solutions with a clean, modern look.",
    link: "/",
    thumbnail: {
      src: "/images/services/Decks/r6.webp",
      alt: "",
    },
  },
  {
    title: "Multi-Level Decks",
    description:
      "Covered Decks & PergolasIdeal for sloped lots or larger backyards—create separate zones for dining, relaxing, and entertaining.",
    link: "/",
    thumbnail: {
      src: "/images/services/Decks/r7.webp",
      alt: "",
    },
  },
  {
    title: "Covered Decks & Pergolas",
    description:
      "Add shade and year-round use with structures that enhance your custom deck construction project.",
    link: "/",
    thumbnail: {
      src: "/images/services/Decks/r8.webp",
      alt: "",
    },
  },
];

const faqItems = [
  {
    question: "How long does a kitchen remodel usually take?",
    answer:
      "Most kitchen remodel projects take 4–8 weeks, depending on the scope and permitting. We'll give you a detailed timeline during your consultation.",
  },
  {
    question: "Can I use my kitchen during the remodel?",
    answer:
      "In most cases, your kitchen will be out of commission during construction. We work efficiently to minimize downtime and always keep you informed.",
  },
  {
    question: "Do you help with kitchen design and materials?",
    answer:
      "Yes! Our team handles everything from kitchen remodel design to finish selection—so your remodel feels effortless and aligned with your style.",
  },
  {
    question: "Do you offer luxury kitchen remodels?",
    answer:
      "Absolutely. We specialize in luxury kitchen remodel services with premium finishes, high-end appliances, and thoughtful, custom layouts.",
  },
  {
    question: "What if I just need a partial remodel?",
    answer:
      "We offer both full and partial kitchen remodel services—whether that means upgrading your cabinetry, reconfiguring lighting, or replacing surfaces.",
  },
];

const portfolio = [
  {
    title: "Madrona Remodel",
    location: "",
    description:
      "A warm, character-rich remodel that blends original charm with updated function—featuring natural wood tones, refined finishes, and thoughtful spatial flow.",
    url: "/project/madrona-remodel",
    media: [
      {
        src: "/images/services/Decks/r9.webp",
        type: "image",
      },
    ],
  },
  {
    title: "North Seattle Kitchen",
    location: "",
    description:
      "A bright, functional kitchen remodel with improved flow, custom cabinetry, and timeless finishes—designed to anchor daily life with ease and style.",
    url: "/project/south-seattle-kitchen",
    media: [
      {
        src: "/images/services/Decks/r9.webp",
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
    link: "/services/architectural-services",
    thumbnail: {
      src: "/images/services/Decks/r9.webp",
      alt: "",
    },
  },
  {
    title: "Whole Home Remodeling",
    description:
      "Transform your entire home with cohesive design, structural updates, and personalized finishes tailored to your lifestyle.",
    link: "/services/whole-home-remodels",
    thumbnail: {
      src: "/images/services/Decks/r10.webp",
      alt: "",
    },
  },
  {
    title: "Accessory Dwelling Units (ADUs)",
    description:
      "Add space and value to your property with custom-built ADUs designed for rental income, multigenerational living, or flexible use.",
    link: "/services/adus",
    thumbnail: {
      src: "/images/services/Decks/r11.webp",
      alt: "",
    },
  },
  {
    title: "Exterior Remodeling",
    description:
      "Upgrade your curb appeal and energy efficiency with expert siding, window, and door replacements.",
    link: "/services/exterior-remodeling",
    thumbnail: {
      src: "/images/services/Decks/r12.webp",
      alt: "",
    },
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/Decks/Projects/p1.webp" },
      { image: "/images/services/Decks/Projects/p2.webp" },
      { image: "/images/services/Decks/Projects/p3.webp" },
    ],
    [],
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Expand your living space, elevate your lifestyle, and enjoy the outdoors year-round with expert deck construction from Innate. Whether you're hosting a summer BBQ or enjoying quiet mornings outside, our custom deck solutions are designed for beauty, functionality, and durability.

We provide custom deck services across Seattle and the Eastside, offering end-to-end support—from concept to completion. Let us turn your outdoor area into a stunning, usable extension of your home.

"
      />
      <LatestProjects
        title="Quality Craftsmanship, Built to Last"
        content="Every deck we build reflects our commitment to structural excellence, premium materials, and stunning custom deck design. We specialize in weather-resilient solutions that perform beautifully through the seasons."
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to Deck Construction"
        sections={threeCardDesignSections}
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our Deck Construction Process"
        bgImage={{
          src: "/images/services/Decks/r4.webp",
          alt: "Our Deck Construction Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Types of Decks We Build"
        sections={fourBlockSections}
      />

      <WhyChoose title="Why Choose Innate?" sections={whyChooseSections} />

      <div className="w-full py-16 px-5 mob:pt-5">
        <div className="max-w-[1203px] xl:px-8 mx-auto">
          <Text
            as="h2"
            className="text-center font-normal mob:text-[30px] mb-16  mob:mb-4 mob:leading-[33px] mob:px-5"
          >
            What our clients say about us
          </Text>
          <div className=" text-[32px] mob:text-[16px] text-[#fff] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter mb-20 mob:mb-10">
            “I found Michael because he came highly recommended as both a
            designer and a builder. I wanted to update the style of my kitchen
            and bathroom but being unfamiliar with the construction process, I
            needed a contractor who could walk me through the process and help
            me with material selections!”
          </div>
          <p>- Katerin Currea</p>
          <small>Kitchen Remodel, Madison Park</small>
        </div>
      </div>

      <Testimonials />

      <Consultation
        title="Get Started with Your Custom Deck"
        description="Looking for deck construction near me or a team of trusted custom deck builders in Seattle? Innate is your one-stop partner for custom deck services that deliver elegance, safety, and long-term value."
        subHeading="Serving Seattle, Bellevue, Redmond, and the surrounding areas"
        mainClass="pt-0"
      />
      <Faq title="Deck Construction - FAQ" description="" faqItems={faqItems} />

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
  title: "Custom Deck Building Services in Seattle | Innate NW",
  description:
    "Expand your outdoor living space with a custom-built deck by Innate NW. Premium materials and expert design tailored to your lifestyle in Seattle.",
  alternates: {
    canonical: "https://innate-nw.com/services/decks",
  },
  openGraph: {
    title: "Custom Deck Building Services in Seattle | Innate NW",
    description:
      "Expand your outdoor living space with a custom-built deck by Innate NW. Premium materials and expert design tailored to your lifestyle in Seattle.",
    url: "https://innate-nw.com/services/decks",
    siteName: "Innate NW",
    images: [
      {
        url: "/images/innate-nw.jpg",
        width: 1200,
        height: 630,
        alt: "Innate NW - Deck Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Deck Building Services in Seattle | Innate NW",
    description:
      "Expand your outdoor living space with a custom-built deck by Innate NW. Premium materials and expert design tailored to your lifestyle in Seattle.",
  },
};
