import { serviceicon2 } from "@/lib/constData";
import React from "react";
import ServiceIcon from "../ServiceIcon";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const ServiceIcon2 = (props: Props) => {
  return (
    <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 md:grid-cols-3 pt-10 pb-5">
      {serviceicon2.data.map((x) => (
        <ServiceIcon key={x.title} data={x} />
      ))}
      <div className="grid w-full pb-10 pt-4">
        <Link href={"#Contact"}>
          <Button variant="default" size="lg" className=" py-7 text-base ">
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Get return on tech <span>investments</span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServiceIcon2;
