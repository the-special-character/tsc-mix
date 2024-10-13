import { CareerPage3dataType } from "@/utils/types";
import React from "react";

const CareerPage3 = ({ data }: CareerPage3dataType) => {
  return (
    <section className="font-bold">
      <div className="mb-4">
        <h3 className="text-4xl ">{data.title}</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6">
      </div>
    </section>
  );
};

export default CareerPage3;

