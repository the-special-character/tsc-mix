import SaasSec from "@/components/SaasSec";
import { Button } from "@/components/ui/button";
import { saasSection2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const SaasGrid = (props: Props) => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
        {saasSection2.map((item) => (
          <SaasSec key={item.id} data={item} />
        ))}
      </div>
      <div className="pt-10">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Talk to our <span>Saas experts</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SaasGrid;
