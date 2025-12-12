"use client";
import { useState } from "react";
import Image from "next/image";
import giftIcon from "@/public/images/home/gift.svg";

const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <div 
      className={`w-screen -mx-[64px] md:-mx-[80px] mob:-mx-[20px] flex justify-center transition-all duration-500 ease-in-out overflow-hidden ${
        isVisible ? "max-h-[120px] opacity-100" : "max-h-0 opacity-0"
      }`}
      style={{ marginTop: isVisible ? "10px" : "0", marginBottom: isVisible ? "10px" : "0" }}
    >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfELfZCnkEWcXoQLFu102cyphWDxlLi3bv9kLH6l3wzwpsmGw/viewform"
        target="_blank"
        rel="noopener noreferrer"
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
            src={giftIcon}
            alt="Gift icon"
            width={18}
            height={18}
            className="flex-shrink-0"
          />
          <span className="text-sm font-medium uppercase mob:text-xs text-[#000]">
            HOLIDAY GIVEAWAY: YES, REALLY. WE'RE GIVING AWAY A FREE BATHROOM REMODEL!
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
