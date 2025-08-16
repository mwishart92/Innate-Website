"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initializeLinkTracking, initializeGTM } from "@/utils/gtm";

const GTMPageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize GTM if not already done
    initializeGTM();
  }, []);

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
        page_type: "app_router",
        route_type: pathname.includes('[') ? "dynamic" : "static"
      };
      
      (window as any).dataLayer.push(pageViewData);
      console.log('GTM Page View:', pageViewData);
      
      // Also push a custom event for better tracking
      (window as any).dataLayer.push({
        event: "custom_page_view",
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
        timestamp: new Date().toISOString(),
        page_type: "app_router",
        route_type: pathname.includes('[') ? "dynamic" : "static"
      });
    } else {
      console.warn('GTM dataLayer not available for page view tracking');
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Initialize automatic link tracking
    const cleanup = initializeLinkTracking();
    
    return cleanup;
  }, []);

  // Additional effect to ensure page view is tracked on initial load
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        const initialPageViewData = {
          event: "initial_page_view",
          page_path: pathname,
          page_title: document.title,
          page_location: window.location.href,
          timestamp: new Date().toISOString(),
          page_type: "app_router_initial",
          route_type: pathname.includes('[') ? "dynamic" : "static"
        };
        
        (window as any).dataLayer.push(initialPageViewData);
        console.log('GTM Initial Page View:', initialPageViewData);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []); // Only run once on mount

  return null;
};

export default GTMPageTracker;
