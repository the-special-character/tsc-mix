import React from "react";
import { frequentlyaskdata as data } from "@/lib/constData";
// import { Accordion } from "@/components/According1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
type Props = {};

const HiringFrequrntlyAskedQuestions = (props: Props) => {
  return (
    <div className="px-container w-full  h-full flex items-center flex-col gap-5 py-4 md:py-10 hiring-section">
      <div className="flex flex-col gap-4 items-center py-5">
        <h2 className="text-heading1">{data.title}</h2>
        <h3 className="text-body2">{data.dec}</h3>
      </div>
      <div className="flex flex-col gap-2 py-5 mx-auto   w-full ">
        <Accordion
          type="multiple"
          className="*:transition-transform *:duration-300 flex flex-col gap-4"
        >
          {data.accordiondata.map((item, index) => (
            <AccordionItem
              value={item.title}
              className="w-full rounded-2xl border-2 px-4 md:px-8 py-2 flex flex-col gap-4 "
              key={index}
            >
              <AccordionTrigger className="flex justify-between w-full text-body1 items-center font-medium text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="">
                <p className="max-w-[90%] w-full">{item.dec}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HiringFrequrntlyAskedQuestions;
