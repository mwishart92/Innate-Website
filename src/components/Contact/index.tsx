"use client";
import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import rightarrow from "@/public/images/press/RightArrowblue.png";
import Form from "./Form";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="gradient min-h-screen py-44 flex flex-col justify-center px-20 mob:px-5">
        <div className="mx-auto w-full max-w-full flex justify-bewteen lg:flex-wrap gap-[200px] lg:gap-[50px]">
          <div className="fmax-w-[40%] mob:max-w-[100%] ">
            <Text
              as="h1"
              className="text-[34px] mob:text-[30px] text-white font-semibold"
            >
              Fill out this form and<br/>
              we will be in touch<br/>
              within 24 hours
            </Text>
            <Text className="mt-4 text-[#D9D9D9] font-normal mob:text-[14px]">
            Every great project starts with a conversation. If you’re looking for an architect, engineer, or builder, use this form to schedule a complimentary 30-minute consultation and see if we’re a good fit. 
            </Text>
            <Text className="mt-4 text-[#D9D9D9] font-normal mob:text-[14px]">
            If it’s a match, we’ll move forward with an in-person site visit. If not, we’ll gladly connect you with a better resource.
            </Text>
            
            <Link href="/onboarding">
              <button
                type="submit"
                onClick={() =>
                  localStorage?.setItem(
                    "onboardingRedirectUrl",
                    location?.pathname
                  )
                }
                className="w-[172.63px] h-[50px] mt-8 border border-white text-white hover:bg-white hover:text-black hover:border-black text-[16px] font-medium flex items-center justify-center gap-1"
              >
                Start project
                <Image src={rightarrow} alt="" width={18} height={18} />
              </button>
            </Link>
          </div>
          {/* right form */}
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
