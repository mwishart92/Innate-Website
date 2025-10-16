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
import Reviews from "../ReviewBlock";
import LoomVideoThumbnail from "@/components/ui/LoomVideoThumbnail";
import { useState } from "react";

interface Review {
  text: string;
  name: string;
  title: string;
}

function ReviewsSlider() {
  let [isOpen, setIsOpen] = useState(false);
  let [content, setContent] = useState<Review | null>(null);

  const reviews: Review[] = [
    {
      text: "I live in Seattle and was looking to maximize the value of my property. Innate came highly recommended and they did a feasibility study to understand what the best value proposition would be. Seeing that I had a large lot, we decided to subdivide the lot and add an attached ADU and detached ADU. Innate handled the entire design and permitting process as well as the application for change of use and new addresses. Highly recommended!",
      name: "Ronald G",
      title: "",
    },
    {
      text: "I have worked with Michael on numerous projects as I manage Airbnbs and am continuously remodeling and developing properties. He is detail-oriented and communication-focused and always does a great job! I have referred him to various friends as well.",
      name: "Chris P",
      title: "",
    },
    {
      text: "Michael completed our kitchen remodel, and it was an amazing experience! We weren't exactly sure of the cabinet layout or appliance location, so Michael drew up different plans so we could choose the best layout. During construction, he was so flexible! We had some changes that were important to me during the process, and Michael and his team accommodated everything. His team was communicative and friendly, and I got the sense that everyone at the company genuinely enjoys their work and helping people. We love our new kitchen!",
      name: "Michelle M",
      title: "",
    },
  ];

  function handleOpenDailog(c: Review) {
    setContent(c);
    setIsOpen(true);
  }

  return (
    <div className="w-full overflow-hidden pt-32">
      {/* Loom Video Section */}
      <div className="flex flex-col items-center justify-center pt-[75px] pb-48">
        <Text as="h2" className="text-center font-normal mb-[50px] mob:mb-8 mob:text-[30px] mob:leading-[33px] mob:px-5">
          Watch this video to see our approach in action!
        </Text>
        <LoomVideoThumbnail
          videoId="edfe795cdce04589b279fefaa15b4e96"
          title="Our Collective Story"
          subtitle="Learn about our team and approach"
        />
      </div>
      
      <Text as="h2" className="text-center font-normal mb-16 mob:mb-8 mob:text-[30px] mob:leading-[33px] mob:px-5">
        Kind words from our clients..
      </Text>
      <div className="px-[43px] mob:px-[16px] w-[80%] mob:w-full mx-auto">
        <div className="w-full overflow-hidden TestimonialSlider-slider-parent">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1180: {
                slidesPerView: 2,
              },
              1323: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={3}
            speed={4000}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev ",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Navigation, Scrollbar, Autoplay, Pagination]}
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="mob:px-5">
                <Reviews
                  text={review.text}
                  name={review.name}
                  title={review.title}
                  handleOpenDailog={() => handleOpenDailog(review)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
                <img src="/Star.png" alt="Google rating star" className="w-[22px]" />
                <img src="/Star.png" alt="Google rating star" className="w-[22px]" />
                <img src="/Star.png" alt="Google rating star" className="w-[22px]" />
                <img src="/Star.png" alt="Google rating star" className="w-[22px]" />
                <img src="/Star.png" alt="Google rating star" className="w-[22px]" />
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
