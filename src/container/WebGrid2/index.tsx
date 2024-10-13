import { Button } from "@/components/ui/button";
import { webSection } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";
import WebGrid from "@/components/WebGrid";

const WebGrid2 = ({ data }: ServiceIconType) => {
  return (
    <section className="flex flex-col gap-y-7">
      <div className=" md:pr-12 lg:pr-64 ">
        <p className="text-subtitle3">{data.texts}</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8  ">
        {webSection.data.map((x) => (
          <WebGrid key={x.description} data={x} />
        ))}
      </div>
      <div className="pt-3">
        <Link title="web-dev-needs" href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {data.button1} <span>{data?.button2}</span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WebGrid2;
