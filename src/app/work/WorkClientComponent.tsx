"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import FooterContent from "@/components/Footer/content";
import ReactFullpage from "@fullpage/react-fullpage";
import WorkSlider from "@/components/Work/WorkSlider";
import { slidesData } from "@/data/workSlides";
import "./Work.css";
import { Metadata } from "next";
import MediaSlide from "@/components/Work/MediaSlide";

export const metadata: Metadata = {
  title: "Our Expert Design and Construction Work | Innate NW",
  description:
    "Innate NW specializes in custom design and construction solutions, delivering innovative and sustainable projects tailored to meet unique client needs.",
  icons: {
    icon: "/favicon.ico",
  },
};

const Work: React.FC = () => {
  return (
    <div className="gradient">
      {/* Navbar */}
      <div className="sticky top-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <h1 className="absolute opacity-0">Our Work</h1>
      <ReactFullpage
        // Optional: you can set section colors or other options here
        scrollingSpeed={900}
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {slidesData.map((data, index) => (
                <div className="section " key={index}>
                  {data.media?.map((item, i) => (
                    <div className="slide relative">
                      <WorkSlider
                        title={data.title}
                        location={data.location}
                        url={data.url || ""}
                        media={data.media}
                      />
                      <MediaSlide key={i} src={item.src} type={item.type} />
                    </div>
                  ))}
                </div>
              ))}
              {/* Footer as last section */}
              <div className="section fp-auto-height">
                <FooterContent />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default Work;
