import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { serviceicon } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const Service = ({ data }: ServiceIconType) => {
  return (
    <section className="flex flex-col gap-y-4 py-10">
      <div>
        <h2 className="text-heading2 ">{data.heading}</h2>
      </div>
      <div className="py-2 md:pr-12 lg:pr-64  ">
        <p className="text-subtitle1">{data.texts}</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8  ">
        {serviceicon.data.map((x) => (
          <ServiceIcon key={x.url} data={x} />
        ))}
      </div>
      <div className="max-md:grid max-md:w-full pb-10 pt-4">
        <Link href={"#Contact"}>
          <Button variant="default" size="lg" className=" py-7 text-base ">
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Discuss your software <span>engineering needs</span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Service;
