import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { edSection2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EdGrid3 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 gap-8">
          {edSection2.map((x) => (
            <ServiceIcon key={x.title} data={x} />
          ))}
        </div>
        <div className="pt-10">
          <Link title="Get your eductional app" href={"#Contact"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Get your <span>educational app </span>

              </span>
            </Button>
          </Link>
        </div>

      </section>
    </>
  );
};

export default EdGrid3;
