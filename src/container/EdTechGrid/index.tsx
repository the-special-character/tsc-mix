import GridSection from "@/components/GridSection";
import { Button } from "@/components/ui/button";
import { edSection } from "@/lib/constData";
import { uiSectionType } from "@/utils/types";
import Link from "next/link";
import React from "react";

type Props = {};

const EdTechGrid = ({ data }: uiSectionType) => {
  return (
    <>
      <section>
        <div className="flex flex-wrap lg:w-[75%]">
          <h2 className="text-heading3">{data?.title}</h2>
          <div className="  text-subtitle3 py-10 ">
            {data?.text}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {edSection.section.map((item) => (
            <GridSection key={item.id} data={item} />
          ))}
        </div>
        <div className="pt-10">
          <Link
            title="Otp for custom eLearning development"
            href={"#Contact"}
          >
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Otp for custom eLearning <span>development </span>

              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EdTechGrid;
