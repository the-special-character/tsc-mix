import { Button } from "@/components/ui/button";
import { webSection3 } from "@/lib/constData";
import { ServiceIconType } from "@/utils/types";
import Link from "next/link";
import React from "react";
import WebGrid from "@/components/WebGrid";

const WebGrid2 = ({ data }: ServiceIconType) => {
  return (
    <section className="flex flex-col ">
      <div className="grid md:grid-cols-3 gap-8  ">
        {webSection3.data.map((x) => (
          <WebGrid key={x.description} data={x} />
        ))}
      </div>
      <div className="pt-10 pb-2">
        <Link title="links" href={"#Contact"}>
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
