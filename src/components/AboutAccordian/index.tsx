"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordian";
import { aboutAccordianData } from "@/lib/constData";
import { aboutAccordianDatatype } from "@/utils/types";


const AboutAccordian = ({ data }: aboutAccordianDatatype) => {
    return (
        <>
            <section className="bg-yellow">
                <h2 className=" flex md:justify-start justify-center text-heading1">{data.title1}</h2>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full bg-yellow py-6 lg:py-10"
                >
                    <hr className="border-1 border-black" />
                    {aboutAccordianData.data.map((item) => {
                        return (
                            <AccordionItem className="border-b  border-black" key={item.id} value={`item-${item.id}`}>
                                <AccordionTrigger className="bg-yellow flex flex-1 items-center justify-between py-5 text-subtitle1">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="overflow-hidden text-subtitle2 lg:pr-40 pb-4">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </section>
        </>
    );
};
export default AboutAccordian;
