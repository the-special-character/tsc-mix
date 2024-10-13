"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/According1";
import Link from "next/link";
import Hamburger from "@/public/three-horizontal-lines-icon.svg";
import { accordionItems1 } from "@/lib/constData";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import getColors from "@/utils/colors";
import { usePathname } from "next/navigation";
const MobileNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const colors = getColors(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos == 100);
      setPrevScrollPos(currentScrollPos);
    };

    const handleScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, [prevScrollPos]);
  return (
    <Sheet>
      <SheetTrigger name="hamburger" aria-label="hamburger">
        <Hamburger
          className="mt-3"
          fill="white"
          style={{
            fill:
              scrollPosition > 100
                ? "rgba(255, 255, 255, 1)"
                : `${colors?.fillcolor}`,
          }}
        />
      </SheetTrigger>
      <SheetContent>
        <div className="pt-10 w-full">
          <Accordion type="single" collapsible>
            {accordionItems1.data.map((item, i) => (
              <AccordionItem key={item.value} value={item.value} className="">
                <AccordionTrigger>
                  <p
                    title="mobile-nav-link"
                    className="text-subtitle2 font-bold"
                  >
                    {item.title}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="py-2">
                  <ul className="flex flex-col gap-y-4 pl-4 font-medium">
                    {item?.content?.map((itemContent, subindex) => (
                      <SheetClose asChild key={subindex}>
                        <Link
                          title={item.title}
                          href={`/${item.title.toLowerCase()}/${
                            item?.content &&
                            item.content[subindex].url.toLocaleLowerCase()
                          }`}
                        >
                          <li className="text-primary active:text-skyblue">
                            {itemContent?.title}
                          </li>
                        </Link>
                      </SheetClose>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
            <div className="py-3">
              <SheetClose asChild>
                <Link
                  href="/casestudies"
                  title="mobile-nav-link"
                  className="text-subtitle2 font-bold py-3"
                >
                  Projects
                </Link>
              </SheetClose>
            </div>
            <div className="py-3">
              <SheetClose asChild>
                <Link title="mobile-nav-button" href={"/hiring"}>
                  <Button variant={"secondary"} size={"sm"}>
                    Hiring Us
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
