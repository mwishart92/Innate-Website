import Navbar from "@/components/Navbar";
import ProjectDescription from "@/components/Project/ProjectDescription";
import ManualPageTracker from "@/components/ManualPageTracker";
import React from "react";
import p1 from "@/public/images/project/gabrielle-maurer-bSDRTDquQG8-unsplash.webp";
import p2 from "@/public/images/project/hans-isaacson-qmTwtPQtLVg-unsplash.webp";
import p3 from "@/public/images/project/bailey-alexander-QQ6xmTXXFZ8-unsplash.webp";
import p4 from "@/public/images/project/bailey-alexander-PE4pFgcYzoQ-unsplash.webp";
import slider1 from "@/public/images/project/project-slider-1.webp";
import slider2 from "@/public/images/project/project-slider-2.webp";
import ProjectSlider from "@/components/Project/Hero/Slider";
import Slide from "@/components/Project/Hero/Content/slide";
import { Metadata } from "next";

const defaultSlides = [
  {
    component: <Slide image="/images/home/slide1innate.png" video={null} />,
    delay: 36000,
    projectName: "Palm Springs ADU",
    projectType: "Residential",
  },
];
const projectSlider = [
  {
    image: slider1,
    title: "Modern Musa Spa",
    description: "Denver Coloredo",
    url: "#",
  },
  {
    image: slider2,
    title: "Modern Musa Spa",
    description: "Denver Coloredo",
    url: "#",
  },
  {
    image: slider1,
    title: "Modern Musa Spa",
    description: "Denver Coloredo",
    url: "#",
  },
  {
    image: slider2,
    title: "Modern Musa Spa",
    description: "Denver Coloredo",
    url: "#",
  },
];
const defaultProjectDetails = {
  projectScope: [
    { key: "Scope", value: "Architecture" },
    { key: "Type", value: "New Construction" },
    { key: "Location", value: "Shoreline, Washington" },
    { key: "Design Principle", value: "Jane Smith" },
    { key: "Photographer", value: "Marcus Davies" },
    { key: "General Contractor", value: "Builders Inc" },
  ],
  scopedescription: `Designed for a couple with an internationally acclaimed collection
        of modern art, the house functions both as a residence and a
        gallery. The house is organized around a central spine that provides
        both circulation and art display, bringing the owners into constant
        contact with their art. The 16-foot-high gallery comfortably
        accommodates the large canvases common to modern art. The gallery's
        diffused-skylight daylighting system creates a soft natural light
        for viewing art, and gives the sense of the outdoors while inside.
        Intimate living alcoves punctuate the sides of the gallery.`,
  media: {
    desktop: "/images/project/UCSDL.webp",
    mobile: "/images/project/UCSDM.webp",
  },
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
  ],
  gallery: [
    {
      image: p1,
    },
    {
      image: p2,
    },
    {
      image: p3,
    },
    {
      image: p4,
      class: "col-span-3",
    },
    {
      image: p1,
    },
    {
      image: p2,
    },
    {
      image: p3,
    },
  ],
  galleryDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  projectSlider,
};
const projectData = {
  "south-seattle-kitchen": {
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/seattle-kitchen/IMG_1567.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "South Seattle Kitchen",
        projectType: "Renovation",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        { key: "Scope", value: "Kitchen Remodel" },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "South Seattle" },
        { key: "Design Principle", value: "Michael Wishart" },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This South Seattle kitchen renovation highlights how thoughtful design and skilled craftsmanship can completely transform a home's most used space. Custom cabinetry from Canyon Creek was carefully tailored to fit the needs of the homeowners, with specialized compartments for spices, pans, and baking trays. Large-format tile and quartz countertops add a modern aesthetic, while a radiant heated floor ensures comfort and function through Seattle's colder months.`,
      media: {
        desktop: "/images/project/seattle-kitchen/IMG_1568.webp",
      },
      description: [
        `Every detail in this kitchen remodel was considered—from the custom cabinet inserts to the precision installation required for each unique piece. Our team coordinated closely with Canyon Creek to fabricate custom elements that not only elevated the kitchen's look, but also made day-to-day use more intuitive. The result is a space that feels highly personal, with finishes and functionality aligned to the client's vision.`,
      ],
      gallery: [
        {
          image: "/images/project/seattle-kitchen/IMG_1567.webp",
        },
        {
          image: "/images/project/seattle-kitchen/IMG_1568.webp",
        },
        {
          image: "/images/project/seattle-kitchen/IMG_1570.webp",
        },
        {
          image: "/images/project/seattle-kitchen/IMG_1572.webp",
          class: "col-span-3",
        },
      ],
      galleryDescription:
        "Completed in just four weeks, this South Seattle kitchen renovation showcases Innate's commitment to quality, efficiency, and design excellence. Whether you're seeking a kitchen remodel in Seattle or a full-scale home renovation, our team brings deep experience and a collaborative approach to every custom project.",
      projectSlider,
    },
    seo: {
      title: "South Seattle Kitchen | Innate NW Renovation",
      description: `This South Seattle kitchen renovation highlights how thoughtful design and skilled craftsmanship can completely transform a home's most used space. Custom cabinetry from Canyon Creek was carefully tailored to fit the needs of the homeowners, with specialized compartments for spices, pans, and baking trays. Large-format tile and quartz countertops add a modern aesthetic, while a radiant heated floor ensures comfort and function through Seattle's colder months.`,
    },
  },
  "desert-oasis": {
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/desert-oasis/COVER-D5_Scene.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Desert Oasis",
        projectType: "New Construction",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        { key: "Scope", value: "Residential Design" },
        { key: "Type", value: "New Construction" },
        { key: "Location", value: "Palm Springs, California" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This modern Palm Springs new construction project was designed as a true desert oasis—blending indoor-outdoor living with smart functionality and bold architectural features. The home centers around an open-concept kitchen, living, and dining space, framed by exposed roof beams and flooded with natural light through clerestory windows and full accordion doors that open to the courtyard. The new construction design captures the spirit of the desert while maximizing modern livability.`,
      media: {
        desktop: "/images/project/desert-oasis/D5_Scene 6.webp",
      },
      description: [
        `A custom kitchenette and clean-lined finishes give the interiors a refined but relaxed atmosphere. Outside, a detached ADU offers a private space for visiting family and serves as a future income opportunity, reflecting a thoughtful approach to multi-functional design. Metal roofing installation, natural light, and the open floor plan contribute to both energy efficiency and long-term flexibility for the homeowner.`,
      ],
      gallery: [
        {
          image: "/images/project/desert-oasis/D5_Scene 3.webp",
        },
        {
          image: "/images/project/desert-oasis/D5_Scene 4.webp",
        },
        {
          image: "/images/project/desert-oasis/D5_Scene 6.webp",
        },
        {
          image: "/images/project/desert-oasis/D5_Scene 7.webp",
          class: "col-span-3",
        },
        {
          image: "/images/project/desert-oasis/D5_Scene 9.webp",
        },
        {
          image: "/images/project/desert-oasis/D5_Scene 13.webp",
        },
        {
          image: "/images/project/desert-oasis/D5_Scene 14.webp",
        },
      ],
      galleryDescription:
        "This Palm Springs home was fully designed in just three months, a testament to Innate's efficient design process and collaborative approach. Whether you're building a new home in Palm Springs or looking to design a modern ADU, Innate brings purpose, clarity, and intention to every residential project.",
      projectSlider,
    },
    seo: {
      title: "Desert Oasis | Innate NW Renovation",
      description: `This modern Palm Springs new construction project was designed as a true desert oasis—blending indoor-outdoor living with smart functionality and bold architectural features. The home centers around an open-concept kitchen, living, and dining space, framed by exposed roof beams and flooded with natural light through clerestory windows and full accordion doors that open to the courtyard. The new construction design captures the spirit of the desert while maximizing modern livability.`,
    },
  },
  "gray-bathroom": {
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/gray-bathroom/COVER.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Gray Bathroom",
        projectType: "Renovation",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel, Natural Disaster Mitigation",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Kent, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `After a catastrophic pipe burst caused significant water damage, this Kent homeowner turned a disaster into an opportunity for a modern upgrade. Innate stepped in to provide both bathroom renovation and natural disaster mitigation services, managing the insurance process and guiding the client through a streamlined four-week transformation. The result is a sophisticated, spa-inspired space that balances utility with luxury.`,
      media: {
        desktop: "/images/project/gray-bathroom/IMG_9334.webp",
      },
      description: [
        `A custom kitchenette and clean-lined finishes give the interiors a refined but relaxed atmosphere. Outside, a detached ADU offers a private space for visiting family and serves as a future income opportunity, reflecting a thoughtful approach to multi-functional design. Metal roofing installation, natural light, and the open floor plan contribute to both energy efficiency and long-term flexibility for the homeownerThe new bathroom design features floor-to-ceiling large format tile, a curbless walk-in shower with custom glass, and a smart mirror that enhances both function and style. A built-in hot tub adds a premium touch, while clean lines and high-end finishes bring cohesion to the space. What began as a remediation project evolved into a total reimagining of the master bath.`,
      ],
      gallery: [
        {
          image: "/images/project/gray-bathroom/DSC00478.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00483.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00486.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00499.webp",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/gray-bathroom/IMG_9334.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00505.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00506.webp",
        },
      ],
      galleryDescription: `Located in Kent, this bathroom remodel showcases Innate's ability to turn urgent repairs into long-term value. By combining expert construction, design vision, and insurance coordination, we delivered a stunning result with minimal stress for the client.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
    seo: {
      title: "Gray Bathroom | Innate NW Renovation",
      description: `A custom kitchenette and clean-lined finishes give the interiors a refined but relaxed atmosphere. Outside, a detached ADU offers a private space for visiting family and serves as a future income opportunity, reflecting a thoughtful approach to multi-functional design. Metal roofing installation, natural light, and the open floor plan contribute to both energy efficiency and long-term flexibility for the homeownerThe new bathroom design features floor-to-ceiling large format tile, a curbless walk-in shower with custom glass, and a smart mirror that enhances both function and style. A built-in hot tub adds a premium touch, while clean lines and high-end finishes bring cohesion to the space. What began as a remediation project evolved into a total reimagining of the master bath.`,
    },
  },
  "wheat-ridge-adu": {
    seo: {
      title: "Gray BathroWheat Ridge ADU | Innate NW Renovation",
      description: `Accordion doors open the main living space to the outdoors, while quartzite counters and gold accents add elegance to the kitchen. One of the home's standout features is a custom golf simulator installed in the living room—perfectly suited to the client's passion, and cleverly concealed when not in use. Every inch of the layout was thoughtfully considered to support evolving needs over time.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/gray-bathroom/COVER.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Wheat Ridge ADU ",
        projectType: "Design-Build",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Residential Design, ADU",
        },
        { key: "Type", value: "New Construction" },
        { key: "Location", value: "Kirkland, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This Kirkland garage conversion project showcases the power of intentional design and flexible planning. Designed and built by Innate, the ADU supports the needs of a growing family, functioning as a private suite for extended family, a potential rental unit, or future housing for a college-aged child. With polished concrete floors, whole wood cabinetry, and clerestory windows, the space combines modern design with warmth and utility.`,
      media: {
        desktop: "/images/project/gray-bathroom/IMG_9334.webp",
      },
      description: [
        `Accordion doors open the main living space to the outdoors, while quartzite counters and gold accents add elegance to the kitchen. One of the home's standout features is a custom golf simulator installed in the living room—perfectly suited to the client's passion, and cleverly concealed when not in use. Every inch of the layout was thoughtfully considered to support evolving needs over time.`,
      ],
      gallery: [
        {
          image: "/images/project/gray-bathroom/DSC00478.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00483.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00486.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00499.webp",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/gray-bathroom/IMG_9334.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00505.webp",
        },
        {
          image: "/images/project/gray-bathroom/DSC00506.webp",
        },
      ],
      galleryDescription: `Completed over the course of a year, this ADU in Kirkland reflects Innate's expertise in full-service design-build projects. Whether you're planning a detached suite or a full garage conversion, our team delivers creative, high-functioning spaces that align with both lifestyle and long-term value.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "kung-fu-tea": {
    seo: {
      title: "Kung FU Tea x TKK | Innate NW Renovation",
      description: `This commercial tenant improvement project in Renton brought two beloved franchises—Kung Fu Tea and TKK Fried Chicken—under one roof. Designed by Michael Wishart and built by Innate, the six-month project required precision, collaboration, and a deep understanding of franchise standards. From navigating a complex permitting process to aligning with brand-approved finishes, every detail was managed with care.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/kung-fu-tea/KFT-COVER.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Kung FU Tea x TKK",
        projectType: "Commercial",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Commercial Design",
        },
        { key: "Type", value: "New Construction – Tenant Improvement" },
        { key: "Location", value: "Renton, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This commercial tenant improvement project in Renton brought two beloved franchises—Kung Fu Tea and TKK Fried Chicken—under one roof. Designed by Michael Wishart and built by Innate, the six-month project required precision, collaboration, and a deep understanding of franchise standards. From navigating a complex permitting process to aligning with brand-approved finishes, every detail was managed with care.`,
      media: {
        desktop: "/images/project/kung-fu-tea/D5_Image TKK restaurant 1.webp",
      },
      description: [
        `The interior features large-format tile flooring, quartz counters, and a bold tile feature wall that anchors the service area. High-grade commercial kitchen appliances were installed to meet the demands of a dual-service food and beverage operation. A custom-designed digital menu system and a full glass storefront elevate the space, creating a sleek and functional environment for high-volume foot traffic.`,
      ],
      gallery: [
        {
          image:
            "/images/project/kung-fu-tea/D5_Image D5_Image TKK restaurant 2.webp",
        },
        {
          image: "/images/project/kung-fu-tea/D5_Image 3_20240410_003150.webp",
        },
        {
          image: "/images/project/kung-fu-tea/D5_Image TKK restaurant 1.webp",
        },
        {
          image: "/images/project/kung-fu-tea/D5_Image 2_20240410_003431.webp",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      galleryDescription: `Located in Renton, this commercial build-out reflects Innate's expertise in restaurant and franchise tenant improvements. Whether you're opening a boutique café or a multi-unit food concept, our team ensures your space is compliant, functional, and true to your brand's identity.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "madrona-remodel": {
    seo: {
      title: "Madrona Remodel | Innate NW Renovation",
      description: `This kitchen remodel in Seattle's historic Madrona neighborhood presented a unique set of challenges—steep slope, tight site conditions, and an aging structure that required a full seismic retrofit. Innate led the design and renovation, transforming the original layout into a bright, modern kitchen with expanded square footage and improved structural integrity. The six-month kitchen renovation resulted in a functional and resilient space that seamlessly blends old and new.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/madrona-remodel/COVER-kitchen.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Madrona Remodel",
        projectType: "Renovation",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Kitchen Remodel",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Madrona – Seattle, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This kitchen remodel in Seattle's historic Madrona neighborhood presented a unique set of challenges—steep slope, tight site conditions, and an aging structure that required a full seismic retrofit. Innate led the design and renovation, transforming the original layout into a bright, modern kitchen with expanded square footage and improved structural integrity. The six-month kitchen renovation resulted in a functional and resilient space that seamlessly blends old and new.`,
      media: {
        desktop: "/images/project/madrona-remodel/living3.webp",
      },
      description: [
        `Custom cabinetry, quartzite countertops, and a sleek electric fireplace bring modern elegance to the interior while honoring the character of the original home. Structural upgrades were carefully integrated to bring the house up to earthquake code without compromising design. Every material and layout decision was made with both aesthetics and engineering in mind.`,
      ],
      gallery: [
        {
          image: "/images/project/madrona-remodel/kitchen1.webp",
        },
        {
          image: "/images/project/madrona-remodel/kitchen2.webp",
        },
        {
          image: "/images/project/madrona-remodel/living1.webp",
        },
        {
          image: "/images/project/madrona-remodel/living2.webp",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      galleryDescription: `This Madrona remodel showcases Innate's ability to manage high-complexity renovation projects in Seattle's older homes. From kitchen additions to full structural upgrades, our team specializes in projects that require both creative design and technical expertise.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "shoreline-residence": {
    seo: {
      title: "Shoreline Residence | Innate NW Renovation",
      description: `This Shoreline home renovation and addition project transformed a charming one-story residence into a spacious, multi-level family home. Designed for a young couple preparing for the next chapter of life, Innate led the design and construction of a new upper floor, full kitchen remodel, and outdoor living upgrades. The result is a warm, modern space that blends everyday function with lasting quality.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/shoreline-residence/COVER-D5_a7-2_20240625_005152.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Shoreline Residence",
        projectType: "Renovation",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Kitchen Remodel, Outdoor Living, Residential Design",
        },
        { key: "Type", value: "Renovation / New Construction" },
        { key: "Location", value: "Shoreline, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This Shoreline home renovation and addition project transformed a charming one-story residence into a spacious, multi-level family home. Designed for a young couple preparing for the next chapter of life, Innate led the design and construction of a new upper floor, full kitchen remodel, and outdoor living upgrades. The result is a warm, modern space that blends everyday function with lasting quality.`,
      media: {
        desktop:
          "/images/project/shoreline-residence/D5_front 01_20240625_010002.webp",
      },
      description: [
        `The interior features refinished hardwood flooring, large-format tile in the bathrooms, and a newly remodeled kitchen tailored to the family's needs. Outdoors, a composite TimberTech deck and StruXure louvered pergola create a versatile space for year-round enjoyment, seamlessly expanding the home's living area. Every detail—from cabinetry layout to exterior transitions—was crafted for comfort, light, and longevity.`,
      ],
      gallery: [
        {
          image:
            "/images/project/shoreline-residence/D5_Scene 21 1_20240628_105629.webp",
        },
        {
          image:
            "/images/project/shoreline-residence/D5_Scene 22 2_20240628_104252.webp",
        },
        {
          image:
            "/images/project/shoreline-residence/D5_Scene 23 1_20240628_085609.webp",
        },
      ],
      galleryDescription: `This Shoreline project exemplifies Innate's holistic approach to residential renovations, combining kitchen remodeling, outdoor design, and new construction under one cohesive plan. Whether you're planning an addition or remodeling your current home, we bring design precision and build excellence to every square foot.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "freitas-bathroom": {
    seo: {
      title: "Freitas Bathroom | Innate NW Renovation",
      description: `Tucked into the top floor of a historic Capitol Hill apartment, this bathroom remodel turned a compact, outdated space into a refined retreat. Innate handled both design and construction, navigating the logistical challenges of carrying all materials up several flights while preserving the quiet character of the building. The project was completed in just two weeks with minimal disruption to neighbors.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/freitas-bathroom/6L1A8442-Enhanced-NR.webp"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Freitas Bathroom",
        projectType: "Renovation",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel, Residential Design",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Capitol Hill – Seattle, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `Tucked into the top floor of a historic Capitol Hill apartment, this bathroom remodel turned a compact, outdated space into a refined retreat. Innate handled both design and construction, navigating the logistical challenges of carrying all materials up several flights while preserving the quiet character of the building. The project was completed in just two weeks with minimal disruption to neighbors.`,
      media: {
        desktop: "/images/project/freitas-bathroom/6L1A8451-Enhanced-NR.webp",
      },
      description: [
        `Featuring marble mosaic tile, a wall-mounted vanity, and curated fixtures from West Elm and Rejuvenation, the new bathroom design brings warmth and sophistication to a small footprint. Sliding glass shower doors and gold trim maximize both form and function, creating a sense of openness while preserving valuable space.
`,
      ],
      gallery: [
        {
          image: "/images/project/freitas-bathroom/6L1A8433-Enhanced-NR.webp",
        },
        {
          image: "/images/project/freitas-bathroom/6L1A8447-Enhanced-NR.webp",
        },
        {
          image: "/images/project/freitas-bathroom/6L1A8426-Enhanced-NR.webp",
        },
        {
          image: "/images/project/freitas-bathroom/6L1A8431-Enhanced-NR.webp",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      galleryDescription: `This Capitol Hill bathroom remodel exemplifies Innate's ability to deliver high-quality renovations in tight urban settings. Whether you're updating a condo or reimagining a vintage apartment, our team delivers thoughtful, stylish solutions tailored to your space.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "wedgewood-adu": {
    seo: {
      title: "Wedgewood Seattle ADU | ADA-Compliant New Construction by Innate",
      description: `Discover this Wedgewood Seattle ADU designed for multi-generational living and accessibility. Featuring Hardie siding, cedar shake accents, TimberTech deck, Andersen windows, custom cabinets, and ADA-compliant finishes, this 6-month new construction project blends function, beauty, and expert craftsmanship.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image=""
            video="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_ADU_16x9.webm?alt=media&token=146a7881-9a11-4099-8f58-3714d7c5f98b"
          />
        ),
        delay: 36000,
        projectName: "Wedgewood Seattle",
        projectType: "ADU",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "ADU, New Construction",
        },
        { key: "Type", value: "Attached, ADA-Compliant" },
        { key: "Location", value: "Wedgewood, Seattle" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This Wedgewood Seattle ADU new construction demonstrates how thoughtful design and expert craftsmanship can create a home addition that balances beauty, function, and accessibility. Built as an attached unit for multi-generational living, this project was designed specifically with ADA and mobility needs in mind—ensuring comfort, safety, and ease of use for every family member.
From the exterior, the home combines durable Hardie siding with natural cedar shake accents, creating a timeless yet modern look.`,
      media: {
        desktop: "/images/project/knight-residence/6L1A8383-Enhanced-NR.webp",
      },
      description: [
        `A TimberTech deck with a custom metal railing extends living space outdoors, while Andersen A-Series windows and doors maximize natural light and energy efficiency. Inside, hardwood flooring and detailed interior/exterior trim showcase the craftsmanship that defines Innate projects.`,
      ],
      gallery: [
        {
          image: "/images/project/wedgewood-adu/6L1A0904_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0990_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0692_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0928_websize.webp",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0948_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0962_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0970_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0974_websize.webp",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0982_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0989_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0914_websize.webp",
        },
        {
          image: "/images/project/wedgewood-adu/6L1A0999_websize.webp",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      galleryDescription: `The interior layout features a custom kitchen remodel and bathroom renovation with finishes chosen for both elegance and accessibility. Custom cabinetry, widened doorways, and carefully planned layouts ensure ease of mobility, while high-quality materials bring warmth and style. Every element—from cabinet inserts to bathroom fixtures—was selected with both practicality and design in mind.
Completed in just six months, this ADA-compliant ADU in Wedgewood reflects Innate’s ability to deliver highly personalized projects that merge architectural excellence with functional living. Whether you’re considering a Seattle ADU or planning a full home remodel, our team brings expertise in design, construction, and accessibility solutions to every build.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "magnolia-bathroom": {
    seo: {
      title: "Magnolia Seattle Bathroom Remodel | Historic Craftsman Renovation",
      description: `See how Innate refreshed a historic Magnolia Craftsman bathroom with marble tile, custom frameless glass, and brass fixtures. This one-month bathroom remodel repaired water damage while preserving the home’s original charm.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image= "/images/project/magnolia-bathroom/mag_banner.jpg"
            video=""
          />
        ),
        delay: 36000,
        projectName: "Magnolia, Seattle",
        projectType: "Bathroom Remodel",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel",
        },
        { key: "Type", value: "Renovation, Historic Preservation" },
        { key: "Location", value: "Magnolia, Seattle" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This Magnolia Seattle bathroom renovation showcases how a careful balance of preservation and modernization can breathe new life into a historic Craftsman home. Tasked with refreshing a bathroom that had suffered water damage, our team’s goal was to maintain the original character of the home while updating the space with durable, timeless finishes.`,
     
      description: [
        `The renovation features marble tile, custom frameless glass, and warm brass fixtures that complement the home’s historic aesthetic. Each selection was chosen not only for its elegance but also for its ability to respect the home’s original architecture. By integrating these updates seamlessly, the bathroom feels both renewed and in harmony with the rest of the Craftsman design. This Seattle bathroom remodel also required thoughtful restoration work. Our craftsmen repaired water damage while ensuring structural integrity and moisture protection for the long term. The result is a bathroom that retains the charm of its past while offering modern function and beauty.`,
      ],
      gallery: [
        {
          image: "/images/project/magnolia-bathroom/6L1A0713_websize.webp",
        },
        {
          image: "/images/project/magnolia-bathroom/6L1A0718_websize.webp",
        },
        {
          image: "/images/project/magnolia-bathroom/6L1A0727_websize.webp",
        },
        {
          image: "/images/project/magnolia-bathroom/6L1A0731_websize.webp",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/magnolia-bathroom/6L1A0738_websize.webp",
        },
        {
          image: "/images/project/magnolia-bathroom/6L1A0741_websize.webp",
        },
        {
          image: "/images/project/magnolia-bathroom/6L1A0744_websize.webp",
        },
        {
          image: "/images/project/magnolia-bathroom/6L1A0751_websize.webp",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      galleryDescription: `Completed in just one month, this Magnolia bathroom renovation reflects Innate’s commitment to detail, craftsmanship, and respect for the unique history of Seattle’s homes. Whether you’re updating a single bathroom or planning a whole home remodel, our team delivers thoughtful design and quality construction at every stage.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "knight-residence": {
    seo: {
      title: "Knight Residence | Innate NW Renovation",
      description: `Inspired by a luxurious hotel spa they visited in Spain, the clients for this Fremont bathroom remodel came to Innate with a clear vision and a high bar for detail. Over six weeks, we transformed their existing bathroom into a serene, modern retreat that balances elegance with precision. From custom cabinetry to fully integrated wall-mounted fixtures, every element was tailored to match the client's aesthetic goals.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image=""
            video="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/05.25_Innate-NW_16x9%20No%20SpeedRamp_No%20Sound.webm?alt=media&token=b30f1fba-154c-495e-870e-8058cebddedc"
          />
        ),
        delay: 36000,
        projectName: "Knight Residence",
        projectType: "Renovation",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel, Residential Design",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Fremont – Seattle, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate NW",
        },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `Inspired by a luxurious hotel spa they visited in Spain, the clients for this Fremont bathroom remodel came to Innate with a clear vision and a high bar for detail. Over six weeks, we transformed their existing bathroom into a serene, modern retreat that balances elegance with precision. From custom cabinetry to fully integrated wall-mounted fixtures, every element was tailored to match the client's aesthetic goals.`,
      media: {
        desktop: "/images/project/knight-residence/6L1A8383-Enhanced-NR.webp",
      },
      description: [
        `The space features floor-to-ceiling large format tile with mitred edges, a seamless curbless shower with frameless glass, and a wall-mounted vanity and toilet for a clean, floating effect. Oil-rubbed bronze fixtures and trim add contrast and warmth, giving the room a boutique hospitality feel. This level of finish required meticulous planning, material selection, and execution from start to finish.`,
      ],
      gallery: [
        {
          image: "/images/project/knight-residence/6L1A8322-Enhanced-NR.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8374.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8371.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8365-Enhanced-NR.webp",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/knight-residence/6L1A8358-Enhanced-NR.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8344-Enhanced-NR.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8341-Enhanced-NR.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8335-Enhanced-NR.webp",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/knight-residence/6L1A8327-Enhanced-NR.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8324.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8319-Enhanced-NR.webp",
        },
        {
          image: "/images/project/knight-residence/6L1A8386-Enhanced-NR.webp",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      galleryDescription: `Located in Seattle's Fremont neighborhood, this bathroom remodel demonstrates Innate's ability to deliver complex, high-end bathrooms in tight urban footprints. For homeowners seeking to replicate the tranquility and refinement of a luxury spa, our design-build team brings vision and craftsmanship to life.`,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
  },
  "west-seattle-residence": {
    defaultSlides: [
      {
        component: (
          <Slide
            image=""
            video="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_Exterior-Bathroom.webm?alt=media&token=7d3e8e66-5096-4731-ac14-77755a3831c6"
          />
        ),
        delay: 36000,
        projectName: "West Seattle Residence",
        projectType: "Renovation",
      },
    ],
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel, Exterior Renovation",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Fremont - Seattle, Washington" },
        {
          key: "Design Principle",
          value: "Michael Wishart, Owner of Innate",
        },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `Innate NW completed a 5-week bathroom and exterior renovation in West Seattle featuring large-format tile, quartz counters, slate porch tile, and custom railing. See how we resolved unfinished work and delivered a high-quality transformation.`,
      media: {
        desktop: "/images/project/west-seattle-residence/6L1A1087_websize.jpg",
      },
      description: [
        `
        <h2><strong><span style="font-size:17pt;font-family:Arial,sans-serif;">West Seattle Renovation</span></strong></h2> <br/>
<p style="margin-bottom: 5px;"><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Bathroom + Exterior Remodel | General Contracting | 5-Week Turnaround</span></strong></p>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">When a previous contractor left this West Seattle homeowner with an incomplete and frustrating renovation, Innate NW stepped in to finish the job with precision, professionalism, and thoughtful solutions.</span></p>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The client needed a capable general contractor who could not only pick up where things were left off but also take ownership of the full scope&mdash;from interior upgrades to exterior fixes. Over the course of five weeks, our team delivered a fully remodeled bathroom and revitalized exterior with careful attention to craftsmanship and continuity.</span></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Bathroom Remodel</span></strong></h3>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We transformed the outdated bathroom into a refined, spa-like retreat. Large-format, high-grade tile sets a bold tone, complemented by a custom glass shower enclosure and sleek flat-panel cabinetry. Quartz countertops bring warmth and contrast, while a premium Toto bidet adds functionality and comfort.</span></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Exterior Remodel</span></strong></h3>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Outside, the renovation continued with a reimagined front entry. We installed durable slate tile on the new porch, paired with a custom metal railing to bring clean lines and curb appeal. Repairs to the siding and fresh paint unified the home&rsquo;s aesthetic, resolving unfinished work from the previous contractor.</span></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">General Contracting with Vision</span></strong></h3>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This project is a perfect example of what Innate NW does best: managing complex renovations with clear communication, elegant design, and quality execution. From uncovering issues with the original build to coordinating solutions across trades, our team ensured nothing was left behind.</span></p>
        `,
      ],
      gallery: [
        {
          image: "/images/project/west-seattle-residence/6L1A1041_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1052_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1036_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1048_websize.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1046_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1054_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1058_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1065_websize.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1076_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1078_websize.jpg",
        },
        {
          image: "/images/project/west-seattle-residence/6L1A1083_websize.jpg",
        },
      ],
      galleryDescription: ``,
      projectSlider: [
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider1,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
        {
          image: slider2,
          title: "Modern Musa Spa",
          description: "Denver Coloredo",
          url: "#",
        },
      ],
    },
    seo: {
      title: "West Seattle Bathroom & Exterior Remodel | Innate NW Renovation",
      description: `Innate NW completed a 5-week bathroom and exterior renovation in West Seattle featuring large-format tile, quartz counters, slate porch tile, and custom railing. See how we resolved unfinished work and delivered a high-quality transformation.`,
    },
  },
};

export async function generateStaticParams() {
  const keys = Object.keys(projectData);

  return keys.map((key) => ({
    slug: key,
  }));
}

export default async function ProjectPage({ params }: any) {
  // Get the current slug from params and await it
  const { slug } = await params;

  // Check if the slug exists in projectData
  const projectDataForSlug = projectData[slug as keyof typeof projectData];

  // Use the data from projectData if it exists, otherwise fall back to defaults
  const slides = projectDataForSlug?.defaultSlides || defaultSlides;
  const projectDetails =
    projectDataForSlug?.defaultProjectDetails || defaultProjectDetails;

  return (
    <>
      <ManualPageTracker 
        pageName={`project_${params.slug}`}
        additionalData={{
          page_category: "portfolio",
          page_section: "project_detail",
          project_slug: params.slug,
          project_type: "dynamic_route"
        }}
      />
      <Navbar />
      <ProjectSlider slides={slides} />
      <ProjectDescription projectDetails={projectDetails} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Check if the slug exists in projectData
  const projectDataForSlug = projectData[slug as keyof typeof projectData];

  // Safely access seo properties with fallbacks
  const seoTitle = (projectDataForSlug as any)?.seo?.title || "Innate NW";
  const seoDescription = (projectDataForSlug as any)?.seo?.description || "";

  return {
    title: seoTitle,
    description: seoDescription,
  };
}
