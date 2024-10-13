import { CareerManyType } from "@/utils/types";
import React from "react";

type Props = {};

const CareerMany = ({ data }: CareerManyType) => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-heading1">
          {data.title}
        </h2>
      </div>
      <div className="lg:py-10 p-4">
        <p className=" text-subtitle1 text-center">
          {data.desc}
        </p>
        <p className="text-subtitle1 text-center">
          {data.desc1}
        </p>
        <p className=" text-subtitle1 text-center">
          {data.desc2}
        </p>
      </div>
    </section>
  );
};

export default CareerMany;
