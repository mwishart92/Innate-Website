export interface MediaItem {
  src: string | string[];
  type: "image" | "video";
  mobilePlaceholder?: string;
}

export interface SlideData {
  hidden?: boolean;
  title: string;
  location: string;
  description?: string;
  url?: string;
  media?: MediaItem[];
  hover?: {
    title: string;
    subTitle: string;
  };
}

export const slidesData: SlideData[] = [
  {
    title: "Sammamish Kitchen Remodel",
    location: "Sammamish, Washington",
    url: "/project/sammamish-kitchen-remodel",
    media: [
      {
        src: "/images/project/sammamish-kitchen-remodel/6L1A9810-hero.jpg",
        type: "image",
      },
    ],
    hover: {
      title: "Sammamish Kitchen Remodel | Innate",
      subTitle: `
`,
    },
  },
  {
    title: "Issaquah Primary Bathroom & Wet Room Renovation",
    location: "Issaquah, Washington",
    url: "/project/issaquah-bathroom",
    media: [
      {
        src: "/images/project/issaquah-bathroom/issaquah_bathroom_hero.jpg",
        type: "image",
      },
    ],
    hover: {
      title:
        "Issaquah Primary Bathroom Remodel | Custom Wet Room & Walk-In Closet",
      subTitle: `This Issaquah primary bathroom remodel was designed to create a more functional layout while giving the space a refined, modern feel. Every element was thoughtfully selected to improve how the homeowners use the bathroom each day, from the custom storage solutions to the integrated wet room.
`,
    },
  },
  {
    title: "Bellevue Skylit Living Space Renovation",
    location: "Bellevue, Washington",
    url: "/project/bellevue-skylit",
    media: [
      { src: "/images/project/bellevue-skylit/6L1A9481.jpg", type: "image" },
      { src: "/images/project/bellevue-skylit/6L1A9474.jpg", type: "image" },
    ],
    hover: {
      title: "Design and Construction Projects in Kenmore | Bathroom Remodel",
      subTitle: `A Kenmore renovation featuring two bathroom remodels, two closet upgrades, and a redesigned laundry to support an ADU—maximizing space without changing the home’s footprint.
`,
    },
  },
  {
    title: "North Seattle Giveaway Bathroom Remodel",
    location: "Seattle, Washington",
    url: "/project/north-seattle-giveaway",
    media: [
      {
        src: "/images/project/north-seattle-giveaway/6L1A9177.jpg",
        type: "image",
      },
      {
        src: "/images/project/north-seattle-giveaway/6L1A9179.jpg",
        type: "image",
      },
    ],
    hover: {
      title: "North Seattle Giveaway Bathroom Remodel | Bathroom Remodel",
      subTitle: `This bathroom remodel was one of the most meaningful projects our team has completed. The renovation was created for a homeowner who truly needed a safer, more comfortable, and more functional bathroom, and our goal was to improve her day-to-day quality of life while creating a space she could enjoy for years to come.
`,
    },
  },
  {
    title: "Bellevue Bathroom Remodel",
    location: "Bellevue, Washington",
    url: "/project/bellevue-bathroom",
    media: [
      {
        src: "/images/project/bellevue-bathroom/bellevue_main.jpg",
        type: "image",
      },
    ],
    hover: {
      title:
        "Bellevue Bathroom Remodel | Minimalist European Modern Renovation",
      subTitle: `Discover how Innate-NW transformed a Bellevue home with a European-inspired modern refresh. Originally a single-bath remodel, the project expanded to update all bathrooms with minimalist design, refined finishes, and water damage restoration—all completed in just two months.`,
    },
  },
  {
    title: "Kenmore Modern Bathroom",
    location: "Kenmore, Washington",
    url: "/project/kenmore-bathroom",
    media: [
      {
        src: "/images/project/kenmore-bathroom/6L1A1295_websize.jpg",
        type: "image",
      },
    ],
    hover: {
      title:
        "Kenmore Bathroom & Laundry Remodel | Design-Build Renovation by Innate",
      subTitle: `A Kenmore renovation featuring two bathroom remodels, two closet upgrades, and a redesigned laundry to support an ADU—maximizing space without changing the home’s footprint.`,
    },
  },
  {
    title: "Woodinville Primary and Guest Bathroom Remodel",
    location: "Woodinville, Washington",
    url: "/project/woodinville-primary-and-guest-bathroom",
    media: [
      {
        src: "/images/project/woodinville/6L1A1232_websize.jpg",
        type: "image",
      },
    ],
    hover: {
      title:
        "Woodinville Primary and Guest Bathroom Remodel | Design-Build Renovation by Innate",
      subTitle: `A Woodinville renovation featuring a redesigned primary bath with curbless shower, slate tile, freestanding tub, and high-end Rejuvenation fixtures.`,
    },
  },
  {
    title: "Enumclaw Full Home Remodel",
    location: "Enumclaw, Washington",
    url: "/project/enumclaw-full-home-remodel",
    media: [
      {
        src: "/images/project/enumclaw-full-home-remodel/enumclaw2.jpg",
        type: "image",
      },
    ],
    hover: {
      title: "Enumclaw Full Home Remodel | Design-Build Renovation by Innate",
      subTitle: `After extensive water damage destroyed the home’s bathrooms, this Enumclaw full home remodel became an opportunity to thoughtfully reimagine a house that had never been renovated in over 30 years. Innate led the project as a design-build partner, guiding the client through a complete transformation of her first—and only—home.`,
    },
  },
  {
    title: "Freitas Bathroom & Kitchen Remodel",
    location: "Capitol Hill – Seattle, Washington",
    url: "/project/freitas-kitchen-bathroom",
    media: [
      {
        src: "/images/project/freitas-kitchen/freitas-kitchen_hero.webp",
        type: "image",
      },
    ],
    hover: {
      title:
        "Freitas Kitchen & BathroomRemodel | Design-Build Renovation by Innate",
      subTitle: `This Capitol Hill kitchen remodel was completed in just four weeks, with every detail thoughtfully considered. Custom Canyon Creek cabinetry with built-in inserts, quartz countertops, and radiant heated floors created a space that feels both modern and personal. Our team worked closely with the homeowners to ensure the kitchen balanced beauty with daily function.`,
    },
  },
  {
    title: "West Seattle Residence",
    location: "Fremont - Seattle, Washington",
    url: "/project/west-seattle-residence",
    media: [
      {
        src: "/images/project/west-seattle-residence/6L1A1041_websize.jpg",
        type: "image",
      },
      {
        src: "/images/project/west-seattle-residence/6L1A1052_websize.jpg",
        type: "image",
      },
      {
        src: "/images/project/west-seattle-residence/6L1A1087_websize.jpg",
        type: "image",
      },
    ],
    hover: {
      title:
        "West Seattle Renovation | Bathroom + Exterior Remodel | General Contracting",
      subTitle: `Innate delivered a complete transformation in just five weeks, turning the bathroom into a spa-like retreat and reimagining the home’s exterior with durable finishes, refreshed curb appeal, and thoughtful design. This West Seattle renovation showcases our expertise in general contracting, bathroom remodeling, and exterior renovations from start to finish.`,
    },
  },
  {
    title: "South Seattle Kitchen",
    location: "South Seattle",
    url: "/project/south-seattle-kitchen",
    media: [
      { src: "/images/project/seattle-kitchen/IMG_1568.webp", type: "image" },
      { src: "/images/project/seattle-kitchen/IMG_1567.webp", type: "image" },
      { src: "/images/project/seattle-kitchen/IMG_1570.webp", type: "image" },
      { src: "/images/project/seattle-kitchen/IMG_1572.webp", type: "image" },
    ],
    hover: {
      title:
        "South Seattle Kitchen Renovation | Custom Cabinetry & Modern Design",
      subTitle: `This South Seattle kitchen remodel was completed in just four weeks, with every detail thoughtfully considered. Custom Canyon Creek cabinetry with built-in inserts, quartz countertops, and radiant heated floors created a space that feels both modern and personal. Our team worked closely with the homeowners to ensure the kitchen balanced beauty with daily function.`,
    },
  },
  {
    title: "Magnolia Kitchen & Bathroom Remodel",
    location: "Magnolia, Seattle",
    url: "/project/magnolia-kitchen-bathroom",
    media: [
      {
        src: "/images/project/magnolia-kitchen-bathroom/6L1A7643.jpg",
        type: "image",
      },
    ],
    hover: {
      title: "Magnolia Kitchen Remodel Seattle | Innate Design & Build",
      subTitle: `Magnolia kitchen remodel in Seattle by Innate Design & Build featuring restored wood cabinetry, new backsplash, and a custom coffee nook. Thoughtful craftsman kitchen and bathroom renovation completed in 1 month.`,
    },
  },
  {
    title: "Shoreline Residence",
    location: "Shoreline, Washington",
    url: "/project/shoreline-residence",
    media: [
      {
        src: "/images/project/shoreline-residence/COVER-D5_a7-2_20240625_005152.webp",
        type: "image",
      },
      {
        src: "/images/project/shoreline-residence/D5_Scene 21 1_20240628_105629.webp",
        type: "image",
      },
      {
        src: "/images/project/shoreline-residence/D5_Scene 22 2_20240628_104252.webp",
        type: "image",
      },
      {
        src: "/images/project/shoreline-residence/D5_Scene 23 1_20240628_085609.webp",
        type: "image",
      },
    ],
    hover: {
      title:
        "Shoreline Home Renovation & Addition | Kitchen Remodel + Outdoor Living",
      subTitle: `This Shoreline renovation and addition created more space and functionality for a growing family. Our team designed and built a new second story, remodeled the kitchen, and added outdoor living features like a TimberTech deck and StruXure pergola. Every element from flooring to finishes was chosen for durability, light, and warmth. `,
    },
  },
  {
    hidden: true,
    title: "Freitas Bathroom",
    location: "Capitol Hill – Seattle, Washington",
    url: "/project/freitas-kitchen-bathroom",
    media: [
      {
        src: "/images/project/freitas-bathroom/6L1A8442-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/freitas-bathroom/6L1A8451-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/freitas-bathroom/6L1A8447-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/freitas-bathroom/6L1A8433-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/freitas-bathroom/6L1A8426-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/freitas-bathroom/6L1A8431-Enhanced-NR.webp",
        type: "image",
      },
    ],
    hover: {
      title: "Freitas Bathroom Remodel | Capitol Hill - Seattle, Washington",
      subTitle: `This bathroom remodel transformed a compact top-floor space into a refined retreat. Marble mosaic tile, a wall-mounted vanity, and curated fixtures from West Elm and Rejuvenation brought warmth and sophistication, while sliding glass doors maximized openness in a small footprint. The project was carefully managed to minimize disruption in this urban setting and completed in 2 weeks.`,
    },
  },
  {
    title: "Knight Residence",
    location: "Fremont – Seattle, Washington",
    url: "/project/knight-residence",
    media: [
      {
        src: "/images/project/knight-residence/6L1A8383-Enhanced-NR.webp",
        type: "image",
      },
      { src: "/images/project/knight-residence/6L1A8374.webp", type: "image" },
      {
        src: "/images/project/knight-residence/6L1A8322-Enhanced-NR.webp",
        type: "image",
      },
      { src: "/images/project/knight-residence/6L1A8371.webp", type: "image" },
      {
        src: "/images/project/knight-residence/6L1A8365-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/knight-residence/6L1A8358-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/knight-residence/6L1A8344-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/knight-residence/6L1A8341-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/knight-residence/6L1A8335-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/knight-residence/6L1A8327-Enhanced-NR.webp",
        type: "image",
      },
      { src: "/images/project/knight-residence/6L1A8324.webp", type: "image" },
      {
        src: "/images/project/knight-residence/6L1A8319-Enhanced-NR.webp",
        type: "image",
      },
      {
        src: "/images/project/knight-residence/6L1A8386-Enhanced-NR.webp",
        type: "image",
      },
    ],
    hover: {
      title: "Knight Residence | Bathroom Remodel",
      subTitle: `Inspired by a spa retreat in Spain, this Fremont bathroom remodel balances elegance with function. Floor-to-ceiling large-format tiling, a curbless shower with frameless glass, and floating cabinetry were installed. Warmth and contrast are added with oil-rubbed bronze fixtures, which give the house a boutique hospitality vibe.`,
    },
  },
  {
    title: "Desert Oasis",
    location: "Palm Springs, California",
    url: "/project/desert-oasis",
    media: [
      { src: "/images/work/DS8.png", type: "image" },
      { src: "/images/work/DS2.png", type: "image" },
      { src: "/images/work/DS1.png", type: "image" },
      { src: "/images/work/DS3.png", type: "image" },
      { src: "/images/work/DS4.png", type: "image" },
      { src: "/images/work/DS5.png", type: "image" },
      { src: "/images/work/DS6.png", type: "image" },
      { src: "/images/work/DS7.png", type: "image" },
    ],
    hover: {
      title: "Modern Desert Oasis | Complete Residential Design",
      subTitle: `This Palm Springs home was designed as a modern desert oasis, blending indoor-outdoor living with bold architectural features. Exposed beams, clerestory windows, and accordion doors fill the main living space with natural light, while a detached ADU offers privacy for guests and flexibility for the future. Completed in just three months, the home reflects a balance of design efficiency and modern livability.`,
    },
  },
  {
    title: "Gray Bathroom",
    location: "Seattle, Washington",
    url: "/project/gray-bathroom",
    media: [
      { src: "/images/work/GB4.jpg", type: "image" },
      { src: "/images/work/GB2.jpg", type: "image" },
      { src: "/images/work/GB3.jpg", type: "image" },
      { src: "/images/work/GB1.jpg", type: "image" },
      { src: "/images/work/GB5.jpg", type: "image" },
      { src: "/images/work/GB6.jpg", type: "image" },
      { src: "/images/work/GB7.jpg", type: "image" },
      { src: "/images/work/GB8.jpg", type: "image" },
    ],
    hover: {
      title: "Gray Bathroom | Natural Disaster Mitigation - Bathroom Remodel",
      subTitle: `After a major pipe burst, this Kent bathroom was completely transformed into a spa-inspired retreat. Innate managed the insurance process, remediation, and full renovation, adding a curbless walk-in shower, custom glass, floor-to-ceiling tile, and a built-in hot tub, turning it into a functional and luxurious space.`,
    },
  },
  {
    title: "Kung Fu Tea x TKK",
    location: "Renton, Washington",
    url: "/project/kung-fu-tea",
    media: [
      { src: "/images/work/KFT5.png", type: "image" },
      { src: "/images/work/KFT4.png", type: "image" },
      { src: "/images/work/KFT3.png", type: "image" },
      { src: "/images/work/KFT2.png", type: "image" },
      { src: "/images/work/KFT1.png", type: "image" },
    ],
    hover: {
      title: "Kung Fu Tea x TKK | Commercial Construction & Design",
      subTitle: `We successfully brought two franchises together, a task that demanded both a keen understanding of brand standards and navigation of a complex permitting process.
Our dedicated team at Innate-NW managed everything from the initial design plans to the final construction stages. Added features include spacious seating, perfect for bustling crowds during peak times.
`,
    },
  },
  {
    title: "Wedgewood ADU",
    location: "North Seattle, Washington",
    url: "/project/wedgewood-adu",
    media: [
      {
        src: "/images/project/wedgewood-adu/6L1A0999_websize.webp",
        type: "image",
      },
    ],
    hover: {
      title: "Wedgewood ADU | North Seattle Custom ADU",
      subTitle: `This custom ADU demonstrates our ability to deliver a unique and functional living space. We provided a complete accessory dwelling unit construction solution, from thoughtful architectural design to expert build management.
`,
    },
  },
  {
    title: "Madrona Remodel",
    location: "Seattle, Washington",
    url: "/project/madrona-remodel",
    media: [
      { src: "/images/work/MR1.png", type: "image" },
      { src: "/images/work/MR2.png", type: "image" },
      { src: "/images/work/MR3.png", type: "image" },
      { src: "/images/work/MR4.png", type: "image" },
      { src: "/images/work/MR5.png", type: "image" },
      { src: "/images/work/MR6.png", type: "image" },
    ],
    hover: {
      title: "Madrona Remodel | Seismic & Kitchen Renovation",
      subTitle: `Our renovation turned this historic Madrona home into a space that's not just modern and functional, but also resilient. With experience in structural upgrades and kitchen remodels, Innate specializes in complex renovations that maintain the home's charm while enhancing its performance, especially in Seattle's older houses.`,
    },
  },
  {
    title: "Wheat Ridge ADU",
    location: "Kirkland, Washington",
    media: [
      { src: "/images/work/KA1.jpg", type: "image" },
      { src: "/images/work/KA2.jpg", type: "image" },
      { src: "/images/work/KA3.jpg", type: "image" },
      { src: "/images/work/KA4.jpg", type: "image" },
      { src: "/images/work/KA5.jpg", type: "image" },
    ],
    hover: {
      title: "Wheat Ridge ADU | Kirkland Accessory Dwelling Unit",
      subTitle: `A beautifully designed accessory dwelling unit in Kirkland, this project highlights our skill as an ADU builder. From initial architectural design to full ADU construction, we created a versatile and modern living space that adds value and functionality.
`,
    },
  },
  {
    title: "Solar Retreat",
    location: "Rainier, Washington",
    media: [
      { src: "/images/work/solar2.jpg", type: "image" },
      { src: "/images/work/solar1.jpg", type: "image" },
    ],
    hover: {
      title: "Solar Retreat | Rainier New House Construction",
      subTitle: `This Rainier new construction home was designed with sustainability and functionality in mind. Our residential architectural services ensure an energy-efficient and visually stunning home that maximizes natural light and integrates with its surroundings.
`,
    },
  },
  {
    title: "Norman Bathroom",
    location: "West Seattle, Washington",
    media: [
      { src: "/images/work/NB3.jpg", type: "image" },
      { src: "/images/work/NB2.jpg", type: "image" },
      { src: "/images/work/NB1.jpg", type: "image" },
      { src: "/images/work/NB4.jpg", type: "image" },
    ],
    hover: {
      title: "Norman Bathroom | West Seattle Bathroom Remodel",
      subTitle:
        "This West Seattle bathroom remodel was designed to maximize space and modern appeal. As a dedicated bathroom remodel contractor, we managed every detail, delivering a custom space with high-end finishes and seamless functionality.",
    },
  },
  {
    title: "West Seattle Duplex",
    location: "West Seattle, Washington",
    media: [
      { src: "/images/work/WSD2.jpg", type: "image" },
      { src: "/images/work/WSD1.jpg", type: "image" },
      { src: "/images/work/WSD3.jpg", type: "image" },
    ],
    hover: {
      title: "West Seattle Duplex | New Construction Homes",
      subTitle: `This new construction project involved building a modern duplex that provides two distinct, beautiful homes. Our comprehensive new construction builders services ensured a cohesive design and expert execution from the ground up.
`,
    },
  },
];
