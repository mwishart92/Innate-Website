"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import arrow from "@/public/Arrow Right.png";
import downwardarrow from "@/public/Arrow (1).png";
import Drawer from "../ui/Drawer";
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/themes/light.css';

import logo from "@/public/logo-innate.png";
import Image from "next/image";
import { useTabContext } from "@/context/TabContsxt";
import "./Navbar.css";
import { cn } from "@/libs/utils/twMerge";

const services = [
  { name: "ADUs", slug: "adus" },
  { name: "Architectural Services", slug: "architectural-services" },
  { name: "Bathroom Remodeling", slug: "bathroom-remodeling" },
  { name: "Decks", slug: "decks" },
  { name: "Exterior Remodeling", slug: "exterior-remodeling" },
  { name: "Kitchen Remodeling", slug: "kitchen-remodeling" },
  { name: "Natural Disaster Mitigation", slug: "natural-disaster-mitigation" },
  { name: "Whole Home Remodels", slug: "whole-home-remodels" },
].sort((a, b) => a.name.localeCompare(b.name));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTab, setActiveTab } = useTabContext();
  const onServicesClose = () => {
    setIsServicesOpen(false);
  };
  const onClose = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    console.log(isOpen);
  };
  const onOpen = () => setIsOpen(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    // console.log(isDropdownOpen);
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab); // Update context
  };
  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);
  const saveTabTitle = (tab: string) => {
    const tabData: Record<string, { title: string; description: string }> = {
      "/": {
        title: "Innate NW | Custom Design & Construction Solutions",
        description:
          "Innovative design and construction solutions tailored to your needs.",
      },
      "/about": {
        title: "About INNATE | Expert Project Management Solutions & Team",
        description:
          "Discover INNATE's expertise in project management solutions, driving efficiency and innovation for businesses. Learn more about our mission, values, and team.",
      },
      "/contact": {
        title: "Contact INNATE | Get in Touch for Inquiries & Support",
        description:
          "Connect with INNATE's experts for custom design and construction solutions. Reach out today to discuss your unique project needs and get professional assistance",
      },
      "/services": {
        title: "Services",
        description: "Explore our range of professional services.",
      },
      "/onboarding": {
        title: "On Boarding",
        description:
          "Start your journey with us through our onboarding process.",
      },
      "/press": {
        title: "INNATE Press | Company News, Media Releases & Industry Updates",
        description:
          "Get the latest INNATE news, press releases, and industry updates now. Stay informed with media coverage, company announcements, and insightful stories",
      },
      "/work": {
        title: "INNATE Work | Cutting-Edge Projects & Proven Excellence",
        description:
          "Explore INNATE's cutting-edge projects and proven excellence. Discover innovative solutions driving success across industries. Get insights now!",
      },
      // Add more mappings as needed
    };

    const { title, description } = tabData[tab] || {
      title: "My App",
      description: "Default description of the app.",
    };

    // Update the document's title
    document.title = title;

    // Update the meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }
  };

  // Automatically set the tab title when `activeTab` changes
  useEffect(() => {
    saveTabTitle(activeTab);
  }, [activeTab]);

  return (
    <>
      <nav className="absolute min-h-[134px] z-50 w-full px-16 md:px-20 mob:px-5 ">
        <div className="flex justify-center items-center w-full min-h-[134px] ">
          <div className="min-h-[134px] w-full flex flex-wrap items-center justify-between mx-auto pb-[24px] mob:pb-[50px]">
            <div className="flex justify-between w-full pb-4">
              <Link
                href="/"
                className="flex  mob:justify-start space-x-3 rtl:space-x-reverse"
              >
                <Image
                  className="w-[259.2px] h-[56px] mob:w-[175.89px] mob:h-[38px] z-50"
                  onClick={() => handleTabChange("/")}
                  src={logo}
                  alt="Flowbite Logo"
                />
              </Link>
              <div className="flex xl:pr-4 xl:hidden  pt-2">
                <button
                  // onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm font-light text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-gray-700 dark:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  {/* Your menu options */}
                  <ul className="font-light mob:absolute mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[24px] md:flex-row  rtl:space-x-reverse md:mt-0  tab:bg-black">
                    <li>
                      <Link
                        href="/about"
                        onClick={() => handleTabChange("/about")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${
                          activeTab === "/about"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                        }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/work"
                        onClick={() => handleTabChange("/work")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${
                          activeTab === "/work"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                        }`}
                      >
                        Work
                      </Link>
                    </li>
                    <li className="relative group">
                      <Link
                        href="/services"
                        onClick={() => handleTabChange("/services")}
                        className={`cursor-pointer block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${
                          activeTab === "/services"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                        }`}
                      >
                        <div className="flex items-center gap-1">Services</div>
                      </Link>
                      {/* Dropdown menu */}
                      <ul className="absolute left-0 min-w-[200px] bg-[#333333] text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                              onClick={() => {
                                sessionStorage.setItem(
                                  "serviceType",
                                  service.name
                                );
                              }}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li>
                      <Link
                        href="/press"
                        onClick={() => handleTabChange("/press")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${
                          activeTab === "/press"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                        }`}
                      >
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => handleTabChange("/contact")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${
                          activeTab === "/contact"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* tab and mob  menu*/}
              <div className="hidden xl:block  ">
                <div
                  className="relative cursor-pointer flex pt-[5px]"
                  onClick={() => {
                    if (isOpen) {
                      onClose();
                      onServicesClose();
                    } else {
                      onOpen();
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-md focus:outline-none bottom-[1px] ${isOpen}? "hidden" : `}
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span
                      className={`block w-[39px] h-[2px] bg-white transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-45 translate-y-[4px]" : ""
                      }`}
                    ></span>
                    <span
                      className={`block w-[39px] h-[2px] bg-white mt-1.5 transition-transform duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 -translate-y-[4px]" : ""
                      }`}
                    ></span>
                  </button>
                </div>

                {/* side menu */}
                <div className="relative z-40">
                  <Drawer isOpen={isOpen}>
                    <div className="flex h-full w-full z-0 pt-20">
                      <ul className="font-light  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <Link
                          href="/about"
                          onClick={() => handleTabChange("/about")}
                          className={`block  text-[19px] font-inter font-normal leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${
                            activeTab === "/about"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            About
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/work"
                          onClick={() => handleTabChange("/work")}
                          className={`block  text-[19px] font-inter font-normal leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${
                            activeTab === "/work"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Work
                          </li>
                        </Link>
                        <div className="flex justify-between">
                          <Link
                            href="/services"
                            onClick={() => handleTabChange("/services")}
                            className={`block text-[19px] font-inter font-normal leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${
                              activeTab === "/services"
                                ? "text-[#2CFF06]"
                                : "text-[#FFFFFF]"
                            }`}
                          >
                            <span className="flex ms-5 py-[15px] list-items">
                              Services
                            </span>
                          </Link>
                          <div
                            className="flex items-center w-full justify-end"
                            onClick={() => {
                              setIsServicesMobileOpen(!isServicesMobileOpen);
                            }}
                          >
                            <Image
                              src={downwardarrow}
                              alt="Dropdown arrow"
                              className={cn(
                                "cursor-pointer hover:text-[#2CFF06] transition-transform duration-300",
                                isServicesMobileOpen ? "rotate-0" : "rotate-180"
                              )}
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                        {/* Mobile menu  */}
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            isServicesMobileOpen ? "max-h-[500px]" : "max-h-0"
                          )}
                        >
                          <div className="pl-10">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06]"
                              >
                                <li className="flex py-[10px] list-items">
                                  {service.name}
                                </li>
                              </Link>
                            ))}
                          </div>
                        </div>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}
                        <Link
                          href="/press"
                          onClick={() => handleTabChange("/press")}
                          className={`block  text-[19px] font-inter font-normal leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${
                            activeTab === "/press"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Press
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="/contact"
                          onClick={() => handleTabChange("/contact")}
                          className={`block  text-[19px] font-inter font-normal leading-[25.5px] text-[#FFFFFF] hover:text-[#2CFF06] ${
                            activeTab === "/contact"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Contact
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </Drawer>
                </div>

                {/* services menu */}
                <div className="relative z-40">
                  <Drawer isOpen={isServicesOpen}>
                    <div className="flex flex-col h-full w-full z-0 pt-10">
                      {/* <div> */}
                      {/* <div className=" " > */}
                      <div className="flex items-center text-center text-[22px] font-inter font-normal leading-[25.5px]  mt-10 text-[#FFFFFF] pl-5">
                        {/* <Image
                          src={arrow}
                          alt="Dropdown arrow"
                          className="rotate-180 cursor-pointer hover:text-[#2CFF06]"
                          width={24}
                          height={24}
                          onClick={() => setIsServicesOpen(false)}
                        /> */}
                        Services
                      </div>
                      {/* </div> */}
                      {/* </div> */}
                      <ul className="font-light  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <Link
                          href="/services"
                          onClick={(e) => e.preventDefault()}
                          // onClick={() => handleTabChange('/services')}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/about"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Architecture
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          // onClick={() => handleTabChange('/work')}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/work"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Kitchens & Bathrooms
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          // onClick={() => handleTabChange('/work')}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/work"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Construction
                          </li>
                        </Link>

                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          // onClick={() => handleTabChange('/press')}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/press"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Roofing
                          </li>
                        </Link>
                        {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}

                        <Link
                          // onClick={() => handleTabChange('/contact')}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/contact"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Decks & Patio Covers
                          </li>
                        </Link>

                        <Link
                          // onClick={() => handleTabChange('/contact')}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/contact"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Siding
                          </li>
                        </Link>
                        <Link
                          // onClick={() => handleTabChange('/contact')}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/contact"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Windows & Doors
                          </li>
                        </Link>
                        <Link
                          // onClick={() => handleTabChange('/contact')}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={`block  text-[17px] font-inter font-light leading-[25.5px] text-[#FFFFFF99] hover:text-[#2CFF06] ${
                            activeTab === "/contact"
                              ? "text-[#2CFF06]"
                              : "text-[#FFFFFF]"
                          }`}
                        >
                          <li className="flex ms-5 py-[15px] list-items">
                            Natural Disaster Mitigation
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
