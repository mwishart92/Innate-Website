'use client'
import React, { useEffect, useRef } from 'react'
// import NavbarOther from '@/components/Navbar/NavbarOther'
import Navbar from '@/components/Navbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import WorkSlider components
import WorkSlider0 from '@/components/Work/WorkSlider0'
import WorkSlider1 from '@/components/Work/WorkSlider1'
import WorkSlider2 from '@/components/Work/WorkSlider2'
import WorkSlider3 from '@/components/Work/WorkSlider3'
import WorkSlider4 from '@/components/Work/WorkSlider4'
import WorkSlider5 from '@/components/Work/WorkSlider5'
import WorkSlider6 from '@/components/Work/WorkSlider6'
import WorkSlider7 from '@/components/Work/WorkSlider7'
import WorkSlider8 from '@/components/Work/WorkSlider8'
import WorkSlider9 from '@/components/Work/WorkSlider9'
import WorkSlider10 from '@/components/Work/WorkSlider10'
import WorkSlider11 from '@/components/Work/WorkSlider11'
import WorkSlider12 from '@/components/Work/WorkSlider12'
import WorkSlider13 from '@/components/Work/WorkSLider13'
import WorkSlider14 from '@/components/Work/WorkSlider14'
gsap.registerPlugin(ScrollTrigger);

import './Work.css'

// Define an array of WorkSlider components
const sliders: React.ElementType[] = [
  WorkSlider0,
   WorkSlider1, WorkSlider2, WorkSlider3, WorkSlider4, WorkSlider5,
  WorkSlider6, WorkSlider7, WorkSlider8, WorkSlider9, WorkSlider10, WorkSlider11, WorkSlider12,
  WorkSlider13, 
  WorkSlider14,
];

const Work: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (ref) {
        gsap.to(ref, {
          opacity: 1,
          scrollTrigger: {
            trigger: ref,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <>
      <div className="gradient">
        {/* Navbar */}
        <div className="sticky top-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Work Slider Sections */}
        <div className="relative z-0">
          {sliders.slice(0, 6).map((SliderComponent, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el; 
              }}
              className="work-slider w-full min-h-screen flex items-center sticky top-0 bg-white"
            >
              <div 
              className="h-full tab:h-[80%] mob:h-auto w-full rounded-t-[24px] rounded-b-[18px]"
              >
                <SliderComponent />
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-0">
          {sliders.slice(6, 11).map((SliderComponent, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el; 
              }}
              className="work-slider w-full min-h-screen flex items-center sticky top-0 bg-white"
            >
              <div 
              className="h-full tab:h-[80%] mob:h-auto w-full rounded-t-[24px] rounded-b-[18px]"
              >
                <SliderComponent />
              </div>
            </div>
          ))}
        </div>
        <div className="relative z-0">
          {sliders.slice(11, 15).map((SliderComponent, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el; 
              }}
              className="work-slider w-full min-h-screen flex items-center sticky top-0 bg-white"
            >
              <div 
              className="h-full tab:h-[80%] mob:h-auto w-full rounded-t-[24px] rounded-b-[18px]"
              >
                <SliderComponent />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
