import { redirect } from "next/navigation";
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
    title: "South Seattle Kitchen Remodel",
    defaultProjectDetails: {
      projectScope: [
        { key: "Scope", value: "Kitchen Remodel" },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "South Seattle" },
        { key: "Design Principle", value: "Michael Wishart" },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This South Seattle kitchen renovation shows how good design and quality of work can transform a busy family kitchen. The homeowner required better storage and updated finishes. Innate created a kitchen that solved their everyday problems while providing them with the clean and modern look they wanted.`,
      media: {
        desktop: "/images/project/seattle-kitchen/IMG_1568.webp",
      },
      description: [
        `
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Fixing Storage Problems with Custom Kitchen Cabinets</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The old kitchen had inadequate storage. Items got lost in deep cabinets. There was no proper place for spices or baking equipment. Also, pans were stacked on top of each other, making it hard to grab what you needed. To fix these issues, we placed custom-designed <strong>Canyon Creek kitchen cabinets</strong>. The special spice drawers keep ingredients organized and easy to find. The pull-out pan storage helps access everything from sheet pans to big roasting dishes. Vertical dividers in deeper drawers organize baking trays, cutting boards, and serving platters.
</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Materials That Work for Daily Life</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We chose large-format tile and <strong>quartz countertops</strong> for both the island and perimeter counters. The quartz doesn&rsquo;t stain easily and stays looking good with simple cleaning. For a kitchen that gets used every day, quartz made perfect sense.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Adding Comfort with Heated Floors</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Below, we added <strong>radiant heated flooring tile</strong>. This system keeps the floor warm during Seattle&rsquo;s cold months. There will be no more cold feet during early mornings or late evenings when the family spends time in the kitchen. The heating system was carefully installed during the floor prep work.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Completed in Four Weeks</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This kitchen remodel was finished in just four weeks. How? We planned everything in detail before starting. All design choices were finalized, materials were ordered, and deliveries were scheduled.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We worked closely with Canyon Creek during the making of the cabinet. The cabinets arrived exactly when we were ready to install them.</span></p>
<p style="margin-bottom:5px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Our work started efficiently from Our work started efficiently from demolition to electrical and plumbing updates, cabinet installation, countertop work, flooring installation, and finishing touches.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Design Choices That Fit the Family</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Every detail in this kitchen was chosen with the homeowners in mind, from modern cabinet colors to clean hardware, tile patterns, and quartz colors to add visual interest. These weren&rsquo;t random choices or trends. Everything was selected based on what the family liked and how they lived. The result is a kitchen that feels personal and purposeful.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">How This Kitchen Changed Daily Life</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Beyond the new cabinets and fresh finishes, this Seattle kitchen remodel changed how this family experiences their home. The daily morning routines look perfect with organized storage, from meal prep to a space that works for both daily cooking.</span></p>
<p style="margin-bottom:5px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">In this Innate kitchen remodeling project, we emphasizedIn this Innate's kitchen remodeling project, we emphasized the value of knowing how families use their kitchens, designing solutions to meet their needs, picking quality materials that last, and completing work efficiently. From a small kitchen renovation to a larger remodeling project, we bring the same care and skill.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">From a small kitchen renovation to a larger remodeling project, we bring the same care and skill.</span></p>
        `,
      ],
      sideImages: [
        { image: "/images/project/seattle-kitchen/IMG_1567.webp" },
        { image: "/images/project/seattle-kitchen/IMG_1568.webp" },
        { image: "/images/project/seattle-kitchen/IMG_1570.webp" },
      ],
      gallery: [
        {
          image: "/images/project/seattle-kitchen/IMG_1572.webp",
          class: "col-span-3",
        },
      ],
      galleryDescription:
        `<strong>Ready to transform your kitchen?</strong> Contact Innate to discuss your kitchen remodeling designs and how we can create a space that works.`,
      projectSlider,
    },
    seo: {
      title: "South Seattle Kitchen Remodel | Custom Cabinets | Innate",
      description: `South Seattle kitchen renovation featuring custom Canyon Creek cabinetry, quartz countertops, and radiant heated floors. Completed in just four weeks.`,
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
    title: "Palm Springs New Construction",
    defaultProjectDetails: {
      projectScope: [
        { key: "Scope", value: "Residential Design" },
        { key: "Type", value: "New Construction" },
        { key: "Location", value: "Palm Springs, California" },
        
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `his Palm Springs home was one of Innate's exciting new construction projects. The blend of indoor and outdoor living, with contemporary functionality and features, keeps the essence of desert modern living, honoring the region's architectural heritage. We designed and completed the house in just three months. This project demonstrates how to build a custom home with efficient planning and a clear vision.`,
      media: {
        desktop: "/images/project/desert-oasis/D5_Scene 6.webp",
      },
      description: [
        `

<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Desert Modern Design</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The custom home design was inspired by Palm Springs' rich Desert Modernism tradition. At the heart sits an open-concept kitchen, living, and dining area where exposed roof beams create visual interest while maintaining the clean lines characteristic of modern desert architecture.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We added clerestory windows to flood the interior space with natural light. To create a flexible transition between indoor and outdoor spaces, we installed full accordion doors along the main living area.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">The Detached ADU: Flexible Living</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">A key feature of this new home construction is the detached ADU (accessory dwelling unit). Strategically placed on the property, this separate structure serves multiple purposes. The detached ADU includes its own entrance, full bathroom, and kitchen facilities, functioning as a completely self-contained living space. For homeowners, the ADU represents both immediate utility and future opportunity. The ADU's design complements the main home's presence. To create visual flow across the property, we used similar materials, roof lines, and window treatments.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Materials Built for the Desert</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The use of metal roofing across both the main residence and ADU provides practical advantages beyond its striking appearance. In Palm Springs' intense sun and high temperatures, metal roofing reflects heat rather than absorbing it.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We kept the interior finishes refined rather than heavy materials that would not suit the Palm Springs' climate. The home features surfaces and textures that feel light, clean, and conducive to the indoor-outdoor living lifestyle. We also utilized natural materials like wood beams and stone accents.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Three-Month Design Timeline</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">It took us three months to complete the design phase for this custom new construction, which shows the value of communication and decision-making. From initial concept through final construction documents, the compressed timeline required focus and efficiency without sacrificing quality.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We had an early alignment with the home's design philosophy. We tried to maintain a modern desert aesthetic, an indoor-outdoor emphasis, and include an ADU. We also provided a framework that guided subsequent decisions.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">A Modern Desert Home</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Thoughtful design meets desert modernism in this new Palm Springs custom build. By pairing efficient execution with a flexible detached ADU, we've created a home that delivers on today's comfort while securing the homeowner's future goals.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Ready to explore custom home design?<br/><a href="/contact" style="text-decoration:underline;">Contact Innate</a> to discuss your vision for new home construction and how we can create spaces that seamlessly blend indoor and outdoor living.</span></p>
        `,
      ],
      sideImages: [
        { image: "/images/project/desert-oasis/D5_Scene 3.webp" },
        { image: "/images/project/desert-oasis/D5_Scene 4.webp" },
        { image: "/images/project/desert-oasis/D5_Scene 6.webp" },
      ],
      gallery: [
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
      title: "Palm Springs New Home Construction with Detached ADU | Innate",
      description: `Modern Palm Springs new construction featuring open-concept design, indoor-outdoor living, detached ADU, and desert modern architecture. Completed in 3 months.`,
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
    title: "",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel, Natural Disaster Mitigation",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Kent, Washington" },
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
      title: "Gray Bathroom | Innate Renovation",
      description: `A custom kitchenette and clean-lined finishes give the interiors a refined but relaxed atmosphere. Outside, a detached ADU offers a private space for visiting family and serves as a future income opportunity, reflecting a thoughtful approach to multi-functional design. Metal roofing installation, natural light, and the open floor plan contribute to both energy efficiency and long-term flexibility for the homeownerThe new bathroom design features floor-to-ceiling large format tile, a curbless walk-in shower with custom glass, and a smart mirror that enhances both function and style. A built-in hot tub adds a premium touch, while clean lines and high-end finishes bring cohesion to the space. What began as a remediation project evolved into a total reimagining of the master bath.`,
    },
  },
  "bellevue-bathroom": {
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/bellevue-bathroom/bellevue_main.jpg"
            video={null}
          />
        ),
        delay: 36000,
        projectName: "Bellevue Bathroom Remodel",
        projectType: "Renovation",
      },
    ],
    title: "Design and Construction Projects in Bellevue",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Full Bathroom Remodel (All Bathrooms)",
        },
        { key: "Type", value: "Renovation, Modern Minimalist Design" },
        { key: "Location", value: "Bellevue, Washington" },
        {
          key: "Client",
          value: "Architect Homeowner",
        },
        {
          key: "Design Style",
          value: "European-Inspired, Minimalist",
        },
        {
          key: "Timeline",
          value: "2 Months",
        },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        {
          key: "General Contractor",
          value: "Innate",
        },
      ],
      scopedescription: `This Bellevue bathroom renovation exemplifies how simplicity and precision can redefine a home’s atmosphere. Originally planned as a single-bathroom remodel, the project quickly grew to encompass every bathroom in the house after our team’s initial transformation impressed the homeowner—an architect with a distinct vision for clean, European-inspired design.`,
      media: {
        desktop: "/images/project/bellevue-bathroom/bb8.jpg",
      },
      description: [
        `The renovation focused on creating a modern, minimalist aesthetic defined by sleek lines, neutral tones, and high-quality materials. Each space was carefully planned to feel open, serene, and effortlessly functional, showcasing the balance between form and purpose that defines European design philosophy. During construction, our team also addressed existing water damage, reinforcing structural integrity and implementing modern waterproofing solutions to ensure longevity. Every detail—from fixture placement to material transitions—was executed with the precision demanded by architectural standards.`,
      ],
      gallery: [
        {
          image: "/images/project/bellevue-bathroom/bb1.jpg",
        },
        {
          image: "/images/project/bellevue-bathroom/bb2.jpg",
        },
        {
          image: "/images/project/bellevue-bathroom/bb3.jpg",
        },
        {
          image: "/images/project/bellevue-bathroom/bb4.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/bellevue-bathroom/bb5.jpg",
        },
        {
          image: "/images/project/bellevue-bathroom/bb11.jpg",
        },
        {
          image: "/images/project/bellevue-bathroom/bb9.jpg",
        },
      ],
      galleryDescription: `The result is a cohesive series of bathrooms that feel timeless, intentional, and refined. Completed within two months, this Bellevue remodel reflects Innate-NW’s ability to collaborate closely with discerning clients, translating vision into modern craftsmanship that enhances both daily living and long-term value.`,
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
      title:
        "Bellevue Bathroom Remodel | Minimalist European Modern Renovation",
      description: `Discover how Innate transformed a Bellevue home with a European-inspired modern refresh. Originally a single-bath remodel, the project expanded to update all bathrooms with minimalist design, refined finishes, and water damage restoration—all completed in just two months.`,
    },
  },
  "wheat-ridge-adu": {
    seo: {
      title: "Gray BathroWheat Ridge ADU | Innate Renovation",
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
    title: "",
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
      title: "Kung FU Tea x TKK | Innate Renovation",
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
    title: "",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Commercial Design",
        },
        { key: "Type", value: "New Construction – Tenant Improvement" },
        { key: "Location", value: "Renton, Washington" },
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
      title: "Madrona Remodel | Innate Renovation",
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
    title: "",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Kitchen Remodel",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Madrona – Seattle, Washington" },
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
      title: "Shoreline Second Story Addition & Kitchen Remodel | Innate",
      description: `Here’s a comprehensive Shoreline home addition featuring a new second story, kitchen remodel, TimberTech deck, and StruXure louvered pergola. Learn more here.`,
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
    title: "Shoreline Home Addition: Second Story, Kitchen Remodel & Outdoor Living",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Kitchen Remodel, Outdoor Living, Residential Design",
        },
        { key: "Type", value: "Renovation / New Construction" },
        { key: "Location", value: "Shoreline, Washington" },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This Shoreline home renovation and addition project transformed a charming one-story residence into a spacious, multi-level family home. Designed for a young couple preparing for the next chapter of life, Innate led the design and construction of a new upper floor, full kitchen remodel, and outdoor living upgrades. The result is a warm, modern space that blends everyday function with lasting quality.`,
      media: {
        desktop:
          "/images/project/shoreline-residence/D5_front 01_20240625_010002.webp",
      },
      description: [
        `
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This Shoreline home transformation shows how a complete renovation can solve multiple needs. It can expand living space, update key rooms, and create functional outdoor areas. Innate designed this project for a young couple planning for their growing family. This project combined a new second-story addition, a full kitchen remodel, and outdoor living upgrades into one coordinated renovation.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Building Up: The Second-Story Addition</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The existing single-story home was working well initially, but later, their house didn't have the space as their family grew. Instead of moving to a bigger house, the homeowners chose to build a home addition, which is a full second story with bedrooms, bathrooms, and flexible living areas while staying in their neighborhood.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The second-story addition required careful structural planning. We evaluated the existing foundation and framing to check if reinforcement was needed to support the extra weight. The roofline transitions, exterior materials, and window placements were designed to make the addition feel intentional.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Kitchen Remodel for a Growing Family</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The original kitchen was sized for the smaller single-story home. We were required to match the expanded residence. This kitchen remodel addressed both functional needs and visual integration with the newly added spaces. We designed custom cabinetry to maximize storage, which was essential for a growing family.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We chose materials that feature durability and style. From countertops to backsplash and flooring, the chosen materials can handle daily use while contributing to the warm, modern aesthetic throughout the home. We also integrated new appliances in the kitchen.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Creating Year-Round Outdoor Living Space</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The outdoor part of this Shoreline home renovation was focused on extending living space beyond the walls. We replaced the old, deteriorating wood deck with a TimberTech composite deck, which provides a low-maintenance platform. It also performs well through Seattle's wet winters and dry summers. The composite decking resists moisture, won't splinter or rot, needs no staining or sealing, and looks good year after year with simple cleaning.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The StruXure louvered pergola deck transformed the fair-weather space into a four-season outdoor room. The adjustable louvers control the sun and rain. The French doors or large sliding glass panels connect the interior and exterior spaces. It makes the deck feel like a natural extension of the home.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Interior Finishes That Connect Everything</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Throughout this home addition, finish selections create visual flow between the original and new spaces. We refinished the hardwood flooring in the first-floor living areas. Where new flooring was installed, we matched existing floors to maintain consistency. The color palettes, trim details, and hardware were coordinated throughout.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Project Timeline and Communication</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Managing this second-story addition project with a kitchen remodel and outdoor construction, we required detailed scheduling and clear communication. All the material lead times, permit approvals, inspections, and trade coordination needed careful planning to keep work moving.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Innate maintained close contact with the homeowners throughout, keeping them informed about progress and addressing questions. For a young couple living through a major renovation while planning their family's future, clear communication made the process manageable.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">A Home Ready for What's Next</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This Shoreline home renovation delivered the space to grow into, a kitchen that works as the home's hub, and outdoor areas that extend their living space most of the year, which is what the couple needed. The project shows how complete home additions and renovations can transform a property without moving.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;"><strong>Ready to expand your home?</strong><br/><a href="/contact" style="text-decoration:underline;">Contact Innate</a> to discuss your second-story addition, kitchen remodel, or home renovation plans.</span></p>
        `,
      ],
      sideImages: [
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
      gallery: [],
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
  
  "freitas-kitchen-bathroom": {
    seo: {
      title:
        "Freitas Bathroom & Kitchen Remodel in Capitol Hill | Innate",
      description: `Explore this Capitol Hill apartment bathroom renovation featuring marble mosaic tile, a wall-mounted vanity, and space-saving design. Book your Seattle remodel.`,
    },
    title: "Freitas Bathroom & Kitchen Remodel – Capitol Hill, Seattle",
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/freitas-kitchen/freitas-kitchen_hero.webp"
            video=""
          />
        ),
        delay: 36000,
        projectName: "Freitas Bathroom",
        projectType: "Renovation",
      },
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
      {
        component: (
          <Slide
            image="/images/project/freitas-bathroom/6L1A8451-Enhanced-NR.webp"
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
          value: "Bathroom Remodel, Kitchen Remodel, Residential Design",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Capitol Hill – Seattle, Washington" },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `Located on the top floor of a historic Capitol Hill apartment, this full renovation included a bathroom remodel, kitchen updates, and residential design work, transforming a small, aging space into a refined and functional urban retreat. Innate led both the design and construction, carefully navigating the challenges of a vintage building—including carrying all materials up multiple flights of stairs—while maintaining respect for the building and its neighbors.`,
      media: {
        desktop: "/images/project/freitas-kitchen/6L1A1563_websize.jpg",
      },
      description: [
        `
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Handling Urban Renovation Challenges</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We faced unique challenges while renovating this bathroom in one of Capitol Hill's historic apartments. For every material, fixture, and bathroom renovation tool, we had to travel up multiple flights of stairs. There were no freight elevators and no loading docks—just careful planning and manual carrying of everything from marble tile bathroom materials to the wall-mounted vanity.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We scheduled deliveries to minimize trips and coordinated with building management on work hours, keeping the schedules of neighbors in mind. These considerations add complexity to apartment bathroom renovation projects, but managing them prevented conflicts and kept work moving smoothly.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Maximizing Function in Tight Spaces</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This compact bathroom and kitchen remodel shows that space-efficient design principles are essential in Capitol Hill's small apartments. The original layout felt dated, with a bulky vanity and a wasted shower space. We installed the wall-mounted vanity, which freed up space at floor level. We replaced a space-hogging swinging door with sliding glass shower doors.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Materials That Add Character and Last</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Marble mosaic tile anchors the bathroom's refined look while handling practical needs. The small mosaic format provides excellent slip resistance in wet areas. We added gold bathroom fixtures throughout to create warmth and match the historic apartment's character. We applied brass-toned selections, rather than trendy finishes that might feel dated soon. These material choices weren't about following trends but creating a bathroom that fits its setting.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Innate preserved existing door casings and window trim, refinishing rather than replacing elements in good condition. We transitioned new tile work to existing finishes, maintaining clean lines throughout. This approach sets thoughtful apartment renovations apart from generic updates that ignore their surroundings. The bathroom now functions smoothly, like a part of a historic Capitol Hill residence.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Carefully Selected Fixtures</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We selected the fixtures from West Elm and Rejuvenation. These retailers have balanced design quality with practical options. West Elm provided contemporary pieces, and Rejuvenation offered historically appropriate lighting and hardware.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">These sources provided fixtures that scaled right in a compact bathroom design. The oversized elements that work in spacious suburban bathrooms dominate this Seattle bathroom remodel. The selection process involved evaluating dozens of options to find pieces that worked together while meeting practical requirements.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Experience with Urban Apartment Projects</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This Capitol Hill renovation showcases Innate's ability to deliver high-quality bathroom and kitchen remodels in tight urban settings. Whether working within a small condo or a historic apartment, our team brings thoughtful design, precision execution, and elevated finishes to every project.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Ready to transform your small apartment bathroom? <a href="/contact" style="text-decoration:underline;">Contact Innate</a> to discuss your bathroom remodel ideas.</span></p>
        `,
      ],
      sideImages: [
        { image: "/images/project/freitas-kitchen/6L1A1556_websize.jpg" },
        { image: "/images/project/freitas-kitchen/6L1A1562_websize.jpg" },
        { image: "/images/project/freitas-kitchen/6L1A1577_websize.jpg" },
      ],
      gallery: [
        {
          image: "/images/project/freitas-kitchen/6L1A1603_websize.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
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
    title: "",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "ADU, New Construction",
        },
        { key: "Type", value: "Attached, ADA-Compliant" },
        { key: "Location", value: "Wedgewood, Seattle" },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This Wedgewood Seattle ADU new construction demonstrates how thoughtful design and expert craftsmanship can create a home addition that balances beauty, function, and accessibility. Built as an attached unit for multi-generational living, this project was designed specifically with ADA and mobility needs in mind—ensuring comfort, safety, and ease of use for every family member.
From the exterior, the home combines durable Hardie siding with natural cedar shake accents, creating a timeless yet modern look.`,

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
      title:
        "Historic Craftsman Bathroom Remodel Magnolia Seattle | Innate",
      description: `A Magnolia bathroom renovation project for a Craftsman home. We restored a water-damaged bathroom with marble tile, brass fixtures, & period-appropriate design.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/magnolia-bathroom/mag_banner.jpg"
            video=""
          />
        ),
        delay: 36000,
        projectName: "Magnolia, Seattle",
        projectType: "Bathroom Remodel",
      },
    ],
    title: "Magnolia Seattle Bathroom Remodel",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel",
        },
        { key: "Type", value: "Renovation, Historic Preservation" },
        { key: "Location", value: "Magnolia, Seattle" },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `This Magnolia bathroom renovation shows how structural problems can be fixed while keeping a home historic. After the water damage ruined this Craftsman home’s original bathroom, we completed a full bathroom remodel. We also kept the home’s early 1900s look while adding durable materials and updated systems.`,

      description: [
        `
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Fixing Water Damage First</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We started by checking all the structural damage. We found that water had affected the framing, subfloor, and wall cavities. We had to remove everything that was damaged before any new work could start. Our team carefully documented original details during demolition. We took photos of trim, door frames, and other elements that would help with restoration decisions.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">During structural repairs, the compromised floor joists and wall framing were fixed. The bathroom now supports new finishes and fixtures properly. We added strong waterproofing systems throughout. It was important since water damage caused this problem in the first place. We continued working on professional-grade membranes, and proper drainage and moisture barriers were installed at every vulnerable spot, from the shower pan to wall assemblies to floor transitions.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This foundation work is invisible in the finished bathroom, but it was the most necessary part of this Seattle bathroom remodel. Without proper structure and moisture protection, even beautiful finishes wouldn’t have worked.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Materials That Match Craftsman Style</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">In historic home renovation, we focused on matching the home’s original look. We chose marble tile with realistic stone patterns and soft colors, which feel authentic while being durable enough.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Later, the custom frameless glass was installed. While not historically accurate to the early Craftsman homes (which rarely had showers). The warm brass fixtures throughout this Craftsman bathroom provide the finishing touch that connects modern updates to historic style.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">Keeping Original Details</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Beyond materials, this bathroom renovation prioritized preserving original architectural elements. We protected the existing window trim, door casings, and baseboard profiles during the construction. We didn’t change the ceiling height, window placement, or overall room size. We worked within the existing footprint without expanding or changing things.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">One-Month Timeline</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We completed this bathroom remodel in Seattle in one month. It required detailed planning, structural repairs, waterproofing installation, custom tile work, and finish carpentry. This all work needed careful timing, so we created a construction schedule that kept everyone moving efficiently without compromising quality.</span></p>
<h2 class="font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px] mt-6 mb-2">The Result: Character Kept, Function Improved</h2>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">In this Magnolia bathroom renovation, we remodeled the damaged space into a bathroom that would work reliably for a long time. The marble tile, brass fixtures, and attention to architectural details created a craftsman’s style space.</span></p>
<p style="margin-bottom:10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;"><strong>Ready to renovate your historic home’s bathroom?</strong><br/><a href="/contact" style="text-decoration:underline;">Contact Innate</a> to discuss your bathroom remodel today.</span></p>
        `,
      ],
      sideImages: [
        { image: "/images/project/magnolia-bathroom/6L1A0738_websize.webp" },
        { image: "/images/project/magnolia-bathroom/6L1A0741_websize.webp" },
        { image: "/images/project/magnolia-bathroom/6L1A0744_websize.webp" },
      ],
      gallery: [
        {
          image: "/images/project/magnolia-bathroom/6L1A0731_websize.webp",
          class: "col-span-3 aspect-[4/2]",
        },

        {
          image: "/images/project/magnolia-bathroom/6L1A0751_websize.webp",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      
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
      title: "Knight Residence | Innate Renovation",
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
    title: "",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel, Residential Design",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Fremont – Seattle, Washington" },
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
    title: "",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Bathroom Remodel, Exterior Renovation",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Fremont - Seattle, Washington" },
        {
          key: "Photographer",
          value: "Nicolai Buccino",
        },
        { key: "General Contractor", value: "Innate" },
      ],
      scopedescription: `Innate completed a 5-week bathroom and exterior renovation in West Seattle featuring large-format tile, quartz counters, slate porch tile, and custom railing. See how we resolved unfinished work and delivered a high-quality transformation.`,
      media: {
        desktop: "/images/project/west-seattle-residence/6L1A1087_websize.jpg",
      },
      description: [
        `
        <h2><strong><span style="font-size:17pt;font-family:Arial,sans-serif;">West Seattle Renovation</span></strong></h2> <br/>
<p style="margin-bottom: 5px;"><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Bathroom + Exterior Remodel | General Contracting | 5-Week Turnaround</span></strong></p>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">When a previous contractor left this West Seattle homeowner with an incomplete and frustrating renovation, Innate stepped in to finish the job with precision, professionalism, and thoughtful solutions.</span></p>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">The client needed a capable general contractor who could not only pick up where things were left off but also take ownership of the full scope&mdash;from interior upgrades to exterior fixes. Over the course of five weeks, our team delivered a fully remodeled bathroom and revitalized exterior with careful attention to craftsmanship and continuity.</span></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Bathroom Remodel</span></strong></h3>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">We transformed the outdated bathroom into a refined, spa-like retreat. Large-format, high-grade tile sets a bold tone, complemented by a custom glass shower enclosure and sleek flat-panel cabinetry. Quartz countertops bring warmth and contrast, while a premium Toto bidet adds functionality and comfort.</span></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Exterior Remodel</span></strong></h3>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">Outside, the renovation continued with a reimagined front entry. We installed durable slate tile on the new porch, paired with a custom metal railing to bring clean lines and curb appeal. Repairs to the siding and fresh paint unified the home&rsquo;s aesthetic, resolving unfinished work from the previous contractor.</span></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">General Contracting with Vision</span></strong></h3>
<p style="margin-bottom: 10px;"><span style="font-size:11pt;font-family:Arial,sans-serif;">This project is a perfect example of what Innate does best: managing complex renovations with clear communication, elegant design, and quality execution. From uncovering issues with the original build to coordinating solutions across trades, our team ensured nothing was left behind.</span></p>
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
      title: "West Seattle Bathroom & Exterior Remodel | Innate Renovation",
      description: `Innate completed a 5-week bathroom and exterior renovation in West Seattle featuring large-format tile, quartz counters, slate porch tile, and custom railing. See how we resolved unfinished work and delivered a high-quality transformation.`,
    },
  },
  "enumclaw-full-home-remodel": {
    seo: {
      title: "Enumclaw Full Home Remodel & Renovation | Design-Build by Innate",
      description: `A full home remodel in Enumclaw featuring a craftsman-inspired design, redesigned kitchen, living spaces, and custom finishes after water damage. Completed by Innate.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image=""
            video="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/enumclaw.webm?alt=media&token=0477f2bb-4bb9-4df4-94b5-130347b7fd4c"
          />
        ),
        delay: 36000,
        projectName: "Freitas Bathroom",
        projectType: "Renovation",
      },
    ],
    title: "Design and Construction Projects in Enumclaw",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value: "Full Home Remodel, Design-Build",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Enumclaw, Washington" },
        {
          key: "Style",
          value: "Craftsman / Classic",
        },
        {
          key: "Timeline",
          value: "3 Months",
        },
        { key: "General Contractor & Designer", value: "Innate" },
        { key: "Photographer", value: "Akiha Marketing" },
      ],
      scopedescription: `After extensive water damage destroyed the home’s bathrooms, this Enumclaw full home remodel became an opportunity to thoughtfully reimagine a house that had never been renovated in over 30 years. Innate led the project as a design-build partner, guiding the client through a complete transformation of her first—and only—home.`,
      media: {
        desktop:
          "/images/project/enumclaw-full-home-remodel/6L1A1657_websize.jpg",
      },
      description: [
        `The renovation included a full redesign of the kitchen, entryway, living room, and dining room, bringing cohesion, warmth, and functionality to the entire home. Inspired by craftsman and classic design principles, the remodel introduced all new doors, trim, lighting, paint, and finishes, creating a timeless aesthetic that respects the home’s character while elevating it for modern living.
`,
      ],
      gallery: [
        {
          image:
            "/images/project/enumclaw-full-home-remodel/6L1A1641_websize.jpg",
        },
        {
          image:
            "/images/project/enumclaw-full-home-remodel/6L1A1633_websize.jpg",
        },
        {
          image:
            "/images/project/enumclaw-full-home-remodel/6L1A1677_websize.jpg",
        },
        {
          image:
            "/images/project/enumclaw-full-home-remodel/enumclaw2.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image:
            "/images/project/enumclaw-full-home-remodel/6L1A1681_websize.jpg",
        },
        {
          image:
            "/images/project/enumclaw-full-home-remodel/6L1A1687_websize.jpg",
        },
        {
          image:
            "/images/project/enumclaw-full-home-remodel/6L1A1694_websize.jpg",
        },
      ],
      galleryDescription: `Completed over the course of three months, this project reflects Innate’s commitment to craftsmanship, care, and client trust—especially when renovating a home filled with decades of personal history. The result is a beautifully renewed space designed to support the next chapter of living with comfort and pride.`,
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
  "woodinville-primary-and-guest-bathroom": {
    seo: {
      title:
        "Woodinville Bathroom Remodel | Primary & Guest Bath Renovation by Innate",
      description: `A Woodinville bathroom remodel featuring a redesigned primary bath with curbless shower, slate tile, freestanding tub, and high-end Rejuvenation fixtures.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image=""
            video="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Woodinville_bathroom.webm?alt=media&token=ba204823-d94b-4239-bcb2-0919b702ca40"
          />
        ),
        delay: 36000,
        projectName: "Freitas Bathroom",
        projectType: "Renovation",
      },
    ],
    title: "Design and Construction Projects in Woodinville",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value:
            "Primary Bathroom Remodel, Guest Bathroom Remodel, Design-Build",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Woodinville, Washington" },
        {
          key: "Features",
          value:
            "Curbless Shower, Slate Tile, Freestanding Tub, Frameless Glass, Wall-Mounted Fixtures",
        },
        {
          key: "Design & Construction",
          value: "Innate",
        },
        { key: "Photographer", value: "Akiha Marketing" },
      ],
      scopedescription: `This Woodinville bathroom remodel included the renovation of both the primary (master) bathroom and a guest bath, elevating the home with a refined, spa-like feel and significantly improved functionality. Innate served as the design-build partner, guiding the project from concept through construction.
`,
      media: {
        desktop: "/images/project/woodinville/6L1A1198_websize2.webp",
      },
      description: [
        `The primary bathroom was fully reimagined with a smarter layout designed to improve flow, openness, and everyday use. Key features include a curbless shower, slate tile flooring, frameless glass, and wall-mounted fixtures that create a clean, modern aesthetic. A freestanding tub anchors the space, adding a sense of calm and luxury.
`,
      ],
      gallery: [
        {
          image: "/images/project/woodinville/6L1A1218_websize.jpg",
        },
        {
          image: "/images/project/woodinville/6L1A1214_websize.jpg",
        },
        {
          image: "/images/project/woodinville/6L1A1217_websize.jpg",
        },
        {
          image: "/images/project/woodinville/6L1A1232_websize.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/woodinville/6L1A1241_websize.jpg",
        },
        {
          image: "/images/project/woodinville/6L1A1247_websize.jpg",
        },
        {
          image: "/images/project/woodinville/6L1A1255_websize.jpg",
        },
        {
          image: "/images/project/woodinville/6L1A1252_websize.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
      ],
      galleryDescription: `Both bathrooms feature high-end finishes and fixtures from Rejuvenation, reinforcing a cohesive, timeless design throughout the home. The result is a thoughtful renovation that balances elevated materials with practical design—tailored to how the homeowners live.
`,
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
  "kenmore-bathroom": {
    seo: {
      title:
        "Kenmore Bathroom & Laundry Remodel | Design-Build Renovation by Innate",
      description: `A Kenmore renovation featuring two bathroom remodels, two closet upgrades, and a redesigned laundry to support an ADU—maximizing space without changing the home’s footprint.`,
    },
    defaultSlides: [
      {
        component: (
          <Slide
            image="/images/project/kenmore-bathroom/6L1A1295_websize.jpg"
            video=""
          />
        ),
        delay: 36000,
        projectName: "Freitas Bathroom",
        projectType: "Renovation",
      },
    ],
    title: "Design and Construction Projects in Kenmore",
    defaultProjectDetails: {
      projectScope: [
        {
          key: "Scope",
          value:
            "Bathroom Remodels (2), Closet Remodels (2), Laundry Remodel, ADU-Oriented Reconfiguration",
        },
        { key: "Type", value: "Renovation" },
        { key: "Location", value: "Kenmore, Washington" },
        {
          key: "Approach",
          value: "Design-Build",
        },
        {
          key: "Focus",
          value: "Space Optimization, Modernization, Rental Readiness",
        },
        { key: "Design & Construction", value: "Innate" },
        { key: "Photographer", value: "Akiha Marketing" },
      ],
      scopedescription: `This Kenmore renovation focused on maximizing space, functionality, and long-term flexibility—without changing the footprint of the home. Innate led the project as a design-build partner, coordinating two bathroom remodels, two closet remodels, and a full laundry reconfiguration to support a future ADU rental opportunity.
`,
      media: {
        desktop: "/images/project/kenmore-bathroom/6L1A1307_websize.jpg",
      },
      description: [
        `Through thoughtful planning and spatial reorganization, the primary bathroom was redesigned to feel more open and spacious, while the laundry was relocated to a more functional area that better served the household and the downstairs ADU layout. By reclaiming underutilized space, the team was able to increase the size of the walk-in closet, improving everyday usability without adding square footage.
`,
      ],
      gallery: [

        {
          image: "/images/project/kenmore-bathroom/6L1A1304_websize.jpg",
        },
        {
          image: "/images/project/kenmore-bathroom/kb2.jpg",
        },
        {
          image: "/images/project/kenmore-bathroom/kb3.jpg",
        },

        {
          image: "/images/project/kenmore-bathroom/6L1A1290_websize.jpg",
          class: "col-span-3 aspect-[4/2]",
        },
        {
          image: "/images/project/kenmore-bathroom/kl2.jpg",
        },
        {
          image: "/images/project/kenmore-bathroom/6L1A1280_websize.jpg",
        },
        {
          image: "/images/project/kenmore-bathroom/6L1A1319_websize.jpg",
        },

        // {
        //   image:
        //     "/images/project/kenmore-bathroom/6L1A1687_websize.jpg",
        // },
        // {
        //   image:
        //     "/images/project/kenmore-bathroom/6L1A1694_websize.jpg",
        // },
      ],
      galleryDescription: `Both bathrooms were fully modernized with updated fixtures, finishes, and layouts, bringing a clean, contemporary feel throughout the home. This project highlights Innate’s strength in smart renovation strategy—unlocking more value, comfort, and flexibility from the space clients already have.
`,
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
};

export async function generateStaticParams() {
  const keys = Object.keys(projectData);

  return keys.map((key) => ({
    slug: key,
  }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Get the current slug from params and await it
  // Await params first
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  // Redirect legacy slugs
  if (slug === "freitas-bathroom") {
    redirect("/project/freitas-kitchen-bathroom");
  }

  // Check if the slug exists in projectData
  const projectDataForSlug = projectData[slug as keyof typeof projectData];

  // Use the data from projectData if it exists, otherwise fall back to defaults
  const slides = projectDataForSlug?.defaultSlides || defaultSlides;
  const projectDetails =
    projectDataForSlug?.defaultProjectDetails || defaultProjectDetails;

  return (
    <>
      <ManualPageTracker
        pageName={`project_${slug}`}
        additionalData={{
          page_category: "portfolio",
          page_section: "project_detail",
          project_slug: slug,
          project_type: "dynamic_route",
        }}
      />
      <Navbar />
      <ProjectSlider slides={slides} title={projectDataForSlug?.title || ""} />
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
  const seoTitle =
    (projectDataForSlug as any)?.seo?.title || "Innate Project";
  const seoDescription =
    (projectDataForSlug as any)?.seo?.description ||
    "Explore this custom design and construction project by Innate in Seattle.";

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `https://innate-aec.com/project/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://innate-aec.com/project/${slug}`,
      siteName: "Innate",
      images: [
        {
          url: "/images/innate-nw.jpg",
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
    },
  };
}
