import React, { useEffect, useState } from "react";
import { withChildren } from "@builder.io/react";
import { cn } from "@/lib/utils";

type Props = {
  largdesktopGrid: string;
  desktopGrid: string;
  tabletGrid: string;
  mobileGrid: string;
  gridSection: boolean;
  gap: string;
  children: React.ReactNode;
};

const BIGrid: React.FC<Props> = ({
  largdesktopGrid,
  desktopGrid,
  tabletGrid,
  mobileGrid,
  gridSection,
  gap,
  children,
}) => {
  const [columns, setColumns] = useState(mobileGrid);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(largdesktopGrid);
      } else if (window.innerWidth >= 768) {
        setColumns(desktopGrid);
      } else if (window.innerWidth >= 640) {
        setColumns(tabletGrid);
      } else {
        setColumns(mobileGrid);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [largdesktopGrid, desktopGrid, tabletGrid, mobileGrid]);

  return (
    <div
      className={cn(`grid`, {
        "px-container py-10": gridSection,
      })}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
};

export default withChildren(BIGrid);
