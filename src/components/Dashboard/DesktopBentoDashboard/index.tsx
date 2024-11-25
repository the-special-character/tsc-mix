"use client";
import React, { useCallback, useState, useEffect, useRef } from "react";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import { cn } from "@/lib/utils";
import StackCards from "../StackCards";
import ScrollDownSvg from "@/public/icons/scroll-down.svg";
import LearnImage from "@/public/icons/heroEducation.svg";
import TechImage from "@/public/icons/heroDeveloper.svg";
import HiringImage from "@/public/icons/heroWhiteLabelResourse.svg";
import CursorTooltip from "../CursorTooltip";
import Image from "next/image";
import ScrollDown from "@/public/images/scrollDown.gif";

export default function DesktopBentoDashboard() {
  const cardData = [
    {
      alt: "Learning",
      color: "bg-secondary4",
      href: "/learn",
      title: "Learning",
      description:
        "Master IT skills with live projects, expert training, and guaranteed 100% placement success.",
      icon: LearnImage,
    },
    {
      alt: "Services",
      color: "bg-secondary2",
      href: "/tech",
      title: "Services",
      description:
        "Delivering expert IT solutions, services, and innovation for business success.",
      icon: TechImage,
    },
    {
      alt: "Hiring",
      color: "bg-secondary3",
      href: "/tech/hiring",
      title: "Hiring",
      description:
        "Join our team and build a rewarding career in innovative IT solutions.",
      icon: HiringImage,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const stackCardsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  }, []);

  useEffect(() => {
    if (stackCardsRef.current) {
      stackCardsRef.current.scrollTop = stackCardsRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="h-dvh flex flex-col px-container overflow-hidden">
      <div className="h-[40dvh] md:h-full sticky top-0 z-20 flex flex-col gap-4 md:gap-6 lg:gap-8 ">
        <header className="h-16 sm:h-20 px-0 flex justify-between items-center">
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
            <p className="text-gray-500 text-sm md:text-lg tracking-widest line-clamp-3">
              Explore our IT services, career opportunities, and comprehensive
              learning resources designed to help you enhance your skills and
              advance your career.
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
                  <div
                    className={cn(
                      "max-lg:hidden absolute flex flex-col gap-2 items-center transition-all duration-300 ease-in-out",
                      hoveredIndex === cardIndex &&
                        "lg:scale-y-[0.71] lg:scale-x-[0.91]"
                    )}
                  >
                    {React.createElement(card.icon, {
                      className:
                        "max-lg:hidden  transition-all duration-300 ease-in-out",
                    })}
                    <h2 className="m-0 text-heading3 font-sans">
                      {card.title}
                    </h2>
                  </div>
                  <div className="absolute p-2 transition-all duration-300 ease-in-out flex flex-col gap-2 items-center justify-center flex-wrap max-md:hidden lg:hidden h-full w-full">
                    {React.createElement(card.icon, { className: "w-28" })}
                    <div className="max-w-[70%] self-start">
                      <h2 className="m-0 font-sans text-heading3">
                        {card.title}
                      </h2>
                      <p className="line-clamp-3 text-body2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          {showTooltip && hoveredIndex !== null && (
            <CursorTooltip
              tooltipPosition={tooltipPosition}
              data={cardData}
              hoveredIndex={hoveredIndex}
            />
          )}
        </main>
      </div>
      <div
        ref={stackCardsRef}
        className="md:hidden h-[calc(100dvh-35dvh)] overflow-y-auto no-scrollbar snap-y snap-mandatory snap-always snap-center"
      >
        <StackCards />
      </div>

      <div
        className={`md:hidden flex gap-2 justify-center items-center font-semibold py-2 text-primary tracking-widest fixed bottom-2 left-0 w-full -z-10 animate-bounce`}
      >
        <ScrollDownSvg className="w-4 h-4" />
        <p className="text-body1 ">Pull to reveal services</p>
      </div>
    </div>
  );
}
