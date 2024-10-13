"use client";
import { ourThinkingData } from "@/lib/constData";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {};

function OurThinking({ className }: { className?: string }) {
  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <>
      <section>
        <div
          className={cn(
            "flex max-md:flex-col text-heading4 py-10 md:ml-4 justify-start gap-x-4",
            {
              [`${className}`]: className,
            }
          )}
        >
          <button className="group transition-all duration-300 ease-in-out" type="button" onClick={() => setCurrentCategory("All")}>
            <div className="flex pb-2 max-sm:w-fit justify-start mr-4 active:text-blue hover:text-blue bg-origin-padding bg-left-bottom bg-gradient-to-r from-blue to-blue bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
              All
            </div>

          </button>
          <button className="group transition-all duration-300 ease-in-out" type="button" onClick={() => setCurrentCategory("Strategy")}>
            <div className="flex pb-2 max-sm:w-fit justify-start mr-4 active:text-blue hover:text-blue  bg-left-bottom bg-gradient-to-r from-blue to-blue bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
              Strategy
            </div>
          </button>
          <button className="group transition-all duration-300 ease-in-out" type="button" onClick={() => setCurrentCategory("Trending")}>
            <div className="flex pb-2 max-sm:w-fit justify-start mr-4 active:text-blue hover:text-blue   bg-left-bottom bg-gradient-to-r from-blue to-blue bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
              Trending
            </div>
          </button>
          <button
            className="group transition-all duration-300 ease-in-out"
            type="button"
            onClick={() => setCurrentCategory("Development")}
          >
            <div className="flex pb-2 max-sm:w-fit justify-start mr-4 active:text-blue hover:text-blue  bg-left-bottom bg-gradient-to-r from-blue to-blue bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
              Development
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center">
          {ourThinkingData[
            currentCategory === "All"
              ? "All"
              : (currentCategory as keyof typeof ourThinkingData)
          ].map((x) => (
            <div
              key={x.id}
              className="flex flex-col gap-3 md:m-4 md:gap-5 md:pb-20 pb-10  "
            >

              <div className="overflow-hidden">
                <Link title="Projects" target="_blank" href={`/casestudies/${x.id}`}>
                  <Image
                    src={x.image}
                    alt="blog"
                    title={`Projects-Image-${x.id}`}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full hover:scale-105 duration-500 "
                  />
                </Link>
              </div>
              <div className="">
                <div className="flex gap-1 text-nowrap flex-wrap">
                  {x.categories.map((category, index) => (
                    <React.Fragment key={index}>
                      <Link title={`Projects-Category-${x.id}`} target="_blank" href={`/casestudies/${x.id}`} className="text-subtitle2">
                        {category}
                      </Link>
                      {index !== x.categories.length - 1 && (
                        <span className="text-subtitle2">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="py-4 hover:text-blue">
                  <Link title={`Projects-Description-${x.id}`} target="_blank" href={`/casestudies/${x.id}`}>
                    <span className="text-heading6">
                      {x.title}
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurThinking;
