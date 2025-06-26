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
import { IoIosArrowBack } from "react-icons/io";

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
        responsiveWidth={767}
        controlArrowsHTML={[
          `<div class="my-arrow"><svg width="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#FFF"/>
</svg></div>`,
          `<div class="my-arrow"><svg width="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#FFF"/>
</svg></div>`,
        ]}
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
