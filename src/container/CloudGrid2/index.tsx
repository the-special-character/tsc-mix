import { Button } from "@/components/ui/button";
import { cloudgrid } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const CloudGrid2 = () => {
  return (
    <>
      <section>
        {cloudgrid.data.map((i) => {
          return (
            <div
              key={i.id}
              className="flex max-sm:flex-col gap-5 justify-between my-10 pb-10 border-b-2 border-b-gray-200"
            >
              <div className="text-heading6 flex flex-nowrap  max-lg:w-60">
                {i.title}
              </div>
              <div className="text-primary md:text-subtitle1 lg:w-[40rem] md:w-[30rem]">
                {i.description}
              </div>
            </div>
          );
        })}
        <div className="py-4">
          <Link title="cloud-experts" href={"#Contact"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Talk to <span>cloud expert </span>

              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CloudGrid2;
