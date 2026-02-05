import type { Metadata } from "next";
import BlogClientComponent from "./BlogClientComponent";
import { blogSections } from "@/data/blogSections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Find the blog section by slug
  const blogSection = blogSections.find(section => section.slug === slug);
  
  if (blogSection) {
    const metaTitle = blogSection.seo?.title ?? `${blogSection.title} | Innate NW Blog`;
    const metaDescription = blogSection.seo?.description ?? blogSection.excerpt ?? "Read our latest articles and insights about design and construction.";
    return {
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
      },
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
      },
    };
  }

  // Fallback metadata
  return {
    title: "Blog | Innate NW",
    description: "Read our latest articles and insights about design and construction.",
  };
}

export default function BlogPage() {
  return <BlogClientComponent />;
}
