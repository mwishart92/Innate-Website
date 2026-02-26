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
        image="/images/services/exterior-remodeling/Hero/h1.webp"
        video={null}
      />
    ),
    delay: 36000,
    projectName: "",
    subtitle:
      "Exterior Remodeling Services in Seattle and The Greater Eastside Area",
    isH1: true,
  },
  {
    component: (
      <Slide
        image="/images/services/exterior-remodeling/Hero/h2.webp"
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
        image="/images/services/exterior-remodeling/Hero/h3.webp"
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
    title: "Client-Centric Design Process",
    description:
      "Your goals guide every decision. We tailor your exterior remodeling services to meet your needs for style, durability, and energy savings.",
    image: {
      src: "/images/services/exterior-remodeling/r1.webp",
      alt: "Client-Centric Design Process",
      className: "",
    },
  },
  {
    title: "Integrated Design-Build Services",
    description:
      "From the first sketch to final install, our in-house designers, project managers, and builders work as one team—ensuring efficient timelines, clear communication, and beautiful results.",
    image: {
      src: "/images/services/exterior-remodeling/r2.webp",
      alt: "Integrated Design-Build Services",
      className: "",
    },
  },
  {
    title: "Attention to Detail",
    description:
      "We never cut corners. Every layer of flashing, trim, caulking, and paint is applied with intention and care to protect your investment.",
    image: {
      src: "/images/services/exterior-remodeling/r3.webp",
      alt: "Attention to Detail",
      className: "",
    },
  },
];
const processBlockSections = [
  {
    title: "Initial Consultation",
    description:
      "We evaluate your home’s exterior condition and offer tailored recommendations based on your vision and goals.",
  },
  {
    title: "Design Development",
    description:
      "We plan your remodel with architectural alignment, color harmony, and material performance in mind—leveraging insights from the best exterior remodeling software tools.",
  },
  {
    title: "Material Selection",
    description:
      "Our team guides you in selecting weather-resistant siding, energy-efficient windows, and long-lasting doors—all designed for the Seattle climate.",
  },
  {
    title: "Construction and Installation",
    description:
      "Our team guides you in selecting weather-resistant siding, energy-efficient windows, and long-lasting doors—all designed for the Seattle climate.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We inspect every detail with you—ensuring your exterior home remodeling project is complete, code-compliant, and exactly what you envisioned.",
  },
];

const whyChooseSections = [
  {
    title: "Experienced Team",
    description:
      "We’ve handled everything from detailed door installation projects to full exterior remodeling transformations across Seattle.",
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor every project to your home’s architecture, your goals, and your long-term maintenance preferences.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "From the smallest caulk line to large-scale siding installation, our work is built to last.",
  },
  {
    title: "Seamless Project Management",
    description:
      "You’ll have one experienced team from design through final walkthrough—no handoffs, no surprises.",
  },
];
const fourBlockSections = [
  {
    title: "Siding Replacement and Upgrades",
    description:
      "As trusted siding contractors in Seattle, we install premium wood, composite, and fiber cement siding for style, longevity, and low maintenance.",
    link: "/",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r5.webp",
      alt: "",
    },
  },
  {
    title: "Roofing Solutions",
    description:
      "Our roofing construction services improve home protection and complete the look of your exterior.",
    link: "/",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r6.webp",
      alt: "",
    },
  },
  {
    title: "Window and Door Installation",
    description:
      "We handle all aspects of energy-efficient window upgrades and professional door installation—from traditional to modern styles.",
    link: "/",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r7.webp",
      alt: "",
    },
  },
  {
    title: "Outdoor Living Spaces",
    description:
      "Add decks, patios, or covered structures to extend your living space and boost outdoor enjoyment.",
    link: "/",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r8.webp",
      alt: "",
    },
  },
  {
    title: "Energy Efficiency Improvements",
    description:
      "From insulation to high-performance windows, our upgrades help lower utility bills and increase comfort.",
    link: "/",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r9.webp",
      alt: "",
    },
  },
];

const faqItems = [
  {
    question: "Do I need permits for exterior remodeling in Seattle?",
    answer:
      "Yes—most exterior remodeling projects, including siding installation and door installation, require permits. We handle all permitting for you.",
  },
  {
    question: "Can I upgrade my siding, windows, and doors at the same time?",
    answer:
      "Absolutely. We often combine exterior remodeling services into one streamlined project, saving you time and maximizing results.",
  },
  {
    question: "Will a new exterior remodel increase my home's value?",
    answer:
      "Yes. A well-done exterior home remodeling project not only improves aesthetics and efficiency—it boosts resale value significantly.",
  },
  {
    question: "What are the best siding materials for Seattle's climate?",
    answer:
      "Fiber cement and composite are top choices. As experienced siding contractors, we'll help you choose the best product for longevity, curb appeal, and budget.",
  },
  {
    question: "Can you show me options with exterior remodeling software?",
    answer:
      "Yes. We use advanced exterior remodeling software to visualize changes before we begin, helping you make confident design decisions.",
  },
];

const portfolio = [
  {
    title: "Madrona Remodel",
    location: "",
    description:
      "A warm, character-rich remodel that blends original charm with updated function—featuring natural wood tones, refined finishes, and thoughtful spatial flow.",
    url: "",
    media: [
      {
        src: "/images/services/exterior-remodeling/r9.webp",
        type: "image",
      },
    ],
  },
  {
    title: "North Seattle Kitchen",
    location: "",
    description:
      "A bright, functional kitchen remodel with improved flow, custom cabinetry, and timeless finishes—designed to anchor daily life with ease and style.",
    url: "",
    media: [
      {
        src: "/images/services/exterior-remodeling/r9.webp",
        type: "image",
      },
    ],
  },
];

const exploreData = [
  {
    title: "Whole Home Remodeling",
    description:
      "Transform your entire home with cohesive design, structural updates, and personalized finishes tailored to your lifestyle.",
    link: "",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r10.webp",
      alt: "",
    },
  },
  {
    title: "Accessory Dwelling Units (ADUs)",
    description:
      "Add space and value to your property with custom-built ADUs designed for rental income, multigenerational living, or flexible use.",
    link: "",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r12.webp",
      alt: "",
    },
  },
  {
    title: "Bathroom Remodeling",
    description:
      "  Create a spa-like retreat with modern bathroom upgrades, elegant fixtures, and optimized comfort.",
    link: "",
    thumbnail: {
      src: "/images/services/image 93.webp",
      alt: "",
    },
  },
  {
    title: "Natural Disaster Mitigation",
    description:
      "Safeguard your home with seismic retrofits, flood-resistant construction, and storm-ready upgrades.",
    link: "",
    thumbnail: {
      src: "/images/services/exterior-remodeling/r11.webp",
      alt: "",
    },
  },
];

const ServicesPage = () => {
  const sliderAlbum = useMemo<MediaData[]>(
    () => [
      { image: "/images/services/exterior-remodeling/Projects/p1.webp" },
      { image: "/images/services/exterior-remodeling/Projects/p2.webp" },
      { image: "/images/services/exterior-remodeling/Projects/p3.webp" },
    ],
    [],
  );

  return (
    <div className="gradient">
      <Navbar />
      <HomeSlider slides={slides} />
      <Collective
        videoSrc="https://www.loom.com/embed/edfe795cdce04589b279fefaa15b4e96?autoplay=0"
        contentText="Your home’s exterior is the first thing people see and it should reflect the quality, care, and character within. At Innate, we offer professional exterior remodeling services that enhance curb appeal, boost energy efficiency, and increase long-term value.

If you're replacing siding or windows, planning a full exterior home remodeling project, or upgrading your outdoor space, our team delivers thoughtful design and precise execution.
"
      />
      <LatestProjects
        title="Enhance Your Home's Curb Appeal and Functionality"
        content="We believe great exteriors balance beauty and performance. Our exterior remodeling contractors create seamless transitions between structure, style, and sustainability—so your home looks incredible and stands up to the Pacific Northwest elements.
"
        sliderAlbum={sliderAlbum}
      />
      <ThreeCardDesign
        title="Our Approach to Exterior Remodeling"
        sections={threeCardDesignSections}
      />
      <DesignAndBuild
        title="Design and Build the <i>Innate</i> Way"
        sections={sections}
      />
      <ProcessBlock
        title="Our Exterior Remodeling Process"
        bgImage={{
          src: "/images/services/exterior-remodeling/r4.webp",
          alt: "Our Exterior Remodeling Process",
        }}
        sections={processBlockSections}
      />

      <SingleCard
        title="Types of Exterior Remodeling Services We Offer"
        sections={fourBlockSections}
        columnClass="max-w-[calc(18%)] tab:max-w-[calc(50%-18px)] xl:max-w-[calc(33.333%-18px)]"
        containerClass="max-w-full "
      />

      <WhyChoose title="Why Choose Innate?" sections={whyChooseSections} />

      <Testimonials />

      <Consultation
        title="Get Started with Your Exterior Remodel"
        description="Looking for exterior remodeling near me or trusted exterior remodeling contractors in Seattle? Whether it’s a new front door, full siding installation, or a comprehensive exterior update—Innate is your partner for beautiful, lasting results."
        subHeading="Serving Seattle, Bellevue, Redmond, and the surrounding areas"
        mainClass="pt-0"
      />
      <Faq title="Kitchen Remodels – FAQs" description="" faqItems={faqItems} />

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
  title: "Exterior Remodeling in Seattle | Siding, Windows & Doors | Innate NW",
  description:
    "Boost your home's curb appeal with exterior remodeling from Innate NW in Seattle. Expert siding, windows, and door upgrades with precision craftsmanship.",
  alternates: {
    canonical: "https://innate-nw.com/services/exterior-remodeling",
  },
  openGraph: {
    title:
      "Exterior Remodeling in Seattle | Siding, Windows & Doors | Innate NW",
    description:
      "Boost your home's curb appeal with exterior remodeling from Innate NW in Seattle. Expert siding, windows, and door upgrades with precision craftsmanship.",
    url: "https://innate-nw.com/services/exterior-remodeling",
    siteName: "Innate NW",
    images: [
      {
        url: "/images/innate-nw.jpg",
        width: 1200,
        height: 630,
        alt: "Innate NW - Exterior Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Exterior Remodeling in Seattle | Siding, Windows & Doors | Innate NW",
    description:
      "Boost your home's curb appeal with exterior remodeling from Innate NW in Seattle. Expert siding, windows, and door upgrades with precision craftsmanship.",
  },
};
