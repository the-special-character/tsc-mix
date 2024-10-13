import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="group flex bg-background w-fit hover:bg-blue px-3 py-5 gap-x-10 justify-between items-center rounded-full transition-all ease-in-out duration-700">
      <button name="arrowleft" aria-label="left">
        <IoIosArrowBack
          className="h-5 w-5 text-primary text-xl group-hover:fill-background"
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button name="arrowright" aria-label="left">
        <IoIosArrowForward
          className="h-5 w-5 text-primary text-xl group-hover:fill-background"
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};
