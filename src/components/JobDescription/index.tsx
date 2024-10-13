import React from "react";
import { JobData } from "@/lib/constData";
import { JobDataType } from "@/utils/types";
import { Button } from "../ui/button";
import Link from "next/link";
import { it } from "node:test";

type Props = {};

const JobDescription = ({ data }: JobDataType) => {
  return (
    <section className="bg-gray1 text-primary max-sm:py-16 md:px-20 ">
      <div className="md:p-20  p-6 bg-background ">
        <div className="flex flex-wrap justify-between max-lg:pb-5 pb-8">
          <div>
            <div className="text-subtitle3">{data.title}</div>
            <div className="text-subtitle2 ">{data.subtitle}</div>
          </div>
          <div className="max-lg:py-2">
            <Link href={"tech/company/how-we-work#TableDemo"}>
              <button className="underline underline-offset-2 text-blue  ">
                View Jobs
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="py-5 text-subtitle1">Overview:</div>
        <div className="text-subtitle2 xl:pr-96">{data.Overview}</div>
        <div className="py-8 text-subtitle1">Key Responsibilities:</div>
        {JobData.Jobdata.map((item) => (
          <ul key={item.id} className="xl:px-16 px-4 list-disc">
            <li className="text-primary py-5 font-medium lg:pr-56 ">
              <div>{item.title}</div>
              <div className="md:px-5">{item.description}</div>
            </li>
          </ul>
        ))}
        <div className="py-8 text-subtitle1">Who You Are:</div>
        {JobData.Jobdata1.map((item) => (
          <ul key={item.id} className="xl:px-16 px-4 list-disc">
            <li className="text-primary py-5 font-medium lg:pr-56 ">
              <div>{item.title}</div>
              <div className="md:px-5">{item.description}</div>
            </li>
          </ul>
        ))}
        <div className="py-5 text-subtitle1">{data.About}</div>
        <div className="text-subtitle2 italic xl:pr-96">{data.Overview1}</div>
        <div className="pt-10 ">
          You can explore more at{" "}
          <Link
            className=" text-blue"
            href={"https://thespecialcharacter.com/"}
          >
            thespecialcharacter.com
          </Link>
        </div>
        <div className="pt-3 ">
          Social Handle:{" "}
          <Link
            className=" text-blue"
            href={"https://www.linkedin.com/company/28764000/admin/feed/posts/"}
          >
            TheSpecialCharacter
          </Link>
        </div>

        <div className="pt-10">
          <Link href={`/company/career/${data.id}`}>
            <Button>Apply</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default JobDescription;
