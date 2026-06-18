"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  initializeLinkTracking,
  initializeGTM,
  initializeFormTracking,
} from "@/utils/gtm";

const AD_PARAMS = [
  "gclid", // Google Ads click ID
  "fbclid", // Facebook click ID
  "msclkid", // Microsoft/Bing Ads click ID
  "ttclid", // TikTok click ID
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const SESSION_PREFIX = "innate_attr_";

const GTMPageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize GTM once
    initializeGTM();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Capture any ad attribution params present in the current URL
    const captured: Record<string, string> = {};
    AD_PARAMS.forEach((param) => {
      const value = searchParams?.get(param);
      if (value) {
        captured[param] = value;
        try {
          sessionStorage.setItem(SESSION_PREFIX + param, value);
        } catch {}
      }
    });

    // If none in URL, restore from sessionStorage (persists across SPA navigation)
    const attribution: Record<string, string> = { ...captured };
    if (Object.keys(captured).length === 0) {
      AD_PARAMS.forEach((param) => {
        try {
          const stored = sessionStorage.getItem(SESSION_PREFIX + param);
          if (stored) attribution[param] = stored;
        } catch {}
      });
    }

    // Push attribution to dataLayer whenever we have params
    if (Object.keys(attribution).length > 0 && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "ad_attribution",
        ...attribution,
      });
    }
  }, [searchParams]);

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
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Initialize automatic link tracking
    const linkCleanup = initializeLinkTracking();

    // Initialize automatic form tracking
    const formCleanup = initializeFormTracking();

    return () => {
      if (linkCleanup) linkCleanup();
    };
  }, []);

  return null;
};

export default GTMPageTracker;
