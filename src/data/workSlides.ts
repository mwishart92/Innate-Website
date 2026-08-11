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
    title: "Issaquah Primary Bathroom & Wet Room Renovation",
    location: "Issaquah, Washington",
    url: "/project/issaquah-bathroom",
    media: [
      {
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/issaquah_bathroom.webm?alt=media&token=2e069e6c-b8b3-49d9-8d80-553150b6f030",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/issaquah_bathroom.mp4?alt=media&token=eed39a19-ee83-498c-bc0a-9afb27ec9fa6",
        ],
        type: "video",
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
      {
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Innate-AEC%20-%20Finished%20Bellevue%20Work%20(Horizontal).webm?alt=media&token=b4016be4-e61b-4260-9920-b4249766f1d6",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Innate-AEC%20-%20Finished%20Bellevue%20Work%20(Horizontal).mp4?alt=media&token=0da5669c-6b37-46e9-b6fa-ad9d5af37b4c",
        ],
        type: "video",
        mobilePlaceholder: "/images/project/bellevue-skylit/6L1A9481.jpg",
      },
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/10.15_Innate%20Bathroom%20Remodel%20Finished%20Work_16x9.webm?alt=media&token=bb8b82d5-a81d-4c31-9693-8e6ccea5f00b",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/10.15_Innate%20Bathroom%20Remodel%20Finished%20Work_16x9.mp4?alt=media&token=f3db2ee1-60f8-468d-849a-fb3dd4c8df80",
        ],
        type: "video",
        mobilePlaceholder: "/images/work/bellevue_mob.jpg",
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/kenmore.webm?alt=media&token=6c9d916f-0ee6-42c5-bb74-1afa028482cf",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/kenmore%20(1).mp4?alt=media&token=013b9271-b516-4358-8512-aa0aeec55742",
        ],
        type: "video",
        mobilePlaceholder:
          "/images/project/kenmore-bathroom/6L1A1295_websize.jpg",
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Woodinville_bathroom.webm?alt=media&token=ba204823-d94b-4239-bcb2-0919b702ca40",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Woodinville_bathroom%20(1).mp4?alt=media&token=234d35f2-3d7b-4460-9274-1fbf9a5d2080",
        ],
        type: "video",
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/enumclaw.webm?alt=media&token=0477f2bb-4bb9-4df4-94b5-130347b7fd4c",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/enumclaw%20(1).mp4?alt=media&token=4f78ff03-6b96-4b3e-8c6e-d4877e4f0746",
        ],
        type: "video",
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Freitas%20Kitchen.webm?alt=media&token=49c036c5-9b2f-4f7c-adfb-b88ea4d16195",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Freitas%20Kitchen%20(1).mp4?alt=media&token=aa42ba2b-c151-49c8-8d7b-697cbe2d4b03",
        ],
        type: "video",
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_Exterior-Bathroom.webm?alt=media&token=7d3e8e66-5096-4731-ac14-77755a3831c6",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_Exterior-Bathroom.mp4?alt=media&token=8b05df72-4b7b-4796-bbba-18e9a09f5ed2",
        ],
        type: "video",
        mobilePlaceholder: "/images/project/west-seattle-residence/ws_mob.jpg",
      },
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
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Innate%20-%20Magnolia%20Kitchen%20Video%20(Horizontal).mp4?alt=media&token=94bea933-386e-4424-812b-d2b6e28c6265",
        type: "video",
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/05.25_Innate-NW_16x9%20No%20SpeedRamp_No%20Sound.webm?alt=media&token=b30f1fba-154c-495e-870e-8058cebddedc",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/05.25_Innate-NW_16x9%20No%20SpeedRamp_No%20Sound.mp4?alt=media&token=414b69f0-d9c3-41ef-a3d5-1c98b6813f0f",
        ],
        type: "video",
        mobilePlaceholder: "/images/project/knight-residence/knight_mob.jpg",
      },
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
        src: [
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_ADU_16x9.webm?alt=media&token=146a7881-9a11-4099-8f58-3714d7c5f98b",
          "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_ADU_16x9.mp4?alt=media&token=91558a20-2927-43ab-a22e-341bd95cfe90",
        ],
        type: "video",
        mobilePlaceholder: "/images/project/wedgewood-adu/wwadu_mob.jpg",
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
      {
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Norman-bath.mp4?alt=media&token=963a355e-149c-4735-87f2-911ad70f6445",
        type: "video",
      },
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
