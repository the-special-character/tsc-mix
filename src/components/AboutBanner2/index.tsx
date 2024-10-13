import { aboutBanner2 } from "@/lib/constData";
import { cn } from "@/lib/utils";
import { aboutBanner2Type } from "@/utils/types";
import Image from "next/image";
import React from "react";

const AboutBanner2 = ({ data }: aboutBanner2Type) => {
  return (
    <section className="bg-yellow">
      <div className="text-heading1">{data.heading}</div>
      {aboutBanner2.section.map((item, i) => {
        return (
          <>
            <div className="bg-yellow max-xl:h-[89vh] px-container max-xl:overflow-hidden ">
              <div
                className={cn(
                  item.id % 2 !== 0
                    ? "md:h-[75vh] flex flex-row-reverse max-sm:flex-wrap max-sm:flex-row"
                    : "md:h-[75vh] flex justify-between max-sm:flex-wrap flex-row"
                )}
              >
                <div className="h-[70vh] w-full sm:text-[30rem] max-sm:text-[20rem] max-lg:justify-center lg:justify-evenly flex  relative ">
                  {item.number}
                  <Image
                    src={item.url}
                    alt={"image"}
                    width={600}
                    title="about-number-banner"
                    height={600}
                    className="absolute lg:top-[36%] max-sm:top-[36%] max-lg:top-[60%] max-lg:left-[10%] lg:left-[10%] "
                  />
                </div>
                <div className=" text-subtitle3  flex justify-center items-center w-full  gap-x-[0.12rem]">
                  <div className="">
                    <span className="font-bold">{item.title1}</span>
                    <span>{item.title2}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default AboutBanner2;