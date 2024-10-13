"use client";
import { Button } from "@/components/ui/button";
import { BannerType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import getColors from "@/utils/colors";
import { usePathname } from "next/navigation";

const Banner = ({ data }: { data: BannerType }) => {
  const pathname = usePathname();
  const colors = getColors(pathname);

  return (
    <div
      className={`lg:h-screen w-full flex justify-start items-center ${colors?.bannerbg} ${colors?.color} py-20`}
    >
      <div className=" grid px-container md:grid-cols-[40%_1fr]  grid-cols-1 items-center lg:gap-x-60  max-sm:gap-y-7  justify-center">
        <div className="lg:w-[30rem] sm:gap-y-10 md:gap-y-10 max-sm:gap-y-7 flex justify-evenly flex-col sm:justify-center">
          <h1 className=" text-heading1  font-bold ">{data.title}</h1>

          <p className="text-subtitle1 ">{data.description}</p>

          <div className="max-md:grid max-md:w-full">
            <Link title="Contact-Us" href={"#Contact"}>
              <Button variant="default" size="lg" className=" py-7 text-base ">
                <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                  {data?.button1} <span>{data?.button2}</span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:relative flex justify-center items-center ">
          <Image
            src={data.imageurl}
            alt="image"
            title="Banner-image"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
