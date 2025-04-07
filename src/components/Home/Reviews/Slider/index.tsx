'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Reviews from '../Index'

interface Review {
  text: string
  name: string
  title: string
}

function ReviewsSlider() {
  const reviews: Review[] = [
    {
      text:
        'I live in Seattle and was looking to maximize the value of my property. Innate came highly recommended and they did a feasibility study to understand what the best value proposition would be. Seeing that I had a large lot, we decided to subdivide the lot and add an attached ADU and detached ADU. Innate handled the entire design and permitting process as well as the application for change of use and new addresses. Highly recommended!',
      name: 'Ronald G',
      title: 'Co-founder, Head of Product',
    },
    {
      text:
        'I have worked with Michael on numerous projects as I manage Airbnbs and am continuously remodeling and developing properties. He is detail-oriented and communication-focused and always does a great job! I have referred him to various friends as well.',
      name: 'Chris P',
      title: 'Co-founder, Head of Product',
    },
    {
      text:
        'Michael completed our kitchen remodel, and it was an amazing experience! We weren’t exactly sure of the cabinet layout or appliance location, so Michael drew up different plans so we could choose the best layout. During construction, he was so flexible! We had some changes that were important to me during the process, and Michael and his team accommodated everything. His team was communicative and friendly, and I got the sense that everyone at the company genuinely enjoys their work and helping people. We love our new kitchen!',
      name: 'Michelle M',
      title: 'Co-founder, Head of Product',
    },
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full overflow-hidden TestimonialSlider-slider-parent">
        <Swiper
          breakpoints={{
            768: {
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
          speed={4000}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev ',
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
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewsSlider
