"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Innate offer?",
    answer:
      "Innate is a complete service provider for complicated home projects from planning to construction. The services offered by Innate AEC include architectural design, engineering, permits, and construction services for the following:",
    list: [
      "Whole home remodeling",
      "Renovations for kitchens and bathrooms",
      "Outdoor remodeling including decks/patios",
      "Protection against natural disasters",
    ],
  },
  {
    question: "In what ways is our approach unique compared to conventional contracting firms?",
    answer:
      "Innate handles Architecture, Engineering, and Construction all under one roof. While many conventional contractors require you to hire separate architects, engineers, and builders, our integrated approach brings all three together as one collaborative team. The result is clearer communication, a more streamlined process, fewer misunderstandings during construction, and reduced risk of unexpected costs.",
  },
  {
    question: "How do you manage the cost and timeline of the project?",
    answer:
      'We use an internal tool called JobSync that manages the timeline, payments, budget and materials selection. In order to prevent any "costly surprise", we visit each project site personally and offer a clear bid for each trade. Moreover, construction starts only when all aspects from fixtures to layout designs are done, approved, and placed into an order.',
  },
  {
    question: "Who will be working on my remodel project?",
    answer:
      "We have our own staff of designers, superintendents and project managers. They also have a list of reliable craftsmen and subcontractors who are committed to building something lasting just like Innate. Every project has its own project manager who supervises each project aspect.",
  },
];

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pb-16 px-5">
      <div className="w-full max-w-[840px] mx-auto">
        <h2
          className="text-[40px] leading-[52px] text-center font-medium max-w-[696px] mx-auto text-white font-inter"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          General FAQs
        </h2>
        <p className="text-[#D9D9D9] text-center mt-3 font-inter text-[16px] font-light" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          Have questions about working with Innate?{" "}<br />Here are answers to some of the most common questions we hear from homeowners.
        </p>
        <div className="mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3">
              <button
                className="w-full py-[14px] px-3 flex items-center justify-between text-center border border-white bg-[#4E4E4E]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="w-6 shrink-0" />
                <span className="text-base font-normal pr-8 text-white leading-none font-inter">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 transform transition-transform duration-300 text-white text-xl leading-none ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  &#8964;
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#4E4E4E] bg-opacity-25 ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100 mb-6 py-7 px-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#D9D9D9] text-[16px] font-light leading-[24px] font-inter">
                  {faq.answer}
                </p>
                {faq.list && (
                  <ul className="list-disc pl-5 mt-3 text-[#D9D9D9] text-[16px] font-light font-inter space-y-1">
                    {faq.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFaq;
