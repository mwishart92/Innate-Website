"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initializeLinkTracking } from "@/utils/gtm";

const GTMPageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Push page view event to dataLayer when route changes
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      const pageViewData = {
        event: "page_view",
        page_path:
          pathname +
          (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
        page_title: document.title,
        page_location: window.location.href,
        timestamp: new Date().toISOString(),
      };
      
      (window as any).dataLayer.push(pageViewData);
      console.log('GTM Page View:', pageViewData);
    } else {
      console.warn('GTM dataLayer not available for page view tracking');
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Initialize automatic link tracking
    const cleanup = initializeLinkTracking();
    
    return cleanup;
  }, []);

  return null;
};

export default GTMPageTracker;
