import { CollaboratorCard } from "@/lib/constData";
import React from "react";
import CollabrateCard from "@/components/CollabrateCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Collabrate = () => {
  return (
    <section className="bg-specialblue text-background gap-y-10">
      <div className=" py-10  ">
        <h2 className=" font-extrabold text-heading1 max-sm:text-center">
          How we collaborate with you
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
        {CollaboratorCard.map((x) => (
          <CollabrateCard key={x.title} data={x} />
        ))}
      </div>
      <div className="py-10">
        <Link
          title="Collabe"
          className=" max-sm:grid overflow-hidden "
          href={"#Contact"}
        >
          <Button variant={"default"}>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Lets Collaborate
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Collabrate;
