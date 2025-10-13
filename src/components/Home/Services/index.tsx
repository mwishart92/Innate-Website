import React from "react";
import Image from "next/image";

import frame1 from "@/public/images/home/s1.webp";
import frame2 from "@/public/images/home/s2.webp";
import frame3 from "@/public/images/home/s3.webp";
import frame4 from "@/public/images/home/s4.webp";
import frame5 from "@/public/images/home/s5.webp";
import frame6 from "@/public/images/home/s6.webp";
import frame7 from "@/public/images/home/s7.webp";
import frame8 from "@/public/images/home/s8.webp";
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
        {/* Exterior Remodel */}
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden aspect-[5/5] mob:min-h-[390px] mob:aspect-[5/5] mob:border-r-0">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <Image
                  className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                  src={roof1}
                  alt="roofing"
                />
                <Text className="text-[24px] font-light text-center my-4">
                  Exterior Remodel
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
        </div>

        {/* Kitchen Remodel */}
        <div className="w-[33.4%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px] mob:border-0 mob:aspect-[5/5]">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

              <div className="relative z-10">
                <Image
                  className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                  src={roof3}
                  alt=""
                />
                <Text className="text-[24px] font-light text-center my-4">
                  Kitchen Remodel
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

        {/* Bathroom Remodel */}
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden aspect-[5/5] mob:min-h-[390px]">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

              <div className="relative z-10">
                <Image
                  className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                  src={roof9}
                  alt=""
                />
                <Text className="text-[24px] font-light text-center my-4">
                  Bathroom Remodel
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
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center w-full min-h-[484px] overflow-hidden mx-auto mob:min-h-[390px]">
        {/* Architectural Services */}
        <div className="w-[50%] tab:w-full relative group min-h-[484px] overflow-hidden mob:min-h-[390px] mob:border-b-0 mob:border-r-0 mob:aspect-[5/5]">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

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
        </div>

        {/* New Construction & ADU */}
        <div className="w-[50%] tab:w-full relative group min-h-[484px] overflow-hidden mob:min-h-[390px]">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame5.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

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
      </div>

      {/* Third Row */}
      <div className="flex flex-wrap justify-center w-full mx-auto">
        {/* Whole Home Remodel */}
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px] mob:border-l-0 mob:border-r-0">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame6.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

              <div className="relative z-10">
                <Image
                  className="mx-auto w-[95px] h-[95px] mob:w-[78px] mob:h-[78px]"
                  src={roof10}
                  alt=""
                />
                <Text className="text-[24px] font-light text-center my-4">
                  Whole Home Remodel
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
        </div>

        {/* Decks & Patios */}
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px]">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame7.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

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
        </div>

        {/* Natural Disaster Mitigation */}
        <div className="w-[33.3%] min-h-[484px] tab:w-full group relative overflow-hidden mob:min-h-[390px] mob:aspect-[5/5]">
          <div
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              backgroundImage: `url(${frame8.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="overflow-hidden h-full flex justify-center items-center relative mob:aspect-[5/5]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

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
    </div>
  );
};

export default Services;
