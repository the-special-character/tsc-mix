import { aboutlinks } from "@/lib/constData";
import { aboutlinksType } from "@/utils/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const AboutLinks = ({ data }: aboutlinksType) => {
  return (
    <section className="">
      <h2 className="pb-5 flex justify-start w-auto text-heading1">
        {data.title1}
      </h2>
      <div className=" ">
        {aboutlinks.data.map((item) => (
          <h3
            className="flex md:py-2 gap-3 text-heading6 text-primary  "
            key={item.id}
          >
            <Link href={item.link} className="hover:text-blue">{item.title}</Link>
            <Image
              src={item.image}
              className="max-md:h-9 max-md:w-10"
              height={50}
              alt="about-links"
              width={50}
              title="about-page-link"
            />
          </h3>
        ))}
      </div>
    </section>
  );
};
export default AboutLinks;
