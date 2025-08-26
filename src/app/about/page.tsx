import Navbar from "@/components/Navbar";
import HeroAbout from "@/components/About/HeroAbout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Design & Construction in Seattle | Innate NW",
  description:
    "At Innate, we believe every client and project has unique needs—whether a small remodel or a large-scale commercial construction. Call us now (425) 866-5206.",
  openGraph: {
    title: "About Us | Design & Construction in Seattle | Innate NW",
    description: "At Innate, we believe every client and project has unique needs—whether a small remodel or a large-scale commercial construction. Call us now (425) 866-5206.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us | Design & Construction in Seattle | Innate NW",
    description: "At Innate, we believe every client and project has unique needs—whether a small remodel or a large-scale commercial construction. Call us now (425) 866-5206.",
  },
};

const AboutPage = () => {
  return (
    <div className="w-full h-full gradient ">
      <Navbar />
      <HeroAbout />
    </div>
  );
};

export default AboutPage;
