import Image from "next/image";
import React from "react";
import Rpa from "@/public/images/projectsection.webp";
import { cn } from "@/lib/utils";
import { backendData } from "@/lib/constData";
import { ProjectSectionType2 } from "@/utils/types";

const CaseBanner = ({
  data,
  className,
  order,
}: {
  data: ProjectSectionType2;
  className?: string;
  order?: string;
}) => {
  return (
    <div
      className={cn(
        " max-md:flex max-md:flex-col lg:grid lg:grid-cols-2 bg-second  h-full w-full  ",
        {
          [`${className}`]: className,
        }
      )}
    >
      <div
        className={cn("lg:order-2 ", {
          [`${order}`]: order,
        })}
      >
        <Image
          src={Rpa}
          alt="Rpa"
          title="Rpa"
          height={1000}
          width={1000}
          className=" sticky top-0 "
          sizes=""
        />
      </div>
      <div className="lg:order-1 lg:px-36 md:py-10 max-lg:p-10">
        <div>
          <h2 className="text-heading1 py-10">Solution</h2>
        </div>

        {backendData.dataCase.map((x, index) => (
          <div key={index}>
            <div>
              {x.description.map((y, subindex) => (
                <ul
                  key={subindex}
                  className="list-disc text-subtitle3 leading-10"
                >
                  <li>{y.title}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseBanner;
