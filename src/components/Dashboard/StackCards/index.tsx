import React, { useState, useEffect } from "react";
import LearnImage from "@/public/icons/heroEducation.svg";
import TechImage from "@/public/icons/heroDeveloper.svg";
import HiringImage from "@/public/icons/heroWhiteLabelResourse.svg";

interface CardProps {
  id: string;
  title: string;
  href: string;
  backgroundColor: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface StackCardsProps {
  cards?: CardProps[];
}

const defaultCards: CardProps[] = [
  {
    id: "stack_card1",
    title: "Training",
    href: "/learn",
    backgroundColor: "bg-secondary4",
    icon: LearnImage,
  },
  {
    id: "stack_card2",
    title: "Services",
    href: "/tech",
    backgroundColor: "bg-secondary2",
    icon: TechImage,
  },
  {
    id: "stack_card3",
    title: "Hiring",
    href: "/tech/hiring",
    backgroundColor: "bg-secondary3",
    icon: HiringImage,
  },
];

const StackCards: React.FC<StackCardsProps> = ({ cards = defaultCards }) => {
  const cardHeight = "41dvh";
  const cardTopPadding = "1em";
  const cardMargin = "1dvw";

  const [isVisible, setIsVisible] = useState<boolean[]>([]);

  useEffect(() => {
    // Set all cards as visible one by one
    const timeouts: NodeJS.Timeout[] = [];
    const updatedVisibility = cards.map((_, index) => {
      const timeout = setTimeout(() => {
        setIsVisible((prev) => [...prev.slice(0, index), true, ...prev.slice(index + 1)]);
      }, index * 200); // Stagger animation
      timeouts.push(timeout);
      return false;
    });

    setIsVisible(updatedVisibility);

    return () => {
      // Clear timeouts on unmount
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [cards]);

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-1 relative"
        style={{
          gridTemplateRows: `repeat(${cards.length}, ${cardHeight})`,
          paddingBottom: `calc(${cards.length}*${cardTopPadding})`,
          marginBottom: `${cardMargin}`,
        }}
      >
        {cards.map((card, index) => {
          const reversedIndex = cards.length - 1 - index;
          const scale = 1 - reversedIndex * 0.04;

          return (
            <a
              key={card.id}
              href={card.href}
              className="sticky top-0 snap-start"
              style={{
                paddingTop: `calc(${index}*${cardTopPadding})`,
              }}
            >
              <div
                className={`box-border p-4 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all duration-500 ${
                  card.backgroundColor
                } ${isVisible[index] ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-10 "}`}
                style={{
                  height: `${cardHeight}`,
                  transform: `scale(${scale})`,
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  position: "relative",
                  zIndex: index,
                }}
              >
                <div className="relative aspect-square w-32 flex justify-center items-center">
                  {React.createElement(card.icon)}
                </div>
                <h2 className="m-0 font-sans">{card.title}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default StackCards;
