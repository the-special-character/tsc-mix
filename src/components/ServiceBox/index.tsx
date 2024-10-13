import { serviceBox } from "@/lib/constData";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ServiceBox = () => {
  return (
    <section>
      <div className="bg-lightblue border-r-2  lg:px-24 lg: py-20  max-md:p-4 rounded-lg ">
        <ul className="list-square pl-7 grid lg:grid-cols-2 lg:px-1 gap-4 md:grid-cols-2">
          {serviceBox.map((i) => (
            <li key={i.id} className="text-lg mb-2 ">
              <span className="font-bold text-xl">{i.title}</span>{" "}
              {i.discription}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-10 pb-2">
        <Link href={"#Contact"}>
        <Button>
          <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
            Lets Discuss Our <span>partnership</span>
          </span>
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServiceBox;
