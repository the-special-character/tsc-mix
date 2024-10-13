import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Cards from "@/components/hiring/Cards";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  imageTitle: string;
  image: string | StaticImport;
  className?: string;
  cardData?: {
    title: string;
    subdec?: string;
  }[];
  side?: string;
};

const BiImageWithCards = ({
  imageTitle,
  image,
  cardData,
  className,
  side,
}: Props) => {
  const pov = cardData?.length ? 20 / cardData.length : 0;

  return (
    <div
      className={cn(
        "relative overflow-visible w-full aspect-square max-w-[450px] max-sm:max-w-[280px] place-self-center",
        className
        // {
        //   "": side === "bottom",
        //   "aspect-square max-w-[500px] ": side === "left",
        // }
      )}
    >
      <Image
        src={image ? image : ""}
        alt={imageTitle}
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
          top:
            side === "left" && cardData?.length !== 1 ? `${pov}%` : undefined,
          bottom: side === "left" && cardData?.length === 1 ? "10%" : undefined,
        }}
      >
        {cardData &&
          cardData?.map((item, index) => (
            <Cards key={index} data={item} side={side as "left" | "bottom"} />
          ))}
      </div>
    </div>
  );
};

export default BiImageWithCards;
