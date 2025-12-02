import OnBoarding from "@/components/OnBoarding";
import Navbar from "@/components/onBoardingNavbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project | Project Onboarding | Innate NW",
  description: "Begin your design and construction journey with Innate NW. Our streamlined onboarding process helps us understand your vision and create a personalized plan.",
  openGraph: {
    title: "Start Your Project | Project Onboarding | Innate NW",
    description: "Begin your design and construction journey with Innate NW. Our streamlined onboarding process helps us understand your vision and create a personalized plan.",
    url: 'https://innate-nw.com/onboarding',
    siteName: 'Innate NW',
    images: [
      {
        url: '/images/innate-nw.jpg',
        width: 1200,
        height: 630,
        alt: 'Innate NW - Project Onboarding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Start Your Project | Project Onboarding | Innate NW",
    description: "Begin your design and construction journey with Innate NW. Our streamlined onboarding process helps us understand your vision and create a personalized plan.",
  },
};

const OnboardingPage = () => {
  return (
    <div>
      <Navbar />
      <OnBoarding />
    </div>
  );
};

export default OnboardingPage;
