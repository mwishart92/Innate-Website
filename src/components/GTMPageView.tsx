"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Add this before the component to declare window.dataLayer
declare global {
  interface Window {
    dataLayer: { push: (...args: any[]) => void };
  }
}

export default function GTMPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      console.log(" GTMPageView: ", pathname);
      window.dataLayer.push({
        event: "pageview",
        page: pathname,
      });
    }
  }, [pathname]);

  return null;
}
