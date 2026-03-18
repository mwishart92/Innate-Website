"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import starsIcon from "@/public/stars.svg";

const AlertBanner = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const shouldShow = isVisible && pathname !== "/cost-guide";

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <div
      className="w-screen flex justify-center items-center transition-all duration-500 ease-in-out overflow-hidden -mx-[64px] md:-mx-[80px] mob:-mx-[20px]"
      style={{ height: "32px", marginTop: 0, marginBottom: 0 }}
    >
      <a
        href="https://visualizer.innate-aec.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-full h-full cursor-pointer hover:opacity-90 min-h-[32px]"
        style={{
          backgroundColor: "#CCFF00",
          width: "100%",
          textDecoration: "none",
        }}
      >
        <span className="text-sm font-medium mob:text-xs text-[#000] text-center px-10 flex items-center justify-center gap-2">
          <Image
            src={starsIcon}
            alt=""
            width={18}
            height={18}
            className="flex-shrink-0"
          />
          <span className="hidden mob:inline">Instant AI Remodel Tool</span>
          <span className="mob:hidden">Instant AI Remodel Tool — Upload Your Kitchen or Bath Photo and See Your Space Remodeled in Seconds!</span>
        </span>
        <button
          onClick={handleDismiss}
          className="absolute top-1/2 -translate-y-1/2 text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity mob:text-xs text-[#000]"
          style={{ right: "40px" }}
          type="button"
        >
          DISMISS X
        </button>
      </a>
    </div>
  );
};

export default AlertBanner;
