import type { Metadata } from "next";
import WorkClientComponent from "./WorkClientComponent";

export const metadata: Metadata = {
  title: "Our Expert Design and Construction Work | Innate",
  description:
    "Innate specializes in Seattle custom design and construction solutions. Delivering innovative and sustainable projects tailored to meet unique client needs.",
  alternates: {
    canonical: 'https://innate-aec.com/work',
  },
  openGraph: {
    title: "Our Expert Design and Construction Work | Innate",
    description: "Innate specializes in Seattle custom design and construction solutions. Delivering innovative and sustainable projects tailored to meet unique client needs.",
    url: 'https://innate-aec.com/work',
    siteName: 'Innate',
    images: [
      {
        url: '/images/innate-nw.jpg',
        width: 1200,
        height: 630,
        alt: 'Innate - Our Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Expert Design and Construction Work | Innate",
    description: "Innate specializes in Seattle custom design and construction solutions. Delivering innovative and sustainable projects tailored to meet unique client needs.",
  },
};

export default function WorkPage() {
  return <WorkClientComponent />;
}
