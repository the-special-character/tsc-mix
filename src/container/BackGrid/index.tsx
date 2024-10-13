import { backSection } from "@/lib/constData";
import { SaasSectionType } from "@/utils/types";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WebGrid from "@/components/WebGrid";

type Props = {};

const BackGrid = ({ data }: SaasSectionType) => {
  return (
    <section>
      <div className="flex flex-wrap lg:w-[75%]">
        <h2 className="text-heading2">{data?.title}</h2>
        <div className="text-subtitle3 py-10 ">
          {data?.description}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10">
        {backSection.section.map((item) => (
          <WebGrid key={item.title} data={item} />
        ))}
      </div>
      <div className="pt-10">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Tell us your saas software <span>development needs</span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BackGrid;
