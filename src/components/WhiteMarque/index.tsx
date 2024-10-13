"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { MarqueData2 } from "@/lib/constData";
import { cn } from "@/lib/utils";


const Marque = ({
  className,
}: {
  className?: string;
}) => (
  <div
    className={cn("h-72 flex items-center bg-primary", {
      [`${className}`]: className,
    })}
  >
    <Marquee speed={100}>
      <div className="flex gap-x-[7.5rem]">
        {MarqueData2.map((x) => (
          <div key={x.id}>
            <Image
              src={x.src}
              alt="image"
              title="our-cliets-images"
              height={70}
              width={70}
              className="object-cover"
            />

          </div>
        ))}
      </div>
    </Marquee>
  </div>
);

export default Marque;
