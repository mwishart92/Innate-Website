import React, { useState,useEffect } from "react";
import Text from "@/components/ui/Text";
import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import Image from "next/image";
import Swal from "sweetalert2";

interface Step1Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { selectedOptions: string[]; comment: string }) => void; // Updated data structure
}

const Step1: React.FC<Step1Props> = ({ onNext, onPrevious, onChange }) => {
  const options = [
    "Accessory Dwelling Unit (ADU)",
    "Kitchen Remodel",
    "Bathroom Remodel",
    "Addition",
    "New Construction",
    "General Remodel",
    "Other",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");
  useEffect(() => {
    const savedData = sessionStorage.getItem("step1");
    if (savedData) {
      const { selectedOptions, comment } = JSON.parse(savedData);
      setSelectedOptions(selectedOptions || []);
      setComment(comment || "");
    }
  }, []);

  const handleCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange({ selectedOptions: updatedOptions, comment }); // Pass updated state
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedComment = e.target.value;
    setComment(updatedComment);
    onChange({ selectedOptions, comment: updatedComment }); // Pass updated state
  };

  const handleNextClick = () => {
    if (selectedOptions.length === 0) {
      Swal.fire({
        title: 'Error!',
        text: '"Please select at least one option to proceed."',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    onNext();
  };

  return (
    <div className="gradient flex items-start justify-center py-20 min-h-[858px]">
      <div className="w-full max-w-[90%]">
        <Text as="h1" className="text-[40px] mob:text-[30px] font-firaSans font-medium mob:font-semibold mb-10">
          How do you want to get started?
        </Text>

        <div className="flex flex-col gap-3">
          {options.map((option, index) => (
            <label key={index} className="flex items-center gap-[14px]">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="hidden"
              />
              <div className={`h-5 w-5 border border-gray-500 flex items-center justify-center rounded ${selectedOptions.includes(option) ? 'bg-blue-500' : 'bg-transparent'}`}>
                {selectedOptions.includes(option) && (
                  <svg
                    className="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[20px] mob:text-[18px] font-normal text-[#D9D9D9]">{option}</span>
            </label>
          ))}
        </div>

        {/* Input Field */}
        <div className="">
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="For Other add here"
            className="text-white/60 tab:w-full w-[490px] mt-5 bg-transparent border-b border-white/30 p-2 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex mob:flex-wrap justify-end">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image
                className="rotate-180"
                src={arrow}
                alt=""
                width={24}
                height={24}
              />
              Previous
            </button>
            <button
              onClick={()=>{handleNextClick(); sessionStorage.setItem("step1", JSON.stringify({ selectedOptions, comment }));
            }}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[116px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              Next
              <Image src={arrow} alt="" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
