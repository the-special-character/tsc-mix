"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  bgActive: string;
  bgInactive: string;
};

type TscContainerProps = {
  sections: SectionProps[];
};

export default function TscContainer({ sections }: TscContainerProps) {
  // if (!sections || sections.length === 0) {
  //   return null; // or return a placeholder component
  // }
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.title ?? ""
  );
  const [viewportSize, setViewportSize] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setViewportSize("mobile");
      } else if (window.innerWidth <= 1024) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (viewportSize === "desktop") {
      setActiveSection(title);
    }
  };

  const handleMouseLeave = () => {
    if (viewportSize === "desktop" && sections.length > 0) {
      setActiveSection("");
    }
  };

  const isNonDesktop = viewportSize === "tablet" || viewportSize === "mobile";

  return (
    <div className={`flex ${isNonDesktop ? "flex-col px-8" : ""}`}>
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          className={`relative overflow-hidden ${
            isNonDesktop ? "w-full my-2" : "h-full"
          } ${section.bgInactive}`}
          animate={{
            flex: activeSection === section.title && !isNonDesktop ? 12 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            ...(viewportSize === "mobile" ? { duration: 0 } : {}),
          }}
          onMouseEnter={() => handleMouseEnter(section.title)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: activeSection === section.title ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              ...(viewportSize === "mobile" ? { duration: 0 } : {}),
            }}
          >
            <motion.h2
              className="text-white text-xl sm:text-3xl md:text-4xl uppercase whitespace-nowrap"
              animate={{
                rotate:
                  activeSection === section.title
                    ? 0
                    : index % 2 === 0
                    ? -90
                    : 90,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                ...(viewportSize === "mobile" ? { duration: 0 } : {}),
              }}
            >
              {section.title}
            </motion.h2>
          </motion.div>

          <AnimatePresence>
            {(activeSection === section.title ||
              activeSection === "" ||
              isNonDesktop) && (
              <motion.div
                initial={
                  viewportSize === "mobile" ? { opacity: 1 } : { opacity: 0 }
                }
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  ...(viewportSize === "mobile" ? { duration: 0 } : {}),
                }}
                className={cn(
                  `absolute inset-0 flex items-center justify-center bg-primary p-4`,
                  {
                    [`${section.bgActive}`]: activeSection === section.title,
                    [`${section.bgInactive}`]: activeSection === "",
                  }
                )}
              >
                <div className="flex flex-col text-black gap-2 lg:gap-4 bg-secondary1 px-4 py-4 rounded-lg max-w-full sm:max-w-[80%] w-[90%]">
                  <Link href={section.link} className="block w-full">
                    <h1 className="text-2xl sm:text-5xl uppercase leading-none cursor-pointer text-center sm:text-left mb-0">
                      {section.title}
                    </h1>
                  </Link>

                  {(viewportSize === "desktop" || activeSection === "") && (
                    <>
                      <p className="text-base mb-0 sm:text-body1">
                        {section.description}
                      </p>
                      <a
                        href={section.link}
                        className="inline-block border border-primary rounded-lg px-4 py-2 uppercase text-center w-auto"
                      >
                        {section.buttonText}
                      </a>
                      <div className="flex gap-2 flex-wrap">
                        <span className="w-5 h-5 border border-primary rounded-full flex items-center justify-center"></span>
                        <span className="w-5 h-5 border border-[#d63227] rounded-full flex items-center justify-center"></span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
