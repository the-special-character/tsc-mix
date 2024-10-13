"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";
import Image from "next/image";
import { Button } from "../../ui/button";
import Arrow from "@/public/icons/arrow_forward.svg";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";

type AccordianProps = {
  id: number;
  image?: string | StaticImport;
  title: { titleText: string; titleColor?: string };
  description: { descriptionText: string; descriptionColor?: string };
  arrowButtonLink?: string;
};

type Props = {
  homeBanner: boolean;
  backgroundColor?: string;
  borderColor?: string;
  accordian: AccordianProps[];
};

const BiHomeAccordian = ({
  homeBanner,
  backgroundColor,
  accordian,
  borderColor,
}: Props) => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        style={{ backgroundColor: backgroundColor && backgroundColor }}
      >
        <hr
          className="border-1"
          style={{ borderColor: borderColor && borderColor }}
        />
        {accordian &&
          accordian.map((item) => {
            return (
              <AccordionItem
                className="border-b"
                style={{ borderColor: borderColor && borderColor }}
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger
                  className={clsx(
                    "flex flex-1 transition-all duration-1000 ease-out  items-center justify-between py-5 text-heading6 font-semibold",
                    {
                      ["hover:text-blue data-[state=open]:text-blue"]:
                        !homeBanner,
                    }
                  )}
                  style={{
                    backgroundColor: backgroundColor && backgroundColor,
                  }}
                >
                  <div
                    className={clsx({
                      ["flex gap-10 md:gap-8 items-center"]: homeBanner,
                      ["flex items-center"]: !homeBanner,
                      ["flex items-center gap-4"]: !homeBanner && item.image,
                    })}
                  >
                    <div
                      className={clsx("", {
                        ["md:flex md:gap-40 lg:gap-[30rem] items-center hidden"]:
                          homeBanner,
                      })}
                    >
                      {item?.image && (
                        <Image
                          alt={item?.title?.titleText}
                          title={item?.title?.titleText}
                          src={item?.image}
                          width={40}
                          height={40}
                        />
                      )}
                      {homeBanner && item?.id && (
                        <div>{item?.id < 10 ? `0${item?.id}` : item?.id}</div>
                      )}
                    </div>
                    <div
                      className="text-left"
                      style={{
                        color:
                          item?.title?.titleColor && item?.title?.titleColor,
                      }}
                    >
                      {item?.title?.titleText}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className={clsx(
                    "overflow-hidden text-subtitle1 transition-all duration-1000 ease-out",
                    { ["text-body2"]: !homeBanner }
                  )}
                >
                  <div
                    className={clsx({
                      ["md:pl-64 lg:pl-[36.5rem] md:pr-20"]: homeBanner,
                    })}
                  >
                    <div className="flex flex-col gap-4">
                      <div
                        className="flex flex-1 flex-col gap-3"
                        style={{ color: item?.description?.descriptionColor }}
                      >
                        {homeBanner && (
                          <Image
                            src={item.image ? item.image : ""}
                            alt={item?.title?.titleText || "imagealt"}
                            title={item?.title?.titleText}
                            width={40}
                            height={40}
                            className="md:hidden object-cover"
                          />
                        )}
                        <p>{item?.description?.descriptionText}</p>
                      </div>
                      {!!item?.arrowButtonLink && (
                        <Link title="next" href={`${item.arrowButtonLink}`}>
                          <Button
                            variant="default"
                            size="icon"
                            className="rounded-full"
                          >
                            <Arrow className="w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
      </Accordion>
    </>
  );
};

export default BiHomeAccordian;
