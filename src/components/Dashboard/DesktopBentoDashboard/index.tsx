"use client";

import Image from "next/image";
import HiringImage from "@/public/images/blog1.webp";
import Serviceimage from "@/public/images/blog6.webp";
import Learnimage from "@/public/images/cloudBanner.webp";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import { useState } from "react";

export default function DesktopBentoDashboard() {
  const [hoveredCard, setHoveredCard] = useState(1);

  const cardData = [
    { image: HiringImage, alt: "Hiring" },
    { image: Serviceimage, alt: "Services" },
    { image: Learnimage, alt: "Learning" },
  ];

  return (
    <div className="h-dvh flex flex-col gap-4 px-container sm:overflow-hidden">
      <div className="w-full flex items-center justify-center h-16 sm:h-20 pt-4">
        <TscLogo className="w-44 sm:w-56" />
      </div>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center gap-4 sm:gap-20">
        {/* Hero Section */}
        <div className=" flex flex-col gap-2 text-center max-w-3xl mx-auto mb-2">
          <p className="text-heading3 font-bold tracking-tight mb-0 uppercase">
            Next-gen enterprise software development company
          </p>
          <p className="text-gray-500 text-sm md:text-lg tracking-widest">
            Build your path to success with us.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 w-full">
          {cardData?.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              icon={
                <div className="relative aspect-square">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              }
              isScaled={hoveredCard === cardIndex}
              onHover={() => setHoveredCard(cardIndex)}
              onLeave={() => setHoveredCard(1)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function Card({ icon, isScaled, onHover, onLeave }) {
  return (
    <div
      className={`
          rounded-xl md:rounded-3xl p-2 relative 
          transition-all duration-500 ease-in-out 
          flex flex-col justify-between
          ${isScaled ? "scale-110 scale-y-125 z-10" : "z-0"}
        `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`
            mb-2 transition-all duration-500 ease-in-out
            ${
              isScaled
                ? "scale-y-110 shadow-[inset_0_-8px_12px_rgba(0,0,0,0.2),_0_8px_12px_rgba(255,255,255,0.5),_0_-8px_12px_rgba(0,0,0,0.1)]"
                : "shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
            }
            rounded-3xl overflow-hidden
          `}
      >
        {icon}
      </div>
    </div>
  );
}
