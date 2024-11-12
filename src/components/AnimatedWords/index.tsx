"use client";
import React, { useState, useEffect } from "react";

type Props = {
  textColor?: string;
  animatedWords?: string[];
};

const AnimatedWords = ({ textColor = "#000", animatedWords }: Props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (animatedWords && animatedWords.length > 0) {
      const interval = setInterval(() => {
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % animatedWords.length
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [animatedWords]);

  return (
    <span className="relative overflow-hidden z-10">
      {animatedWords && (
        <span
          style={{
            color: textColor,
          }}
          className="text-heading2 text-primary"
        >
          {animatedWords && animatedWords[currentWordIndex]}
        </span>
      )}
    </span>
  );
};

export default AnimatedWords;
