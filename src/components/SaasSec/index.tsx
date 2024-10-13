import { ListSaasSectionType } from "@/utils/types";
import React from "react";

const SaasGrid = ({ data }: ListSaasSectionType) => {
  return (
    <>
      <div className="">
        <div className="text-heading5">
          {data?.id}
          {data.title}
        </div>
        <div className="text-subtitle2 max-md:text-lg pt-6  text-primary">
          {data.description}
        </div>
      </div>
    </>
  );
};

export default SaasGrid;
