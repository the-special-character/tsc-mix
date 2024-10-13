import React from "react";
import { Workwithus as data } from "@/lib/constData";
import ImageWithCards from "@/components/hiring/ImagewithCards";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BiImageWithCards from "../BiImageWithCards";
type Props = {
  data: {
    title: string;
    description?: string;
    image: string | StaticImport;
    cardData: {
      title: string;
      subdec: string;
    }[];
    side?: string;
  }[];
};

const WorkWithUs = ({ data }: Props) => {
  return (
    <div className="flex flex-col md:gap-32 gap-8 py-10 relative translate-y-[50px]">
      <div className="absolute left-1/2 top-12 translate-x-[-50%] w-[1px]  *: bg-zinc-200 h-full max-sm:left-1 translate-y-[-50px]"></div>
      {data &&
        data.map((item, index) => (
          <>
            <div
              className={cn(
                "flex gap-20 justify-center w-full   relative max-sm:flex-col max-sm:items-center max-sm:left-1 hiring-section",
                {
                  ["flex-row-reverse "]: index % 2 == 0,
                }
              )}
            >
              <div className="flex flex-col items-center w-full  md:max-w-[50%] max-md:px-5">
                <div>
                  <h4 className="font-normal text-subtitle1">{item.title}</h4>
                  <p className="font-light text-caption1 ">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="rounded-full border absolute left-1/2 top-0  translate-x-[-50%]  max-sm:translate-x-[-35%]  flex justify-center items-center w-7 aspect-square  z-10 bg-background max-sm:-left-1">
                {index + 1}
              </div>
              <div className="w-full md:max-w-[50%] h-full flex  justify-center md:pt-8">
                <BiImageWithCards
                  imageTitle={item.title}
                  image={item.image}
                  cardData={item.cardData}
                  side={item.side as "left" | "bottom"}
                  className={`xl:max-w-[450px] max-xl:max-w-[400px] max-lg:max-w-[300px] max max-sm:max-w-[280px]${
                    index % 2 != 0 && `pl-10`
                  }`}
                />
                {/* <ImageWithCards
                  imageurl={item.image}
                  side={item.side as "left" | "bottom"}
                  carddata={item.cardData}
                  className={`xl:max-w-[400px] max-xl:max-w-[300px] max-lg:max-w-[250px] max max-sm:max-w-[200px]${
                    index % 2 != 0 && `pl-10`
                  }`}
                /> */}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default WorkWithUs;
