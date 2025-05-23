"use client";
import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import expandArrow from "@/public/Expand-Arrow.svg";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title?: string;
  description?: string;
  faqItems?: FaqItem[];
}

const defaultFaqItems: FaqItem[] = [
  {
    question: "How long does a kitchen remodel usually take?",
    answer:
      "A standard kitchen remodel in Seattle takes 6–12 weeks, depending on the size and materials selected.",
  },
  {
    question: "Can I use my kitchen during the remodel?",
    answer:
      "During a kitchen remodel, your kitchen will be largely unusable. We recommend setting up a temporary kitchen space and making arrangements for meals during the renovation period.",
  },
  {
    question: "How long does a kitchen remodel usually take?",
    answer:
      "A typical kitchen remodel takes between 6-12 weeks to complete. The exact timeline depends on factors like project scope, material availability, and any unforeseen issues.",
  },
  {
    question: "Do you help with kitchen design and material selection?",
    answer:
      "Yes, we provide comprehensive design assistance and material selection guidance to ensure your kitchen meets both your aesthetic preferences and functional needs.",
  },
];

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
    <div className=" mb-3">
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
        <Text className="text-white">{item.answer}</Text>
      </div>
    </div>
  );
};

const Faq = ({
  title = "FAQ",
  description = "We've answered some of the most common questions homeowners in the Seattle area ask before starting a project. From timelines and costs to permits and materials, our goal is to make your renovation as smooth and transparent as possible.",
  faqItems = defaultFaqItems,
}: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-16 px-5">
      <div className="w-full max-w-[840px] mx-auto rounded-[10px] relative flex items-center justify-center">
        <div className="w-full py-6">
          <Text
            as="h1"
            className="text-[40px] leading-[52px] text-center font-medium max-w-[596px] mx-auto"
          >
            {title}
          </Text>
          <Text className="text-[#D9D9D9] text-center mt-3">{description}</Text>
          <div className="mt-12">
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
      </div>
    </div>
  );
};

export default Faq;
