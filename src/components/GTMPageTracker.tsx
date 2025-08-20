"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initializeLinkTracking, initializeGTM, checkGTMLoading, forceGTMLoading, initializeFormTracking } from "@/utils/gtm";

const GTMPageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize GTM if not already done
    initializeGTM();
    
    // Check GTM loading status
    const loadingStatus = checkGTMLoading();
    console.log('GTMPageTracker - GTM Loading Status:', loadingStatus);
    
    // Force loading if not loaded
    if (!loadingStatus.allLoaded) {
      console.log('GTMPageTracker - Forcing GTM loading...');
      forceGTMLoading();
    }
  }, []);

  useEffect(() => {
    // Push page view event to dataLayer when route changes
    if (typeof window !== "undefined") {
      // Check GTM loading status before pushing events
      const loadingStatus = checkGTMLoading();
      
      if (loadingStatus.dataLayerExists && (window as any).dataLayer) {
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
        console.warn('GTM dataLayer not available for page view tracking. Loading status:', loadingStatus);
        // Try to force loading
        forceGTMLoading();
      }
    } else {
      console.warn('GTM dataLayer not available for page view tracking - window not available');
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

  // Additional effect to ensure page view is tracked on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        const loadingStatus = checkGTMLoading();
        
        if (loadingStatus.dataLayerExists && (window as any).dataLayer) {
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
        } else {
          console.warn('GTM dataLayer not available for initial page view tracking. Loading status:', loadingStatus);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []); // Only run once on mount

  return null;
};

export default GTMPageTracker;
