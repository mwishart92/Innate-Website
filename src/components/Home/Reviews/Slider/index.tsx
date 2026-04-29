"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Text from "@/components/ui/Text";
import ReviewBlock from "../ReviewBlock";
import { useState } from "react";
import Image from "next/image";

interface Review {
  heading?: string;
  text: string;
  name: string;
  title: string;
  photo?: string;
}

function ReviewsSlider() {
  let [isOpen, setIsOpen] = useState(false);
  let [content, setContent] = useState<Review | null>(null);

  const reviews: Review[] = [
    {
      heading:
        "Innate remodeled my entire home, putting in all new floors, moving the laundry area upstairs, and totally redoing the kitchen and the bathrooms. ",
      text: `They also took out my sliding glass door, replacing it with French doors. The fireplace was re-tiled. I admit I kept adding things; but the project was still completed within a week of the original estimate. They made sure everything was complete before considering it finished. A great job!  `,
      name: "Mary Grager",
      title: "Whole Home Remodel",
      photo: "/images/reviews/mary.png",
    },
    {
      heading:
        "We recently completed a bathroom remodel with this company and couldn’t be happier with the experience.We had a great experience working with Innate and especially love how our two projects turned out.",
      text: "Innate is really committed to quality and worked closely with us to make sure the projects turned out just like we imagined. We’ll work with them again!",
      name: "Rainier Aliment",
      title: "",
      photo: "/images/reviews/rainier.png",
    },
    {
      heading:
        "I hired Innate after buying my apartment in Lake Forest Park and had them remodel my bathroom and update the flooring and paint throughout. ",
      text: "I really appreciated the collaborative process and how they helped me with the design and sourcing materials that matched my budget. The crew who did the work was respectful, clean and the work itself was flawless! Would definitely recommend them for interior remodeling.",
      name: "Adepa Owusu-Bio",
      title: "Bathroom Remodel",
      photo: "/images/reviews/adepa.png",
    },
    {
      heading:
        "We wanted a warm, natural, earthy-style bathroom with stone textures, a floating vanity, and a clean, open layout. From the beginning, Innate took the design phase seriously.",
      text: "They were clear that construction wouldn’t start until every detail was finalized — the layout, the materials, the fixtures — and everything was ordered and on site. In the past, I’ve worked with remodelers who rushed to start before anything was truly ready. This experience was the opposite. The planning was rigorous, thoughtful, and patient, and it made the build phase smooth. The final result is exactly what I pictured, and honestly even better.",
      name: "John",
      title: "Remodel Project",
      photo: "",
    },
    {
      heading:
        "Innate does really beautiful work. The level of detail and thought they put into their remodels is obvious — nothing feels generic or rushed.",
      text: " Even similar layouts feel elevated because of the design and craftsmanship. You can tell they genuinely care about doing things the right way and about the overall client experience. It’s refreshing to see that kind of intention in construction.",
      name: "Nayeli Flores Herbert",
      title: "",
      photo: "",
    },
  ];

  function handleOpenDailog(c: Review) {
    setContent(c);
    setIsOpen(true);
  }

  return (
    <div id="video" className="w-full overflow-hidden ">
      {/* Loom Video Section */}
      <div className="w-[95%] bg-white mx-auto rounded-[20px] pb-[150px] mob:pb-[40px]">
        <div className="flex flex-col items-center justify-center pb-48 mob:pb-20">
          <Text
            as="h2"
            className="text-center font-normal mt-[98px] mob:mt-[48px] mb-[50px] mob:mb-8 mob:text-[30px] mob:leading-[33px] mob:px-5 text-black"
          >
            Watch this video <br /> to see our approach in action!
          </Text>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/Innate%20-%20Website%20Hero%20Video.mp4?alt=media&token=1e51d592-5ef8-40d7-b454-4c6bdffcccdf"
            controls
            className="w-[921px] mob:w-full rounded-lg"
          />
        </div>

        <div className="flex lg:flex-col gap-[100px] mob:gap-[50px] px-[43px] mob:px-[16px] w-[80%] mob:w-full mx-auto ]">
          <div className="relative md:min-w-[431px] ">
            <Text
              as="h2"
              className="text-left font-medium mb-5 mob:mb-8 mob:text-[30px] px-6 text-black relative text-[48px] leading-[49px] flex justify-center"
            >
              <span>
                What Our <br />
                Clients Say
              </span>
              <img
                src="/images/comma-left.svg"
                alt=""
                className="absolute left-0 top-0 w-[24px]"
              />
              <img
                src="/images/comma-right.svg"
                alt=""
                className="absolute right-0 bottom-[0px] w-[24px]"
              />
            </Text>
            <p className="text-black">
              Here's what people have to say about working together. Real
              moments, real experiences, real feedback.
            </p>
            <div className="flex gap-4 mt-[27px]">
              <img
                src="/images/left-arrow.svg"
                alt=""
                className="custom-next1 cursor-pointer hover:opacity-80 transition-all hover:scale-105"
              />
              <img
                src="/images/right-arrow.svg"
                alt=""
                className="custom-prev2 cursor-pointer hover:opacity-80 transition-all hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full overflow-hidden TestimonialSlider-slider-parent">
            <Swiper
              spaceBetween={20}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1180: {
                  slidesPerView: 1,
                },
                1323: {
                  slidesPerView: 1,
                },
              }}
              slidesPerView={1}
              speed={600}
              // autoplay={{
              //   delay: 12000,
              //   disableOnInteraction: false,
              // }}
              loop={true}
              navigation={{
                nextEl: ".custom-next1",
                prevEl: ".custom-prev2 ",
              }}
              pagination={{
                clickable: false,
              }}
              modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
              className="mySwiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="mob:px-5">
                  <ReviewBlock
                    review={review}
                    handleOpenDailog={() => handleOpenDailog(review)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* dailog */}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-30 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 backdrop-blur-2xl">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl gradient2 p-6 duration-300 ease-out"
            >
              <div className="flex gap-[34px]">
                <div className="bg-[#747373] w-[50px] h-[50px] mob:w-[56px] mob:h-[56px] text-white flex justify-center items-center text-[40px] rounded-full relative">
                  {content?.name?.[0]}
                  <div className=" absolute right-0 bottom-0 bg-white p-[2px] rounded-full flex justify-center items-center w-[20px] h-[20px]">
                    <img
                      src="/Google__G__logo.svg"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                </div>
                <div className="">
                  <Text className="text-[16px] font-medium leading-[31.2px] text-white mob:text-[16px]">
                    {content?.name}
                  </Text>
                  <Text className="text-[16px] mt-1 text-white mob:text-[14px] font-semibold">
                    {content?.title}
                  </Text>
                </div>
              </div>
              <div className="flex gap-[1px] mt-4">
                <img
                  src="/Star.png"
                  alt="Google rating star"
                  className="w-[22px]"
                />
                <img
                  src="/Star.png"
                  alt="Google rating star"
                  className="w-[22px]"
                />
                <img
                  src="/Star.png"
                  alt="Google rating star"
                  className="w-[22px]"
                />
                <img
                  src="/Star.png"
                  alt="Google rating star"
                  className="w-[22px]"
                />
                <img
                  src="/Star.png"
                  alt="Google rating star"
                  className="w-[22px]"
                />
              </div>
              <p className="mt-2 text-sm/6 text-white/50">{content?.text}</p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default ReviewsSlider;
