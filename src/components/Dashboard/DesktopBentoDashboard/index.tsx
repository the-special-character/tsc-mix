"use client";

import Image from "next/image";
import HiringImage from "@/public/images/blog1.webp";
import Serviceimage from "@/public/images/blog6.webp";
import Learnimage from "@/public/images/cloudBanner.webp";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Phone from "@/public/icons/phone.svg";

export default function DesktopBentoDashboard() {
  const cardData = [
    {
      image: HiringImage,
      alt: "Hiring",
      color: "bg-secondary4",
      href: "learn",
    },
    {
      image: Serviceimage,
      alt: "Services",
      color: "bg-secondary2",
      href: "tech",
    },
    {
      image: Learnimage,
      alt: "Learning",
      color: "bg-secondary3",
      href: "",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  return (
    <div className="flex flex-col h-screen px-container gap-4 md:gap-6 lg:gap-10 overflow-hidden">
      <header className="h-20 flex justify-between items-center">
        <TscLogo className="w-36 py-4 md:py-3 lg:py-2" />
        <a
          href={`/learn/contact`}
          className="max-md:hidden btn btn--primary btn--small"
        >
          Contact
        </a>
      </header>
      <main className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-32">
        <div className="max-w-5xl text-center mx-auto">
          <h1 className="uppercase m-0 line-clamp-2 font-sans">
            Next-gen enterprise Company
          </h1>
          <p className="text-gray-500 text-sm md:text-lg tracking-widest">
            Build your path to success with us.
          </p>
        </div>
        <div className="flex-1 pb-2 md:pb-3 lg:p-0">
          <div className="flex flex-wrap w-full h-full lg:pt-10 gap-2 md:gap-3 lg:gap-4">
            {cardData?.map((card, cardIndex) => (
              <a
                href={card.href}
                key={cardIndex}
                className={cn(
                  "flex-1 rounded-2xl lg:rounded-b-none bg-secondary3 basis-80 transition-transform duration-200 shadow-md lg:shadow-2xl z-15",
                  {
                    "lg:scale-y-150 lg:scale-x-[1.10] lg:translate-z-4":
                      hoveredIndex === cardIndex,
                    [card.color]: true,
                  }
                )}
                onMouseEnter={() => setHoveredIndex(cardIndex)}
                onMouseLeave={() => setHoveredIndex(1)}
              >
                {/* <div></div>
                <div>
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, nihil.
                  </p>
                </div> */}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
