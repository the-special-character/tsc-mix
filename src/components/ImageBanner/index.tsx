import { BgBannerType } from "@/utils/types";
import React from "react";

const ImageBanner = ({ data }: BgBannerType) => {
  return (
    <section
      className="h-full w-full"
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" my-12 md:my-36">
        <div className="text-background  ">
          <h2 className="text-heading1 font-extrabold md:text-5xl lg:text-6xl max-sm:text-3xl">
            {data.title1} <br />
            <span className="text-yellow"><p>{data.title2}</p></span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
