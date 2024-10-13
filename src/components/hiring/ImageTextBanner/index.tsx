import React from "react";
import ImageWithCards from "../ImagewithCards";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  decription: string;
  btntext?: string;
  imageurl: string;
  cardata: {
    title: string;
    subdec?: string;
  }[];
};

const ImageTextBanner = ({
  title,
  decription,
  btntext,
  imageurl,
  cardata,
}: Props) => {
  return (
    <div className="flex w-full max-md:flex-col justify-between items-center gap-10">
      {" "}
      <div className="flex flex-col gap-10 justify-center lg:max-w-[50%]">
        <h1 className="text-heading1 lg:leading-[4.5rem]">{title}</h1>
        <p className="text-subtitle1">{decription}</p>
        <Button className="bg-blue  md:max-w-[50%] w-full ">
          <span className="font-semibold capitalize ">{btntext}</span>
        </Button>
      </div>
      <ImageWithCards carddata={cardata} imageurl={imageurl} side="bottom" />
    </div>
  );
};

export default ImageTextBanner;
