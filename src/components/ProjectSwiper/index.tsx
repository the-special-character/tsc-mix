"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { backendData } from "@/lib/constData";
import Link from "next/link";

const Swiper1 = () => {
  return (
    <div className=" bg-gray">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.4,
          },
          1440: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <div >
          {backendData.SwiperServices.map((item, index) => (
            <SwiperSlide key={index} >
              <div className="relative ">
                <Image
                  src={item.src}
                  alt="projectSwiper"
                  title="projectSwiper"
                  className="flex flex-col mx-auto justify-center items-center gap-x-4"
                  height={500}
                  width={1000}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Swiper1;
