"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GTMPageTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Push page view event to dataLayer when route changes
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "page_view",
        page_path:
          pathname +
          (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return null;
};

export default GTMPageTracker;
