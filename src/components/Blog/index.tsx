import { FC, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import React from "react";
import Text from "@/components/ui/Text";
// import share from "@/public/images/blog/mdi_instagram.png";
import fb from "@/public/fb.svg";
import linkedin from "@/public/linkedin.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import carbon from "@/public/images/blog/carbon.png";
// import heritage from "@/public/images/blog/heritage.png";
// import resilient from "@/public/images/blog/resilient.png";
// import native from "@/public/images/blog/native.png";
import {
  blogSections,
  ArticleSection,
  Content,
  generateSlug,
} from "@/data/blogSections";
import Link from "next/link";

interface ArticleProps {
  slug: string; // Receive `slug` as a prop instead of `id`
}

const Blog: FC<ArticleProps> = ({ slug }) => {
  const [selectedSections, setSelectedSections] = React.useState<
    ArticleSection[]
  >([]);

  // Use the imported blogSections array
  const sections = blogSections;

  const getUniqueRandomSections = useCallback(() => {
    const selected: ArticleSection[] = [];
    const usedIndices = new Set<number>();
    const blogsData = sections.filter((s) => s.slug !== slug);

    while (selected.length < 4) {
      const randomIndex = Math.floor(Math.random() * blogsData.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        selected.push(blogsData[randomIndex]);
      }
    }
    setSelectedSections(selected);
  }, [sections]);

  useEffect(() => {
    getUniqueRandomSections();
  }, [getUniqueRandomSections]);

  // Find the section by the provided `slug`
  const section = sections.find((section) => section.slug === slug);

  // Extract all <h2> tag texts from section.content
  const h2Titles: string[] = useMemo(() => {
    if (!section) return [];
    const h2s: string[] = [];
    section.content.forEach((item) => {
      if (item.text) {
        // Use regex to extract all <h2>...</h2> contents
        const matches = item.text.match(/<h2[^>]*>(.*?)<\/h2>/g);
        if (matches) {
          matches.forEach((h2) => {
            let text = h2;
            // Remove all &nbsp; entities
            text = text.replace(/&nbsp;/gi, "");
            text = text.trim();
            if (text) h2s.push(text);
          });
        }
      }
    });
    // Filter out empty or whitespace-only headings
    return h2s.filter((t) => t && t.trim() !== "");
  }, [section]);

  if (!section) {
    return <p>Section not found!</p>; // Handle if the section with the given slug is not found
  }

  return (
    <>
      <div className="w-full max-w-[90%] mob:max-w-[100%]  mx-auto mt-10 md:mt-20 lg:px-5">
        <h1 className="text-[40px] font-medium leading-[52px] mob:text-[36px] mob:font-semibold font-inter mob:text-center tab:max-w-full  max-w-[calc(100%-400px)]">
          {section.title}
        </h1>
        <div className="flex tab:flex-wrap tab:gap-3 justify-between mt-6 mb-4 mob:items-center">
          <Text className="text-[20px] text-[#D9D9D9] font-normal ">
            Published: {section.publishedDate}
          </Text>
          <div className="flex gap-3 ">
            {/* <Image src={share} alt="" width={32} height={32} className="opacity-60"/> */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Image
                src={fb}
                alt=""
                width={28}
                height={28}
                className="opacity-60"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/innate-nw/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt=""
                width={28}
                height={28}
                className="opacity-60"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full relative pb-[30%] mob:pb-[50%] mt-10">
        <Image
          src={section.thumbnail}
          alt={section.title || ""}
          fill
          className="object-cover relative h-auto w-full"
        />
      </div>
      <div className="w-full max-w-[90%] mob:max-w-[100%] flex tab:flex-col gap-[90px] tab:gap-[0] mx-auto pt-10 lg:px-5">
        <div className="w-full max-w-[70%] tab:max-w-[100%]">
          {section.content.map((item, index) => (
            <div key={index} className="mb-4 mob:w-full">
              {item.type === "image" && (
                <Swiper
                  slidesPerView={1}
                  speed={2000}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={false}
                  modules={[
                    Keyboard,
                    Navigation,
                    Scrollbar,
                    Autoplay,
                    Pagination,
                  ]}
                  className="mySwiper swiper-backface-hidden"
                >
                  {item?.src?.map((s, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative w-full aspect-[10/5] mob:aspect-[7/5] ">
                        <Image
                          src={s}
                          alt={item.alt || ""}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {item.type === "text" ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.text || "" }}
                    className="[&_a]:text-blue-500 [&_h2]:font-bold mt-10"
                  ></div>
                </>
              ) : null}
            </div>
          ))}
        </div>
        {/* right */}
        {h2Titles.length ? (
          <div className="w-full max-w-[30%] tab:hidden">
            <Text className="text-[18px] mb-3">In this article</Text>
            <div className="pl-3">
              {h2Titles.length > 0 ? (
                h2Titles.map((title, idx) => (
                  <div
                    key={idx}
                    className="text-[#D9D9D9] mb-3"
                    dangerouslySetInnerHTML={{ __html: title || "" }}
                  ></div>
                ))
              ) : (
                <Text className="text-[#D9D9D9] mb-3">No headings found.</Text>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-full max-w-[90%] mob:max-w-[100%] mx-auto mt-10 md:mt-20 lg:px-5">
        <Text
          as="h2"
          className="text-[30px] mob:text-[28px] leading-[42px] font-semibold mb-[34px]"
        >
          You May Like
        </Text>

        <div className="grid mob:grid-cols-1 tab:grid-cols-2 grid-cols-4 gap-[24px] md:gap-[38px] ">
          {selectedSections.map((section) => {
            // Find the first image in the content array
            const thumbnailItem = section.content.find(
              (item) => item.type === "text" && item.src
            );
            // Use a tag if available, otherwise fallback
            const tag = section.tag || "Carbon Economy";
            // Use thumbnail from content or fallback to section.thumbnail
            const imageSrc = section.thumbnail;
            return (
              <div
                key={section.id}
                className="flex flex-col items-start gap-[12px] mb-[28px] w-full"
              >
                {imageSrc && (
                  <Link
                    href={`/blogs/${section.slug}`}
                    className="w-full aspect-square mob:aspect-[4/2] relative mb-2"
                  >
                    <Image
                      className="object-cover rounded"
                      src={imageSrc}
                      fill
                      alt={thumbnailItem?.alt || section.title}
                    />
                  </Link>
                )}
                <button className="px-2 py-1 cursor-auto rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D] font-normal mb-1">
                  {tag}
                </button>
                <Link href={`/blogs/${section.slug}`}>
                  <Text className="text-[14px] leading-[21px] font-semibold w-full overflow-hidden overflow-ellipsis line-clamp-2">
                    {section.title}
                  </Text>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
