import { Button } from "@/components/ui/button";
import { edBox, edBox2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const EdList = () => {
  return (
    <section>
      <section className="bg-lightpink  md:p-10 rounded-lg flex flex-col gap-y-9">
        <div>
          <ul className="list-square pl-7 grid lg:grid-cols-2 lg:px-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {edBox2.map((i) => (
              <li key={i.id} className="text-lg mb-2 ">
                <span className="font-bold text-xl">{i.title}</span>{" "}
                {i.discription}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className=" pt-10 ">
        <Link title="Get your custom elearning solution" href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Get your custom <span>elearning solution</span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EdList;
