import React from "react";
import Image from "next/image";
import Aboutus from "@/public/images/AboutBanner2.webp";
import Cards from "../Cards";
import { cn } from "@/lib/utils";
type Props = {
  imageurl?: string;
  className?: string;
  carddata: {
    title: string;
    subdec?: string;
  }[];
  side?: "bottom" | "left" | undefined;
};
// const data = {
//   imageurl: "@/public/images/AboutBanner2.webp",
//   className: "",
//   cardata: [
//     {
//       title: "Excepted Cost Savings",
//       subdec: "50-70%",
//     },
//     {
//       title: "Excepted Cost Savings",
//       subdec: "50-70%",
//     },
//     // {
//     //   title: "Excepted Cost Savings",
//     //   subdec: "50-70%",
//     // },
//   ],
// };
const ImageWithCards = ({
  imageurl,
  carddata,
  className,
  side = "bottom",
}: Props) => {
  const pov = 20 / carddata.length;
  // console.log(pov, ";;;;;;;;;");

  return (
    <div
      className={cn(
        "relative overflow-visible w-full aspect-square max-w-[450px] max-sm:max-w-[280px]",
        className
        // {
        //   "": side === "bottom",
        //   "aspect-square max-w-[500px] ": side === "left",
        // }
      )}
    >
      <Image
        src={Aboutus}
        alt={""}
        fill
        objectFit="cover"
        className="rounded-lg"
      />
      <div
        className={cn({
          ["absolute  -left-2 md:-left-10 bottom-0 translate-y-[30%] flex gap-2 w-full"]:
            side == "bottom",
          [`absolute left-0 md:-left-2 lg:-left-5  xl:-left-10 top-[${pov}%] translate-x-[-5%] xl:-translate-x-[10%]  flex flex-col gap-2 w-full`]:
            side == "left",
        })}
        style={{
          top: `${side == "left" && carddata.length != 1 && pov}%`,
          bottom: `${side == "left" && carddata.length == 1 && 10}%`,
        }}
      >
        {carddata.map((item, index) => (
          <Cards key={index} data={item} side={side} />
        ))}
      </div>
    </div>
  );
};

export default ImageWithCards;
