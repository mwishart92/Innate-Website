"use client";
import React, { useEffect, useRef, useState } from "react";
// import NavbarOther from '@/components/Navbar/NavbarOther'
import Navbar from "@/components/Navbar";
import FooterContent from "@/components/Footer/content";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import WorkSlider components
import WorkSlider from "@/components/Work/WorkSlider";
import WorkSlider0 from "@/components/Work/WorkSlider0";
import WorkSlider1 from "@/components/Work/WorkSlider1";
import WorkSlider2 from "@/components/Work/WorkSlider2";
import WorkSlider3 from "@/components/Work/WorkSlider3";
import WorkSlider4 from "@/components/Work/WorkSlider4";
import WorkSlider5 from "@/components/Work/WorkSlider5";
import WorkSlider6 from "@/components/Work/WorkSlider6";
import WorkSlider7 from "@/components/Work/WorkSlider7";
import WorkSlider8 from "@/components/Work/WorkSlider8";
import WorkSlider9 from "@/components/Work/WorkSlider9";
import WorkSlider10 from "@/components/Work/WorkSlider10";
import WorkSlider11 from "@/components/Work/WorkSlider11";
import WorkSlider12 from "@/components/Work/WorkSlider12";
import WorkSlider13 from "@/components/Work/WorkSLider13";
import WorkSlider14 from "@/components/Work/WorkSlider14";
gsap.registerPlugin(ScrollTrigger);

import "./Work.css";

// Define an array of WorkSlider components
const slidesData: {
  title: string;
  location: string;
  url?: string;
  media?: { src: string; type: "image" | "video" }[];
}[] = [
  {
    title: "North Seattle Kitchen",
    location: "North Seattle",
    url: "/project/north-seattle-kitchen",
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
        src: "/images/project/shoreline-residence/COVER-D5_a7 2_20240625_005152.webp",
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
        src: "/images/project/knight-residence/05.25_Innate-NW_16x9 No SpeedRamp_No Sound.mp4",
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
    title: "Wheat Ridge ADU",
    location: "Kirkland, Washington",
    url: "/project/wheat-ridge-adu",
    media: [
      { src: "/images/work/KA1.jpg", type: "image" },
      { src: "/images/work/KA2.jpg", type: "image" },
      { src: "/images/work/KA3.jpg", type: "image" },
      { src: "/images/work/KA4.jpg", type: "image" },
      { src: "/images/work/KA5.jpg", type: "image" },
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
    title: "Wedgewood ADU",
    location: "North Seattle, Washington",
    media: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/bosma-adu.mp4?alt=media&token=0c906c3e-ed25-4082-8230-f5941f54e9ce",
        type: "video",
      },
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
const sliders: React.ElementType[] = [
  // WorkSlider1,
  // WorkSlider2,
  // WorkSlider4,
  // WorkSlider5,
  // WorkSlider6,
  // WorkSlider7,
  // WorkSlider12,
  // WorkSlider0,
  // WorkSlider3,
  // WorkSlider8,
  // WorkSlider9,
  // WorkSlider10,
  // WorkSlider11,
  // WorkSlider13,
  // WorkSlider14,
];

const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  // Function to check if viewport is desktop size
  const checkViewport = () => {
    const width = window.innerWidth;
    setIsDesktop(width > 1024); // Desktop breakpoint at 1024px
  };

  useEffect(() => {
    // Initial check
    checkViewport();

    // Add resize listener with debounce
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkViewport, 100);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (footerRef.current) {
      const height = footerRef.current.offsetHeight;
      setFooterHeight(height);
    }
  }, []);

  useEffect(() => {
    if (isDesktop && containerRef.current && footerRef.current) {
      const sections = containerRef.current.querySelectorAll(".work-slider");

      // Create a timeline for smooth transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=10000",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / sections.length,
            duration: { min: 0.1, max: 0.5 },
            ease: "power1.inOut",
          },
        },
      });

      // Set initial positions
      gsap.set(sections, {
        y: (i) => i * window.innerHeight,
      });

      // Set initial footer position
      gsap.set(footerRef.current, {
        y: sections.length * window.innerHeight,
        opacity: 0,
        position: "absolute",
        bottom: 0,
      });

      // Create the animation for sections
      sections.forEach((section, index) => {
        tl.to(section, {
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      });

      // Add footer animation at the end
      tl.to(footerRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(footerRef.current, {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          });
        },
      });

      // Cleanup function
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isDesktop, footerHeight]);

  return (
    <>
      <div className="gradient">
        {/* Navbar */}
        <div className="sticky top-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Work Slider Sections */}
        <div
          ref={containerRef}
          className={`relative z-0 ${
            isDesktop ? "h-screen overflow-hidden" : ""
          }`}
        >
          {slidesData.map((data, index) => (
            <div
              key={index}
              className={`work-slider w-full min-h-screen flex items-center ${
                isDesktop ? "absolute top-0 left-0" : "relative"
              } bg-white`}
            >
              <div className="h-full tab:h-[80%] mob:h-auto w-full rounded-t-[24px] rounded-b-[18px]">
                <WorkSlider
                  title={data.title}
                  location={data.location}
                  url={data.url || ""}
                  media={data.media}
                />
              </div>
            </div>
          ))}

          {/* Footer */}
          <div
            ref={footerRef}
            className={`w-full ${isDesktop ? "absolute" : "relative"}`}
          >
            <FooterContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
