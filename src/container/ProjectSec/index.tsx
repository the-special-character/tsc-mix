import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/angle-circle-arrow-right-icon.svg";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

type Props = {};

const ProjectSec = (props: Props) => {
  return (
    <section>
      <h2 className="text-heading1 my-10">Latest Project</h2>

      <ProjectCard />

      <div className="flex flex-wrap justify-between my-10 gap-y-9 text-subtitle1 text-background">
        <div className="flex items-center">
          <Link
            title="View Projects"
            href={"/casestudies"}
            className="pt-1 flex gap-x-2 items-center text-primary font-bold md:justify-start justify-center"
          >
            View all cases <Arrow />
          </Link>
        </div>
        <div className="grid ">
          <Link
            title="inovation journey"
            className="flex md:justify-start justify-center"
            href={"#Contact"}
          >
            <Button variant="default" className=" py-7 text-subtitle2">
              Start your innovation journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;
