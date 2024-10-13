"use client";
import { howmodel } from "@/lib/constData";
import { HowModelType } from "@/utils/types";
import React, { SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import Arrow from "@/public/icons/arrow_forward.svg";
import Link from "next/link";

const HowModel = ({ data }: HowModelType) => {
  const [show, setShow] = useState(0);

  const Show = (i: React.SetStateAction<number>) => {
    // if (show == true) {
    //   setShow(false)
    // }
    // else {
    //   setShow(true)
    // }
    setShow(i);
  };
  return (
    <section className="pt-8 flex flex-col ">
      <div className=" mb-8">
        <h2 className="text-heading1">{data.heading}</h2>
      </div>

      <div className=" mb-8 lg:pr-72 md: pr-12 ">
        <p className="text-subtitle1 flex-1 text-primary">{data.par}</p>
      </div>
      <hr className="border-gray " />
      <hr className="border-gray " />
      <div>
        {howmodel.section.map((item, index) => {
          return (
            <div key={item.id} className="border-b-2 border-gray">
              <div className=" py-8 flex flex-col md:flex-row ">
                <div className="flex-1">
                  <h3 className=" text-heading5  mb-2">{item.title}</h3>
                </div>
                <div className="flex-1 md:flex-grow ">
                  <p className="text-subtitle2 text-primary ">{item.desc}</p>
                  <div className="-pl-2">
                    <Button
                      className="rounded-full my-4"
                      onClick={(e) => Show(index + 1)}
                    >
                      show more
                    </Button>
                    <div></div>
                  </div>
                </div>
              </div>
              {index + 1 === show && (
                <ul className="grid text-subtitle2 grid-cols-3 max-sm:grid-cols-1 gap-8 list-square max-lg:px-4">
                  {item.list.map((x, index) => (
                    <li key={index}>{x.content} </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <div className="pt-10">
        <Link title="Contact Us" href={"#Contact"}>
          <Button>
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              Contact Us
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HowModel;
