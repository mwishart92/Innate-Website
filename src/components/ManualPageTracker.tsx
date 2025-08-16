"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pushGTMEvent } from "@/utils/gtm";

interface ManualPageTrackerProps {
  pageName?: string;
  additionalData?: Record<string, any>;
}

const ManualPageTracker: React.FC<ManualPageTrackerProps> = ({ 
  pageName, 
  additionalData = {} 
}) => {
  const pathname = usePathname();

  useEffect(() => {
    // Manual page view tracking for specific pages
    const pageViewData = {
      event: "manual_page_view",
      page_path: pathname,
      page_title: document.title,
      page_location: window.location.href,
      page_name: pageName || pathname,
      timestamp: new Date().toISOString(),
      tracking_method: "manual_component",
      ...additionalData
    };

    pushGTMEvent("manual_page_view", pageViewData);
    console.log('Manual Page Tracker:', pageViewData);

    // Also push a standard page view event
    pushGTMEvent("page_view", {
      page_path: pathname,
      page_title: document.title,
      page_location: window.location.href,
      timestamp: new Date().toISOString(),
      tracking_method: "manual_component",
      ...additionalData
    });
  }, [pathname, pageName, additionalData]);

  return null;
};

export default ManualPageTracker;
