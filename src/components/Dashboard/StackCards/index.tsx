import React from "react";
import LearnImage from "@/public/icons/education.svg";
import TechImage from "@/public/icons/developing.svg";
import HiringImage from "@/public/icons/whiteLabelResourse.svg";

interface CardProps {
  id: string;
  title: string;
  index: number;
  backgroundColor: string;
}

interface StackCardsProps {
  cards?: CardProps[];
}

const defaultCards: CardProps[] = [
  {
    id: "stack_card1",
    title: "Training",
    index: 1,
    backgroundColor: "bg-secondary4",
  },
  {
    id: "stack_card2",
    title: "Services",
    index: 2,
    backgroundColor: "bg-secondary2",
  },
  {
    id: "stack_card3",
    title: "Hiring",
    index: 3,
    backgroundColor: "bg-secondary3",
  },
];

const StackCards: React.FC<StackCardsProps> = ({ cards = defaultCards }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4" id="stack_cards">
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
              className={`stack_card-body box-border p-4 rounded-3xl
            flex flex-col items-center gap-2 transition-all duration-300 ${card.backgroundColor}`}
            >
              <h2 className="m-0">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCards;
