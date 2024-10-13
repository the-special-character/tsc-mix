import { Button } from "@/components/ui/button";
import { listData1, listData2 } from "@/lib/constData";
import Link from "next/link";
import React from "react";

type Props = {};

const SaasService = () => {
  return (
    <section className="flex flex-col ">
      <div className="grid md:grid-cols-2 px-4">
        <div className="">
          {listData1.data.map((i) => {
            return (
              <ul key={i?.id} className="list-square text-subtitle1">
                <li className="font-bold text-blue">
                  <span className="text-primary">{i.title}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {listData2.data.map((i) => {
            return (
              <ul key={i?.id} className="list-square text-subtitle1">
                <li className="font-bold text-blue">
                  <span className="text-primary">{i.title}</span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="pt-10">
        <Link href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Request our saas development<span>services </span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SaasService;
