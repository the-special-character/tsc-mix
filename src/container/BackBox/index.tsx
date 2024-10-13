import { Button } from "@/components/ui/button";
import { backbox } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const BackBox = () => {
  return (
    <section>
      <section className="bg-lightblue md:p-10 rounded-lg ">
        <ul className="list-square pl-7 grid lg:grid-cols-2  lg:px-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {backbox.map((i) => (
            <li key={i.id} className="text-lg mb-2 text-blue">
              <span className="font-bold text-xl text-primary">{i?.title}</span>{" "}
              <span className="text-primary">{i.discription}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="pt-10">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Talk to back-end <span>development experts</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BackBox;
