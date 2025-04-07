"use client";
import React from "react";
// import Image from "next/image";
import Link from "next/link";
// import { gsap } from "gsap";
// import arrow from "@/public/Arrow (1).png"
// import Drawer from "../ui/Drawer";

import logo from "@/public/logo-innate.png";
import Image from "next/image";
import { useTabContext } from "@/context/TabContsxt";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { setActiveTab } = useTabContext();
  // const onClose = () => setIsOpen(false);
  // const onOpen = () => setIsOpen(true);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prev) => !prev);
  //   console.log(isDropdownOpen);
  // };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab); // Update context
  };
  // useEffect(() => {
  //   if (isOpen) {
  //     // Select all list items
  //     const listItems = document.querySelectorAll(".list-items");

  //     // Set initial opacity to 0 and translateX to 20px
  //     gsap.set(listItems, { opacity: 0, x: 20 });

  //     // Iterate through list items and animate them
  //     gsap.to(listItems, {
  //       delay: 0.5,
  //       opacity: 1,
  //       x: 0,
  //       duration: 0.7, // Animation duration
  //       stagger: 0.2, // Stagger the animation by 0.2 seconds
  //       ease: "power2.out", // Easing function
  //     });
  //   }
  // }, [isOpen]);

  return (
    <>
      <nav className=" absolute  min-h-[134px] z-50  w-full px-20 mob:px-5 ">
        <div className="flex justify-center items-center w-full min-h-[134px] ">
          <div className="  min-h-[134px] w-full flex flex-wrap items-center justify-between mx-auto py-4">
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
                  // aria-expanded={isOpen ? "true" : "false"}
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

              {/* tab and mob  menu*/}
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
