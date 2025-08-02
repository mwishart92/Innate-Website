import type { Metadata } from "next";
import HomeClientComponent from "./HomeClientComponent";

export const metadata: Metadata = {
  title: "Custom Design & Construction Services in Seattle | Innate NW",
  description:
    "Innate NW is collective of architects, engineers and craftsmen collaborating to create beautiful spaces and structures in Seattle. Call us on (425) 866-5206.",
};

export default function Home() {
  return <HomeClientComponent />;
}
