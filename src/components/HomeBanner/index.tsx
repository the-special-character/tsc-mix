"use client";
import { HomeBannerdataType } from "@/utils/types";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeBanner = ({ data }: HomeBannerdataType) => {
  const [index, setIndex] = useState(0);
  const values = ["value", "future", "new"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className=" relative overflow-hidden h-screen">
      <video
        autoPlay
        loop
        muted
        title="homeBanner"
        className="absolute max-md:h-screen xl:w-full max-w-none "
        src="/images/TSC-Vedio-3.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <section className="relative z-0 text-blue h-full flex flex-wrap flex-col  justify-center text-heading1 ">
        <h1 className="items-center">{data.title}</h1>
        <h2 className="text-primary text-heading1 items-center lg:w-[40rem]">
          {data.title2}
        </h2>
        <div className=" mt-20 gap-10 text-3xl text-primary">
          <h3 className="pt-1">
            {" "}
            {data.subtitle} <span className="text-blue">{values[index]}</span>
          </h3>
          <div className="pt-7">
            <Link
              href={"#Contact"}
              title="Late's talk"
            >
              <Button
                variant="default"
                size="sm"
                className="px-24 md:px-32 py-6 text-base"
              >
                {data.button}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
