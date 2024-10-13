import { Button } from "@/components/ui/button";
import { cloudBox2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const CloudGrid3 = () => {
  return (
    <section>
      <section className="bg-lightpink  md:p-10 rounded-lg flex flex-col gap-y-9">
        <div className="text-subtitle1 font-bold">
          Why work with The Special Char?
        </div>
        <div>
          <ul className="list-image-check pl-7 grid lg:grid-cols-2 lg:px-1 sm:gap-x-20 max-sm:gap-y-8 md:grid-cols-2">
            {cloudBox2.map((i) => (
              <li key={i.id} className="text-lg mb-2 ">
                <span className="font-bold text-xl">{i.title}</span>{" "}
                {i.discription}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="pt-10">
        <Link
          title="cloud-computing"
          href={"#Contact"}
        >
          <Button size={"lg"}>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Get started with{" "}
              <span>
                cloud computing
              </span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CloudGrid3;
