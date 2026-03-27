import React, { useState, useEffect } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import Swal from "sweetalert2";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";

interface Step6Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { address: string }) => void;
}

const Step6: React.FC<Step6Props> = ({ onNext, onPrevious, onChange }) => {
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    const savedData = sessionStorage.getItem("step6");
    if (savedData) {
      setAddress(savedData);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    onChange({ address: e.target.value });
  };

  const handleNextClick = () => {
    if (!address.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your address before proceeding.",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    sessionStorage.setItem("step6", address);
    onNext();
  };

  return (
    <div className="gradient flex items-center justify-center px-5 min-h-[690px] mob:min-h-0">
      <div className="max-w-[90%] mob:max-w-full w-full py-20 mob:pt-10">
        <div>
          <Text as="h1" className="text-[40px] mob:text-[30px] font-firaSans font-medium mob:font-semibold mb-3">
            Enter your address to get a starting cost
          </Text>
          <Text className="text-[16px] font-normal mob:text-[14px]">
            Construction costs are highly dependent on your location. Share your address so we can give you a tailored estimate.
          </Text>
          <input
            placeholder="Address"
            type="text"
            value={address}
            onChange={handleInputChange}
            className="pl-4 mt-7 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
          />
        </div>

        <div className="flex mob:flex-wrap justify-end mt-5">
          <div className="flex gap-5 mt-6">
            <button
              onClick={onPrevious}
              className="flex items-center justify-center gap-2 border border-[#FFFFFF] w-[126px] bg-transparent h-[50px] text-[16px] text-white leading-[22.4px]"
            >
              <Image className="rotate-180" src={arrow} alt="" width={24} height={24} />
              Previous
            </button>
            <button
              onClick={handleNextClick}
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

export default Step6;
