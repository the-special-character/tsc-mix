import React from "react";
import { CareerSectionType } from "@/utils/types";

const CareerSection = ({ data }: CareerSectionType) => {
  return (
    <section className="  flex flex-col gap-10 lg:flex-row  ">
      <div className="flex-1 ">
        <h2 className="text-heading1">
          {data.title1}
        </h2>
        <p className="text-subtitle1 lg:pt-24 py-4">
          {data.title2}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:flex-row lg:flex-1 gap-10 lg:mt-4">
        <div className="flex-1 text-subtitle1">
          {data.desc1}
        </div>
        <div className="flex-1 text-subtitle1">
          {data.desc2}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
