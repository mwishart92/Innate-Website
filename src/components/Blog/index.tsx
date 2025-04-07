import { FC, useEffect, useCallback, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import React from "react"
import Text from "@/components/ui/Text";
// import share from "@/public/images/blog/mdi_instagram.png";
import fb from '@/public/fb.svg'
import linkedin from '@/public/linkedin.svg'
import frame1 from "@/public/images/blog/fram1.png";
import frame2 from "@/public/images/blog/Frame2.png";
// import carbon from "@/public/images/blog/carbon.png";
// import heritage from "@/public/images/blog/heritage.png";
// import resilient from "@/public/images/blog/resilient.png";
// import native from "@/public/images/blog/native.png";

interface Content {
  type: "text" | "image";
  text?: string;
  src?: string | StaticImageData;
  alt?: string;
}

interface ArticleSection {
  id: number;
  title: string;
  publishedDate?: string;
  content: Content[];
}

// Define the structure of the props the component will receive
interface ArticleProps {
  id: number; // Receive `id` as a prop
}

const Blog: FC<ArticleProps> = ({ id }) => {
  const [selectedSections, setSelectedSections] = React.useState<ArticleSection[]>([]);
  // Static JSON data for sections
  const sections: ArticleSection[] = useMemo(() => {
    return [
      {
        id: 1,
        title: "Do you need a soils report or civil engineer for an addition in Bellevue?",
        publishedDate: "17 August, 2024", // Add the publication date here
        content: [
          {
            type: "image",
            src: frame1, // Image imported
            alt: "Image description",
          },
          {
            type: "text",
            src: frame1,
            text: "When planning to build an addition in Bellevue, Washington, understanding the city’s zoning regulations is essential for a smooth and compliant construction process. Bellevue’s zoning regulations are designed to ensure that new developments align with the city’s overall planning objectives, maintain neighborhood character, and address community concerns. These regulations cover various aspects, including setback requirements, height limits, lot coverage, and the use of the property. Before beginning any construction, it is crucial to review these rules to ensure that your addition adheres to the specific zoning district requirements, protecting both the integrity of your project and the community’s standards. \n \n For a single-family home addition of less than 3,000 square feet in Bellevue, Washington, several documents are required to obtain the necessary permits. Homeowners must submit a complete building permit application, which includes detailed site plans that outline the existing and proposed structures, property boundaries, and setback measurements. Architectural drawings or of the addition must also be provided, showing floor plans, elevations, and sections. Additionally, structural drawings of the foundation and framing are required to ensure the addition’s stability. If the project affects utilities or drainage, utility plans and a drainage report might be necessary. Depending on the scope and location of the project, homeowners may also need to include energy code compliance forms, proof of property ownership, and any applicable environmental impact assessments. Ensuring that all required documents are prepared and submitted accurately is key to avoiding delays in the permit approval process. \n \n When constructing an addition in Bellevue, Washington, particularly one that alters the footprint of the home or impacts the surrounding landscape, a Stormwater Drainage Report and Stormwater Site Plan are often required. These documents assess and outline how stormwater will be managed on the property, ensuring that the new construction does not negatively affect drainage patterns or contribute to flooding in the area. These reports typically include detailed analyses of the existing site conditions, proposed changes, and the methods by which stormwater runoff will be controlled, such as through the use of detention systems, permeable surfaces, or landscaping solutions. \n \n Given the complexity of these requirements, it is common practice to engage a licensed civil engineer to prepare the Stormwater Drainage Report and Stormwater Site Plan. A civil engineer has the expertise to evaluate the site’s hydrology, design appropriate stormwater management systems, and ensure compliance with Bellevue’s stringent stormwater regulations. By working with a professional, homeowners can be confident that their project will meet all necessary standards, reducing the risk of complications during the permit review process. \n \n In certain situations, it may be possible to avoid submitting some of the required documents for a home addition in Bellevue by utilizing a document waiver process. If an architect believes that specific documents, such as a Stormwater Drainage Report or certain detailed site plans, are unnecessary for a particular project, they can submit a Document Waiver Form along with the building permit application. This form must be accompanied by appropriate evidence or justification explaining why the omitted documents are not applicable to the project. \n \n Once the waiver request is submitted, Bellevue’s plan review team will assess its validity based on various factors, including the project’s address, scope, and complexity. The review team will determine whether the requested waiver is reasonable, given the specifics of the site and the proposed construction. If the waiver is approved, the homeowner can proceed without submitting the waived documents, streamlining the permit process. However, if the review team deems the waiver inappropriate, the standard documentation will still be required to ensure the project meets all city regulations and standards.\n \n Similarly, a geotechnical report, which provides an analysis of the soil and subsurface conditions of a construction site, is not automatically required for every home addition in Bellevue. However, the necessity of this report is often determined during the plan review process, based on the specific details of the project. The plan reviewer will assess the scope, location, site conditions, and complexity of the proposed work to determine if a geotechnical report is needed. For example, if the addition involves significant excavation, is located on a steep slope, or is in an area with known soil stability issues, the plan reviewer may require a geotechnical report to ensure the safety and stability of the structure. This report, typically prepared by a licensed geotechnical engineer, would provide critical information on the soil’s bearing capacity, potential for landslides, or other geotechnical factors that could impact the project. If the plan reviewer decides that a geotechnical report is necessary, the homeowner must obtain and submit it as part of the permit application. This determination is made to ensure that all potential risks are addressed, and that the construction is safe and compliant with Bellevue’s regulations. \n \n Determining whether a project will be a straightforward architectural endeavor or a more complex one involving multiple consultants is a crucial consideration for homeowners. The complexity of the project can greatly influence the overall cost, potentially escalating from $10-15K to $20-30K or more, depending on the scope. Factors such as site conditions, zoning regulations, and the specific requirements of Bellevue’s building codes play a significant role in this determination. \n \n An architect is the best person to guide clients through this process. With their expertise, architects can help homeowners navigate the intricate zoning and building codes of Bellevue and provide a clear understanding of what the project will entail. By evaluating the project’s scope, the architect can anticipate the need for additional consultants, such as civil engineers, geotechnical engineers, or landscape architects, and explain how these requirements might impact both the complexity and cost of the project. Engaging an architect early in the planning stages ensures that homeowners are well-informed and prepared for any challenges, leading to a more efficient and successful construction process. \n \n Homeowners can expect to pay for a feasibility study to uncover the factors that will influence the complexity and cost of their project before fully committing. A feasibility study, typically conducted by the architect, involves a thorough analysis of the site, zoning regulations, and potential challenges that may arise during the construction process. This study helps identify whether the project will remain a simple architectural undertaking or require the involvement of additional consultants. By investing in a feasibility study, homeowners gain valuable insights into the project’s viability, potential costs, and any obstacles they may face, allowing them to make informed decisions before moving forward.",
          },
        ],
      },
      {
        id: 2,
        title: "The Cost of Architecture",
        publishedDate: "27 April, 2024", // Add the publication date here
        content: [
          {
            type: "image",
            src: frame2, // Image imported
            alt: "Image description",
          },
          {
            type: "text",
            src: frame2,
            text: "The cost of architecture is a contentious topic and a difficult one to find a consensus on. The American Institute of Architects suggests that design fees for remodels are generally around 15% of the eventual construction cost, while for new construction projects, it’s around 10%. However you can also find designers who will charge only a few thousand dollars for a complete set of drawings. \n  This article explains the many reasons for the disparity and inconsistency with design fees. In short, every project is unique and cannot be exactly compared to another. While two projects may seem similar, the complexity may be vastly different based on jurisdiction, environmental factors, materials and scope. In addition, this article details why a good architects fee may be higher than expected because of their time, energy, expertise and of course, CREATIVITY. \n This investment might appear substantial for simply creating building illustrations. However, let’s delve into what clients receive for this expenditure and the comprehensive services architects provide beyond mere drawings: \n 1. Drawings: These serve as the most tangible output, providing essential information for securing permits from the building department and guiding builders in constructing the building. While some may assume that basic CAD skills suffice for creating plans, it’s not just about drawing ability but rather understanding what to include in the drawings. This underscores the importance of accessing the architect’s expertise throughout the entire design and construction journey, making the drawings themselves less valuable compared to the invaluable guidance provided by the architect. \n 2. Experience: The drawings convey a wealth of contractual information that requires years of focused learning to effectively communicate to various stakeholders, including building departments, engineers, builders, material suppliers, and clients. Architects determine the optimal approach to meet client needs and ensure that construction aligns with expectations, budget, schedule, building codes, zoning regulations, builders’ capabilities, material constraints, and numerous other factors. These considerations are distilled into technical drawings and documents to communicate requirements to relevant parties. While experience plays a crucial role, much of its value lies in verbal communications and visual inspections with the architect. This direct interaction allows for swift, targeted feedback, saving thousands in construction costs by addressing issues promptly. This leads to the subsequent benefit… \n  3. Time: Throughout any project, there are numerous pivotal moments before and during construction when your architect’s immediate availability is crucial. These include meeting deadlines set by building departments, providing on-the-spot clarifications to builders regarding construction techniques, addressing client concerns or anxieties about budget estimates, dealing with inspectors requesting costly but unnecessary additions, or assisting clients in making significant decisions during moments of stress or uncertainty. On countless occasions, I’ve had to prioritize my clients’ projects over personal commitments, sacrificing leisure time, and even family moments to ensure that urgent project needs are met promptly. I view it as renting out my expertise, always on standby to assist whenever needed. Moreover, architects remain available even during times when clients do not require immediate assistance. Despite potential lulls in project activity, architects must keep their businesses operational and maintain readiness for crucial tasks, much like surgeons who remain on standby in the ER, ready to act when required. \n 4. Coordination: Your architect serves as the central coordinator for all parties involved in bringing your building project to fruition. They possess comprehensive understanding of technical details from builders, product suppliers, building departments, and engineers, amalgamating this information into a cohesive set of documents essential for your project team. The architect oversees the collaboration of various professionals including surveyors, structural engineers, mechanical engineers, electrical engineers, plumbing engineers, geotechnical engineers, civil engineers, builders, building departments, inspectors, arborists, ecologists, biologists, landscape architects, lighting designers, smart home technology providers, real estate agents, archaeologists, historians, neighborhood groups, and numerous material suppliers. \n 5. Assurance: By engaging an architect, you secure the confidence that your building will function effectively, remaining leak-free, tailored to your requirements, comfortable, and safe. Optimal performance is ensured when the architect remains involved throughout the entire project, including the construction phase. Fragmented commissioning, akin to assembling only the bread for a sandwich, yields subpar results. To achieve optimal outcomes, the architect must oversee the entire process. \n 6. While individuals may discern their preferences regarding what they see, often they are unaware of the underlying reasons. This is where your architect steps in. With an innate understanding, your architect comprehends your desires even when unspoken, or when you believe you know what you want but may not. It’s akin to the times in adolescence when parents foresaw the consequences of risky behavior, much like a proficient architect anticipates the trajectory of your project. When clients articulate their intentions, an architect can anticipate their next steps, identify aspects of the request that may not be feasible, and guide them towards the essence of their vision. Presenting options beyond imagination, architects elucidate why the optimal solution prevails, even if initially unconventional. Architects aspire to inspire clients through their spaces, extending creativity into unconventional realms such as navigating permit challenges, devising innovative construction methods to save costs, determining the most advantageous real estate strategy, or proposing cost-effective project sequencing. Your architect serves as a resourceful problem solver, committed to finding solutions across various domains. \n Considering the extensive services architects provide in a project, what exactly is included in their design fee? Typically, a portion—about one-third—is allocated to the staff member directly involved in the task, while the remaining two-thirds cover the overhead expenses of running the firm. Any surplus from overhead contributes to the firm’s profit. For instance, if an architect charges $150 per hour, it’s plausible that they engage in billable work approximately half of their time, equating to around 1000 billable hours in a typical 2080-hour work year, often less. Out of a total billing of $150,000, $50,000 would be allotted for the architect’s salary, with the remaining $100,000 allocated for overhead expenses such as professional liability insurance, general liability insurance, high-end software, office rent, and operational costs. It’s crucial for firms to maintain a surplus in overhead expenses to sustain operations during slow periods, unforeseen mishaps like tile order errors, or delayed client payments. Does this sound enticing? Is being an architect appealing? Many architects are drawn to the profession due to the intrinsic rewards of their work, rather than purely financial incentives.",
          },
        ],
      },
      {
        id: 3,
        title: "Are you being ripped off by your insurance company?",
        publishedDate: "17 April, 2024", // Add the publication date here
        content: [

          {
            type: "image",
            src: frame2, // Image imported
            alt: "Image description",
          },
          {
            type: "text",
            src: frame2,
            text: "Are you feeling the weight of uncertainty after filing a water damage claim with your insurance company? Have you ever wondered if the estimate you received truly reflects the extent of the damages to your home? It’s a troubling reality that many homeowners face – the nagging suspicion that they might be getting shortchanged by their insurance provider. As you navigate the aftermath of water damage, it’s crucial to pause and scrutinize the estimate provided by your insurer. Is it comprehensive enough? Or are you being taken advantage of? Let’s delve into this together and unravel the mysteries of insurance estimates, ensuring that you’re not just compensated, but fairly so, for the damages incurred in your home. \n Consider the case of Sarah, whose home suffered extensive water damage due to a burst pipe. After filing a claim with her insurance company, she received an estimate that seemed reasonable at first glance. However, upon further inspection and consultation with contractors, it became evident that the estimate fell far short of covering the actual costs of repair. Despite Sarah’s efforts to find a contractor willing to work within the confines of the insurer’s check, she faced disappointment after disappointment. Contractors either declined the job outright or offered to do only a fraction of the necessary repairs for the amount specified. Frustrated and feeling trapped, Sarah realized she was stuck between a rock and a hard place – forced to either accept subpar repairs or dip into her own pockets to cover the shortfall. \n This is where the expertise and advocacy of a seasoned general contractor can make all the difference. A contractor with ample experience and knowledge in handling insurance claims can serve as a powerful ally for the homeowner. With a thorough understanding of construction costs and industry standards, a skilled contractor can scrutinize the initial estimate provided by the insurance company, identifying areas where the assessment may have fallen short. Armed with evidence and a detailed understanding of the necessary repairs, the contractor can then engage in negotiations with the insurance company on behalf of the homeowner. By advocating for a supplement estimate that accurately reflects the true extent of the damages, the contractor puts pressure on the insurer to reassess the claim and provide adequate compensation. This proactive approach not only ensures that the homeowner receives fair treatment but also alleviates the burden of navigating the complexities of insurance claims alone. \n Before embarking on this journey, it’s important for the homeowner to understand that aligning with a general contractor in this capacity typically involves signing a contingency form. This document solidifies the contractor as the homeowner’s chosen representative throughout the claims process. By signing this agreement, the homeowner authorizes the contractor to advocate on their behalf, negotiate with the insurance company, and handle all aspects of the repair process. Once this partnership is established, the general contractor employs a full arsenal of tools and tactics to apply pressure on the insurance company. From leveraging industry expertise and documentation of damages to utilizing legal channels if necessary, the contractor leaves no stone unturned in ensuring that the insurance provider fulfills its obligations and provides a fair and comprehensive estimate for the damages incurred. This strategic collaboration between homeowner and contractor forms a powerful force, compelling the insurance company to do the right thing and deliver the compensation deserved. \n Innate AEC stands out as the premier choice for handling insurance claims across a spectrum of damages, from burst pipes to leaking roofs and beyond. What sets Innate AEC apart is not only its professionalism but also its relentless commitment to advocating for the client’s best interests. With a team boasting years of combined experience in architecture, engineering, and construction, Innate AEC possesses the expertise needed to navigate the intricate complexities of insurance claims with finesse. Their ability to apply pressure on insurance companies while upholding the highest standards of professionalism ensures that clients receive the compensation they rightfully deserve. Whether faced with a burst pipe in the kitchen, fire damage, or a leaking roof, Innate AEC’s dedication to excellence and unwavering advocacy make them the ultimate partner in the pursuit of fair and comprehensive insurance settlements.",
          },
        ],
      },
      {
        id: 4,
        title: "New construction CRM app JobSync available on apple app store",
        publishedDate: "4 April, 2024", // Add the publication date here
        content: [

          {
            type: "image",
            src: frame2, // Image imported
            alt: "Image description",
          },
          {
            type: "text",
            src: frame2,
            text: "In the fast-paced world of construction management, efficiency and precision are paramount. That’s why we’re excited to introduce JobSync, our revolutionary proprietary software that seamlessly integrates CRM functionality with construction management software tools, all while harnessing the power of AI to predict pricing based on job type and other factors. With JobSync, we’re not just offering a one-stop solution for project management; we’re revolutionizing the way construction businesses operate, streamlining processes, and enhancing decision-making capabilities. Let’s delve into how JobSync can transform your workflow and propel your projects towards success. \n JobSync isn’t just another CRM or construction management software; it’s a comprehensive solution designed to meet the unique challenges of the construction industry. By integrating CRM features, JobSync allows you to effortlessly manage client interactions, track leads, and maintain communication channels, ensuring that no opportunity slips through the cracks. Simultaneously, its construction management tools provide a centralized platform for project planning, scheduling, and resource allocation, facilitating smooth collaboration among team members and stakeholders. What sets JobSync apart, however, is its AI-driven pricing prediction capability. Leveraging advanced algorithms and data analytics, JobSync analyzes job types, local market trends, and median incomes to provide accurate pricing estimates, empowering you to make informed decisions and stay competitive in a dynamic market landscape. \n In conclusion, JobSync represents a paradigm shift in construction management software, offering a holistic solution that combines CRM functionality, construction management tools, and AI-driven insights. By adopting JobSync, construction businesses can streamline their operations, enhance client relationships, and optimize project outcomes. Whether you’re a small contracting firm or a large construction company, JobSync provides the tools and intelligence needed to thrive in today’s competitive environment. Experience the power of JobSync and take your construction projects to new heights of efficiency and profitability.",
          },
        ],
      },
      {
        id: 5,
        title: "The Best CRM and Construction Project Management Software",
        publishedDate: "1 April, 2024", // Add the publication date here
        content: [

          {
            type: "image",
            src: frame2, // Image imported
            alt: "Image description",
          },
          {
            type: "text",
            src: frame2,
            text: "In the intricate world of construction, effective management of both customer relationships and project timelines is paramount for success. Construction companies operate within a dynamic environment, navigating complex projects, tight deadlines, and diverse stakeholder interactions. Herein lies the significance of robust Customer Relationship Management (CRM) and project management software. These tools serve as the backbone of operations, facilitating seamless communication, streamlined workflows, and meticulous organization. By harnessing the power of CRM and project management software, construction companies can optimize efficiency, enhance collaboration, and ultimately deliver projects with precision and excellence. In this era of technological innovation, a new CRM and construction project manager, JobSync, is uniquely tailored to meet the distinct needs of construction companies, empowering them to excel in today’s competitive landscape. \n JobSync revolutionizes construction management by seamlessly integrating tasks, centralizing client information, generating professional estimates, and facilitating digital contract signing. With its AI-powered capabilities, JobSync even forecasts the cost of specific projects, enabling construction companies to anticipate and mitigate potential financial risks. This comprehensive platform streamlines workflows, enhances collaboration, and empowers teams to deliver projects efficiently and effectively. By consolidating essential functions into a single, intuitive interface, JobSync empowers construction professionals to focus on what they do best: building exceptional structures. \n JobSync’s AI algorithm plays a pivotal role in assisting sales teams and project managers in accurately pricing architecture and construction projects. By analyzing historical data, market trends, and project specifications, JobSync leverages AI to generate precise cost estimates tailored to each project’s unique requirements. This sophisticated algorithm empowers salesmen and project managers to make data-driven decisions, ensuring competitive yet profitable pricing strategies. With JobSync’s AI capabilities, construction professionals can navigate pricing complexities with confidence, ultimately optimizing profitability and client satisfaction. \n In essence, JobSync stands as a game-changer in the construction industry, offering unparalleled usefulness and effectiveness in project management, client relations, and pricing strategies. By streamlining tasks, centralizing information, and harnessing the power of AI, JobSync empowers construction companies to operate with unprecedented efficiency and precision. Whether it’s organizing workflows, generating estimates, or predicting project costs, JobSync revolutionizes every aspect of construction management, driving success, and profitability for businesses of all sizes. With JobSync at their fingertips, construction professionals can navigate challenges, seize opportunities, and deliver exceptional results with confidence and ease.",


          },
        ],
      },
      {
        id: 6,
        title: "Why aren’t general contractors getting back to me?",
        publishedDate: "3 February, 2024", // Add the publication date here
        content: [

          {
            type: "image",
            src: frame2, // Image imported
            alt: "Image description",
          },
          {
            type: "text",
            src: frame2,
            text: "When getting bids for construction, it can be quite a daunting process. When you reach out to a general contractor and ask for a bid, you may not hear back for several weeks, if at all. What is the builder doing during this time? Why won’t they just send you an estimate like you want? \n There are many reasons that the builder is not as responsive as you would hope. The most common reason is that the builder is devoting more time to a currant project rather than speculating on yours. Estimates are typically free, but they can take time and energy to write, especially if the project is complex. We need to predict the costs of all materials both rough and finish, the cost of up to 10 different trades without even speaking with them, and judge the overall complexity, timeline and contingency of a project based on a brief walk-through. So while the builder may have the best intentions, writing estimates is something we often do at 10pm once the day is over, the kitchen is clean and the kids are in bed, and this means it is usually a last priority. Another reason is that they simply don’t want to do your project. Maybe the work is unappealing or unfeasible at the price the client wants. Finally, many bids are difficult to put together. When a builder reaches out to suppliers for the price of materials, they often don’t respond for days or even weeks. And when they reach out to sub contractors for say, the price of plumbing on this job, they often take a long time to respond and put their numbers together. \n Upon receiving a bid from your builder, you might encounter a lack of responsiveness, often due to various reasons. This suggests that your project holds less urgency compared to the active construction. Another factor contributing to the builder’s lack of responsiveness may be their recent submission of five bids to other clients. They await responses to determine if any projects were accepted. Typically, out of these bids, two projects may not materialize, while one could be awarded to a different builder. The remaining two projects might be awarded to the builder you’re considering, leading them to prioritize those clients over you. When there are an excess of projects and not enough builders, general contractors hold the power and can not respond, drive the prices up and generally pick and choose their projects. Conversely, when there are not enough jobs and too many builders, the client has the power to bargain the price down and dictate terms. In Seattle for example, during the summer, there are an excess of decks, roofing and siding projects that need to be done due to the prior 6 months of rain, and you might find yourself in a situation where you simply cannot find a general contractor to do your job in your budget or on your timeline. \n In the end, it falls upon the builder to discern the most favorable opportunity. Factors such as profitability, logistical convenience (e.g., parking, storage space), and proximity to their base are evaluated. Additionally, the builder assesses the prospective client relationship, considering potential challenges (basically, are you going to be a giant pain in their ass?). These elements collectively influence the builder’s decision to engage with a specific project. Ultimately, your significance to them may not align with your perception. ",
          },
        ],
      },
      // {
      //   id: 7,
      //   title: "Additional Insights on Carbon Credit",
      //   publishedDate: "15 December, 2023", // Add the publication date here
      //   content: [
      //     {
      //       type: "text",
      //       text: "Lorem ipsum dolor sit amet consectetur. Auctor enim nec posuere augue eu varius auctor...",
      //     },
      //     {
      //       type: "image",
      //       src: frame2, // Image imported
      //       alt: "Image description",
      //     },
      //   ],
      // },
    ]
  }, []);
  const getUniqueRandomSections = useCallback(() => {
    const selected: ArticleSection[] = [];
    const usedIndices = new Set<number>();

    while (selected.length < 4) {
      const randomIndex = Math.floor(Math.random() * sections.length);

      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        selected.push(sections[randomIndex]);
      }
    }

    setSelectedSections(selected);
  }, [sections]); // Depend on `sections` so it updates only when `sections` changes

  useEffect(() => {
    getUniqueRandomSections();
  }, [getUniqueRandomSections]);

  // Find the section by the provided `id`
  const section = sections.find((section) => section.id === id);

  if (!section) {
    return <p>Section not found!</p>; // Handle if the section with the given id is not found
  }

  return (
    <>
      <div className="w-full max-w-[90%] mob:max-w-[100%] flex gap-[90px] lg:flex-wrap lg:gap-[50px] mx-auto pt-28 lg:px-5">
        <div className="w-full max-w-[90%] mob:max-w-[100%]">
          <h2 className="text-[40px] font-medium leading-[52px] mob:text-[36px] mob:font-semibold font-inter mob:text-center">
            {section.title}
          </h2>
          <div className="flex tab:flex-wrap tab:gap-3 justify-between mt-6 mb-4  mob:justify-center">
            <Text className="text-[20px] text-[#D9D9D9] mob:order-3 font-normal">
              Published: {section.publishedDate}
            </Text>
            <div className="flex gap-3 mob:order-2">
              {/* <Image src={share} alt="" width={32} height={32} className="opacity-60"/> */}
              <a href="#" onClick={(e) => { e.preventDefault() }}><Image src={fb} alt="" width={28} height={28} className="opacity-60" /></a>
              <a href="https://www.linkedin.com/company/innate-nw/" target="_blank"><Image src={linkedin} alt="" width={28} height={28} className="opacity-60" /></a>
            </div>
          </div>
          {section.content.map((item, index) => (
            <div key={index} className="mb-4 mob:w-full">
              {item.type === "text" && item.src ? (
                <>
                  <div className="relative w-full aspect-[10/5] mob:aspect-[7/5] ">
                    <Image
                      src={item.src}
                      alt={item.alt || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <ol >
                      {item.text
                        ?.split("\n") // First split the text by newline
                        .map((line, idx) => {
                          // Check if the line starts with a number
                          const isNumbered = /^\d+\.\s/.test(line);
                          if (isNumbered) {
                            return (
                              <li className="" key={idx}>
                                {line.trim()} {/* Keep the number intact */}
                              </li>
                            );
                          }
                          // Handle non-numbered lines, render as regular list items
                          return (
                            <li className="my-5 text-[16px] font-normal mob:text-[14px]" key={idx}>
                              {line.trim()}
                            </li>
                          );
                        })}
                    </ol>
                  </div>
                </>
              ) : null}
            </div>
          ))}




        </div>
        {/* right */}
        <div className="w-full max-w-[340px]">
          <Text className="text-[18px] mb-3">In this article</Text>
          <div className="pl-3">
            <Text className="text-[18px] mb-3">
              Empowering Indigenous Voices through Sustainable Projects
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              The Role of Indigenous Knowledge in Climate Action
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              Carbon Markets and Biodiversity Protection
            </Text>
            <Text className="text-[#D9D9D9] mb-3">
              Community-Driven Climate Solutions
            </Text>
            <Text
              as="h2"
              className="text-[30px] mob:text-[28px] leading-[42px] font-semibold mt-[40px] mb-[34px]"
            >
              You May Like
            </Text>


            {selectedSections.map((section) =>
              section.content?.map((contentItem, index) => (
                <div key={`${section.id}-${index}`} className="flex items-center gap-[16px] mb-[28px] w-full">
                  {(contentItem.type === "text" && contentItem.src) && (
                    <>
                      <div className="flex-shrink-0 w-1/2 ">
                        <Image
                          className="object-cover" // Image will fill the container
                          src={contentItem.src}
                          alt=""

                        />
                      </div>
                      <div className="">
                        <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D] font-normal">
                          Carbon Economy
                        </button>
                        <Text className="text-[14px] leading-[21px] mt-[10px] font-normal w-44 overflow-hidden overflow-ellipsis line-clamp-2">
                          {contentItem.text}
                        </Text>
                      </div>
                    </>
                  )}
                  <div></div>
                </div>
              ))
            )}

            {/* <div className="flex items-center gap-[16px] mb-[28px]">
              <Image className="" src={carbon} alt="" width={99} height={98} />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D] font-normal">
                  Carbon Economy
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px] font-normal">
                  Empowering Indigenous Economies through Carbon.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image
                className=""
                src={heritage}
                alt=""
                width={99}
                height={98}
              />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D] font-normal">
                  Heritage Sustained
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px] font-normal">
                  Preserving Culture, Heritage, and Land.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image
                className=""
                src={resilient}
                alt=""
                width={99}
                height={98}
              />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D] font-normal">
                  Resilient Growth
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px] font-normal">
                  Climate Resilience and Community Growth.
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[28px]">
              <Image className="" src={native} alt="" width={99} height={98} />
              <div className="">
                <button className="px-2 py-1 rounded-[50px] text-[14px] font-inter bg-[#d9d9d931] border border-[#D9D9D94D] font-normal">
                  Native Stewardship
                </button>
                <Text className="text-[14px] leading-[21px] mt-[10px] font-normal">
                  Biodiversity Protection through Indigenous Stewardship.
                </Text>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
