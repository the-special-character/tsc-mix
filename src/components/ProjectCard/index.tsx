import * as React from "react";
import { Cards } from "@/lib/constData";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function ProjectCard() {
  return (
    <div>
      <div className="">
        <Carousel opts={{ align: "start" }} className="relative">
          <div className=" flex z-20 gap-x-10">
            <CarouselContent className="w-full">
              {Cards.card.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="group md:basis-1/2 lg:basis-1/3 "
                >
                  <div className=" border-2 z-10 overflow-hidden border-none">
                    <Image
                      src={item.url}
                      className="w-full aspect-video object-cover rounded-md group-hover:transform group-hover:duration-75 group-hover:scale-110"
                      alt="image"
                      title={item.title1}
                      height={550}
                      width={700}
                    />
                  </div>
                  <Link href={`/casestudies/${item.id}`} title={item.title1}>
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
          <CarouselPrevious className="bg-blue h-10 w-10 absolute  left-0 translate-x-[-50%] max-sm:hidden" />
          <CarouselNext className="bg-blue h-10 w-10 absolute  right-0 max-sm:hidden " />
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectCard;
