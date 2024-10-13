import { Button } from "@/components/ui/button";
import { serviceBox1 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const SaasBox = () => {
  return (
    <>
      <section>
        <section className="bg-lightblue lg:rounded-lg md:p-10">
          <div>
            <ul className="list-square pl-4 grid lg:grid-cols-2  gap-x-8 gap-y-8 md:grid-cols-2">
              {serviceBox1.map((i) => (
                <li key={i.id} className="text-lg mb-2 text-blue">
                  <span className="font-bold text-xl text-primary">
                    {i?.title}
                  </span>{" "}
                  <span className="text-primary text-subtitle2">
                    {i.discription}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="pt-10">
          <Link href={"#Contact"}>
            <Button>
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Lets Discuss Our{" "}
                <span>
                  partnership
                </span>
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SaasBox;
