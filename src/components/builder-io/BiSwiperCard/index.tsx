import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import PrevIcon from "@/public/icons/arrow_forward.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
type ProjectCardProps = {
  id: number;
  image: string | StaticImport;
  imageTitle: { imageText?: string; imageTextColor?: string };
  title?: string;
  description?: string;
};

type Props = {
  toggleButton: boolean;
  projects: ProjectCardProps[];
};

const BiSwiperCard = ({ toggleButton, projects }: Props) => {
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <div className="relative flex flex-col gap-8 md:gap-12 max-sm:gap-6">
        {/* <p className=" text-center text-heading4 mt-3">Related Blogs</p> */}
        <div className="flex relative z-20 gap-x-10">
          <Swiper
            spaceBetween={4}
            // slidesPerView={2}
            modules={[Navigation]}
            navigation={{
              prevEl: ".relatedBlogPrev",
              nextEl: ".relatedBlogNext",
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
              }
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: toggleButton ? 2.5 : 1.5,
                slidesPerGroup: 1,
                slidesOffsetBefore: 5,
                slidesOffsetAfter: 5,
              },
              1024: {
                slidesPerView: 2.5,
                slidesPerGroup: 1,
                slidesOffsetBefore: 30,
                slidesOffsetAfter: 30,
              },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                slidesOffsetBefore: 125,
                slidesOffsetAfter: 125,
              },
              2560: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                slidesOffsetBefore: 640,
                slidesOffsetAfter: 640,
              },
            }}
          >
            {projects &&
              projects.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={`/casestudies/${item.id}`} title={item.title}>
                    <div
                      className={clsx(
                        "p-2 w-full group",
                        {
                          ["lg:aspect-[16/10] md:aspect-[9/10] max-sm:aspect-square"]:
                            toggleButton,
                        },
                        {
                          ["aspect-square md:aspect-[4/3]"]: !toggleButton,
                        }
                      )}
                    >
                      <div
                        className={clsx(
                          " border-2 hover:rounded-md group relative z-10 overflow-hidden border-none",
                          {
                            ["lg:aspect-[16/10] md:aspect-[9/10] max-sm:aspect-square"]:
                              toggleButton,
                          },
                          {
                            ["aspect-square md:aspect-[4/3]"]: !toggleButton,
                          }
                        )}
                      >
                        <Image
                          src={item?.image}
                          className="w-full object-cover group-hover:rounded-md group-hover:transform group-hover:duration-75 group-hover:scale-110"
                          alt="image"
                          title={item?.title}
                          fill
                          objectFit="cover"
                          // height={550}
                          // width={700}
                        />
                        {item?.imageTitle?.imageText && (
                          <h3
                            className="absolute text-heading4 flex justify-center items-center font-extrabold top-6 left-6  lg:top-8 lg:left-8"
                            style={{
                              color: item?.imageTitle?.imageTextColor,
                            }}
                          >
                            {item?.imageTitle?.imageText}
                          </h3>
                        )}
                      </div>
                      {/* <Link href={`/casestudies/${item.id}`} title={item.title}> */}
                      {item?.title && (
                        <h3 className="text-heading6 group-hover:text-blue font-bold mb-2 mt-4 ">
                          {item.title}
                        </h3>
                      )}
                      {item?.description && (
                        <p className="text-primary text-subtitle2">
                          {item.description}
                        </p>
                      )}
                      {/* </Link> */}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        {toggleButton ? (
          <>
            <button
              ref={prevButtonRef}
              className="relatedBlogPrev bg-blue w-16 h-16 border-none items-center justify-center absolute lg:left-[1%] xl:left-[7%] 2xl:left-[24%] lg:top-[31%] xl:top-[33%] 2xl:top-[36%] translate-y-[-50%] z-40 rounded-full  lg:flex hidden cursor-pointer"
            >
              <PrevIcon className="w-8 rotate-180" />
              <span className="sr-only">Next button</span>
            </button>
            <button
              ref={nextButtonRef}
              className="relatedBlogNext bg-blue w-16 h-16 border-none items-center justify-center absolute lg:right-[15%] xl:right-[23.55%] 2xl:right-[24%] lg:top-[31%] xl:top-[33%] 2xl:top-[36%] translate-y-[-50%] z-40 rounded-full  lg:flex hidden cursor-pointer"
            >
              <PrevIcon className="w-8" />
              <span className="sr-only">Next button</span>
            </button>
          </>
        ) : (
          <div className="px-container">
            <div className="group flex bg-background w-fit hover:bg-blue px-3 py-2 gap-x-4 justify-between items-center rounded-full transition-all ease-in-out duration-700">
              <button
                ref={prevButtonRef}
                name="relatedBlogPrev"
                aria-label="left"
              >
                <IoIosArrowBack className="h-6 w-6 text-primary text-xl group-hover:fill-background" />
              </button>
              <button
                ref={nextButtonRef}
                name="relatedBlogNext"
                aria-label="right"
              >
                <IoIosArrowForward className="h-6 w-6 text-primary text-xl group-hover:fill-background" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BiSwiperCard;
