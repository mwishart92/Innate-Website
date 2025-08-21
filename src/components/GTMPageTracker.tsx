"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initializeLinkTracking, initializeGTM, initializeFormTracking } from "@/utils/gtm";

const GTMPageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize GTM once
    initializeGTM();
  }, []);

  useEffect(() => {
    // Push page view event to dataLayer when route changes
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      const pageViewData = {
        event: "page_view",
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
        page_title: document.title,
        page_location: window.location.href,
        timestamp: new Date().toISOString(),
      };
      
      (window as any).dataLayer.push(pageViewData);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Initialize automatic link tracking
    const linkCleanup = initializeLinkTracking();
    
    // Initialize automatic form tracking
    const formCleanup = initializeFormTracking();
    
    return () => {
      if (linkCleanup) linkCleanup();
      if (formCleanup) formCleanup();
    };
  }, []);

  return null;
};

export default GTMPageTracker;
