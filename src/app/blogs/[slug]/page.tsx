import type { Metadata } from "next";
import BlogClientComponent from "./BlogClientComponent";

export const metadata: Metadata = {
  title: "Blog | Innate NW",
  description:
    "Read our latest articles and insights about design and construction.",
};

export default function BlogPage() {
  return <BlogClientComponent />;
}
