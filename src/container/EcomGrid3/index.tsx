import { Button } from "@/components/ui/button";
import { Eco1 } from "@/lib/constData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const EcomGrid3 = (props: Props) => {
  return (
    <>
      <section className="grid md:grid-cols-2 max-md:grid-cols-1 gap-10 xl:px-container px-3  ">
        {Eco1.section3.map((item) => (
          <h3 key={item.id} className="flex gap-2 sm:gap-5 ">
            <Image title="ecommerce-svg" src={item.url} alt="ecom-project-svg" height={50} width={50} />
            <div className="text-heading5 pt-2 ">{item.title}</div>
          </h3>
        ))}
        <div className="pt-5">
          <Link
            className="pt-10"
            title="Discuss your Ecommerce development project"
            href={"#Contact"}
          >
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Discuss your Ecommerce <span> development project </span>

              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default EcomGrid3;
