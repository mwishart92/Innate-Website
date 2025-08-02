"use client";
import { useParams } from "next/navigation";
import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import React from "react";

export default function BlogClientComponent() {
  const { slug } = useParams<{ slug: string }>(); // Access the dynamic slug from the URL
  // Optionally, handle the case where conversion fails
  if (!slug) {
    return <div>Invalid slug</div>;
  }
  return (
    <>
      <Navbar />
      <div className=" py-20">
        {/* Pass the numeric id as a prop */}
        <Blog slug={slug} />
      </div>
    </>
  );
}
