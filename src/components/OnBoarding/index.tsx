"use client";
import React, { useState, useEffect } from "react";
import Start from "./Start";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step4Alternative from "./Step4Alternative";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import LastStep from "./LastStep";
import { ClipLoader } from "react-spinners"
// import logo from "@/public/logo-innate.png";
// import facebook from "@/public/fbb.png";
// import linkedin from "@/public/LinkedIn.png";
import Swal from 'sweetalert2';
// import instagaram from "@/public/Instagram.png";

const OnBoarding: React.FC = () => {
  // Initialize state with a function that retrieves the saved step from localStorage
  const totalSteps = 9; // Total number of steps
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = sessionStorage.getItem("currentStep");
    return savedStep ? Number(savedStep) : 0;
  });

  interface FormData {
    [key: string]: string | number | object | unknown[]; // Add supported data types
  }

  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = sessionStorage.getItem("formData");
    return savedData ? (JSON.parse(savedData) as FormData) : {}; // Retrieve data from localStorage
  });


  useEffect(() => {
    // Save the current step to localStorage
    sessionStorage.setItem("currentStep", String(currentStep));
  }, [currentStep]);

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    sessionStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    setCurrentStep((prev) => {
      // If currently on Step 3, check the selection from Step1 to decide the next step
      if (prev === 3) {
        const step1Data = formData["step1"] as { selectedOptions: string[] };
        if (step1Data?.selectedOptions?.includes("Accessory Dwelling Unit (ADU)")) {
          return 9; // Arbitrary number for Step4Alternative
        }
      }
      if (prev === 9) {
        return 4
      }

      // Default navigation
      return prev < totalSteps ? prev + 1 : prev;
    });
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => {
      // If currently on Step 3, check the selection from Step1 to decide the next step
      if (prev === 4) {
        const step1Data = formData["step1"] as { selectedOptions: string[] };
        if (step1Data?.selectedOptions?.includes("Accessory Dwelling Unit (ADU)")) {
          return 9; // Arbitrary number for Step4Alternative
        }
      }
      if (prev === 9) {
        return 2
      }
      // Default navigation
      return prev > 0 ? prev - 1 : prev;
    });
  };

  const handleInputChange = (step: number, data: string | number | object | unknown[]) => {
    // Only update the state if the data has changed
    if (JSON.stringify(formData[`step${step}`]) !== JSON.stringify(data)) {
      // console.log(`Step ${step} data:`, data); // Log the data

      setFormData((prev: FormData) => ({
        ...prev,
        [`step${step}`]: data, // Ensure alignment with FormData
      }));
    }
  };



  const handleStep8Next = async (): Promise<void> => {
    console.log("All data collected so far:", formData);

    // Define your API endpoint
    const apiEndpoint = "/api/contactFlow"; // Replace with your actual API URL
    setLoading(true);

    try {
      // Check if formData is valid before sending the API request
      if (!formData || Object.keys(formData).length === 0) {
        Swal.fire({
          title: 'Error!',
          text: "Please complete the form before proceeding.",
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        });
        setLoading(false);
        return;
      }

      // Call the API with the collected data
      const response: Response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log("API response:", response);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      // Parse the API response
      const data: { success: boolean; message: string } = await response.json();
      // console.log("API response:", data);

      // Check the response success
      if (data.success) {
        handleNext(); // Proceed to the next step
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Error calling contactFlow API:", error instanceof Error ? error.message : error);
      Swal.fire({
        title: 'Error!',
        text: "Something went Wrong. Please Try Again",
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
    }
    setLoading(false);

  };




  // Calculate progress as a percentage
  let progress = ((currentStep / totalSteps) * 100).toFixed(2);
  if (currentStep === 9) {
    progress = ((4 / totalSteps) * 100).toFixed(2);
  }

  return (
    <div className="onboarding-container gradient px-5">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ClipLoader color="#007bff" size={50} />
        </div>
      )}
      {currentStep !== 0 && (
        <div className="pt-40 flex justify-center mob:px-5">
          <div
            className="max-w-[90%] relative"
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#FFFFFF3D",
              marginBottom: "20px",
              borderRadius: "5px",
            }}
          >
            {/* Filled Progress Bar */}
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#fff",
                transition: "width 0.3s ease-in-out",
                borderRadius: "5px",
              }}
            />

            {/* Circle at the end of the progress */}
            <div
              className="progress-circle"
              style={{
                position: "absolute",
                top: "50%",
                left: `${progress}%`,
                transform: "translate(-50%, -50%)",
                width: "15px",
                height: "15px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      )}

      {currentStep === 0 && <Start onNext={handleNext} />}
      {currentStep === 1 && (
        <Step1
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(1, data)}
        />
      )}
      {currentStep === 2 && (
        <Step2
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(2, data)}
        />
      )}
      {currentStep === 3 && (
        <Step3 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 4 && (
        <Step4
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(4, data)}
        />
      )}
      {/* step 4 alternative */}
      {currentStep === 9 && (
        <Step4Alternative
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(4, data)} />
      )}
      {currentStep === 5 && (
        <Step5
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(5, data)}
        />
      )}
      {currentStep === 6 && (
        <Step6
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(6, data)}
        />
      )}
      {currentStep === 7 && (
        <Step7 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 8 && (
        <Step8
          onNext={handleStep8Next} // Use custom handler for Step 8
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(8, data)}
        />
      )}
      {currentStep === 9 && (
        <LastStep
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default OnBoarding;
