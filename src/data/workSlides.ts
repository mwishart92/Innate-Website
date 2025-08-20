export interface SlideData {
  title: string;
  location: string;
  url?: string;
  media?: { src: string; type: "image" | "video" }[];
}

export const slidesData: SlideData[] = [
  {
    title: "West Seattle Residence",
    location: "Fremont - Seattle, Washington",
    url: "/project/west-seattle-residence",
    media: [
      {
        src: "/images/project/west-seattle-residence/06.25_Exterior-Bathroom_16x9.mp4",
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
  },
  {
    title: "Wedgewood ADU",
    location: "North Seattle, Washington",
    url: "/project/south-seattle-kitchen",
    media: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/06.25_ADU_16x9.webm?alt=media&token=146a7881-9a11-4099-8f58-3714d7c5f98b",
        type: "video",
      },
    ],
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
  },
  {
    title: "Modern ADU",
    location: "Bellevue, Washington",
    media: [
      { src: "/images/work/MA1.jpg", type: "image" },
      { src: "/images/work/MA2.jpg", type: "image" },
      { src: "/images/work/MA3.jpg", type: "image" },
      { src: "/images/work/MA4.jpg", type: "image" },
      { src: "/images/work/MA5.jpg", type: "image" },
      { src: "/images/work/MA6.jpg", type: "image" },
      { src: "/images/work/MA7.jpg", type: "image" },
      { src: "/images/work/MA8.jpg", type: "image" },
    ],
  },
  {
    title: "Solar Retreat",
    location: "Rainier, Washington",
    media: [
      { src: "/images/work/solar2.jpg", type: "image" },
      { src: "/images/work/solar1.jpg", type: "image" },
    ],
  },
  {
    title: "Japandi ADU",
    location: "Magnolia, Washington",
    media: [
      { src: "/images/work/JA1.jpg", type: "image" },
      { src: "/images/work/JA2.jpg", type: "image" },
      { src: "/images/work/JA4.jpg", type: "image" },
      { src: "/images/work/JA5.jpg", type: "image" },
      { src: "/images/work/JA6.jpg", type: "image" },
      { src: "/images/work/JA7.jpg", type: "image" },
      { src: "/images/work/JA8.jpg", type: "image" },
    ],
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
  },
  {
    title: "Pierre ADU",
    location: "Tacoma, Washington",
    media: [
      { src: "/images/work/PA2.jpg", type: "image" },
      { src: "/images/work/PA1.jpg", type: "image" },
    ],
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
  },
  {
    title: "West Seattle Duplex",
    location: "West Seattle, Washington",
    media: [
      { src: "/images/work/WSD2.jpg", type: "image" },
      { src: "/images/work/WSD1.jpg", type: "image" },
      { src: "/images/work/WSD3.jpg", type: "image" },
    ],
  },
];
