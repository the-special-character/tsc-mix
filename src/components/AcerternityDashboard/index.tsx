import React from "react";
import { Compare } from "../ui/compare";

type Props = {};

const AcerternityDashboard = (props: Props) => {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://cdn.builder.io/api/v1/image/assets%2Fdbf92adf2ef043c7957411ad39146bdb%2Fcabc18f0af0348b1aa698fcd76e3bb7d"
        secondImage="https://cdn.builder.io/api/v1/image/assets%2Fdbf92adf2ef043c7957411ad39146bdb%2F75bfe2e518154259994120f1ee5926fb"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-dvh md:w-full"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
};

export default AcerternityDashboard;
