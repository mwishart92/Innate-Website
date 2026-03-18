import Contact from "@/components/Contact";
import React from "react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Design & Construction Solutions | Innate",
  description:
    "If you're looking for an architect, engineer, or builder to help with your project in Seattle, fill out our form or call us on or all us on (425) 866-5206.",
  alternates: {
    canonical: 'https://innate-nw.com/contact',
  },
  openGraph: {
    title: "Contact Us | Design & Construction Solutions | Innate",
    description: "If you're looking for an architect, engineer, or builder to help with your project in Seattle, fill out our form or call us on or all us on (425) 866-5206.",
    url: 'https://innate-nw.com/contact',
    siteName: 'Innate',
    images: [
      {
        url: '/images/innate-nw.jpg',
        width: 1200,
        height: 630,
        alt: 'Innate - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us | Design & Construction Solutions | Innate",
    description: "If you're looking for an architect, engineer, or builder to help with your project in Seattle, fill out our form or call us on or all us on (425) 866-5206.",
  },
};

const ContactPage = () => {
  return (
    <>
      <div style={{ paddingBottom: 10 }}>
        <Navbar />
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
