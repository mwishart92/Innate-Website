"use client";
import React, { useEffect, useRef, useState } from "react";
// import NavbarOther from '@/components/Navbar/NavbarOther'
import Navbar from "@/components/Navbar";
import FooterContent from "@/components/Footer/content";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import WorkSlider components
import WorkSlider from "@/components/Work/WorkSlider";
import { slidesData } from "@/data/workSlides";
gsap.registerPlugin(ScrollTrigger);

import "./Work.css";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Our Expert Design and Construction Work | Innate NW",
  description:
    "Innate NW specializes in custom design and construction solutions, delivering innovative and sustainable projects tailored to meet unique client needs.",
  icons: {
    icon: "/favicon.ico",
  },
};

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
        <h1 className="absolute opacity-0">Our Work</h1>
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
