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
        image="/images/services/architectural-services/Hero/cover.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Professional Architectural Services in Seattle and Beyond",
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
    projectName: "",
    subtitle: "Expert Kitchen Remodeling in Bellevue and Seattle",
  },
  {
    component: (
      <Slide
        image="/images/services/architectural-services/Hero/p1 1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Expert Kitchen Remodeling in Bellevue and Seattle",
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
    title: "Integrated Services",
    description:
      "With our design-build model, you get a single team managing both architectural design and construction—ensuring alignment, cost efficiency, and continuity.",
    image: {
      src: "/images/services/architectural-services/r1.webp",
      alt: "Integrated Services",
      className: "",
    },
  },
  {
    title: "Client-Centric Approach",
    description:
      "Our process centers on communication, clarity, and transparency. We honor your input and advocate for your vision.",
    image: {
      src: "/images/services/architectural-services/r2.webp",
      alt: "Client-Centric Approach",
      className: "",
    },
  },
  {
    title: "Quality and Craftsmanship",
    description:
      "Our design documents reflect the same care and excellence as our builds. Every detail supports a thoughtful, long-lasting result.",
    image: {
      src: "/images/services/architectural-services/r3.webp",
      alt: "Quality and Craftsmanship",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a site visit and deep conversation to understand your goals, constraints, and dreams.",
  },
  {
    title: "Design Development",
    description:
      "We explore layout, form, and functionality—applying modern architectural design principles, environmental efficiency, and your personal style.",
  },
  {
    title: "Collaboration and Feedback",
    description:
      "We believe design should be co-created. Your feedback shapes the result at every step.",
  },
  {
    title: "Finalization and Documentation",
    description:
      "We produce construction-ready drawings and technical specs, guiding your project into the building phase with clarity and precision.",
  },
];

const whyChooseSections = [
  {
    title: "Experienced Team",
    description:
      "Our team brings deep experience in kitchen remodel services, including high-end finishes and complex spatial redesigns.",
  },
  {
    title: "Customized Solutions",
    description:
      "Every remodel is tailored—no cookie-cutter solutions. We design for your space, your goals, and your life.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "From framing to finish, our builds reflect expert-level care and long-term durability.",
  },
  {
    title: "Seamless Project Management",
    description:
      "With integrated design and build teams, your remodel stays on schedule, on budget, and stress-free.",
  },
];
const fourBlockSections = [
  {
    title: "Custom Residential Design",
    description:
      "Our residential architectural services focus on unique, highly functional homes tailored to your lifestyle. Whether you're planning a renovation, new construction, or an addition, our team brings clarity, creativity, and code-compliant solutions",
    link: "/",
    thumbnail: {
      src: "/images/services/architectural-services/r5.webp",
      alt: "",
    },
  },
  {
    title: "Commercial Architecture",
    description:
      "From small retail spaces to multi-use layouts, our architectural services include commercial applications that maximize usability and reflect brand identity.",
    link: "/",
    thumbnail: {
      src: "/images/services/architectural-services/r8.webp",
      alt: "",
    },
  },
  {
    title: "Interior Architecture",
    description:
      "We specialize in interior architectural design that balances spatial flow, finishes, and structure. From custom cabinetry layouts to architectural design lighting, every detail is considered with care.",
    link: "/",
    thumbnail: {
      src: "/images/services/architectural-services/r7.webp",
      alt: "",
    },
  },
  {
    title: "Permitting and Code Compliance",
    description:
      "As experienced architectural design consultants, we handle all zoning, site planning, and building code coordination—saving you time and minimizing friction during review.",
    link: "/",
    thumbnail: {
      src: "/images/services/architectural-services/r6.webp",
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
    title: "Wedgewood ADU ",
    location: "",
    description:
      "A highly functional architectural design residential project featuring smart use of space, natural lighting, and structural elegance.",
    url: "/project/wedgewood-adu",
    media: [
      {
        src: "/images/services/architectural-services/r9.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Freitas Bathroom",
    location: "",
    description:
      " A renovation that fused sustainable architectural design with contemporary materials and lighting precision.",
    url: "/project/freitas-kitchen-bathroom",
    media: [
      {
        src: "/images/services/architectural-services/r10.webp",
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
      src: "/images/services/image 94.webp",
      alt: "",
    },
  },
  {
    title: "Decks",
    description:
      "Expand your outdoor living area with a custom deck built for comfort, durability, and year-round enjoyment.",
    link: "/services/decks",
    thumbnail: {
      src: "/images/services/image 95.webp",
      alt: "",
    },
  },
  {
    title: "Bathroom Remodeling",
    description:
      " Create a spa-like retreat with modern bathroom upgrades, elegant fixtures, and optimized comfort.",
    link: "/services/bathroom-remodeling",
    thumbnail: {
      src: "/images/services/image 93.webp",
      alt: "",
    },
  },
  {
    title: "Exterior Remodeling",
    description:
      "Upgrade your curb appeal and energy efficiency with expert siding, window, and door replacements.",
    link: "/services/exterior-remodeling",
    thumbnail: {
      src: "/images/services/image 96.webp",
      alt: "",
    },
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/architectural-services/Projects/p6.webp" },
      { image: "/images/services/architectural-services/Projects/p7.webp" },
      { image: "/images/services/architectural-services/Projects/p8.webp" },
    ],
    [],
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Design your dream space with a team that brings creativity, functionality, and construction expertise under one roof. At Innate, our architectural design services are a combination of beauty and quality and we have the expertise to elevate the way you live and work."
      />
      <LatestProjects
        title="Holistic Design-Build Philosophy"
        content="We believe the best architecture begins with a clear vision and ends in flawless execution. That’s why we offer fully integrated architectural design and building services—streamlining your project from initial sketches to final construction.
<br /><br />
With every design, we consider aesthetics, structure, energy flow, and sustainability, delivering more than drawings—we deliver a foundation for lasting impact."
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to Architecture"
        sections={threeCardDesignSections}
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our Architectural Design Process"
        bgImage={{
          src: "/images/services/architectural-services/r4.webp",
          alt: "Our Architectural Design Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Our Architectural Services"
        sections={fourBlockSections}
      />

      <ProjectSlider
        title="Portfolio Highlights"
        sections={portfolio}
        mainClass="h-[562px]"
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
        title="Get Started with Your Kitchen Remodel"
        description="Looking for a trusted kitchen remodel company in Seattle? Whether you want a modern kitchen remodel, a classic refresh, or a full transformation, Innate offers premium kitchen remodel services that bring your vision to life."
        subHeading="Serving Seattle, Bellevue, Redmond, and the surrounding areas"
        mainClass="pt-0"
      />
      <Faq title="Kitchen Remodels – FAQs" description="" faqItems={faqItems} />

      <ExploreService
        title="Get Started with Your Kitchen Remodel"
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
  title: "Architectural Design Services in Seattle | Innate NW",
  description:
    "Innate NW offers architectural design services in Seattle. Work with expert architects to create a space tailored to your lifestyle and future vision.",
  alternates: {
    canonical: "https://innate-nw.com/services/architectural-services",
  },
  openGraph: {
    title: "Architectural Design Services in Seattle | Innate NW",
    description:
      "Innate NW offers architectural design services in Seattle. Work with expert architects to create a space tailored to your lifestyle and future vision.",
    url: "https://innate-nw.com/services/architectural-services",
    siteName: "Innate NW",
    images: [
      {
        url: "/images/innate-nw.jpg",
        width: 1200,
        height: 630,
        alt: "Innate NW - Architectural Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Design Services in Seattle | Innate NW",
    description:
      "Innate NW offers architectural design services in Seattle. Work with expert architects to create a space tailored to your lifestyle and future vision.",
  },
};
