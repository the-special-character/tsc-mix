import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { backicon } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const BackGrid2 = (props: Props) => {
  return (
    <section>
      <div className="grid md:grid-cols-4 gap-8  ">
        {backicon.map((x) => (
          <ServiceIcon key={x.title} data={x} />
        ))}
      </div>
      <div className="pt-10">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Build Custom back-end<span>Solution </span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BackGrid2;
