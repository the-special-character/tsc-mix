"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import { serviceAccordiandata, serviceAccordiandata1 } from "@/lib/constData";
import { serviceAccordiandataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ServiceAccordian = ({ data }: serviceAccordiandataType) => {
  return (
    <>
      <section>
        <div className="grid md:grid-cols-2 md:gap-16 ">
          <Accordion type="single" collapsible className="">
            <hr className="border-1 border-gray" />
            {serviceAccordiandata.data.map((item) => {
              return (
                <AccordionItem
                  className="border-b py-3 border-gray"
                  key={item.id}
                  value={`item-${item.id}`}
                >
                  <AccordionTrigger className=" flex flex-1 items-center justify-between hover:text-blue text-heading5">
                    <div className="flex gap-10 md:gap-3  items-center">
                      <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                        <Image
                          title="info-accordion"
                          alt="service-accordion"
                          src={item.image}
                          width={30}
                          height={30}
                        />
                      </div>

                      <div>{item.title}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="py-5 text-primary overflow-hidden text-subtitle2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Accordion type="single" collapsible className="">
            <hr className="border-1 border-gray flex max-sm:hidden" />
            {serviceAccordiandata1.data.map((item) => {
              return (
                <AccordionItem
                  className="border-b py-3 border-gray"
                  key={item.id}
                  value={`item-${item.id}`}
                >
                  <AccordionTrigger className="  flex flex-1 items-center justify-between hover:text-blue text-heading5">
                    <div className="flex gap-10 md:gap-3 items-center">
                      <div className=" md:flex md:gap-40 lg:gap-[30rem] items-center  hidden">
                        <Image
                          title="info-accordiaon1"
                          alt="service-accordian1"
                          src={item.image}
                          width={30}
                          height={30}
                        />
                      </div>

                      <div>{item.title}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="py-5 text-primary text-subtitle2 overflow-hidden">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <div className="pt-10">
          <Link
            title="contact-us"
            href={"#Contact"}
          >
            <Button variant="default" size="sm" className=" py-7 text-base ">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default ServiceAccordian;
