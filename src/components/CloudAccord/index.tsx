"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import {
  cloudAccordiandata,
  cloudAccordiandata1,
} from "@/lib/constData";
import { serviceAccordiandataType } from "@/utils/types";
import Image from "next/image";


const CloudAccordian = ({ data }: serviceAccordiandataType) => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-16 ">
        <Accordion type="single" collapsible className="">
          <hr className="border-1 border-gray" />
          {cloudAccordiandata.data.map((item) => {
            return (
              <AccordionItem
                className="border-b py-3 border-gray"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger className=" flex flex-1 items-center justify-between text-heading6 hover:text-blue font-semibold    ">
                  <div className="flex gap-10 md:gap-3  items-center">
                    <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                      <Image title="cloud-gif" alt="cloud-accordion" src={item.image} width={40} height={40} />
                    </div>

                    <div>{item.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-5  text-primary overflow-hidden text-subtitle2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <Accordion type="single" collapsible className="">
          <hr className="border-1 border-gray flex max-sm:hidden" />
          {cloudAccordiandata1.data.map((item) => {
            return (
              <AccordionItem
                className="border-b py-3 border-gray"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger className=" flex flex-1 items-center justify-between text-heading6  hover:text-blue  ">
                  <div className="flex gap-10 md:gap-3  items-center">
                    <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                      <Image title="cloud-gif" alt="cloud-accordion" src={item.image} width={30} height={30} />
                    </div>

                    <div>{item.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-5  text-primary overflow-hidden text-subtitle2">
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
export default CloudAccordian;
