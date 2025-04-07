'use client'
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Text from "@/components/ui/Text";
import bgleft from "@/public/images/services/leftbgsection.png";
import centerline from "@/public/images/services/centerline.png";
import bgright from "@/public/images/services/rightbgsection.png";
import estimate from "@/public/images/services/freeestimate.png";
import design from "@/public/images/services/design.png";
import material from "@/public/images/services/material.png";
import job from "@/public/images/services/job.png";
import demolition from "@/public/images/services/demolition.png";
import instalation from "@/public/images/services/installation.png";
import cleanup from "@/public/images/services/cleanup.png";
import point from "@/public/images/services/point.png";

const completeData = {
  data1: [
    {
      id: 1,
      bgImage: bgleft,
      icon: estimate,
      title: "Free Estimate",
      description:
        "In our initial inspection we take measurements of your kitchen or bathroom, determine the scope of work, the budget of different materials and whether a permit is necessary.",
    },
    {
      id: 3,
      bgImage: bgleft,
      icon: material,
      title: "Material Selection",
      description:
        "We help you select materials that match your vision, considering factors like durability, aesthetics, and cost. We ensure all necessary materials and supplies are ordered and delivered on time. We can meet you at Floor and Decor to go over tile choices together.",
    },
    {
      id: 5,
      bgImage: bgleft,
      icon: demolition,
      title: "Demolition",
      description:
        "We strip the old kitchen or bathroom, removing the old flooring, fixtures, trim, cabinets and appliances. We then haul away all the debris. Now we have a blank canvas in which to build your dream kitchen or bathroom.",
    },
    {
      id: 7,
      bgImage: bgleft,
      icon: cleanup,
      title: "Clean Up",
      description:
        "We carefully remove all debris and excess materials from the site. Our team does a detailed construction cleaning to remove all dust. We perform a final walkthrough with the client to address any concerns or touch-ups.",
    },
  ],
  data2: [
    {
      id: 2,
      bgImage: bgright,
      icon: design,
      title: "Design",
      description:
        "Architectural design is crucial for bathroom and kitchen remodeling as it ensures optimal space utilization and enhances functionality. We have architects and interior designers on our team in order to improve the aesthetic appeal and add value to your home by integrating modern trends and personalized touches.",
    },
    {
      id: 4,
      bgImage: bgright,
      icon: job,
      title: "Job Site Protection",
      description:
        "We section off the area of work from the rest of the house ensuring that dust and debris do not circulate throughout the house. We lay down construction paper to protect the floor from foot traffic.",
    },
    {
      id: 6,
      bgImage: bgright,
      icon: instalation,
      title: "Installation",
      description:
        "Our licensed tradesmen adjust the framing, plumbing and electrical to match your new plan. From there our skilled artisans install the drywall, tile, cabinets, countertops, fixtures, trim and paint.",
    },
  ],
};

const KitchensAndBathrooms = {
  data1: [
    {
      id: 1,
      bgImage: bgleft,
      icon: estimate,
      title: "Free Estimate",
      description:
        "In our initial inspection we take measurements of your kitchen or bathroom, determine the scope of work, the budget of different materials and whether a permit is necessary.",
    },
    {
      id: 3,
      bgImage: bgleft,
      icon: material,
      title: "Material Selection",
      description:
        "We help you select materials that match your vision, considering factors like durability, aesthetics, and cost. We ensure all necessary materials and supplies are ordered and delivered on time. We can meet you at Floor and Decor to go over tile choices together.",
    },
    {
      id: 5,
      bgImage: bgleft,
      icon: demolition,
      title: "Demolition",
      description:
        "We strip the old kitchen or bathroom, removing the old flooring, fixtures, trim, cabinets and appliances. We then haul away all the debris. Now we have a blank canvas in which to build your dream kitchen or bathroom.",
    },
    {
      id: 7,
      bgImage: bgleft,
      icon: cleanup,
      title: "Clean Up",
      description:
        "We carefully remove all debris and excess materials from the site. Our team does a detailed construction cleaning to remove all dust. We perform a final walkthrough with the client to address any concerns or touch-ups.",
    },
  ],
  data2: [
    {
      id: 2,
      bgImage: bgright,
      icon: design,
      title: "Design",
      description:
        "Architectural design is crucial for bathroom and kitchen remodeling as it ensures optimal space utilization and enhances functionality. We have architects and interior designers on our team in order to improve the aesthetic appeal and add value to your home by integrating modern trends and personalized touches.",
    },
    {
      id: 4,
      bgImage: bgright,
      icon: job,
      title: "Job Site Protection",
      description:
        "We section off the area of work from the rest of the house ensuring that dust and debris do not circulate throughout the house. We lay down construction paper to protect the floor from foot traffic.",
    },
    {
      id: 6,
      bgImage: bgright,
      icon: instalation,
      title: "Installation",
      description:
        "Our licensed tradesmen adjust the framing, plumbing and electrical to match your new plan. From there our skilled artisans install the drywall, tile, cabinets, countertops, fixtures, trim and paint.",
    },
  ],
};

const Architecture = {
  data1: [
    {
      id: 1,
      bgImage: bgleft,
      icon: estimate,
      title: "Consultation",
      description:
        "In our initial consultation we talk to the client to determine the scope of work, the budget and whether a survey or permit is necessary. We may do a site visit and scan the space to generate a rough floor plan and square footage.",
    },
    {
      id: 3,
      bgImage: bgleft,
      icon: material,
      title: "As-Built Drawings",
      description:
        "The next step is to take precise measurements of the existing site and structure in order to generate existing or as-built drawings. As-built drawings are essential for an architectural project because they provide a detailed and accurate record of the completed structure, reflecting any modifications made during construction. These drawings serve as a vital reference for future maintenance, renovations, or expansions, ensuring that all changes and current conditions are documented for effective planning and execution.",
    },
    {
      id: 5,
      bgImage: bgleft,
      icon: demolition,
      title: "Design Development",
      description:
        "Design development in architecture is the phase where initial schematic designs are refined into detailed plans, specifying materials, systems, and dimensions to guide the construction process. This stage bridges conceptual design and construction documents, ensuring the design is feasible, functional, and aligned with the client's vision and regulatory requirements. During this stage we begin to collaborate with consultants like structural, civil and MEP engineers.",
    },
    {
      id: 7,
      bgImage: bgleft,
      icon: cleanup,
      title: "Bidding, Construction Administration",
      description:
        "The bidding phase includes soliciting and evaluating proposals from contractors, selecting the most suitable bid, and finalizing the contractual agreements for project execution. The construction administration phase involves the architect overseeing the construction process to ensure the project is built according to the plans and specifications, addressing any issues that arise on-site. As licensed General Contractors we can bid on and perform the construction, however we are also happy to recommend you various other contractors to bid.",
    },
  ],
  data2: [
    {
      id: 2,
      bgImage: bgright,
      icon: design,
      title: "Feasibility Study",
      description:
        "A feasibility study in architecture is crucial as it assesses the practicality and potential challenges of a project, ensuring resources are optimally allocated and risks are minimized. Additionally, it provides a detailed analysis of technical, economic, and legal aspects, guiding informed decision-making and enhancing the likelihood of project success.",
    },
    {
      id: 4,
      bgImage: bgright,
      icon: job,
      title: "Schematic Design",
      description:
        "Schematic design in architecture is the initial phase where the basic concepts of a project are developed, including spatial relationships, scale, and form. It serves as a foundation for detailed design work, providing a visual representation of the project's preliminary layout and essential features to align with the client's vision and requirements.",
    },
    {
      id: 6,
      bgImage: bgright,
      icon: instalation,
      title: "Construction Documents",
      description:
        "The construction documentation phase of an architectural project involves creating comprehensive drawings and specifications that detail every aspect of the construction process, ensuring accurate and efficient execution. These documents serve as a legal contract and a guide for contractors, providing precise instructions on materials, dimensions, and construction techniques.",
    },
  ],
};

const Construction = {
  data1: [
    {
      id: 1,
      bgImage: bgleft,
      icon: estimate,
      title: "Consultation",
      description:
        "In our initial consultation, we do a thorough inspection of the site and talk to the client to determine the scope of work, the budget and whether a permit or architectural design is necessary.",
    },
    {
      id: 3,
      bgImage: bgleft,
      icon: material,
      title: "Foundation",
      description:
        "Clearing the land, excavation, and laying the foundation. Utilities such as water, electricity, and sewage systems are established. Footings and foundations are poured, usually involving concrete. This may include basements, crawl spaces, or slab foundations, considering Seattle's soil conditions and seismic activity.",
    },
    {
      id: 5,
      bgImage: bgleft,
      icon: demolition,
      title: "MEP",
      description:
        "Installation of HVAC systems, electrical wiring, and plumbing pipes. Inspections are conducted to ensure compliance with local codes.",
    },
    {
      id: 7,
      bgImage: bgleft,
      icon: cleanup,
      title: "Interior & Exterior Finishes",
      description:
        "Interior Finishes: Installation of flooring, painting walls, and installing fixtures such as cabinets, countertops, and trim. Siding, roofing, windows, and doors are installed, ensuring the building is weatherproofed.",
    },
  ],
  data2: [
    {
      id: 2,
      bgImage: bgright,
      icon: design,
      title: "Pre-Construction",
      description:
        "Securing permits, finalizing contracts, and preparing the construction site. This includes site surveys, soil testing, and obtaining necessary approvals.",
    },
    {
      id: 4,
      bgImage: bgright,
      icon: job,
      title: "Framing",
      description:
        "The skeleton of the building is constructed using wood or steel. This includes walls, floors, and roof structures. Installation of plywood or OSB sheathing on walls and roofs, followed by exterior barriers to protect from Seattle’s wet climate.",
    },
    {
      id: 6,
      bgImage: bgright,
      icon: instalation,
      title: "Insulation & Drywall",
      description:
        "Insulating walls, floors, and attics to meet Seattle’s energy efficiency standards. Hanging and finishing drywall on interior walls and ceilings.",
    },
  ],
};

const Roofing = {
  data1: [
    {
      id: 1,
      bgImage: bgleft,
      icon: estimate,
      title: "Free Estimate",
      description:
        "In our initial inspection we determine whether the roof requires repair or complete replacement. We measure the roof and determine the budget of different materials and whether a permit is necessary.",
    },
    {
      id: 3,
      bgImage: bgleft,
      icon: material,
      title: "Demolition",
      description:
        "We remove the old roofing materials, including shingles, underlayment, and flashing. Then we haul away all the debris. Now we can determine whether the plywood sheeting or framing also requires replacement.",
    },
    {
      id: 5,
      bgImage: bgleft,
      icon: cleanup,
      title: "Clean Up",
      description:
        "We carefully remove all debris, nails, and excess materials from the site. We perform a final walkthrough with the client to address any concerns or touch-ups. We ensure you receive all warranty information and maintenance guidelines for the new roof.",
    },
  ],
  data2: [
    {
      id: 2,
      bgImage: bgright,
      icon: design,
      title: "Order Materials",
      description:
        "We help you select materials suitable for your climate, such as asphalt shingles, metal, tile or TPO, considering factors like durability, aesthetics, and cost. We ensure all necessary materials and supplies are ordered and delivered on time. The unpredictable weather of Seattle and Denver mean that we must plan ahead to avoid complications.",
    },
    {
      id: 4,
      bgImage: bgright,
      icon: job,
      title: "Installation",
      description:
        "We install drip edges along the eaves and gable ends to protect the roof’s edges from water damage. Next we install flashing around chimneys, vents, and other roof penetrations to prevent water leaks. Then t we lay shingles or other roofing materials, starting from the bottom and working upwards, ensuring proper alignment and overlap. Finally we install ridge vents along the roof peak to ensure proper attic ventilation.",
    },
  ],
};

const Decks = {
  data1: [
    {
      id: 1,
      bgImage: bgleft,
      icon: estimate,
      title: "Consultation",
      description:
        "In our initial consultation, we do a thorough inspection of the site and talk to the client to determine the scope of work, the budget and whether a permit or architectural design is necessary.",
    },
    {
      id: 3,
      bgImage: bgleft,
      icon: material,
      title: "Foundation & Framing",
      description:
        "We dig down and build a frame to install footings and posts to support the deck structure. We construct the frame, using beams, joists and ledger boards, according to the design specifications.",
    },
    {
      id: 5,
      bgImage: bgleft,
      icon: cleanup,
      title: "Clean Up",
      description:
        "We carefully remove all debris, nails, and excess materials from the site. We perform a final walkthrough with the client to address any concerns or touch-ups. We ensure you receive all warranty information and maintenance guidelines for the new roof.",
    },
  ],
  data2: [
    {
      id: 2,
      bgImage: bgright,
      icon: design,
      title: "Pre-Construction",
      description:
        "Securing permits, finalizing contracts, and preparing the construction site. This includes site surveys, soil testing, and obtaining necessary approvals.",
    },
    {
      id: 4,
      bgImage: bgright,
      icon: job,
      title: "Installation",
      description:
        "We install the decking boards, fascia boards and railing in compliance with building codes. We incorporate any additional design elements such as built-in seating, lighting, or planters. We apply sealant or stain to protect the deck from Seattle’s wet climate.",
    },
  ],
};

interface ServiceData {
  data1: {
    id: number;
    bgImage: StaticImageData; // Replace StaticImageData with the actual type of `bgImage` (e.g., string, if it's a URL).
    icon: StaticImageData; // Replace StaticImageData with the actual type of `icon`.
    title: string;
    description: string;
  }[];
  data2: {
    id: number;
    bgImage: StaticImageData; // Replace as needed.
    icon: StaticImageData; // Replace as needed.
    title: string;
    description: string;
  }[];
}

const OurProcess = () => {
  const [serviceData, setServiceData] = useState<ServiceData | null>(completeData);
  useEffect(() => {
    const serviceType = sessionStorage.getItem("serviceType");
    if (serviceType === "KitchensAndBathrooms") {
      setServiceData(KitchensAndBathrooms);
    } else if (serviceType === "Architecture") {
      setServiceData(Architecture);
    }
    else if (serviceType === "Construction") {
      setServiceData(Construction);
    }
    else if (serviceType === "Roofing") {
      setServiceData(Roofing);
    }
    else if (serviceType === "Decks") {
      setServiceData(Decks);
    }

  }, [])
  return (
    <div className="bg-black">
      <div className="min-h-screen lg:hidden w-full gradient pt-16 pb-20 px-5">
        <Text
          as="h1"
          className="text-[53px] font-semibold mb-16 text-center leading-[68.9px] "
        >
          Our Process
        </Text>

        <div className="flex gap-[10px] justify-center mx-auto">
          {/* left */}
          <div className="">
            {serviceData?.data1.map((item, index) => (
              <div
                key={item.id}
                className={`relative w-[504px] ${index === 0 ? 'mt-5' : 'mt-48'}`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {/* Background Image */}
                <Image
                  className="absolute z-0 w-full h-full mr-5"
                  src={item.bgImage}
                  alt=""
                  width={504}
                  height={434}
                />
                {/* Content */}
                <div className="relative z-10 pl-8 pr-14 max-w-[516px]">
                  <div className="flex w-full justify-between items-center">
                    <Image
                      className="w-[79px] h-[79px] transition-transform duration-300 hover:scale-[1.1] cursor-pointer"
                      src={item.icon}
                      alt=""
                      width={79.52}
                      height={79.52}
                    />
                    <Text className="text-[138.01px] leading-[183.22px] text-[#FFFFFF1A] font-bold">
                      {item.id}
                    </Text>
                  </div>
                  <Text className="text-[33.43px] leading-[46.8px] text-white">
                    {item.title}
                  </Text>
                  <Text className="text-[19.96px] leading-[27.14px] text-white/60 mt-2 pb-5">
                    {item.description}
                  </Text>
                </div>
                {/* Point with Gap */}
                <Image
                  className="absolute left-[calc(100%-3px)] top-[50%] translate-y-[-50%] w-[29px]"
                  src={point}
                  alt={`point-right-${index + 1}`}
                  width={29}
                  height={26}
                />
              </div>
            ))}
          </div>

          {/* center */}
          <div className="relative w-[5px] z-0 flex justify-center">
            <Image
              className="z-0 w-[5px] h-full "
              src={centerline}
              alt="centerline"
              width={5}
            />
          </div>

          {/* right */}
          <div className="mt-[320px]">
            {serviceData?.data2.map((item, index) => (
              <div
                key={item.id}
                className={`relative w-[504px] ${index > 0 ? 'mt-48' : ''}`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {/* Background Image */}
                <Image
                  className="absolute z-0 w-full h-full"
                  src={item.bgImage}
                  alt=""
                  width={504}
                  height={434}
                />
                {/* Content */}
                <div className="relative z-10 pl-16 pr-5 max-w-[516px]">
                  <div className="flex w-full justify-between items-center">
                    <Image
                      className="w-[79px] h-[79px] transition-transform duration-300 hover:scale-[1.1] cursor-pointer"
                      src={item.icon}
                      alt=""
                      width={79.52}
                      height={79.52}
                    />
                    <Text className="text-[138.01px] leading-[183.22px] text-[#FFFFFF1A] font-bold">
                      {item.id}
                    </Text>
                  </div>
                  <Text className="text-[33.43px] leading-[46.8px] text-white">
                    {item.title}
                  </Text>
                  <Text className="text-[19.96px] leading-[27.14px] text-white/60 mt-2 pb-5">
                    {item.description}
                  </Text>
                </div>
                {/* Point with Gap */}
                <Image
                  className="absolute right-[calc(100%-3px)] top-[50%] translate-y-[-50%] w-[29px]"
                  src={point}
                  alt={`point-right-${index + 1}`}
                  width={29}
                  height={26}
                />
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
};

export default OurProcess;
