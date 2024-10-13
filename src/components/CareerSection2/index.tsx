import { CareerSection1Type } from "@/utils/types";
import React from "react";

const CareerOP = ({ data }: CareerSection1Type) => {
  return (
    <section className="flex flex-col gap-12 lg:flex-row ">
      <div className="flex ">
        <h2 className="text-heading1">
          {data.title1}
        </h2>
      </div>
      <div className="grid grid-row-2 md:flex-row md:flex-1 gap-10 lg:mt-4">
        <p className="flex-1 text-subtitle1">{data.desc1}</p>
        <p className="flex-1 text-subtitle1">{data.desc2}</p>
      </div>
    </section>
  );
};

export default CareerOP;
