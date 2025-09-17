"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import rightarrow from "@/public/images/press/RightArrowblue.png";

export default function NotFound() {
  const router = useRouter();
  useLayoutEffect(() => {
    const body = document.getElementById("body");
    if (body) {
      body.classList.remove("loading");
      body.classList.add("loaded");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="gradient min-h-screen py-44 flex flex-col justify-center px-20 mob:px-5">
        <div className="max-w-[683px] mx-auto text-white text-center">
          <h1 className="text-[34px] font-semibold mb-4 ">
            Looks like this space isn’t built yet
          </h1>
          <p className="text-base text-[#D9D9D9] max-w-[444px] mx-auto">
            Sorry, we couldn’t find the page you were after. But if you’re still
            here, maybe one of these will help:
          </p>
          <div className="flex flex-col gap-[16px] items-center mt-8">
            <Button
              className="max-w-[250px] mob:max-w-[116.38px] mob:h-[35.61px] h-[50px] flex justify-center items-center gap-2  text-[16px] bg-transparent backdrop-blur-md mob:text-[11.21px]"
              onClick={() => router.push("/")}
            >
              Go back to home page
              <Image src={rightarrow} alt="" width={18} height={18} />
            </Button>
            <Button
              className="max-w-[250px] mob:max-w-[116.38px] mob:h-[35.61px] h-[50px] flex justify-center items-center gap-2  text-[16px] bg-transparent backdrop-blur-md mob:text-[11.21px]"
              onClick={() => router.push("/services")}
            >
              View our services
              <Image src={rightarrow} alt="" width={18} height={18} />
            </Button>
            <Button
              className="max-w-[250px] mob:max-w-[116.38px] mob:h-[35.61px] h-[50px] flex justify-center items-center gap-2  text-[16px] bg-transparent backdrop-blur-md mob:text-[11.21px]"
              onClick={() => router.push("/work")}
            >
              Explore past projects
              <Image src={rightarrow} alt="" width={18} height={18} />
            </Button>
            <Button
              className="max-w-[250px] mob:max-w-[116.38px] mob:h-[35.61px] h-[50px] flex justify-center items-center gap-2  text-[16px] bg-transparent backdrop-blur-md mob:text-[11.21px]"
              onClick={() => router.push("/contact")}
            >
              Contact us
              <Image src={rightarrow} alt="" width={18} height={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
