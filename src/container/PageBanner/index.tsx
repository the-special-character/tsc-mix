import { cn } from "@/lib/utils";
import { pageBannerType } from "@/utils/types";
import React from "react";

const PageBanner = ({
  data,
  className,
  text,
}: {
  data: pageBannerType;
  className?: string;
  text?: string;
}) => {
  return (
    <section
      className={cn(
        "h-[75vh] py-40 flex bg-specialblue flex-wrap items-center",
        {
          [`${className}`]: className,
        }
      )}
    >
      <div className="text-background  pl-8 pt-12">
        <h1 className="text-heading1 w-[75vw] font-extrabold mb-4 md:mb-12 ">
          {data.title1}
        </h1>
        <h2
          className={cn("text-subtitle3", {
            [`${text}`]: text,
          })}
        >
          {data?.title2}
        </h2>
      </div>
    </section>
  );
};

export default PageBanner;
