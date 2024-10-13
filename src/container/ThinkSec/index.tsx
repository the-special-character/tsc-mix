import Link from "next/link";
import React from "react";
import Arrow from "@/public/icons/angle-circle-arrow-right-icon.svg";
import Card from "@/components/ThinkCard";

type Props = {};

const ThinkSec = (props: Props) => {
  return (
    <section>
      <h2 className="text-heading1 my-10">Latest Thinking</h2>

      <Card />

      <div className="flex flex-wrap justify-between my-10 gap-y-9 text-subtitle1 text-background">
        <div className="flex items-center">
          <Link
            title="think cases"
            href={"/ourthinking"}
            className="pt-1 flex gap-x-2 items-center text-primary font-bold"
          >
            View all cases <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThinkSec;
