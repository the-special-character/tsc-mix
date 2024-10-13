import React from "react";
import Image from "next/image";
import { aboutBannerType } from "@/utils/types";

const AboutBanner = ({ data }: aboutBannerType) => {
  return (
    <main className="bg-yellow relative overflow-hidden h-screen  -z-10">
      <Image
        src={data.url}
        alt="image"
        title="about-banner"
        height={800}
        width={800}
        className="object-fit absolute right-0 sm:right-12 md:right-24 lg:right-24 -top-0 sm:-top-12 md:-top-24 lg:-top-48 -z-10"
      />

      <section className="flex items-center  md:h-screen max-md:h-[calc(100vh-70px)]">
        <div className=" z-10  md:z-30 lg:z-40  flex flex-col gap-y-9">
          <h1 className="flex flex-col  text-heading1 text-primary">
            <span>{data.title}</span><span>{data.title2}</span>
          </h1>
          <h2 className=" text-subtitle3   text-primary mt-8 ">
            {data.description}
            <br />
            {data.subdescription}
          </h2>
        </div>
      </section>
    </main>
  );
};

export default AboutBanner;
