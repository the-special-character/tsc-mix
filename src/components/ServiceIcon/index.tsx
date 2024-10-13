import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/utils/types";

const ServiceIcon = ({ data }: ServiceItem) => {
  return (
    <div className="">
      <div className="lg:gap-5 ">
        <div className="flex flex-col gap-y-6 gap-2">
          <div className="">
            {data?.url ? (
              <Image
                title="service-images"
                src={data?.url}
                height={50}
                width={50}
                alt="image"
              />
            ) : (
              <></>
            )}
          </div>
          <div>
            <h3 className="font-bold text-heading5">{data.title}</h3>
          </div>
          <p className="text-subtitle2 text-primary md:pr-6 lg:pr-4">
            {data.description}{" "}
          </p>
          {data?.languages ? (
            <p className="lg:text-xl md:text-sm sm:text-sm font-extrabold md:pr-6 lg:pr-4 gap-3 ">
              {data.languages}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceIcon;
