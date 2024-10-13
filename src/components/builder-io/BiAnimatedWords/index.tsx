"use client";
import React, { useState, useEffect } from "react";

type animatedWordProps = {
  word: string;
};

type Props = {
  textColor?: string;
  animatedWords?: animatedWordProps[];
};

const BiAnimatedWords = ({ textColor = "#000", animatedWords }: Props) => {
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
    <div className="relative overflow-hidden z-10">
      {animatedWords && (
        <h2
          style={{
            color: textColor,
          }}
          className="text-heading3 max-sm:text-heading6"
        >
          {animatedWords && animatedWords[currentWordIndex].word}
        </h2>
      )}
    </div>
  );
};

export default BiAnimatedWords;
