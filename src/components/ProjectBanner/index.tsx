import { backendData } from "@/lib/constData";
import { ProjectSectionType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const ProjectBanner = ({ data }:ProjectSectionType) => {
  return (
    <div>
      <section className="h-screen md:h-[50vh] lg:h-[55vh] bg-yellow flex flex-col justify-center gap-y-10">
        <div>
          <button>
            <Link href={"/casestudies"}>
              <span className="flex gap-x-[0.22rem]">
                <span className="text-blue text-subtitle3 font-bold">
                  &larr;
                </span>
                <span className="text-subtitle3">All Projects</span>
              </span>
            </Link>
          </button>
        </div>
        <h1 className="w-full text-primary text-heading1">
          {data.description1}
        </h1>
      </section>
      <section className="h-screen md:h-[50vh] bg-primary text-background grid grid-cols-1 md:grid-cols-2 text-xl gap-x-10">
        {backendData.section1.map((item) => {
          return (
            <>
              <div key={item.id}>
                <h2 className="text-heading6">{item.title}</h2>
                <p className="text-subtitle2">{item.description}</p>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default ProjectBanner;
