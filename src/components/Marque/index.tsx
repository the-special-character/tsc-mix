"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { MarqueData } from "@/lib/constData";
import { cn } from "@/lib/utils";

const Marque = ({ className }: { className?: string }) => (
  <div
    className={cn("py-20 flex items-center bg-specialblue", {
      [`${className}`]: className,
    })}
  >
    <Marquee speed={100}>
      <div className="flex gap-x-[7.5rem]">
        {MarqueData.map((x) => (
          <div key={x.id}>
            <Image
              src={x.src}
              alt="clients"
              title="marqueeLinks"
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
