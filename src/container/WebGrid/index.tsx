import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { webicon } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const WebGrid = ({ data }: ServiceIconType) => {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="">
        <h2 className="text-heading3 md:text-heading1 ">{data.heading}</h2>
      </div>
      <div className="md:pr-12 lg:pr-64 ">
        <p className=" text-subtitle2 md:text-subtitle3">{data.texts}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8  ">
        {webicon.data.map((x) => (
          <ServiceIcon key={x.url} data={x} />
        ))}
      </div>
      <div>
        <Link className="" href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {data.button1} <span>{data.button2}</span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WebGrid;
