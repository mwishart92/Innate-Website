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
        image="/images/services/bathroom-remodeling/Hero/h1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Bathroom Remodeling in Seattle",
    isH1: true,
  },
  {
    component: (
      <Slide
        image="/images/services/bathroom-remodeling/Hero/h2.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Bathroom Remodeling in Seattle",
  },
  {
    component: (
      <Slide
        image="/images/services/bathroom-remodeling/Hero/h3.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Bathroom Remodeling in Seattle",
  },
];

const sections = [
  {
    title: "Free Estimate",
    description:
      "After an in-person consultation, we provide a detailed and transparent bid tailored to your kitchen's needs—down to each cabinet and fixture.",
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
      "We listen first. Your lifestyle, preferences, and needs shape every decision we make. Our tailored bathroom remodel designs ensure your new space is functional, beautiful, and truly yours.",
    image: {
      src: "/images/services/bathroom-remodeling/r1.webp",
      alt: "Client-Centric Design Process",
      className: "",
    },
  },
  {
    title: "Integrated Design-Build Services",
    description:
      "With in-house designers and experienced bathroom remodel contractors, we manage your entire project from start to finish—ensuring seamless communication, efficient workflows, and high-quality results.",
    image: {
      src: "/images/services/bathroom-remodeling/r2.webp",
      alt: "Integrated Design-Build Services",
      className: "",
    },
  },
  {
    title: "Attention to Detail",
    description:
      "From waterproofing and tile layout to fixture alignment and lighting, we treat every element with the highest level of care. It’s how we deliver durable, cohesive, and luxurious results.",
    image: {
      src: "/images/services/bathroom-remodeling/r3.webp",
      alt: "Attention to Detail",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Initial Consultation",
    description:
      "We assess your current layout, understand your goals, and provide insights into what’s possible for your home bathroom remodel.",
  },
  {
    title: "Design Development",
    description:
      "Our team creates detailed plans, including layout updates, fixture placement, and modern bathroom remodel aesthetics tailored to your space.",
  },
  {
    title: "Material Selection",
    description:
      "You’ll get support choosing vanities, tile, lighting, and finishes that combine durability with style. We prioritize materials ideal for high-moisture environments.",
  },
  {
    title: "Construction and Installation",
    description:
      "Our professional bathroom remodel contractors handle all construction with careful project management—keeping your remodel on time and on budget.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We inspect every corner, polish the details, and ensure your space is flawless before handoff.",
  },
];

const whyChooseSections = [
  {
    title: "Experienced Team",
    description:
      "Our expert designers and bathroom remodel contractors bring years of hands-on experience to every project.",
  },
  {
    title: "Customized Solutions",
    description:
      "From space-saving ideas in small bathroom remodel projects to luxurious full bathroom remodel transformations, we build what works for you.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "FWe use moisture-resistant materials and proven building practices that stand the test of time.",
  },
  {
    title: "Seamless Project Management",
    description:
      "You’ll always know what to expect, who’s doing what, and when it’s happening—with one team guiding you from day one.",
  },
];
const fourBlockSections = [
  {
    title: "Master Bathroom Renovations",
    description:
      "Spacious layouts, luxury finishes, and spa-style features like freestanding tubs and walk-in showers.",
    link: "/",
    thumbnail: {
      src: "/images/services/bathroom-remodeling/r5.webp",
      alt: "",
    },
  },
  {
    title: "Guest Bathroom Updates",
    description:
      "Elegant and functional upgrades for your secondary bathrooms.",
    link: "/",
    thumbnail: {
      src: "/images/services/bathroom-remodeling/r6.webp",
      alt: "",
    },
  },
  {
    title: "Powder Room Makeovers",
    description: "Bold design statements in compact spaces.",
    link: "/",
    thumbnail: {
      src: "/images/services/bathroom-remodeling/r14.webp",
      alt: "",
    },
  },
  {
    title: "Accessibility Upgrades",
    description:
      "Walk-in tubs, grab bars, curbless showers, and ADA-compliant layouts—done with style and dignity.",
    link: "/",
    thumbnail: {
      src: "/images/services/bathroom-remodeling/r7.webp",
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
    title: "Gray Bathroom",
    location: "",
    description:
      "A serene, modern bathroom upgrade with soft gray tones, clean lines, and custom storage—designed for calm, comfort, and everyday ease.",
    url: "/project/gray-bathroom",
    media: [
      {
        src: "/images/services/bathroom-remodeling/r8.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Knight Residence",
    location: "",
    description:
      "A full interior transformation featuring open-concept living, expanded natural light, and custom finishes—designed for flow, warmth, and modern simplicity.",
    url: "/project/knight-residence",
    media: [
      {
        src: "/images/services/bathroom-remodeling/r9.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Kenmore Modern Bathroom",
    location: "Kenmore, Washington",
    description:
      "A Kenmore renovation featuring two bathroom remodels, two closet upgrades, and a redesigned laundry to support an ADU—maximizing space without changing the home's footprint.",
    url: "/project/kenmore-bathroom",
    media: [
      {
        src: "/images/project/kenmore-bathroom/6L1A1295_websize.jpg",
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
      src: "/images/services/bathroom-remodeling/r10.webp",
      alt: "",
    },
  },
  {
    title: "Accessory Dwelling Units (ADUs)",
    description:
      " Add space and value to your property with custom-built ADUs designed for rental income, multigenerational living, or flexible use.",
    link: "/services/adus",
    thumbnail: {
      src: "/images/services/bathroom-remodeling/r11.webp",
      alt: "",
    },
  },
  {
    title: "Natural Disaster Mitigation",
    description:
      "Safeguard your home with seismic retrofits, flood-resistant construction, and storm-ready upgrades.",
    link: "/services/natural-disaster-mitigation",
    thumbnail: {
      src: "/images/services/bathroom-remodeling/r12.webp",
      alt: "",
    },
  },
  {
    title: "Exterior Remodeling",
    description:
      "Upgrade your curb appeal and energy efficiency with expert siding, window, and door replacements.",
    link: "/services/exterior-remodeling",
    thumbnail: {
      src: "/images/services/bathroom-remodeling/r13.webp",
      alt: "",
    },
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/bathroom-remodeling/Projects/p1.webp" },
      { image: "/images/services/bathroom-remodeling/Projects/p2.webp" },
      { image: "/images/services/bathroom-remodeling/Projects/p3.webp" },
      { image: "/images/services/bathroom-remodeling/Projects/p4.webp" },
    ],
    [],
  );

  const faqItems = [
    {
      question: "How long does a full bathroom remodel take?",
      answer:
        "Most full bathroom remodel projects take 4–6 weeks, depending on complexity, material availability, and permit requirements.",
    },
    {
      question: "Can you help with small bathroom remodels?",
      answer:
        "Yes! We love solving space challenges with smart layouts, built-in storage, and space-saving fixtures in small bathroom remodel projects.",
    },
    {
      question: "Do you offer affordable bathroom remodel options?",
      answer:
        "Absolutely. We can tailor your bathroom remodel service to your budget with cost-effective materials and phased project plans—without cutting corners.",
    },
    {
      question: "Are permits required for bathroom remodels in Seattle?",
      answer:
        "Yes. Our team handles all required permits and inspections for your home bathroom remodel, so you don't have to worry about red tape.",
    },
    {
      question: "Do you design as well as build?",
      answer:
        "Yes—we offer both bathroom remodel designs and construction in-house. This integrated approach ensures quality and consistency from start to finish.",
    },
    {
      question: "Can I request a custom bathroom remodel with unique features?",
      answer:
        "Of course! Every custom bathroom remodel we deliver is tailored to your exact needs, whether that's heated floors, specialty lighting, or high-end finishes.",
    },
  ];

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Innate%20-%20Website%20Hero%20Video.mp4?alt=media&token=1e51d592-5ef8-40d7-b454-4c6bdffcccdf"
        contentText="Your bathroom should be more than just a utility—it should be a space of comfort, calm, and beauty. At Innate, we specialize in full-service bathroom remodel solutions that elevate everyday living."
      />
      <LatestProjects
        title="Bring Your Bathroom Vision to Life"
        content="We are here to support you in whatever remodel you desire: custom bathroom remodel, planning a small bathroom remodel, or preparing for a complete bathroom remodel."
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to Bathroom Remodeling"
        sections={threeCardDesignSections}
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our Bathroom Remodeling Process"
        bgImage={{
          src: "/images/services/bathroom-remodeling/r4.webp",
          alt: "Our Bathroom Remodeling Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Types of Bathroom Remodels We Offer"
        sections={fourBlockSections}
      />

      <ProjectSlider
        title="Portfolio Highlights"
        sections={portfolio}
        mainClass="h-[562px]"
      />

      <WhyChoose title="Why Choose Innate?" sections={whyChooseSections} />

      <Testimonials />

      <Consultation
        title="Get Started with Your Bathroom Remodel in Bellevue"
        description="Looking for an affordable bathroom remodel without sacrificing quality? Or maybe you’re ready for a high-end transformation with spa-like finishes?
At Innate, we specialize in bathroom remodel services tailored to your lifestyle, timeline, and taste.
"
        subHeading="Serving Seattle, Bellevue, Redmond, and the surrounding areas"
        mainClass="pt-0"
      />
      <Faq title="Bathroom Remodels - FAQ" description="" faqItems={faqItems} />

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
                  text="Our Work"
                  href="/work"
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
                  text="About Us"
                  href="/about"
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
  title: "Bathroom Remodeling Experts in Seattle | Innate",
  description:
    "Create a spa-like bathroom retreat with Innate's remodeling services in Seattle. Tailored design, moisture-resistant materials, and expert construction.",
  alternates: {
    canonical: "https://www.innate-aec.com/services/bathroom-remodeling",
  },
};
