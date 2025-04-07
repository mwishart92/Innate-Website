import React, { useEffect } from "react";
import SliderFilter from "./SLiderFilter";
interface Step4Props {
  onChange: (data: { selectedOptions: string[] }) => void; // Adjusted data structure
}

const SlideBar: React.FC<Step4Props> = ({ onChange }) => {
  const [rangeStart, setRangeStart] = React.useState<number>(20);
  const [rangeEnd, setRangeEnd] = React.useState<number>(50);

  // Update local state and notify parent
  const handleSliderChange = (
    start: React.SetStateAction<number>,
    end: React.SetStateAction<number>) => {
    setRangeStart(start);
    setRangeEnd(end);

    const selectedOptions = [`Range: ${start}K - ${end}K`];

    // Save to localStorage
    sessionStorage.setItem("step4", JSON.stringify(selectedOptions));

    // Notify parent
    onChange({ selectedOptions });
  };

  // const [step1, setStep1] = React.useState<string[]>()

  function setrange(selectedOptions: string[]) {
    let totalStart = 0;
    let totalEnd = 0;

    selectedOptions.forEach((option: string) => {
      const [start, end] = budgetRanges[option] || [0, 0];
      totalStart += parseInt(start, 10);
      totalEnd += parseInt(end, 10);
    });
    console.log("totalStart",totalStart)
    if (rangeStart !== totalStart || rangeEnd !== totalEnd) {
      setRangeStart(totalStart);
      setRangeEnd(totalEnd);
      // console.log("range", totalStart);
    }

    const step4Options = [`Range: ${totalStart}K - ${totalEnd}K`];
    sessionStorage.setItem("step4", JSON.stringify(step4Options));
    onChange({ selectedOptions: step4Options });

  }

  useEffect(() => {
    const savedData = sessionStorage.getItem("step4");
    if (savedData) {
      const changedStep1 = sessionStorage.getItem("step1");
      if (changedStep1) {
        const { selectedOptions } = JSON.parse(changedStep1);
        const step1 = sessionStorage.getItem("savedStep1")
        const step1Array = typeof step1 === "string" ? step1.split(",") : step1;
        const chk = selectedOptions.every((option: string) => step1Array?.includes(option)) && step1Array?.every(option => selectedOptions.includes(option));
        console.log(selectedOptions, chk, step1Array);
        
        

        if (!chk && (step1 != undefined && step1 != null)) {
          sessionStorage.setItem("savedStep1", selectedOptions)
          setrange(selectedOptions);

          return;
        }
        else {
          sessionStorage.setItem("savedStep1", selectedOptions)
          
        }
      }


      const step4 = JSON.parse(savedData);

      if (step4 && step4.length > 0) {
        console.log("step4",step4)
        const rangeMatch = step4[0].match(/(\d+)K - (\d+)K/);
        if (rangeMatch) {
          const start = parseInt(rangeMatch[1], 10);
          const end = parseInt(rangeMatch[2], 10);
          setRangeStart(start);
          setRangeEnd(end);
        }
      }
    }
    else {
      const formData = sessionStorage.getItem("formData");
      if (formData) {
        const parsedData = JSON.parse(formData);
        const selectedOptions = parsedData.step1.selectedOptions;
        sessionStorage.setItem("savedStep1", selectedOptions)
        setrange(selectedOptions);
      }
    }
  }, [onChange]);
  const budgetRanges: Record<string, [string, string]> = {
    "Accessory Dwelling Unit (ADU)": ["200", "500"],
    "Kitchen Remodel": ["30", "80"],
    "Bathroom Remodel": ["20", "50"],
    "Addition": ["120", "250"],
    "New Construction": ["650", "3000"],
    "General Remodel": ["20", "250"],
    "Other": ["20", "3000"],
  };


  return (
    <div>
      <SliderFilter
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        setRangeStart={(value) => handleSliderChange(value, rangeEnd)} // Updates rangeStart
        setRangeEnd={(value) => handleSliderChange(rangeStart, value)} // Updates rangeEnd
        onChange={(data) => {
          handleSliderChange(data.rangeStart, data.rangeEnd); // Ensure synchronization
        }}
      />
    </div>
  );
};

export default SlideBar;
