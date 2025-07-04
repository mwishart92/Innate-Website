import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/press/white arrow.png";
import blog1 from "@/public/images/press/approvedblog.png";
import blog2 from "@/public/images/press/blog2.png";
import blog3 from "@/public/images/press/blog3.png";
import blog4 from "@/public/images/press/blog4.png";
import blog5 from "@/public/images/press/blog5.png";
import blogb from "@/public/images/press/blogb.png";
import { blogSections } from "@/data/blogSections";

const Blog = () => {
  // const title = "1";
  // const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className=" pt-16">
      <div className="w-full max-w-full  flex flex-wrap justify-center gap-[24px] mb-[44px] mob:mb-[24px] px-16 md:px-20 mob:px-0">
        {blogSections.map((section) => (
          <div className="flex-grow max-w-[calc(25%-18px)] tab:max-w-[calc(50%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col relative">
            <div className="h-[192px] relative w-full">
              <Image
                src={section.thumbnail}
                alt=""
                fill
                className="rounded-t-xl object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-4">
              <Link href={`/blogs/${section.slug}`} className="">
                <div>
                  <Text className="text-white font-light">{section.tag}</Text>
                  <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
                    {section.title}
                  </Text>
                  <Text className="text-gray-400  text-[16px] font-normal">
                    {section.excerpt}
                  </Text>
                </div>
              </Link>
              <Link
                href={`/blogs/${section.slug}`}
                className="text-white flex items-center mt-5"
              >
                LEARN MORE{" "}
                <Image
                  src={arrow}
                  alt=""
                  width={44}
                  height={28}
                  className="-ms-3"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
