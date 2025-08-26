import type { Metadata } from "next";
import WorkClientComponent from "./WorkClientComponent";

export const metadata: Metadata = {
  title: "Our Expert Design and Construction Work | Innate NW",
  description:
    "Innate NW specializes in Seattle custom design and construction solutions. Delivering innovative and sustainable projects tailored to meet unique client needs.",
  openGraph: {
    title: "Our Expert Design and Construction Work | Innate NW",
    description: "Innate NW specializes in Seattle custom design and construction solutions. Delivering innovative and sustainable projects tailored to meet unique client needs.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Expert Design and Construction Work | Innate NW",
    description: "Innate NW specializes in Seattle custom design and construction solutions. Delivering innovative and sustainable projects tailored to meet unique client needs.",
  },
};

export default function WorkPage() {
  return <WorkClientComponent />;
}
