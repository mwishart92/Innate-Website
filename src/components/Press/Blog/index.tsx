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

const Blog = () => {
  // const title = "1";
  // const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className=" pt-16">
      <div className="w-full max-w-full  flex flex-wrap justify-center gap-[24px] mb-[44px] mob:mb-[24px] px-16 md:px-20 mob:px-0">
        <div className="flex-grow max-w-[calc(25%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col">
          <Image src={blog1} alt="" height={192} className="rounded-t-xl w-[100%]" />
          <div className="flex flex-col justify-between flex-grow p-4">
            <Link href={`/blogs/1`} className="">
              <div>
                <Text className="text-white font-light">Blog</Text>
                <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
                  Do you need a soils report or civil engineer for an addition in
                  Bellevue?
                </Text>
                <Text className="text-gray-400  text-[16px] font-normal">
                  When planning to build an addition in Bellevue, Washington,
                  understanding the city’s zoning regulations is essential for a
                  smooth and compliant construction process. Bellevue’s zoning
                </Text>
              </div>
            </Link>
            <Link
              href={`/blogs/1`}
              className="text-white flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={44} height={28} className="-ms-3" />
            </Link>

          </div>
        </div>

        <div className="flex-grow max-w-[calc(25%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px] flex flex-col">
          <Image src={blog2} alt="" height={192} className="rounded-t-xl w-[100%]" />
          <div className="flex flex-col justify-between flex-grow p-4">
            <Link href={`/blogs/2`} className="">
              <div>
                <Text className="text-white">Press</Text>
                <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
                  The Cost of Architecture
                </Text>
                <Text className="text-gray-400  text-[16px] font-normal">
                  The cost of architecture is a contentious topic and a difficult
                  one to find a consensus on. The American Institute of Architects
                  suggests that design
                </Text>
              </div>
            </Link>
            <Link
              href={`/blogs/2`}
              className="text-white flex items-center mt-5 text-[16px] font-normal"
            >
              LEARN MORE <Image src={arrow} alt="" width={44} height={28} className="-ms-3" />
            </Link>
          </div>
        </div>


        <div className="flex-grow max-w-[calc(25%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col">
          <Image src={blog3} alt="" height={192} className="rounded-t-xl w-[100%]" />
          <div className="flex flex-col justify-between flex-grow p-4">
            <Link href={`/blogs/3`} className="">
              <div>
                <Text className="text-white font-light">Blog</Text>
                <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
                  Are you being ripped off by your insurance company?
                </Text>
                <Text className="text-gray-400  text-[16px] font-normal">
                  Are you feeling the weight of uncertainty after filing a water
                  damage claim with your insurance company? Have you ever wondered
                  if the estimate you
                </Text>
              </div>
            </Link>
            <Link
              href={`/blogs/3`}
              className="text-white flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={44} height={28} className="-ms-3" />
            </Link>
          </div>
        </div>
        <div className="flex-grow max-w-[calc(25%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col">
          <Image src={blog4} alt="" height={192} className="rounded-t-xl w-[100%]" />
          <div className="flex flex-col justify-between flex-grow p-4">
            <Link href={`/blogs/4`} className="">
              <div>
                <Text className="text-white font-light">Blog</Text>
                <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
                  New construction CRM app JobSync available on apple app store
                </Text>
                <Text className="text-gray-400  text-[16px] font-normal">
                  In the fast-paced world of construction management, efficiency and
                  precision are paramount. That’s why we’re excited to introduce
                  JobSync, our revolutionary proprietary software that seamlessly
                </Text>
              </div>
            </Link>
            <Link
              href={`/blogs/4`}
              className="text-white flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={44} height={28} className="-ms-3" />
            </Link>
          </div>
        </div>
      </div>
      {/* row2 */}
      <div className="w-full max-w-full  flex flex-wrap justify-start mob:justify-center  gap-[24px] mb-[24px] mx-auto px-16 md:px-20 mob:px-0">
        <div className="flex-grow max-w-[calc(50%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col">
          <Image src={blogb} alt="" height={294} className="rounded-t-xl w-[100%]" />
          <div className="flex flex-col justify-between flex-grow p-4">
            <Link href={`/blogs/5`} className="">
              <div>
                <Text className="text-white font-light">Blog</Text>
                <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
                  The Best CRM and Construction Project Management Software
                </Text>
                <Text className="text-gray-400  text-[16px] font-normal">
                  In the intricate world of construction, effective management of
                  both customer relationships and project timelines is paramount for
                  success. Construction companies operate within a dynamic
                </Text>
              </div>
            </Link>
            <Link
              href={`/blogs/5`}
              className="text-white flex items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={44} height={28} className="-ms-3" />
            </Link>

          </div>
        </div>

        <div className="flex-grow max-w-[calc(25%-18px)] mob:max-w-[90%] border border-[#FFFFFF99] rounded-[10px]  flex flex-col">
          <Image src={blog5} alt="" height={192} className="rounded-t-xl w-[100%]" />
          <div className="flex flex-col justify-between h-full p-4">
            <Link href={`/blogs/6`} className="">
              <div>
                <Text className="text-white">Press</Text>
                <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
                  Why aren’t general contractors getting back to me?
                </Text>
                <Text className="text-gray-400 text-[16px] font-normal">
                  When getting bids for construction, it can be quite a daunting process. When you reach out to a general contractor and ask for a bid,
                </Text>
              </div>
            </Link>

            <Link
              href={`/blogs/6`}
              className="text-white flex w-fit items-center mt-5"
            >
              LEARN MORE <Image src={arrow} alt="" width={44} height={28} className="-ms-3" />
            </Link>
          </div>

          {/* </div> */}


        </div>
        {/* <div className="flex-grow max-w-[calc(25%-18px)] mob:max-w-[90%] border border-white rounded-[10px]">
          <Image src={blog2} alt="" height={192} className="rounded-t-xl w-[100%]" />
          <div className="p-4">
            <Text className="text-white">Press</Text>
            <Text className="text-white text-[20px] leading-[28px] my-2 font-normal">
              Why Do I Need a Project Manager?
            </Text>
            <Text className="text-gray-400  text-[16px] font-normal">
              A project manager is absolutely crucial to the construction
              process for several reasons:Coordination, budget control....
            </Text>


          </div>
        </div> */}
      </div >
    </div >
  );
};

export default Blog;
