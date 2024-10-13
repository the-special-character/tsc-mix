import { Button } from "@/components/ui/button";
import { cloudBox } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const CloudGrid = () => {
  return (
    <section>
      <div className="">
        <div className="bg-lightblue   rounded-lg p-10 ">
          <ul className="list-square  grid lg:grid-cols-2 lg:px-1 sm:gap-x-10 sm:gap-y-8 md:grid-cols-2">
            {cloudBox.map((i) => (
              <li key={i.id} className="text-lg mb-2 text-blue">
                <span className="font-bold text-xl text-primary">{i.title}</span>{" "}
                <span className="text-primary">{i.discription}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className=" max-md:grid pt-10">
          <Link title="cloud-project" href={"#Contact"}>
            <Button className="py-3">
              <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                Discuss my cloud <span>project</span>

              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CloudGrid;
