import { cn } from "@/lib/utils";
import { title } from "process";
import React from "react";

type Props = {
  titledata: {
    title: string;
    dec: string;
  };
  className?: string;
};

const Titlecards = ({ titledata, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1  h-full border rounded-lg p-5  w-full bg-white  max-w-[390px] min-[1700px]:max-w-[395px] line-clamp-3 min-h-[150px] max-h-[200px]",
        className!
      )}
    >
      <h3 className="text-subtitle1 font-bold">{titledata.title}</h3>
      <p className="text-wrap line-clamp-4">{titledata.dec}</p>
    </div>
  );
};

export default Titlecards;
