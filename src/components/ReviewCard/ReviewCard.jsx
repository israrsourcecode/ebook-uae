import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// import required modules

import Btn from "../Common/Btn"

const ReviewCard = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={4000} // Adjust this: Higher = Slower, Lower = Faster
        allowTouchMove={false} // Optional: prevents user from breaking the flow
        autoplay={{
          delay: 0, // 0 delay for continuous motion
          disableOnInteraction: false,
        }}
        // --- BREAKPOINTS START ---
        slidesPerView={1} // Default for mobile (XS)
        spaceBetween={20}
        breakpoints={{
          // When window width is >= 640px (Tablets)
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // When window width is >= 1024px (Laptops/Desktops)
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // When window width is >= 1440px (Large Screens)
          1440: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        // --- BREAKPOINTS END ---
        className="reviewSlider"
      >
        {data.map((item, idx) => {
          return <SwiperSlide key={idx}>
            <div className="reviewCard">
              <div className="reviewCardTop">
                {item.icon}
                <h4>{item.heading}</h4>
              </div>
              <div className="reviewCardCenter">
                <p>{item.para}</p>
              </div>
              <div className="reviewCardBottom">
                <Btn text={<>See What We Do<i className="ri-arrow-right-up-line"></i></>} />
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  )
}

export default ReviewCard
