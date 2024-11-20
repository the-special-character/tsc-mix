import React from "react";

type TooltipPosition = {
  x: number;
  y: number;
};

type CardData = {
  alt: string;
  color: string;
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

interface CursorTooltipProps {
  tooltipPosition: TooltipPosition;
  data: CardData[];
  hoveredIndex: number;
}

const CursorTooltip: React.FC<CursorTooltipProps> = ({
  tooltipPosition,
  data,
  hoveredIndex,
}) => {
  return (
    <div
      className="fixed pointer-events-none max-lg:hidden px-4 py-2 rounded-full text-sm backdrop-blur-lg bg-black/50 text-white shadow-lg shadow-black/10 border border-white/50 tracking-wider"
      style={{
        left: `${tooltipPosition.x}px`,
        top: `${tooltipPosition.y}px`,
        transform: "translate(-10%, 10%)",
        zIndex: 50,
      }}
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        {data[hoveredIndex].title}
      </div>
    </div>
  );
};

export default CursorTooltip;
