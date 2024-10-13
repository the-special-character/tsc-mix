import ImageWithCards from "@/components/hiring/ImagewithCards";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import {
  doyouknowsection as data,
  HiringSectionServices,
} from "@/lib/constData";
import Titlecards from "@/components/hiring/TitleCards";
type Props = {};

const HiringKnow = (props: Props) => {
  return (
    <div className="w-full h-full px-container bg-blue py-10 flex flex-col gap-10 hiring-section">
      <div className="w-full h-full flex gap-20 max-md:flex-col items-center justify-between ">
        {" "}
        <div className="flex flex-col gap-10 max-md:*:text-center lg:max-w-[40%] md:self-start md:py-10 *:text-white">
          <h3 className="text-heading4 ">{data.title}</h3>

          <p>{data.dec}</p>

          <Button className=" md:max-w-[40%] w-full bg-white hover:translate-y-[-10%] hover:bg-white transition-transform duration-300">
            <span className="font-medium capitalize text-black ">
              {data.btntext}
            </span>
          </Button>
        </div>
        <ImageWithCards
          carddata={data.cardata}
          side={data?.side as "left" | "bottom"}
          imageurl={data.imageurl}
          className={data.className}
        />
      </div>
      <div className="flex justify-center max-sm:flex-col max-sm:items-center gap-10 ">
        {data.subdiv.map((item, index) => (
          <div
            className={
              "flex flex-col  gap-6  h-full    w-full   max-w-[350px] line-clamp-3 text-white"
            }
            key={index}
          >
            <h3 className="text-subtitle2 font-medium">{item.title}</h3>
            <p className="text-wrap line-clamp-4 font-light">{item.dec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringKnow;
