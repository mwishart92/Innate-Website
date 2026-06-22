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

  // Sort blogSections by publishedDate (most recent first)
  const sortedBlogSections = [...blogSections].sort((a, b) => {
    if (!a.publishedDate || !b.publishedDate) return 0;

    // Convert date strings to Date objects for comparison
    const dateA = new Date(a.publishedDate);
    const dateB = new Date(b.publishedDate);

    // Sort in descending order (most recent first)
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className=" pt-16">
      <div className="w-full max-w-full  flex flex-wrap justify-center gap-[24px] mb-[44px] mob:mb-[24px] px-16 md:px-20 mob:px-0">
        {sortedBlogSections.map((section, key) => (
          <div
            className="flex-grow max-w-[calc(25%-18px)] tab:max-w-[calc(50%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col relative"
            key={key}
          >
            <Link
              href={`/blogs/${section.slug}`}
              className="h-[192px] relative w-full"
            >
              {section.thumbnail ? (
                <Image
                  src={section.thumbnail}
                  alt=""
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="mb-3 h-12 w-12 text-slate-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-8.25a2.25 2.25 0 0 0-2.25-2.25h-10.5A2.25 2.25 0 0 0 4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h6.75"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 8.25h6M8.25 12h7.5M8.25 15.75h4.5"
                    />
                  </svg>

                  <span className="text-sm font-medium text-slate-500">
                    Blog Article
                  </span>
                </div>
              )}
            </Link>
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
