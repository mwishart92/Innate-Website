"use client";
import React from "react";

import { usePathname } from "next/navigation";
import FooterContent from "./content";
const Footer = () => {
  const pathname = usePathname();
  return <>{pathname !== "/work" && <FooterContent />}</>;
};

export default Footer;
