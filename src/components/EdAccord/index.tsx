"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import {
  edAccordiandata,
  edAccordiandata1,
} from "@/lib/constData";
import { serviceAccordiandataType } from "@/utils/types";
import Image from "next/image";


const EdAccordian = ({ data }: serviceAccordiandataType) => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-16 ">
        <Accordion type="single" collapsible className="">
          <hr className="border-1 border-gray" />
          {edAccordiandata.data.map((item) => {
            return (
              <AccordionItem
                className="border-b py-3 border-gray"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger className=" flex flex-1 items-center justify-between hover:text-blue text-heading6 ">
                  <div className="flex gap-10 md:gap-3  items-center">
                    <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                      <Image alt="elearing-project-info" title="elerning-projects" src={item.image} width={40} height={40} />
                    </div>

                    <div>{item.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-5 text-subtitle2 text-primary overflow-hidden ">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <Accordion type="single" collapsible className="">
          <hr className="border-1 border-gray flex max-sm:hidden" />
          {edAccordiandata1.data.map((item) => {
            return (
              <AccordionItem
                className="border-b py-3 border-gray"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger className="  flex flex-1 items-center justify-between hover:text-blue text-heading6  ">
                  <div className="flex gap-10 md:gap-3 items-center">
                    <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                      <Image alt="elearing-project-info" title="elerning-projects" src={item.image} width={40} height={40} />
                    </div>

                    <div>{item.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-5 text-subtitle2 text-primary overflow-hidden ">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>

  );
};
export default EdAccordian;
