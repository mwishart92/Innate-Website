import Navbar from "@/components/Navbar";
import HeroPress from "@/components/remodeling/HeroPress";
import Form from "@/components/remodeling/Form";
import ManualPageTracker from "@/components/ManualPageTracker";
import React from "react";
import type { Metadata } from "next";
import remodelingPhoto from "@/public/images/remodeling/remodeling-price-guide.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Remodeling Cost Guide | Innate",
  description:
    "Innate's press section features news, media coverage, and insights into their innovative design and construction projects, highlighting the industry impact.",
  alternates: {
    canonical: "https://innate-nw.com/cost-guide",
  },
  openGraph: {
    title: "Remodeling Cost Guide | Innate",
    description:
      "Innate's press section features news, media coverage, and insights into their innovative design and construction projects, highlighting the industry impact.",
    url: "https://innate-nw.com/cost-guide",
    siteName: "Innate",
    images: [
      {
        url: "/images/innate-nw.jpg",
        width: 1200,
        height: 630,
        alt: "Innate - Press & Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remodeling Cost Guide | Innate",
    description:
      "Innate's press section features news, media coverage, and insights into their innovative design and construction projects, highlighting the industry impact.",
  },
};

const RemodelingPriceGuide = () => {
  return (
    <>
      <ManualPageTracker pageName="cost-guide_page" />
      <Navbar />
      <HeroPress />
      <div className="gradient">
        <Image
          src={remodelingPhoto}
          alt=""
          fill
          className="w-full h-auto !relative"
        />
        <div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default RemodelingPriceGuide;
