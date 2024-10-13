import { BgBannerType } from "@/utils/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

type Props = {
  image: string | StaticImport;
  title1: { title: string; titleColor?: string };
  title2: { subtitle: string; subtitleColor?: string };
};

const BiImageBanner = ({ image, title1, title2 }: Props) => {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="my-12 md:my-36">
        <div className="text-background">
          <h2 className="text-heading1 font-extrabold md:text-5xl lg:text-6xl max-sm:text-3xl">
            <span style={{ color: title1?.titleColor }}>{title1?.title}</span>{" "}
            <br />
            <span
              style={{ color: title2?.subtitleColor && title2?.subtitleColor }}
            >
              {title2?.subtitle}
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default BiImageBanner;
