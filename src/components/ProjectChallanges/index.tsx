import { ProjectSectionType } from "@/utils/types";
import React from "react";

type Props = {};

const ProjectChallanges = ({ data }: ProjectSectionType) => {
  return (
    <>
      <section className="flex flex-col gap-y-10">
        <div>
          <h2 className="text-heading1">Challanges</h2>
        </div>
        <div className="text-subtitle1">{data.description2}</div>
      </section>
    </>
  );
};

export default ProjectChallanges;
