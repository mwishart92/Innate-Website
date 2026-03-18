import ReviewsSlider from "@/components/Services/Reviews/Slider";
import Text from "@/components/ui/Text";
import Testimonials from "@/components/Services/Testimonials";
import Navbar from "@/components/Navbar";
import Collective from "@/components/Services/CollectiveVideo";
import Consultation from "@/components/Services/Consultation";
import HeroService from "@/components/Services/HeroService";
import ButtonGetStarted from "@/components/ui/ButtonGetStarted";
import LatestProjects from "@/components/Services/LatestProjects";
// import Marquee from "@/components/Services/Marquee";
// import OurProcess from "@/components/Services/OurProcess";
// import OurPartners from "@/components/Home/OurPartners";
import React, { useMemo } from "react";
import HomeSlider from "@/components/Services/Hero/Slider";
import DesignAndBuild from "@/components/Services/DesignAndBuild";
import ThreeCardDesign from "@/components/Services/ThreeCardDesign";
import ProcessBlock from "@/components/Services/ProcessBlock";
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

import KB1 from "@/public/images/services/kitchen/KB1.png";
import KB2 from "@/public/images/services/kitchen/KB2.png";
import Slide from "@/components/Services/Hero/Content/slide";
import SingleCard from "@/components/Services/SingleCard";
import ProjectSlider from "@/components/Slider/ProjectSlider";
import WhyChoose from "@/components/Services/WhyChoose";
import ExploreService from "@/components/Services/ExploreService";

interface MediaData {
  image: string | StaticImageData;
}

const slides = [
  {
    component: (
      <Slide
        image="/images/services/kitchen-remodeling/Hero/6L1A16031.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle: "Expert Kitchen Remodeling in Bellevue and Seattle",
    isH1: true,
  },
  {
    component: (
      <Slide
        image="/images/services/kitchen-remodeling/Hero/6L1A16411.webp"
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
        image="/images/services/kitchen-remodeling/Hero/duplex-31.webp"
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
      "We start by understanding your needs: more counter space, better storage, or open flow for hosting. Our kitchen remodel design is guided by your lifestyle and personal style.",
    image: {
      src: "/images/services/kitchen-remodeling/r1.webp",
      alt: "Client-Centric Design Process",
      className: "",
    },
  },
  {
    title: "Integrated Design-Build Services",
    description:
      "As full-service kitchen remodel contractors, our in-house team handles it all—design, permitting, and construction—ensuring speed, alignment, and accountability throughout your kitchen remodel.",
    image: {
      src: "/images/services/kitchen-remodeling/r2.webp",
      alt: "Integrated Design-Build Services",
      className: "",
    },
  },
  {
    title: "Attention to Detail",
    description:
      "Every cabinet line, backsplash pattern, and hardware placement is executed with precision. We believe the small things define a truly exceptional kitchen.",
    image: {
      src: "/images/services/kitchen-remodeling/r3.webp",
      alt: "Attention to Detail",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Initial Consultation",
    description:
      "We assess your kitchen’s layout, your goals, and your unique needs—whether you’re planning a luxury kitchen remodel or a space-saving redesign.",
  },
  {
    title: "Design Development",
    description:
      "Our kitchen remodel design team creates clear plans, mood boards, and layouts that reflect your vision and maximize functionality.",
  },
  {
    title: "Material Selection",
    description:
      "Choose from curated finishes: cabinets, quartz countertops, custom tile, hardware, and lighting—all suited to your lifestyle and budget.",
  },
  {
    title: "Construction and Installation",
    description:
      "Our skilled kitchen remodel contractors bring your design to life, coordinating every step to minimize disruption and ensure quality craftsmanship.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We walk the space with you and confirm every element of your kitchen remodel meets our high standards—and your expectations.",
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
    title: "Full Kitchen Renovations",
    description:
      "Complete layout redesigns for maximum transformation—ideal for outdated or dysfunctional spaces.",
    link: "/",
    thumbnail: {
      src: "/images/services/kitchen-remodeling/r5.webp",
      alt: "",
    },
  },
  {
    title: "Partial Kitchen Updates",
    description:
      "Refresh cabinets, countertops, or appliances while maintaining your existing layout.",
    link: "/",
    thumbnail: {
      src: "/images/services/kitchen-remodeling/r8.webp",
      alt: "",
    },
  },
  {
    title: "Custom Cabinetry and Storage Solutions",
    description:
      "Built-in organization and smart design to elevate both style and storage.",
    link: "/",
    thumbnail: {
      src: "/images/services/kitchen-remodeling/r7.webp",
      alt: "",
    },
  },
  {
    title: "Open-Concept Conversions",
    description:
      "Knock down walls and open up your kitchen to create an airy, modern space perfect for gathering and entertaining.",
    link: "/",
    thumbnail: {
      src: "/images/services/kitchen-remodeling/r6.webp",
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
        src: "/images/services/kitchen-remodeling/r9.webp",
        type: "image",
      },
    ],
  },
  {
    title: "South Seattle Kitchen",
    location: "",
    description:
      "A bright, functional kitchen remodel with improved flow, custom cabinetry, and timeless finishes—designed to anchor daily life with ease and style.",
    url: "/project/south-seattle-kitchen",
    media: [
      {
        src: "/images/services/kitchen-remodeling/r9.webp",
        type: "image",
      },
    ],
  },
  {
    title: "Freitas Kitchen & Bathroom Remodel",
    location: "Seattle, Washington",
    description:
      "This Capitol Hill kitchen remodel was completed in just four weeks, with custom Canyon Creek cabinetry, quartz countertops, and radiant heated floors—balancing beauty with daily function.",
    url: "/project/freitas-kitchen-bathroom",
    media: [
      {
        src: "/images/project/freitas-kitchen/freitas-kitchen_hero.webp",
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
      { image: "/images/services/kitchen-remodeling/Projects/p1.webp" },
      { image: "/images/services/kitchen-remodeling/Projects/p2.webp" },
      { image: "/images/services/kitchen-remodeling/Projects/p3.webp" },
    ],
    [],
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="At <a href='/' style='text-decoration: underline;'>Innate</a> , we specialize in kitchen remodel solutions that bring beauty, function, and flow into perfect harmony. Whether you’re planning a modern kitchen remodel, a high-end upgrade, or a full reimagining of your space, our boutique team transforms outdated kitchens into stunning, personalized hubs for everyday living."
      />
      <LatestProjects
        title="Transform Your Kitchen into a Culinary Haven"
        content="Your kitchen isn’t just a place to cook… it’s where connection, creativity, and comfort happen. As a trusted kitchen remodel company in Seattle, we bring tailored design, quality craftsmanship, and seamless execution to every project."
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to Kitchen Remodeling"
        sections={threeCardDesignSections}
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our Kitchen Remodeling Process"
        bgImage={{
          src: "/images/services/kitchen-remodeling/kitchen_remodeling26.jpg",
          alt: "Our Kitchen Remodeling Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Types of Kitchen Remodels We Offer"
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
  title: "Kitchen Remodeling in Seattle | Innate",
  description:
    "Upgrade your kitchen with Innate's boutique remodeling services in Seattle. Custom design, premium materials, and expert craftsmanship for every lifestyle.",
  alternates: {
    canonical: "https://innate-nw.com/services/kitchen-remodeling",
  },
  openGraph: {
    title: "Kitchen Remodeling in Seattle | Innate",
    description:
      "Upgrade your kitchen with Innate's boutique remodeling services in Seattle. Custom design, premium materials, and expert craftsmanship for every lifestyle.",
    url: "https://innate-nw.com/services/kitchen-remodeling",
    siteName: "Innate",
    images: [
      {
        url: "/images/innate-nw.jpg",
        width: 1200,
        height: 630,
        alt: "Innate - Kitchen Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Remodeling in Seattle | Innate",
    description:
      "Upgrade your kitchen with Innate's boutique remodeling services in Seattle. Custom design, premium materials, and expert craftsmanship for every lifestyle.",
  },
};
