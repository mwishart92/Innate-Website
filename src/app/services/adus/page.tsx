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
      <Slide image="/images/services/adus/Hero/h1.webp" video={null} />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Accessory Dwelling Units (ADUs)",
    isH1: true,
  },
  {
    component: (
      <Slide image="/images/services/adus/Hero/h2.webp" video={null} />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Accessory Dwelling Units (ADUs)",
  },
  {
    component: (
      <Slide image="/images/services/adus/Hero/h3.webp" video={null} />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Accessory Dwelling Units (ADUs)",
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
            "absolute left-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px]  rounded-[18px] ",
        },
        {
          type: "image" as const,
          src: avoidright,
          alt: "Free Estimate Right",
          className:
            "absolute right-0 z-0 w-[137.99px] h-[180.68px] sm:w-[186.54px] sm:h-[244.25px]  rounded-[18px] ",
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
    title: "Integrated Design-Build Services",
    description:
      "As a full-service accessory dwelling unit contractor, we handle every phase of the project—from feasibility and architectural planning to permitting and construction. Our integrated design-build model eliminates confusion and handoffs, ensuring speed, clarity, and exceptional results.",
    image: {
      src: "/images/services/adus/r1.webp",
      alt: "Integrated Design-Build Services",
      className: "",
    },
  },
  {
    title: "ADU Specialists with Local Expertise",
    description:
      "We’re not general builders dabbling in ADUs, we are accessory dwelling unit specialists. Our expertise in accessory dwelling unit regulations, local Seattle zoning, and custom small-space design gives you a major advantage in creating an efficient, beautiful space that’s fully compliant and built to last.",
    image: {
      src: "/images/services/adus/r2.webp",
      alt: "ADU Specialists with Local Expertise",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Feasibility Study",
    description:
      "We begin by assessing your property, lot layout, and local regulations to determine if you're eligible for an accessory dwelling unit and which type makes the most sense for your goals.",
  },
  {
    title: "Design & Permitting",
    description:
      "Our in-house architectural team handles every detail of the accessory dwelling unit design, ensuring your project meets all city and utility requirements. We manage the entire permitting process on your behalf.",
  },
  {
    title: "Construction",
    description:
      "Our skilled builders deliver high-quality construction with precise project management, clear timelines, and reliable communication from start to finish.",
  },
  {
    title: "Final Inspection & Handover",
    description:
      "We handle all inspections, final walkthroughs, and cleanup—so you receive a fully move-in ready unit without stress or surprises.",
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
    title: "Detached ADUs",
    description:
      "Separate structures ideal for rental income, privacy, or guest housing.",
    link: "/",
    thumbnail: {
      src: "/images/services/adus/r5.webp",
      alt: "",
    },
  },
  {
    title: "Attached ADUs",
    description: "Connected to your main home, sharing at least one wall.",
    link: "/",
    thumbnail: {
      src: "/images/services/adus/r8.webp",
      alt: "",
    },
  },
  {
    title: "Garage Conversions",
    description:
      "Transform underused garages into high-functioning living space.",
    link: "/",
    thumbnail: {
      src: "/images/services/adus/r7.webp",
      alt: "",
    },
  },
  {
    title: "Basement Conversions",
    description: "Turn existing square footage into income-generating units.",
    link: "/",
    thumbnail: {
      src: "/images/services/adus/r6.webp",
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
    title: "Wedgewood ADU",
    location: "",
    description:
      "This ADU new construction demonstrates how thoughtful design and expert craftsmanship can create a home addition that balances beauty, function, and accessibility. Built as an attached unit for multi-generational living, this project was designed specifically with ADA and mobility needs in mind—ensuring comfort, safety, and ease of use for every family member.",
    url: "/project/wedgewood-adu",
    media: [
      {
        src: "/images/services/adus/r9.webp",
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
      { image: "/images/services/adus/Projects/p1.webp" },
      { image: "/images/services/adus/Projects/p2.webp" },
      { image: "/images/services/adus/Projects/p3.webp" },
    ],
    [],
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Unlock the full potential of your property with a custom accessory dwelling unit designed and built by Innate. If you're looking to increase rental income, expand living space for your family, or invest in long-term property value, we invite you to work with our team. Innate specializes in full-service accessory dwelling unit construction in Seattle and surrounding areas."
      />
      <LatestProjects
        title="What is an ADU or DADU?"
        content="An accessory dwelling unit is a self-contained residential unit built on the same lot as an existing single-family home. Often referred to as a backyard cottage, in-law suite, or DADU (Detached Accessory Dwelling Unit), ADUs are a smart, flexible solution to urban living. They can be detached, attached, or created by converting garages or basements.
        <br/><br/>
        Our team at Innate are experienced accessory dwelling unit builders who understand local zoning, site challenges, and how to design for maximum comfort and efficiency."
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to ADU Projects"
        sections={threeCardDesignSections}
        cardParentClass="md:gap-[97px]"
        cardClass="md:w-[400px]"
        imageParentClass="md:pr-6"
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our ADU Construction Process"
        subTitle="At Innate, we make building an accessory dwelling unit simple and stress-free:"
        bgImage={{
          src: "/images/services/kitchen-remodeling/kitchen_remodeling26.jpg",
          alt: "Our ADU Construction Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Types of ADU Remodels We Offer"
        sections={fourBlockSections}
      />

      <ProjectSlider
        title="Portfolio Highlights"
        subTitle="<a href='/work'><u>Explore our portfolio</u></a> of recent accessory dwelling unit construction projects across Seattle. From stylish backyard cottages to full-scale new construction homes, our work highlights clean design, durable materials, and thoughtful space planning."
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
          <div className=" text-[32px] mob:text-[16px] text-[#fff] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter mb-2 mob:mb-2">
            “Innate handled our entire ADU project—from feasibility to permits
            to construction—and made the process feel easy. They were
            knowledgeable, responsive, and truly expert at what they do.”
          </div>
          <p>- Ronald G.</p>
          <br />
          <div className=" text-[32px] mob:text-[16px] text-[#fff] leading-[30.14px] mob:leading-[20.55px] mob:mt-0 font-light font-inter mb-2 mob:mb-2 mt-10">
            “As a property manager constantly remodeling units, I trust Michael
            and his team with every project. They’re fast, detail-oriented, and
            care about the outcome.”
          </div>
          <p>- Chris P.</p>
          <br />
        </div>
      </div>

      <Testimonials mainClass="" />

      <Consultation
        title="Ready to Build Your ADU?"
        description="If you’re just starting to research building an accessory dwelling unit or you’re looking for a trusted partner to bring your plans to life, Innate is here to help.
<br/><br/>

We are experienced accessory dwelling unit contractors, new construction builders, and design experts committed to unlocking the full value of your property.
"
        subHeading="Serving Seattle, Bellevue, Redmond, and the surrounding areas"
        mainClass="pt-0"
      />
      <Faq title="ADU’S - FAQ" description="" faqItems={faqItems} />

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
  title: "ADU Design & Build Services in Seattle | Innate NW",
  description:
    "Design and build custom ADUs in Seattle with Innate NW. Expert architectural services, permitting, and construction for detached and attached units.",
  alternates: {
    canonical: "https://innate-nw.com/services/adus",
  },
};
