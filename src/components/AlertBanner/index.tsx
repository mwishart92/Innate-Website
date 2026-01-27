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
      className="w-screen -mx-[64px] md:-mx-[80px] mob:-mx-[20px] flex justify-center transition-all duration-500 ease-in-out overflow-hidden max-h-[120px] opacity-100"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <a
        href="/cost-guide"
        className="flex items-center justify-between px-[15px] py-[15px] rounded-[5px] cursor-pointer hover:opacity-90"
        style={{ 
          backgroundColor: "#DDFE24",
          width: "calc(100vw - 20px)",
          maxWidth: "calc(100vw - 20px)",
          textDecoration: "none"
        }}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Image
            src={starsIcon}
            alt="Stars icon"
            width={18}
            height={18}
            className="flex-shrink-0"
          />
          <span className="text-sm font-medium uppercase mob:text-xs text-[#000]">
          LIMITED TIME OFFER: Download our free ultimate remodeling cost guide PDF!
          </span>
        </div>
        <button
          onClick={handleDismiss}
          className="text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0 ml-4 mob:ml-2 mob:text-xs text-[#000]"
          type="button"
        >
          DISMISS X
        </button>
      </a>
    </div>
  );
};

export default AlertBanner;
