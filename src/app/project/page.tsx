import Navbar from "@/components/Navbar";
import HeroProject from "@/components/Project/HeroProject";
import ProjectDescription from "@/components/Project/ProjectDescription";
import React from "react";
import p1 from "@/public/images/project/gabrielle-maurer-bSDRTDquQG8-unsplash.webp";
import p2 from "@/public/images/project/hans-isaacson-qmTwtPQtLVg-unsplash.webp";
import p3 from "@/public/images/project/bailey-alexander-QQ6xmTXXFZ8-unsplash.webp";
import p4 from "@/public/images/project/bailey-alexander-PE4pFgcYzoQ-unsplash.webp";
import slider1 from "@/public/images/project/project-slider-1.webp";
import slider2 from "@/public/images/project/project-slider-2.webp";
const page = () => {
  const projectDetails = {
    projectScope: [
      { key: "Scope", value: "Architecture" },
      { key: "Type", value: "New Construction" },
      { key: "Location", value: "Shoreline, Washington" },
      { key: "Design Principle", value: "Jane Smith" },
      { key: "Photographer", value: "Marcus Davies" },
      { key: "General Contractor", value: "Builders Inc" },
    ],
    scopedescription: `Designed for a couple with an internationally acclaimed collection
            of modern art, the house functions both as a residence and a
            gallery. The house is organized around a central spine that provides
            both circulation and art display, bringing the owners into constant
            contact with their art. The 16-foot-high gallery comfortably
            accommodates the large canvases common to modern art. The gallery’s
            diffused-skylight daylighting system creates a soft natural light
            for viewing art, and gives the sense of the outdoors while inside.
            Intimate living alcoves punctuate the sides of the gallery.`,
    gallery: [
      {
        image: p1,
      },
      {
        image: p2,
      },
      {
        image: p3,
      },
      {
        image: p4,
        class: "col-span-3",
      },
      {
        image: p1,
      },
      {
        image: p2,
      },
      {
        image: p3,
      },
    ],
    galleryDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    projectSlider: [
      {
        image: slider1,
        title: "Modern Musa Spa",
        description: "Denver Coloredo",
        url: "#",
      },
      {
        image: slider2,
        title: "Modern Musa Spa",
        description: "Denver Coloredo",
        url: "#",
      },
      {
        image: slider1,
        title: "Modern Musa Spa",
        description: "Denver Coloredo",
        url: "#",
      },
      {
        image: slider2,
        title: "Modern Musa Spa",
        description: "Denver Coloredo",
        url: "#",
      },
    ],
  };
  return (
    <div>
      <Navbar />
      <HeroProject />

      <ProjectDescription projectDetails={projectDetails} />
    </div>
  );
};

export default page;
