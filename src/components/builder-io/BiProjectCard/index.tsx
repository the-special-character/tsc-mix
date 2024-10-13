"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  id: number;
  image: string | StaticImport;
  title: string;
  description: string;
  url?: string;
};

type Props = {
  projects: ProjectCardProps[];
};

export function BiProjectCard({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", (e) => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api, activeIndex]);

  return (
    <div>
      <div className="">
        <Carousel
          opts={{ align: "center", startIndex: activeIndex }}
          className="relative flex flex-col gap-4"
          setApi={setApi}
        >
          <div className="flex gap-x-10">
            <CarouselContent className="w-full">
              {projects &&
                projects.map((item, index) => (
                  <CarouselItem
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      api?.scrollTo(index);
                    }}
                    className={cn("group sm:basis-1/2 md:basis-2/5 pl-8")}
                  >
                    <Link href={`${item?.url}`} title={item.title}>
                      <div className="relative aspect-video z-10 overflow-hidden">
                        <Image
                          src={item?.image}
                          className="object-cover group-hover:transform group-hover:duration-75 group-hover:scale-110"
                          alt="image"
                          title={item?.title}
                          fill
                          // height={550}
                          // width={700}
                        />
                      </div>
                      <h3 className="text-heading6 group-hover:text-blue font-bold mb-2 mt-4 ">
                        {item.title}
                      </h3>
                      <p className="text-primary text-subtitle2">
                        {item.description}
                      </p>
                    </Link>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </div>
          <CarouselPrevious
            className="max-sm:hidden bg-blue h-12 w-12 left-0 translate-x-[50%]"
            onClick={() => setActiveIndex(activeIndex - 1)}
          />
          <CarouselNext
            className="max-sm:hidden bg-blue h-12 w-12 right-0 translate-x-[-50%]"
            onClick={() => setActiveIndex(activeIndex + 1)}
          />
          <div className="flex w-full justify-center items-center gap-4">
            {projects.length > 0 &&
              projects?.map((item, index) => (
                <div
                  className={cn(
                    "w-2 aspect-square rounded-full border border-black cursor-pointer",
                    { ["border-[2px] bg-black"]: activeIndex == index }
                  )}
                  onClick={(e) => {
                    e.stopPropagation;
                    setActiveIndex(index);
                  }}
                  key={index}
                ></div>
              ))}
          </div>
          {/* <CarouselPrevious className="bg-blue h-8 sm:h-12 w-8 sm:w-12 max-sm:translate-y-48 left-0 sm:translate-x-[50%]" />
          <CarouselNext className="bg-blue h-8 sm:h-12 w-8 sm:w-12 max-sm:translate-y-48 max-sm:left-10 sm:right-0 sm:translate-x-[-50%]" /> */}
        </Carousel>
      </div>
    </div>
  );
}

export default BiProjectCard;
