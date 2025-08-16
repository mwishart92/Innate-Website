import Navbar from "@/components/Navbar";
import Blog from "@/components/Press/Blog";
import Contact from "@/components/Press/Contact";
import HeroPress from "@/components/Press/HeroPress";
import ManualPageTracker from "@/components/ManualPageTracker";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media | Industry Updates and Tips | Innate NW",
  description:
    "Innate NW's press section features news, media coverage, and insights into their innovative design and construction projects, highlighting the industry impact.",
};

const PressPage = () => {
  return (
    <>
      <ManualPageTracker 
        pageName="press_page" 
        additionalData={{
          page_category: "media",
          page_section: "press"
        }}
      />
      <Navbar />
      <HeroPress />
      <div className="gradient">
        <Blog />
        <Contact />
      </div>
    </>
  );
};

export default PressPage;
