import React from "react";
import Image from "next/image";
import { ColllabrateCardType } from "@/utils/types";

const CollabrateCard = ({ data }: ColllabrateCardType) => {
  return (
    <div>
      <div className="lg:flex-row flex justify-start flex-col lg:gap-8 m-4 md:gap-3 text-background ">
        <div className="md:justify-center flex-1/2 items-center">
          <Image
            src={data.url}
            alt="collaborate Image"
            title="collabCards"
            height={150}
            width={150}
          />
        </div>
        <div className="mt-4 md:mt-0 mb-1 flex-1  ">
          <h3 className="text-heading6">{data.title}</h3>
          <div className="mt-1.5 text-subtitle2  text-offwhite">
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollabrateCard;
