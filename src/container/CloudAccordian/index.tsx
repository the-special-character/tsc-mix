import CloudAccord from "@/components/CloudAccord";
import { Button } from "@/components/ui/button";
import { cloudAccordiandata } from "@/lib/constData";
import { CloudAccordiandataType } from "@/utils/types";
import Link from "next/link";
import React from "react";


const CloudAccordian = ({ data }: CloudAccordiandataType) => {
  return (
    <section className="flex flex-col gap-y-16">
      <div className="lg:w-[60vw] flex flex-col gap-y-10">
        <h2 className="text-heading2 font-bold ">
          {data.title}
        </h2>
        <p className="text-subtitle3">
          {data.description}
        </p>
      </div>
      <div>
        <CloudAccord data={cloudAccordiandata} />
      </div>
      <div>
        <Link title="cloud-late-talk" href={"#Contact"}>
          <Button variant="default" size="sm" className=" py-7 text-base ">
            Lets Talk
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CloudAccordian;
