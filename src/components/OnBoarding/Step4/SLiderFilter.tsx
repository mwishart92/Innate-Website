import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Text from "@/components/ui/Text";
import { useEffect, useState } from "react";
import hand from "@/public/images/onboarding/hand.svg" 
function valuetext(value: number) {
  return `${value}°C`;
}

const CustomSlider = styled(Slider)({
  color: "#434343",
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
    color: "#FFFFFF",
    "&:hover, &.Mui-focusVisible, &.Mui-active": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 14,
    color: "#0B44A0",
  },
  "& .MuiSlider-rail": {
    height: 14,
  },
});

interface SliderFilterProps {
  rangeStart: number;
  rangeEnd: number;
  setRangeStart: React.Dispatch<React.SetStateAction<number>>;
  setRangeEnd: React.Dispatch<React.SetStateAction<number>>;
  onChange: (data: { rangeStart: number; rangeEnd: number }) => void; // Notify parent about changes
}

const SliderFilter: React.FC<SliderFilterProps> = ({
  rangeStart,
  rangeEnd,
  setRangeStart,
  setRangeEnd,
  onChange,
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const [start, end] = newValue as number[];
    setRangeStart(start);
    setRangeEnd(end);
    onChange({ rangeStart: start, rangeEnd: end }); // Notify parent
  };

  const budgetRanges: Record<string, [string, string]> = {
    "Accessory Dwelling Unit (ADU)": ["200", "500"],
    "Kitchen Remodel": ["30", "80"],
    "Bathroom Remodel": ["20", "50"],
    "Addition": ["120", "250"],
    "New Construction": ["650", "3000"],
    "General Remodel": ["20", "250"],
    "Other": ["20", "3000"],
  };

  const [Starts, setStart] = useState<string>("");
  const [Ends, setEnd] = useState<string>("");

  useEffect(() => {
    const formdata = sessionStorage.getItem("formData")
    if (formdata) {
      const parsedData = JSON.parse(formdata);
      const selectedOptions = parsedData.step1.selectedOptions;
      let totalStart = 0;
      let totalEnd = 0;

      selectedOptions.forEach((option: string) => {
        const [start, end] = budgetRanges[option] || [0, 0];
        totalStart += parseInt(start, 10);
        totalEnd += parseInt(end, 10);
      });

      setStart(totalStart.toString());
      setEnd(totalEnd.toString());
    }
  }, [])

  // const Start=rangeStart;
  // const End=rangeEnd;

  return (
    <>
      <div className="flex justify-center w-full bg-[#141414] py-10">
        <div className="w-full ">

          <div className="flex flex-wrap mb-14 items-center justify-center gap-6 mob:gap-1 ">
            <div className="px-4 py-2 border border-[#FFFFFF3D]">
              <Text className="text-center text-[20px]"> ${rangeStart}K</Text>
              <Text className="text-center">Target budget</Text>
            </div>
            <div className="h-[1px] w-[24px] bg-white"></div>
            <div className="px-4 py-2 border border-[#FFFFFF3D]">
              <Text className="text-center text-[20px]">${rangeEnd}K</Text>
              <Text className="text-center">Target budget</Text>
            </div>
          </div>

          <div className="w-full  items-center justify-items-center ">
            <Box sx={{
              width: "100%", // Full width of the parent container
              maxWidth: "90%", // Max width of 653px

            }}>
              <CustomSlider
                getAriaLabel={() => "Budget range"}
                value={[rangeStart, rangeEnd]}
                onChange={handleChange}
                getAriaValueText={valuetext}
                max={parseInt(Ends, 10)}
                min={parseInt(Starts, 10)}
              />
            </Box>
          </div>
          <div className="mx-auto flex justify-between max-w-[90%] w-full mt-[-8px]">
            <Text
              as="p"
              className="text-[16px] text-white  font-arial font-normal  my-2 "
            >
              ${Starts}K
            </Text>
            <Text
              as="p"
              className="text-[16px] text-white  font-arial font-normal  my-2 flex "
            >
              <Image
                src={hand}
                alt="hand"
                className="me-1"
              />
              Drag the slider
            </Text>
            <Text
              as="p"
              className="text-[16px]  text-white  font-arial font-normal  my-2 "
            >
              ${Ends}K
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderFilter;
