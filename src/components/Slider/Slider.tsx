"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import { Scrollbar } from "swiper/modules";

import "swiper/css/scrollbar";
import "swiper/css";
import { tree } from "next/dist/build/templates/app-page";

export default function Slider({
  slides,
}: {
  children?: Readonly<React.ReactNode>;
  slides: React.ReactNode[];
}) {
  const allowRender = slides.length == 0 ? false : true;
  const breakpoints = {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
  if (!allowRender) return <>مجاز به اجرای اسلایدر نیست</>;
  return (
    <>
      <Swiper
        // navigation
        // slidesPerView={"auto"}
        
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpoints}
        // centeredSlides={true}
        // style={{justifyContent: 'center'}}
        className="w-full"
      >
        {slides.map((s) => (
          <SwiperSlide
            style={{ display: "flex" , justifyContent : "center" }}
            className="transition-all hover:scale-105 hover:transition-all hover:ease-out lg:p-4"
          >
            {s}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
