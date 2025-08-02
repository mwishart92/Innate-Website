import OnBoarding from "@/components/OnBoarding";
import Navbar from "@/components/onBoardingNavbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On Boarding",
  description: "Start your journey with us through our onboarding process.",
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
