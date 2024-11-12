import React from "react";

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
    backgroundColor: "bg-[#52B2CF]",
  },
  {
    id: "stack_card2",
    title: "Services",
    index: 2,
    backgroundColor: "bg-[#E5A36F]",
  },
  {
    id: "stack_card3",
    title: "Hiring",
    index: 3,
    backgroundColor: "bg-[#9CADCE]",
  },
];

const StackCards: React.FC<StackCardsProps> = ({ cards = defaultCards }) => {
  return (
    <div className="w-full sm:hidden">
      <div className="grid grid-cols-1 gap-4" id="stack_cards">
        {cards.map((card) => (
          <div id={card.id} className="stack_card sticky top-0">
            <div
              className={`stack_card-body box-border p-8 rounded-3xl shadow-[0_0_30px_0_rgba(0,0,0,0.3)] 
            flex justify-center items-center transition-all duration-300 ${card.backgroundColor}`}
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
