"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./style.module.css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type dataProps = {
  title?: string;
  image?: string | StaticImport;
  url?: string;
};
type Props = {
  data: dataProps[];
};

const BiAnimatedImageWord = ({ data }: Props) => {
  return (
    <div className="flex gap-x-9 md:items-center md:justify-between pt-6 max-md:pt-6 max-md:py-0">
      <Swiper
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className={style.swiper}
      >
        {data &&
          data.map((x) => (
            <SwiperSlide className="h-full" key={x.title}>
              <div className="flex bg-background gap-x-10 max-lg:flex-col-reverse">
                <div className="md:flex-1 gap-2 pt-10">
                  <Link
                    title="latest-thinking"
                    href={x.url ? x.url : "/"}
                    className=" leading-10 text-heading6"
                  >
                    {x.title} <span className="text-blue"> &rarr;</span>
                  </Link>
                </div>
                <div className="relative flex-1 aspect-square overflow-hidden">
                  {x.image && (
                    <Link href={x.url ? x.url : "/"}>
                      <Image
                        src={x.image}
                        alt={x?.title || "image"}
                        title={x?.title}
                        fill
                        sizes="aspect-square"
                        className="object-cover"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default BiAnimatedImageWord;
