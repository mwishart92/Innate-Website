export interface SlideData {
  title: string;
  location: string;
  url?: string;
  media?: { src: string; type: "image" | "video" }[];
  hover?: {
    title: string;
    subTitle: string;
  };
}

export const slidesData: SlideData[] = [
  {
    title: "West Seattle Residence",
    location: "Fremont - Seattle, Washington",
    url: "/project/west-seattle-residence",
    media: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_Exterior-Bathroom.webm?alt=media&token=7d3e8e66-5096-4731-ac14-77755a3831c6",
        type: "video",
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
      title: "West Seattle Renovation | Bathroom + Exterior Remodel | General Contracting",
      subTitle: `Innate NW delivered a complete transformation in just five weeks, turning the bathroom into a spa-like retreat and reimagining the home’s exterior with durable finishes, refreshed curb appeal, and thoughtful design. This West Seattle renovation showcases our expertise in general contracting, bathroom remodeling, and exterior renovations from start to finish.`,
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
      title: "South Seattle Kitchen Renovation | Custom Cabinetry & Modern Design",
      subTitle: `This South Seattle kitchen remodel was completed in just four weeks, with every detail thoughtfully considered. Custom Canyon Creek cabinetry with built-in inserts, quartz countertops, and radiant heated floors created a space that feels both modern and personal. Our team worked closely with the homeowners to ensure the kitchen balanced beauty with daily function.`,
    },
  },
  {
    title: "Magnolia Bathroom",
    location: "Magnolia, Seattle",
    url: "/project/magnolia-bathroom",
    media: [
      {
        src: "/images/project/magnolia-bathroom/6L1A0731_websize.webp",
        type: "image",
      },
    ],
    hover: {
      title: "Magnolia Bathroom Remodel | Renovation & Historic Preservation",
      subTitle: `This Magnolia bathroom renovation showcases how we blend historic preservation with modern design, featuring marble tile, custom frameless glass, and warm brass fixtures. Our team carefully repaired water damage and updated the space to reflect the Craftsman home’s original character while ensuring long-lasting durability.`,
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
      title: "Shoreline Home Renovation & Addition | Kitchen Remodel + Outdoor Living",
      subTitle: `This Shoreline renovation and addition created more space and functionality for a growing family. Our team designed and built a new second story, remodeled the kitchen, and added outdoor living features like a TimberTech deck and StruXure pergola. Every element from flooring to finishes was chosen for durability, light, and warmth. `,
    },    
  },
  {
    title: "Freitas Bathroom",
    location: "Capitol Hill – Seattle, Washington",
    url: "/project/freitas-bathroom",
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
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/05.25_Innate-NW_16x9%20No%20SpeedRamp_No%20Sound.webm?alt=media&token=b30f1fba-154c-495e-870e-8058cebddedc",
        type: "video",
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
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_ADU_16x9.webm?alt=media&token=146a7881-9a11-4099-8f58-3714d7c5f98b",
        type: "video",
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
      subTitle: `Our renovation turned this historic Madrona home into a space that's not just modern and functional, but also resilient. With experience in structural upgrades and kitchen remodels, Innate NW specializes in complex renovations that maintain the home's charm while enhancing its performance, especially in Seattle's older houses.`,
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
    title: "Pellegrino Remodel",
    location: "Denver, Colorado",
    media: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/pellegrino-remodel.mp4?alt=media&token=d42fe844-9e50-4b63-8e43-3fcf398e1240",
        type: "video",
      },
      { src: "/images/work/PR1.png", type: "image" },
    ],
    hover: {
      title: "Pellegrino Remodel | Denver Home Renovation",
      subTitle:
        "A full-scale home renovation in Denver, this project highlights our ability to transform outdated spaces into modern, functional homes. Our home architectural design and build expertise brought new life to the entire property.",
    },
  },
  {
    title: "Victoria Bathroom",
    location: "Bothell, Washington",
    media: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/victoria%20bathroom.mp4?alt=media&token=7c9e1c15-fffa-4c74-b6fc-50b0cee6a94b",
        type: "video",
      },
    ],
    hover: {
      title: "Victoria Bathroom | Bothell Bathroom Renovation",
      subTitle: `This Bothell bathroom remodel service was designed to create a spa-like retreat with high-end materials and expert craftsmanship. As a trusted bathroom remodel contractor, we delivered a luxurious and highly functional space tailored to the client's vision.
`,
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
