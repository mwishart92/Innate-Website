import React, { useState, useEffect } from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import arrow from "@/public/images/onboarding/majesticons_arrow-up-line.png";
import Swal from "sweetalert2";

interface Step8Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { name: string; phone: string; email: string }) => void; // Add onChange prop to handle name and phone
}

const Step8: React.FC<Step8Props> = ({ onNext, onPrevious, onChange }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const savedData = sessionStorage.getItem("step8");
    if (savedData) {
      const { name, phone, email } = JSON.parse(savedData);
      setName(name || "");
      setPhone(phone || "");
      setEmail(email || "");
    }
  }, []);
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regex.test(email)) {
      return true
    }
    return false
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    onChange({ name: e.target.value, phone, email }); // Send name and phone data to parent
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    onChange({ name, phone: e.target.value, email }); // Send name and phone data to parent
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    onChange({ name, phone, email: e.target.value }); // Send name and phone data to parent
  };

  const handleNextClick = () => {
    if (!name.trim() || !phone.trim() || !email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields before proceeding.',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (!validateEmail(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter valid Email',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      })
      return
    }
    sessionStorage.setItem("step8", JSON.stringify({ name, phone }));
    onNext();
  };

  return (
    <div className="gradient flex items-center justify-center px-5">
      <div className="max-w-[90%] mob:max-w-full w-full py-20">
        <div>
          <Text as="h1" className="text-[40px] mob:text-[30px] font-firaSans font-medium mob:font-semibold mb-3">
            Almost Done!
          </Text>
          <Text className="text-[16px] font-normal mob:text-[14px]">
            We’ll use this info to get in touch with you to schedule a
            consultation or send a rough bid.
          </Text>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={handleNameChange} // Handle name change
            className="pl-4 mt-7 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="pl-4 mt-3 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white" />
          <input
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 14) {
                handlePhoneChange(e);
              }
              else {
                Swal.fire({
                  title: 'Error!',
                  text: "Enter max 14 digits",
                  icon: 'error',
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            }} // Handle phone change
            className="pl-4 mt-3 w-full max-w-[900px] h-[60px] border border-[#FFFFFF3D] bg-transparent outline-none text-white text-[16px] placeholder:text-[16px] placeholder:text-white"
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
              onClick={handleNextClick} // Validate inputs on Next button click
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

export default Step8;
