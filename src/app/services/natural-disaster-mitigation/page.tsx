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
        image="/images/services/natural-disaster-mitigation/Hero/duplex-3 1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Natural Disaster Mitigation in Seattle and Beyond",
    isH1: true,
  },
  {
    component: (
      <Slide
        image="/images/services/natural-disaster-mitigation/Hero/bailey-alexander-2dnjAACDNd8-unsplash 1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Natural Disaster Mitigation in Seattle and Beyond",
  },
  {
    component: (
      <Slide
        image="/images/services/natural-disaster-mitigation/Hero/bailey-alexander-pkIJXMezi_E-unsplash 1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Natural Disaster Mitigation in Seattle and Beyond",
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
    title: "Integrated Design-Build Services",
    description:
      "Our in-house team handles every aspect of your natural disaster mitigation project—from site assessment to final inspection. This means better communication, faster timelines, and no handoffs.",
    image: {
      src: "/images/services/natural-disaster-mitigation/r1.webp",
      alt: "Integrated Design-Build Services",
      className: "",
    },
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor every solution to your structure, location, and lifestyle. From retrofitting to drainage improvements, our work is always personalized to meet your specific needs.",
    image: {
      src: "/images/services/natural-disaster-mitigation/r2.webp",
      alt: "Customized Solutions",
      className: "",
    },
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Natural disaster prevention starts with strong construction. We use premium materials and expert techniques to ensure every component of your home is fortified.",
    image: {
      src: "/images/services/natural-disaster-mitigation/r3.webp",
      alt: "Quality Craftsmanship",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Initial Consultation",
    description:
      "We start by listening to your concerns and learning about your property’s history and existing vulnerabilities.",
  },
  {
    title: "Risk Assessment",
    description:
      "Our natural disaster management experts evaluate potential threats like seismic instability, flood zones, or wind exposure.",
  },
  {
    title: "Design Development",
    description:
      "We create a strategic plan using local building codes, FEMA guidelines, and construction best practices to ensure effective natural disaster mitigation.",
  },
  {
    title: "Construction and Implementation",
    description:
      "Our licensed builders reinforce, elevate, or upgrade your home using techniques proven to resist damage from various natural disasters.",
  },
  {
    title: "Final Review",
    description:
      "We walk you through the final results and ensure your home meets safety standards and local compliance.",
  },
];

const whyChooseSections = [
  {
    title: "Experienced Team",
    description:
      "With years of experience in natural disaster management and residential construction, we know what it takes to protect Seattle homes.",
  },
  {
    title: "Comprehensive Services",
    description:
      "We manage every detail, from risk assessment and natural disaster preparation to final construction and inspection.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Your safety and peace of mind are our priorities. We guide you through the process with clarity, care, and full transparency.",
  },
];
const fourBlockSections = [
  {
    title: "Seismic Retrofits",
    description:
      "Secure your foundation, walls, and framing to reduce earthquake damage risk—critical in the Seattle region.",
    link: "/",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r5.webp",
      alt: "",
    },
  },
  {
    title: "Flood-Resistant Construction",
    description:
      "Improve drainage, elevate systems, and add protective barriers to reduce flood impact.",
    link: "/",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r6.webp",
      alt: "",
    },
  },
  {
    title: "Fire-Resistant Materials",
    description:
      "Upgrade to ignition-resistant siding, vent protection, and fire-rated roofing systems to help defend against wildfire risk.",
    link: "/",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r8.webp",
      alt: "",
    },
  },
  {
    title: "Storm-Resistant Features",
    description:
      "Install impact-rated windows, secure entry systems, and roof bracing for better wind and storm protection.",
    link: "/",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r7.webp",
      alt: "",
    },
  },
];

const faqItems = [
  {
    question:
      "What types of natural disaster risks affect homes in the Seattle area?",
    answer:
      "Seattle homeowners face risks from earthquakes, heavy rain and flooding, landslides, and wildfires, especially in more wooded or hillside neighbourhoods. At Innate, we provide extensive natural disaster mitigation services, giving Seattle homeowners peace of mind by helping them prepare for and reduce risks.",
  },
  {
    question: "What does natural disaster mitigation include?",
    answer:
      "Our natural disaster mitigation services include seismic retrofitting, grading and drainage improvements, fire-resistant landscaping, siding upgrades, sump pump installation, and more—based on your property's specific risks.",
  },
  {
    question: "Do I need a permit for natural disaster mitigation work?",
    answer:
      "Yes, most structural and drainage-related upgrades require Seattle remodeling permits. Innate handles all permitting and ensures the work meets city codes and safety standards while staying on schedule and within budget.",
  },
  {
    question: "How do I know if my home needs earthquake retrofitting?",
    answer:
      "Homes built before 1980 are often not bolted to their foundations and may be at risk. We offer inspections to determine if your home needs seismic reinforcement and provide a detailed quote so you're aware of your current home conditions and its earthquake retrofitting needs.",
  },
  {
    question: "Can you help protect my home from future flooding?",
    answer:
      "Absolutely. We assess your property's grading, downspouts, foundation, and existing drainage systems to prevent water damage during Seattle's heavy rain seasons. Providing extensive natural disaster mitigation services, Innate helps Seattle homeowners reduce their risk and prepare better for flood season.",
  },
  {
    question: "How much does natural disaster mitigation cost?",
    answer:
      "Detailed costs for natural disaster mitigation vary depending on the type of work needed and the Seattle contractors you work with. Earthquake retrofits may start around $10,000, while drainage or wildfire prevention work will depend on property size and complexity.",
  },
  {
    question: "Will this improve my home's resale value?",
    answer:
      "Yes, buyers are increasingly interested in homes that are disaster-prepared. Retrofitting and mitigation improvements can boost your property value and provide a strong selling point.",
  },
  {
    question: "How long does a mitigation project usually take?",
    answer:
      "Timelines range from a few days to a few weeks, depending on the scope of work. We'll provide a detailed timeline during your estimate. At Innate, we guarantee to bring you the expert-approved and most stable mitigation that withstands natural disasters and time.",
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
        src: "/images/services/natural-disaster-mitigation/r9.webp",
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
        src: "/images/services/natural-disaster-mitigation/r9.webp",
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
    title: "Whole Home Remodeling",
    description:
      "Transform your entire home with cohesive design, structural updates, and personalized finishes tailored to your lifestyle.",
    link: "/services/whole-home-remodels",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r9.webp",
      alt: "",
    },
  },
  {
    title: "Bathroom Remodeling",
    description:
      " Create a spa-like retreat with modern bathroom upgrades, elegant fixtures, and optimized comfort.",
    link: "/services/bathroom-remodeling",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r10.webp",
      alt: "",
    },
  },
  {
    title: "Accessory Dwelling Units (ADUs)",
    description:
      "Add space and value to your property with custom-built ADUs designed for rental income, multigenerational living, or flexible use.",
    link: "/services/adus",
    thumbnail: {
      src: "/images/services/natural-disaster-mitigation/r11.webp",
      alt: "",
    },
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      {
        image: "/images/services/natural-disaster-mitigation/Projects/p1.webp",
      },
      {
        image: "/images/services/natural-disaster-mitigation/Projects/p2.webp",
      },
      {
        image: "/images/services/natural-disaster-mitigation/Projects/p3.webp",
      },
    ],
    [],
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="When the unexpected hits, preparation makes all the difference. At Innate, we provide natural disaster mitigation services designed to protect your home before disaster strikes. From seismic retrofits to flood-resistant construction, our solutions are tailored, code-compliant, and built to last.

If you're concerned about earthquakes, floods, wildfires, or extreme storms, we offer comprehensive natural disaster preparation that prioritizes safety and peace of mind.

"
      />
      <LatestProjects
        title="Protecting Your Home Against Natural Disasters"
        content="We take a proactive approach to natural disaster prevention, combining expert construction with strategic risk planning. Our team uses local knowledge, proven methods, and durable materials to improve the resilience of your home and minimize long-term damage risk.
"
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to Disaster Mitigation"
        sections={threeCardDesignSections}
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our Disaster Mitigation Process"
        bgImage={{
          src: "/images/services/natural-disaster-mitigation/r4.webp",
          alt: "Our Disaster Mitigation Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Types of Natural Disaster Mitigation We Offer"
        sections={fourBlockSections}
      />

      <WhyChoose title="Why Choose Innate?" sections={whyChooseSections} />

      <Testimonials />

      <Consultation
        title="Get Started with Your Disaster Mitigation Project"
        description="Don't wait until it's too late. Let Innate help you prepare with expert natural disaster mitigation solutions that improve safety, reduce risk, and increase your home's resilience."
        subHeading="Serving Seattle, Bellevue, Redmond, and the surrounding areas"
        mainClass="pt-0"
      />
      <Faq
        title="Natural Disaster Mitigation - FAQs"
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
  title: "Natural Disaster Mitigation Services | Innate Seattle",
  description:
    "Protect your home with disaster mitigation solutions from Innate. We offer seismic retrofits and flood-resistant construction services in Seattle.",
  alternates: {
    canonical: "https://innate-nw.com/services/natural-disaster-mitigation",
  },
};
