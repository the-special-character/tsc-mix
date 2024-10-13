import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  data: { title: string; subdec?: string };
  side: "left" | "bottom";
};

const Cards = ({ data, side }: Props) => {
  return (
    <div
      className={cn(
        "aspect-square w-full   shadow-xl shadow-black/20 rounded-md bg-white p-2 md:p-4  font-extrabold flex flex-col flex-1 justify-between",
        {
          ["w-[50%] max-w-[150px] max-sm:max-w-[90px]"]: side == "left",
          ["max-w-[33%] max-sm:max-w-[90px]"]: side == "bottom",
        }
      )}
    >
      <span className="flex flex-wrap text-subtitle2 leading-5 max-sm:text-caption2 max-sm:leading-3">
        {data.title}
      </span>
      <div className="w-[50%] h-[2px] bg-blue "></div>
      <div className="flex  flex-col justify-between  text-caption1 max-sm:text-caption2 text-blue">
        <span> {data.subdec}</span>
      </div>
    </div>
  );
};

export default Cards;
