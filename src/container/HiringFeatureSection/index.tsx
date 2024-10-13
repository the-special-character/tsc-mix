import HiringSectionHeading from "@/components/hiring/HiringSectionHeading";
import React from "react";
import { HiringSectionServices } from "@/lib/constData";
import Titlecards from "@/components/hiring/TitleCards";
type Props = {};

const HiringFeatureSection = (props: Props) => {
  return (
    <div className="w-full h-full px-container flex flex-col gap-10 py-4 md:py-10 ">
      {HiringSectionServices.map((item, index) => (
        <div
          className="flex flex-col gap-10  *:h-full max-lg:items-center hiring-section"
          key={index}
        >
          <HiringSectionHeading title={item.title} decription={item.dec} />
          <div
            className="flex overflow-hidden gap-7
         max-sm:flex-col flex-wrap h-full items-center justify-center"
          >
            {item.cardsdata &&
              item?.cardsdata.map((item, index) => (
                <Titlecards
                  titledata={item}
                  key={index}
                  className="min-h-[150px]"
                />
              ))}
          </div>
        </div>
      ))}
      {/* <div className="flex flex-col gap-5 *:h-full">
        <HiringSectionHeading
          title={HiringSectionServices.title}
          decription={HiringSectionServices.dec}
        />
        <div
          className="columns-3 flex overflow-hidden gap-5
         max-sm:flex-col"
        >
          {HiringSectionServices.cardsdata.map((item, index) => (
            <Titlecards titledata={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 *:h-full">
        <HiringSectionHeading
          title={HiringSectionServices.title}
          decription={HiringSectionServices.dec}
        />
        <div
          className="columns-3 flex overflow-hidden gap-5
         max-sm:flex-col"
        >
          {HiringSectionServices.cardsdata.map((item, index) => (
            <Titlecards titledata={item} key={index} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HiringFeatureSection;
