"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Autoplay } from "swiper/modules";
import Image from "next/image";
import { MobileSwiperData } from "@/lib/constData";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import style from "./swipper.module.css";
import { SwiperNavButtons } from "@/components/Swiper/SwiperButton";

type testimonial = {
  image?: string | StaticImport;
  name: string;
  title?: string;
  company?: string;
  testimonial: string;
};

type Props = {
  testimonials: testimonial[];
  textColor?: string;
  testimonialTextColor?: string;
};

const BiTestimonialSwiper = ({
  testimonials,
  testimonialTextColor = "#fff",
  textColor = "#FFDB3B",
}: Props) => {
  return (
    <div className="h-[50%] w-full">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel, Autoplay]}
        className={style.swiper}
        autoplay={{
          delay: 3000,
        }}
      >
        <div>
          {testimonials &&
            testimonials.map((slide, index) => (
              <SwiperSlide key={index} className={style.SwiperSlide}>
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
                  <div className="flex gap-x-4 md:gap-x-8 items-center lg:gap-x-10">
                    <div>
                      <Image
                        src={slide.image ? slide.image : ""}
                        alt={`${slide.name} image`}
                        title={slide.name}
                        className="h-16 md:h-24 md:w-24 rounded-full w-16"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div
                      className="text-subtitle2 flex flex-col"
                      style={{ color: textColor }}
                    >
                      <span>{slide.name}</span>
                      <span>{slide.title ? slide.title : ""}</span>
                      <span>{slide.company ? slide.company : ""}</span>
                    </div>
                  </div>
                  <p
                    className="py-4 text-heading4 md:py-5"
                    style={{ color: testimonialTextColor }}
                  >
                    &quot;{slide.testimonial}&quot;
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default BiTestimonialSwiper;
