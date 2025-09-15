"use client";
import React, { useState } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import expandArrow from "@/public/Expand-Arrow.svg";

interface FaqItem {
  question: string;
  answer: string;
}

interface BlogFaqProps {
  faqItems: FaqItem[];
}

const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="mb-3">
      <button
        className="w-full py-[14px] px-3 relative flex items-center justify-between text-center border border-white"
        onClick={onClick}
      >
        <div className="w-6" />
        <Text className="text-base font-normal pr-8 text-white leading-none">
          {item.question}
        </Text>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image src={expandArrow} alt="Expand" width={24} height={24} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#4E4E4E] bg-opacity-25 ${
          isOpen
            ? "max-h-[500px] opacity-100 mb-6 py-7 mob:py-5 px-6 mob:px-3"
            : "max-h-0 opacity-0"
        }`}
      >
        <p 
          className="text-white text-[#D9D9D9] text-[16px] font-light leading-[24px] font-inter"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  );
};

const BlogFaq = ({ faqItems }: BlogFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10">
      <h3 className="text-[24px] font-bold mb-6 text-white">
        <strong>Frequently Asked Questions (FAQ)</strong>
      </h3>
      <div className="mt-6">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogFaq;
