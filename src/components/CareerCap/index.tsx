import { careercap } from "@/lib/constData";
import { CareerCapType } from "@/utils/types";
import React from "react";
import Image from "next/image";

const CareerCap = ({ data }: CareerCapType) => {
  return (
    <section className="">
      <div>
        <h2 className="text-heading1 lg:pl-2 gap-4">
          {data.title}
        </h2>
      </div>
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:grid-cols-1 justify-between lg:mt-10   ">
          {careercap.section.map((item) => (
            <div key={item.id} className="flex  flex-col ">
              <div className="justify-center py-4">
                <Image
                  src={item.url}
                  title="capability-svg"
                  height={40}
                  width={40}
                  alt="image"
                />
              </div>
              <div className="flex ">
                <p className="text-subtitle3 justify-evenly lg:py-2 py-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCap;
