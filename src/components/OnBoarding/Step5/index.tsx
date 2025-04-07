import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import s1 from "@/public/images/onboarding/s1.svg";
import s2 from "@/public/images/onboarding/s2.svg";
import s3 from "@/public/images/onboarding/s3.svg";
import s4 from "@/public/images/onboarding/s4.svg";
import s5 from "@/public/images/onboarding/s5.svg";
import s6 from "@/public/images/onboarding/s6.svg";
import Swal from "sweetalert2";

interface Step5Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { selectedStyle: { id: number | null; title: string; description: string } }) => void;
}

const Step5: React.FC<Step5Props> = ({ onNext, onPrevious, onChange }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const styles = useMemo(() => [
    { id: 1, imageSrc: s1, title: "Modern", description: "Streamlined, functional spaces with sleek materials" },
    { id: 2, imageSrc: s2, title: "Mid-Century", description: "Streamlined, functional spaces with sleek materials" },
    { id: 3, imageSrc: s3, title: "Spanish", description: "Streamlined, functional spaces with sleek materials" },
    { id: 4, imageSrc: s4, title: "Coastal", description: "Cozy spaces and beachy vibes" },
    { id: 5, imageSrc: s5, title: "Farmhouse", description: "Rustic Materials" },
    { id: 6, imageSrc: s6, title: "Other", description: "Share your vision" },
  ], []);

  // First useEffect (for storing selectedStyle in localStorage)
  useEffect(() => {
    if (selectedId !== null) {
      const selectedStyle = styles.find((style) => style.id === selectedId);
      if (selectedStyle) {
        onChange({ selectedStyle });
        console.log("w", selectedStyle)
        sessionStorage.setItem("step5", JSON.stringify(selectedStyle));
      }
    }
  }, [selectedId, onChange, styles]);

  // Second useEffect (for retrieving selectedStyle from localStorage)
  useEffect(() => {
    const savedData = sessionStorage.getItem("step5");
    if (savedData) {
      // Since you stored `selectedStyle` directly, parse it correctly
      const selectedStyle = JSON.parse(savedData);

      // Assuming `selectedStyle` has an `id` property, set `selectedId`
      setSelectedId(selectedStyle?.id || null);
      console.log("Retrieved selectedStyle id:", selectedStyle?.id);
    }
  }, []);


  const handleNextClick = () => {
    if (selectedId === null) {
      Swal.fire({
        title: 'Error!',
        text: '"Please select a style before proceeding."',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    onNext();
  };

  return (
    <div className="gradient flex items-center justify-center px-5 min-h-[858px]">
      <div className="max-w-[90%] mob:max-w-full w-full py-20">
        <Text as="h1" className="text-[40px] mob:text-[30px] font-firaSans font-medium mob:font-semibold mb-8">
          What style best fits your vision?
        </Text>
        <div className="flex flex-wrap gap-5 mob:flex-row">
          {styles.map(({ id, imageSrc, title, description }) => (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={`flex items-center justify-start gap-[15px] w-[30%] mob:w-full h-[154px] rounded-[10px] p-[16px] ${selectedId === id ? "border border-white" : "border border-[#FFFFFF3D]"
                }`}
            >
              <Image src={imageSrc} alt="" width={128} height={128} />
              <div>
                <Text className="text-[20px] mob:text-[18px] leading-[28px] mb-1 text-left">{title}</Text>
                <Text className="text-left mob:text-[14px]">{description}</Text>
              </div>
            </button>
          ))}
        </div>

        <div className="flex mob:flex-wrap justify-end mt-10">
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
              onClick={handleNextClick} // Validation on Next button
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

export default Step5;
