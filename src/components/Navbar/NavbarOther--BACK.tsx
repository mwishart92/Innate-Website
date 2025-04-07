"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import arrow from "@/public/Arrow (1).png"
import Drawer from "../ui/Drawer";

import logo from "@/public/logo-innate.png";
import Image from "next/image";
import { useTabContext } from "@/context/TabContsxt";

const NavbarOther = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTab, setActiveTab } = useTabContext();
  // const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    console.log(isDropdownOpen);
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

  return (
    <>
      <nav className=" absolute  min-h-[134px] z-50  w-full px-20 mob:px-5 ">
        <div className="flex justify-center items-center w-full min-h-[134px] ">
          <div className=" max-w-[1200px] min-h-[134px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
            <div className="flex    justify-between w-full    pb-4">
              <Link
                href="/"
                className="flex  mob:justify-start space-x-3 rtl:space-x-reverse"
              >
                <Image
                  className="mob:max-w-[200px]"
                  onClick={() => handleTabChange("/")}
                  src={logo}
                  alt="Flowbite Logo"
                  width={259}
                  height={56}
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
                  className={`${isOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                  id="navbar-default"
                >
                  {/* Your menu options */}
                  <ul className="font-light mob:absolute mob:top-[100px] items-center mob:px-4 mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[24px] md:flex-row  rtl:space-x-reverse md:mt-0  tab:bg-black">
                    <li>
                      <Link
                        href="/about"
                        onClick={() => handleTabChange("/about")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] ${activeTab === "/about"
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
                        className={`block text-[16px] font-inter font-light leading-[25.5px] ${activeTab === "/work"
                          ? "text-[#2CFF06]"
                          : "text-[#FFFFFF]"
                          }`}
                      >
                        Work
                      </Link>
                    </li>
                    <li className="relative group">
                      <div
                        onClick={() => { handleTabChange("/services"); toggleDropdown() }}
                        className={` cursor-pointer block text-[16px] font-inter font-light leading-[25.5px] hover:text-[#2CFF06] ${activeTab === "/services"
                          ? "text-[#2CFF06]"
                          : "text-[#FFFFFF]"
                          }`}
                      >
                        <div className="flex items-center gap-1 "> Services <Image src={arrow} alt="" width={24} height={24} /></div>

                      </div>
                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <ul className="absolute left-0 min-w-[180px] bg-[#333333] text-white shadow-lg rounded-lg">
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Architecture
                            </Link>
                          </li>
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Kitchens & Bathrooms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Construction
                            </Link>
                          </li>
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Roofing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Decks & Patio Covers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Siding
                            </Link>
                          </li>
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Windows & Doors
                            </Link>
                          </li>
                          <li>
                            <Link
                              href=""
                              className="block px-4 py-2 hover:bg-[#444444] text-sm font-light"
                            >
                              Interior Design
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link
                        href="/press"
                        onClick={() => handleTabChange("/press")}
                        className={`block text-[16px] font-inter font-light leading-[25.5px] ${activeTab === "/press"
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
                        className={`block text-[16px] font-inter font-light leading-[25.5px] ${activeTab === "/contact"
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
                  onClick={onOpen}
                >
                  <button
                    // onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm font-light   bg-transparent text-white rounded-lg  "
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
                </div>
                <div className="relative z-40">
                  <Drawer isOpen={isOpen} >
                    <div className="flex items-center h-full w-full ">
                      <ul className="font-light  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <Link
                          href="/about"
                          onClick={() => handleTabChange("/about")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] ${activeTab === "/about"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            About
                          </li>
                        </Link>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/work"
                          onClick={() => handleTabChange("/work")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] ${activeTab === "/work"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Work
                          </li>
                        </Link>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/services"
                          onClick={() => handleTabChange("/services")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] ${activeTab === "/services"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Services
                          </li>
                        </Link>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/press"
                          onClick={() => handleTabChange("/press")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] ${activeTab === "/press"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Press
                          </li>
                        </Link>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/contact"
                          onClick={() => handleTabChange("/contact")}
                          className={`block  text-[20px] font-inter font-medium leading-[25.5px] text-[#FFFFFF] ${activeTab === "/contact"
                            ? "text-[#2CFF06]"
                            : "text-[#FFFFFF]"
                            }`}
                        >
                          <li className="flex justify-center py-[15px] list-items">
                            Contact
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

export default NavbarOther;
