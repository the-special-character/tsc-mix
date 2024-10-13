import { Button } from "@/components/ui/button";
import { uiuxbox } from "@/lib/constData";
import Link from "next/link";
import React from "react";

const UiUxBox = () => {
  return (
    <section>
      <section className="bg-lightpink md:p-10 rounded-lg ">
        <ul className="list-square pl-7 grid lg:grid-cols-2  lg:px-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {uiuxbox.map((i) => (
            <li key={i.id} className="text-lg mb-2 ">
              <span className="font-bold text-xl">{i?.title}</span>{" "}
              {i.discription}
            </li>
          ))}
        </ul>
      </section>
      <div className=" pt-10 ">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Work with our UI/UX<span>design company</span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default UiUxBox;
