"use client";
import React from "react";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import { useCallback, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import LearnPerk from "@/public/icons/perks1.svg";
import HiringPerk from "@/public/icons/perks.svg";
import TechPerk from "@/public/icons/perks3.svg";
import StackCards from "../StackCards";
import ScrollDown from "@/public/icons/scroll-down.svg";

export default function DesktopBentoDashboard() {
  const cardData = [
    {
      image: LearnPerk,
      alt: "Learning",
      color: "bg-secondary4",
      href: "/learn",
      title: "Learning",
    },
    {
      image: TechPerk,
      alt: "Services",
      color: "bg-secondary2",
      href: "/tech",
      title: "Services",
    },
    {
      image: HiringPerk,
      alt: "Hiring",
      color: "bg-secondary3",
      href: "/tech/hiring",
      title: "Hiring",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-dvh flex flex-col px-container overflow-hidden">
      <div className="h-[50dvh] md:h-full sticky top-0 z-20 flex flex-col gap-4 md:gap-6 lg:gap-8 ">
        <header className="h-20 px-0 flex justify-between items-center">
          <TscLogo className="w-36 sm:w-44 py-2 md:py-3 lg:py-2" />
          <a
            href={`/learn/contact`}
            className="max-md:hidden btn btn--primary btn--small"
          >
            Contact
          </a>
        </header>
        <main className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-24">
          <div className="max-md:flex-1 max-w-5xl text-center mx-auto flex flex-col gap-2 items-center ">
            <h1 className="uppercase m-0 line-clamp-2 font-sans">
              Next-gen enterprise Company
            </h1>
            <p className="text-gray-500 text-sm md:text-lg tracking-widest line-clamp-4">
              Build your path to success with us. Build your path to success
              withBuild your path to success with us.Build your path to success
            </p>
          </div>
          <div className="hidden md:block flex-1 pb-2 md:pb-3 lg:p-0">
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
                  onMouseEnter={() => {
                    setHoveredIndex(cardIndex);
                    setShowTooltip(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(1);
                    setShowTooltip(false);
                  }}
                  onMouseMove={handleMouseMove}
                >
                  {React.createElement(card.image, {
                    className: cn(
                      "max-lg:hidden absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out",
                      hoveredIndex === cardIndex
                        ? "top-[35%] -translate-y-1/2 scale-100"
                        : "-top-12 scale-125"
                    ),
                  })}
                  <h2 className="absolute lg:bottom-10 transition-all duration-300 ease-in-out m-0 text-heading3">
                    {card.title}
                  </h2>
                </a>
              ))}
            </div>
          </div>
          {showTooltip && hoveredIndex !== null && (
            <div
              className="fixed pointer-events-none px-4 py-2 rounded-full text-sm backdrop-blur-lg bg-black/50 text-white shadow-lg shadow-black/10 border border-white/50 tracking-wider"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
                transform: "translate(-10%, 10%)",
                zIndex: 50,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {cardData[hoveredIndex].title}
              </div>
            </div>
          )}
        </main>
      </div>
      <div className="md:hidden h-[calc(100dvh-50dvh)]  overflow-y-auto no-scrollbar snap-y snap-mandatory">
        <StackCards />
      </div>

      <div
        className={`sm:hidden text-center py-2 text-primary tracking-widest transition-opacity duration-500 fixed bottom-0 left-0 w-full ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center">
          <ScrollDown className="w-5 h-5 animate-bounce" />
          Scroll to reveal services
        </div>
      </div>
    </div>
  );
}
