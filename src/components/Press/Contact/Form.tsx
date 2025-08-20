'use client'
import React, { useState } from "react";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import Image from "next/image";
import { trackFormSuccess, trackFormFailure, trackButtonClick } from '@/utils/gtm';
import Swal from 'sweetalert2';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectAddress: '',
    projectType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Track button click
    trackButtonClick('press_contact_form_submit', {
      button_text: 'Submit',
      form_type: 'press_contact',
      button_location: 'press_contact_form'
    });

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.projectAddress ||
      !formData.projectType ||
      !formData.message
    ) {
      trackFormFailure('press_contact_form', {
        form_type: 'press_contact',
        error_message: 'Missing required fields',
        form_data_keys: Object.keys(formData).filter(key => !formData[key as keyof typeof formData])
      });
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    } else if (!validateEmail(formData.email)) {
      trackFormFailure('press_contact_form', {
        form_type: 'press_contact',
        error_message: 'Invalid email format',
        email_provided: formData.email
      });
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter valid Email',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      setLoading(true);

      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      trackFormSuccess('press_contact_form', {
        form_type: 'press_contact',
        project_type: formData.projectType,
        has_message: !!formData.message
      });

      Swal.fire({
        title: 'Success!',
        text: 'Thank you for your message. We will get back to you soon.',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectAddress: '',
        projectType: '',
        message: '',
      });

    } catch (error) {
      trackFormFailure('press_contact_form', {
        form_type: 'press_contact',
        error_message: error instanceof Error ? error.message : 'Unknown error',
        error_type: error instanceof Error ? error.constructor.name : typeof error
      });

      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[611px]">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent focus:outline-none text-[16px] text-white placeholder-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <input
        type="text"
        name="projectAddress"
        placeholder="Project Address"
        value={formData.projectAddress}
        onChange={handleChange}
        required
        className="w-full py-2 mb-6 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <select 
        name="projectType"
        value={formData.projectType}
        onChange={handleChange}
        required
        className="w-full py-2 mb-6 border-b-2 border-white   focus:outline-none text-[16px] text-white bg-transparent  placeholder-white"
      >
        <option value="" disabled>
          Project Type
        </option>
        <option className="text-black" value="Architectural Design">Architectural Design</option>
        <option className="text-black" value="Kitchen Remodel">Kitchen Remodel</option>
        <option className="text-black" value="Bathroom Remodel">Bathroom Remodel</option>
        <option className="text-black" value="General Remodel">General Remodel</option>
        <option className="text-black" value="ADU">ADU</option>
        <option className="text-black" value="New Construction">New Construction</option>
        <option className="text-black" value="Other">Other</option>
      </select>
      <input
        type="text"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full py-2 mb-9 border-b-2 border-white bg-transparent  focus:outline-none text-[16px] text-white placeholder-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-[130.63px] h-[50px] border border-white bg-transparent  text-white text-[16px] font-medium flex items-center justify-center gap-1 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Submit'}
        <Image src={rightarrow} alt="" width={18} height={18}/>
      </button>
    </form>
  );
};

export default Form;
