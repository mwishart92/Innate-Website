import Navbar from "@/components/Navbar";
import Blog from "@/components/Press/Blog";
import Contact from "@/components/Press/Contact";
import HeroPress from "@/components/Press/HeroPress";
import ManualPageTracker from "@/components/ManualPageTracker";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media | Industry Updates and Tips | Innate",
  description:
    "Innate's press section features news, media coverage, and insights into their innovative design and construction projects, highlighting the industry impact.",
  alternates: {
    canonical: 'https://innate-aec.com/press',
  },
  openGraph: {
    title: "Press & Media | Industry Updates and Tips | Innate",
    description: "Innate's press section features news, media coverage, and insights into their innovative design and construction projects, highlighting the industry impact.",
    url: 'https://innate-aec.com/press',
    siteName: 'Innate',
    images: [
      {
        url: '/images/innate-nw.jpg',
        width: 1200,
        height: 630,
        alt: 'Innate - Press & Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Press & Media | Industry Updates and Tips | Innate",
    description: "Innate's press section features news, media coverage, and insights into their innovative design and construction projects, highlighting the industry impact.",
  },
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
