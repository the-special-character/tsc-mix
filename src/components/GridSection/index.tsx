import { gridsectiontype, uiSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const GridSection = ({ data }: gridsectiontype) => {
  return (
    <div key={data.id} className="border-b-2 border-b-blue">
      <h3 className="text-heading5">{data?.title1}</h3>
      <p className=" sm:text-xl max-md:py-4 lg:py-5 py-10 text-primary">
        {data.description}
      </p>
    </div>
  );
};

export default GridSection;
