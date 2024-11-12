"use client";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LearnPerk from "@/public/icons/perks1.svg";
import HiringPerk from "@/public/icons/perks.svg";
import TechPerk from "@/public/icons/perks2.svg";
import React from "react";
import Image from "next/image";
import BiAnimatedWords from "@/components/builder-io/BiAnimatedWords";
import AnimatedWords from "@/components/AnimatedWords";
import StackCards from "../StackCards";

export default function DesktopBentoDashboard() {
  const cardData = [
    {
      image: LearnPerk,
      alt: "Learning",
      color: "bg-secondary3",
      href: "learn",
      title: "Learning",
    },
    {
      image: TechPerk,
      alt: "Services",
      color: "bg-secondary2",
      href: "tech",
      title: "Services",
    },
    {
      image: HiringPerk,
      alt: "Hiring",
      color: "bg-secondary4",
      href: "/tech/hiring",
      title: "Hiring",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const animatedWords = [
    "Next-gen enterprise",
    "Educational technology",
    "Hiring open in",
  ];

  return (
    <div className="flex flex-col h-screen px-container gap-4 md:gap-6 lg:gap-10 sm:overflow-hidden">
      <header className="h-20 px-0 flex justify-between items-center">
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
        <div className="hidden sm:block flex-1 pb-2 md:pb-3 lg:p-0">
          <div className="flex flex-wrap w-full h-full lg:pt-12 gap-2 md:gap-3 lg:gap-4">
            {cardData?.map((card, cardIndex) => (
              <a
                href={card.href}
                key={cardIndex}
                className={cn(
                  "flex-1 rounded-2xl lg:rounded-b-none bg-secondary3 basis-80 transition-all duration-300 ease-in-out shadow-md lg:shadow-2xl z-15 relative flex flex-col items-center justify-center",
                  {
                    "lg:scale-y-[1.40] lg:scale-x-[1.10] lg:translate-z-4 z-20":
                      hoveredIndex === cardIndex,
                    "z-10": hoveredIndex !== cardIndex,
                    [card.color]: true,
                  }
                )}
                onMouseEnter={() => setHoveredIndex(cardIndex)}
                onMouseLeave={() => setHoveredIndex(1)}
              >
                {React.createElement(card.image, {
                  className: cn(
                    "max-lg:hidden absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out",
                    hoveredIndex === cardIndex
                      ? "top-[35%] -translate-y-1/2 scale-100"
                      : "-top-12 scale-125"
                  ),
                })}
                <h2 className="absolute lg:bottom-10 transition-all duration-300 m-0 text-heading3">
                  {card.title}
                </h2>
              </a>
            ))}
          </div>
        </div>
        <div className="sm:hidden">
          <StackCards />
        </div>
      </main>
    </div>
  );
}
