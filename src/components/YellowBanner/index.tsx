import { BgYellowType } from "@/utils/types";
import React from "react";

function YellowBanner({ data }: BgYellowType) {
  return (
    <section className="bg-yellow ">
      <div className="w-full py-6">
        <p className="text-subtitle3 md:max-w-[840px] w-full  ">
          {data.description}
        </p>
      </div>
    </section>
  );
}

export default YellowBanner;
