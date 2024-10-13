import WebGrid from "@/components/WebGrid";
import { Button } from "@/components/ui/button";
import { backicon2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const BackGrid3 = () => {
  return (
    <section>
      <div className="grid md:grid-cols-4 gap-8 ">
        {backicon2.map((x) => (
          <WebGrid key={x.id} data={x} />
        ))}
      </div>
      <div className="py-10">
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

export default BackGrid3;
