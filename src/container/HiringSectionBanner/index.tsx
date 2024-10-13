import ImageWithCards from "@/components/hiring/ImagewithCards";
import React from "react";
import { HiringSectionBanner as data } from "@/lib/constData";
import { Button } from "@/components/ui/button";
import ImageTextBanner from "@/components/hiring/ImageTextBanner";

type Props = {};

const HiringSectionBanner = (props: Props) => {
  return (
    <section className="flex items-center flex-1 justify-center  max-sm:grid-cols-1 gap-20 h-full w-full  py-32 ">
      <ImageTextBanner
        cardata={data.cardata}
        decription={data.decription}
        title={data.title}
        btntext={data?.btntext}
        imageurl={data.imageurl}
      />
    </section>
  );
};

export default HiringSectionBanner;
