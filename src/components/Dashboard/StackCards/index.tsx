import React from "react";
import LearnImage from "@/public/icons/heroEducation.svg";
import TechImage from "@/public/icons/heroDeveloper.svg";
import HiringImage from "@/public/icons/heroWhiteLabelResourse.svg";

interface CardProps {
  id: string;
  title: string;
  href: string;
  index: number;
  backgroundColor: string;
  icon: any;
}

interface StackCardsProps {
  cards?: CardProps[];
}

const defaultCards: CardProps[] = [
  {
    id: "stack_card1",
    title: "Training",
    href: "/learn",
    index: 1,
    backgroundColor: "bg-secondary4",
    icon: LearnImage,
  },
  {
    id: "stack_card2",
    title: "Services",
    href: "/tech",
    index: 2,
    backgroundColor: "bg-secondary2",
    icon: TechImage,
  },
  {
    id: "stack_card3",
    title: "Hiring",
    href: "/tech/hiring",
    index: 3,
    backgroundColor: "bg-secondary3",
    icon: HiringImage,
  },
];

const StackCards: React.FC<StackCardsProps> = ({ cards = defaultCards }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-3" id="stack_cards">
        {cards.map((card, index) => (
          <div
            // id={card.id}
            className="stack_card sticky top-0"
            style={{
              paddingTop:
                index === 0 ? "0" : `calc(${index} * var(--cardTopPadding))`,
            }}
          >
            <div
              className={`stack_card-body box-border p-4 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${card.backgroundColor}`}
            >
              <div className="relative aspect-square w-32 flex justify-center items-center">
                {React.createElement(card.icon)}
              </div>
              {/* <HiringImage className="w-24 h-24 z-20" /> */}
              <h2 className="m-0">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCards;
