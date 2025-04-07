import React from "react";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import Image from "next/image";
const Form = () => {
  return (
    <form className="w-full max-w-[611px]">
      <input
        type="text"
        placeholder="Name"
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent focus:outline-none text-[16px] text-white placeholder-white"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <input
        type="number"
        placeholder="Phone"
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <input
        type="text"
        placeholder="Project Address"
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <select className="w-full py-2 mb-6 border-b-2 border-white   focus:outline-none text-[16px] text-white bg-transparent  placeholder-white">
        <option value="" disabled selected hidden>
          Project Type
        </option>
        <option className="text-black" value="option1">Option 1</option>
        <option className="text-black" value="option2">Option 2</option>
        <option className="text-black"value="option3">Option 3</option>
      </select>
      <input
        type="text"
        placeholder="Message"
        className="w-full py-2 mb-9 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <button
        type="submit"
        className="w-[130.63px] h-[50px] border border-white bg-transparent  text-white text-[16px] font-medium flex items-center justify-center gap-1"
      >
        Submit
        <Image src={rightarrow} alt="" width={18} height={18}/>
      </button>
    </form>
  );
};

export default Form;
