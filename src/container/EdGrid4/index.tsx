import ServiceIcon from "@/components/ServiceIcon";
import { Button } from "@/components/ui/button";
import { edSection2 } from "@/lib/constData";
import React from "react";

type Props = {};

const EdGrid4 = (props: Props) => {
  return (
    <>
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {edSection2.map((x) => (
            <ServiceIcon key={x.title} data={x} />
          ))}
        </div>
        <div className="py-10">
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              GEt your custom eLearning <span>solution </span>
              <span>&rarr;</span>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default EdGrid4;
