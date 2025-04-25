import React from "react";
import Image from "next/image";

import frame1 from "@/public/images/home/Frame1.png";
import frame2 from "@/public/images/home/Frame2.png";
import frame3 from "@/public/images/home/Frame3.png";
import frame4 from "@/public/images/home/Frame4.png";
import frame5 from "@/public/images/home/Frame5.png";
import frame6 from "@/public/images/home/Frame6.png";
import frame7 from "@/public/images/home/Frame7.png";
import frame8 from "@/public/images/home/NaturalDisaster.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import roof1 from "@/public/images/home/Roof 1.png";
import roof2 from "@/public/images/home/roof2.png";
import roof3 from "@/public/images/home/roof3.png";
import roof4 from "@/public/images/home/roof4.png";
import roof5 from "@/public/images/home/roof5.png";
import roof6 from "@/public/images/home/roof6.png";
import roof7 from "@/public/images/home/roof7.png";
import roof8 from "@/public/images/home/natural Disaster Logo.png";
import roof9 from "@/public/images/home/roof9.png";
import mitigation from "@/public/images/home/mitigation.svg";
import roof10 from "@/public/images/home/roof10.png";
import { useRouter } from "next/navigation";
import "./Services.css";

const Services = () => {
  const router = useRouter();
  return (
    <div className="pt-24 pb-4 mob:pt-0">
      <div className="flex flex-wrap justify-center w-full mx-auto">
        <div
          className="border border-[#FFFFFF99] border-b-0 border-l-0 w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden aspect-[5/5] mob:min-h-[390px] mob:aspect-[5/5] mob:border-r-0"
          // style={{
          //   border: '1px solid rgba(255, 255, 255, 0.6)',
          //   borderBottom: 'none',
          //   borderLeft: 'none',
          // }}
        >
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            {/* Background Image */}
            <Image
              src={frame1}
              alt="Roofing Service"
              fill
              className="transition-transform absolute z-0 top-0 h-full w-full object-cover duration-300 ease-in-out transform group-hover:scale-105"
            />

            {/* Content */}
            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={roof1}
                alt="roofing"
              />
              <Text className="text-[24px] font-light text-center my-4">
                Exterior Remodeling
              </Text>
              <div className="flex justify-center w-full">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() => router.push("/services/exterior-remodeling")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the same for other items */}
        <div
          className="border-r border-t border-[#FFFFFF99] w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px] mob:border-b mob:border-r-0 "
          // style={{ borderTop: '1px solid rgba(255, 255, 255, 0.6)' }}
        >
          <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame2}
              alt="Decks Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full w-full object-cover duration-300 ease-in-out transform group-hover:scale-105"
            />

            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={roof2}
                alt=""
              />
              <Text className="text-[24px] font-light text-center my-4">
                Decks & Patios
              </Text>
              <div className="flex justify-center w-full">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() => router.push("/services/decks")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-[#FFFFFF99] w-[33.4%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px] mob:border-0 mob:aspect-[5/5]"
          // style={{
          //   border: '1px solid rgba(255, 255, 255, 0.6)',
          //   borderBottom: 'none',
          //   borderRight: 'none',
          // }}
        >
          <div className="overflow-hidden h-full flex justify-center items-center relative  ">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame3}
              alt="Kitchens & Bathrooms Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full w-full object-cover duration-300 ease-in-out transform group-hover:scale-105"
            />

            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={roof3}
                alt=""
              />
              <Text className="text-[24px] font-light text-center my-4">
                Kitchen Remodeling
              </Text>
              <div className="flex justify-center w-full">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() => router.push("/services/kitchen-remodeling")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-wrap justify-center w-full min-h-[484px] overflow-hidden mx-auto mob:min-h-[390px]">
        <div
          className="border-[#FFFFFF99] border-r border-t border-b w-[50%] tab:w-full relative group min-h-[484px] overflow-hidden mob:min-h-[390px] mob:border-b-0 mob:border-r-0 mob:aspect-[5/5]"
          // style={{
          //   border: '1px solid rgba(255, 255, 255, 0.6)',
          //   borderLeft: 'none',
          // }}
        >
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame4}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full  duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={roof4}
                alt=""
              />
              <Text className="text-[24px] font-light text-center my-4">
                Architectural Services
              </Text>
              <div className="flex justify-center">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() =>
                    router.push("/services/architectural-services")
                  }
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-y border-[#FFFFFF99] w-[50%] tab:w-full relative group min-h-[484px] overflow-hidden mob:min-h-[390px]"
          // style={{
          //   border: '1px solid rgba(255, 255, 255, 0.6)',
          //   borderLeft: 'none',
          //   borderRight: 'none',
          // }}
        >
          <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame5}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full  duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={roof5}
                alt=""
              />
              <Text className="text-[24px] font-light text-center my-4">
                New Construction & ADU
              </Text>
              <div className="flex justify-center">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() => router.push("/services/adus")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center w-full mx-auto">
        <div
          className="border-b border-[#FFFFFF99] w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden aspect-[5/5] mob:min-h-[390px]"
          // style={{
          //   borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
          // }}
        >
          <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame6}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={roof9}
                alt=""
              />
              <Text className="text-[24px] font-light text-center my-4">
                Bathroom Remodeling
              </Text>
              <div className="flex justify-center w-full">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() => router.push("/services/bathroom-remodeling")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-x border-b border-[#FFFFFF99] w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px] mob:border-l-0 mob:border-r-0"
          // style={{
          //   border: '1px solid rgba(255, 255, 255, 0.6)',
          //   borderTop: 'none',
          // }}
        >
          <div className="overflow-hidden h-full flex justify-center items-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame7}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={roof10}
                alt=""
              />
              <Text className="text-[24px] font-light text-center my-4">
                Whole Home Remodeling
              </Text>
              <div className="flex justify-center w-full">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() => router.push("/services/whole-home-remodels")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-[#FFFFFF99] w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px] mob:aspect-[5/5]">
          <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            <Image
              src={frame8}
              alt="Roofing Service"
              width={480}
              height={484}
              className="transition-transform absolute z-0 top-0 h-full duration-300 ease-in-out transform group-hover:scale-105 w-full object-cover"
            />
            <div className="relative z-10">
              <Image
                className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                src={mitigation}
                alt=""
              />
              <Text className="text-[24px] font-light text-center my-4">
                Natural Disaster Mitigation
              </Text>
              <div className="flex justify-center w-full">
                <Button
                  className="w-[136px] h-[50px] mob:text-[14px] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black transition duration-300 mob:w-[126px] mob:h-[48px]"
                  onClick={() =>
                    router.push("/services/natural-disaster-mitigation")
                  }
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
