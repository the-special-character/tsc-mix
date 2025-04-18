"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/header.css";
import { headerData } from "@/lib/constantData";
import HemburgerSvg from "@/public/icons/hemburger.svg";
import TscLogoSvg from "@/public/icons/tscLogo.svg";
import TscSvg from "@/public/icons/tsc.svg";
import Arrow from "@/public/icons/arrow_forward.svg";
import PointArrow from "@/public/icons/angle-circle-arrow-right-icon.svg";
import TriangledArrow from "@/public/icons/triangle-right.svg";
import { ScrollDiv } from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import getColors from "@/utils/colors";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { ChevronDownIcon, Cross1Icon } from "@radix-ui/react-icons";
import ContactFormTech from "../ContactFormTech";

const HeaderDesktop = ({ servicesData }: any) => {
  const lastAttribute = headerData.at(-1);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [animateBackground, setAnimateBackground] = useState(false);

  const pathname = usePathname();
  const colors = getColors(pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 30);
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

  useEffect(() => {
    if (isOpen) {
      // Delay the background animation slightly for a staggered effect
      const timer = setTimeout(() => {
        setAnimateBackground(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimateBackground(false);
    }
  }, [isOpen]);

  return (
    <div className="sticky z-40 flex items-center justify-between py-2 duration-300">
      <ScrollDiv />
      <Link prefetch={false} href="/">
        <p className="sr-only">The Special Character Logo</p>
        <TscLogoSvg
          className="header__tsclogo md:hidden lg:block fill-[#0f437f]"
          style={{
            fill: scrollPosition > 100 ? "#0f437f" : `${colors?.fillcolor}`,
          }}
        />
        <TscSvg
          className="hidden h-[56px] w-[52px] md:block lg:hidden fill-[#0f437f]"
          style={{
            fill: scrollPosition > 100 ? "#0f437f" : `${colors?.fillcolor}`,
          }}
        />
      </Link>
      <nav className="header__nav">
        <ul className="m-0 hidden gap-4 p-0 md:flex md:gap-8">
          <li>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="header__link flex items-center gap-1">
                Services <ChevronDownIcon />{" "}
              </SheetTrigger>
              <SheetContent
                side={"top"}
                style={{ height: "100dvh", padding: "0px" }}
                className="w-full p-0 border-none overflow-y-scroll "
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_21%] h-full relative">
                  <div
                    className={`relative bg-primary transition-all duration-700 ease-out ${
                      animateBackground
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                    style={{
                      transformOrigin: "top left",
                    }}
                  >
                    <div className="flex justify-between items-center border-b border-white p-8 lg:px-10 xl:px-20">
                      <h2
                        className={`text-heading5 text-white font-bold transition-all duration-500 ease-out ${
                          animateBackground
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        Our Services
                      </h2>
                      <SheetClose className="bg-white p-2">
                        <Cross1Icon className="h-5 w-5 text-black font-bold" />{" "}
                      </SheetClose>
                    </div>
                    <div className="p-8 lg:p-10 xl:p-20 grid grid-cols-3 gap-8">
                      {servicesData?.map((column: any) => (
                        <div key={column.columntitle} className="mb-6">
                          <h3 className="text-heading3 text-white font-bold">
                            {column.columntitle}
                          </h3>
                          <ul>
                            {column.data.map((service: any) => (
                              <li key={service.title} className="mt-4">
                                <Link
                                  href={service.url}
                                  className="text-white text-body1 flex items-center gap-2"
                                >
                                  <Arrow className="h-5 w-5" /> {service.title}
                                </Link>
                                {service.childlist.length > 0 && (
                                  <ul className="ml-4">
                                    {service.childlist.map((child: any) => (
                                      <li key={child.title} className="mt-1">
                                        <Link
                                          href={child.url}
                                          className="text-white text-subtitle1 flex items-center gap-2"
                                        >
                                          <PointArrow className="h-4 w-5 fill-white" />
                                          {child.title}
                                        </Link>
                                        {child.grandchildlist &&
                                          child.grandchildlist.length > 0 && (
                                            <ul className="ml-8">
                                              {child.grandchildlist.map(
                                                (grandchild: any) => (
                                                  <li
                                                    key={grandchild.title}
                                                    className="mt-1"
                                                  >
                                                    <Link
                                                      href={grandchild.url}
                                                      className="text-white text-caption1 flex items-center gap-2"
                                                    >
                                                      <TriangledArrow className="h-3 w-5 fill-white" />
                                                      {grandchild.title}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`bg-white p-8 flex flex-col gap-6 transition-all duration-700 ease-out ${
                      animateBackground
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-12"
                    }`}
                  >
                    {/* <h3 className="text-2xl font-bold mb-6 text-gray-800">
                      Get in Touch
                    </h3> */}
                    <TscLogoSvg
                      className="header__tsclogo md:hidden lg:block fill-[#0f437f] self-center"
                      style={{
                        fill: "#0f437f",
                      }}
                    />
                    <div className="flex flex-col gap-2 py-4">
                      <h3 className="text-heading5 font-bold">Contact Us</h3>
                      <ContactFormTech />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </li>
          {headerData.slice(0, -1).map((x) => {
            const { title, url, children, order } = x;
            return (
              <li key={order} className="">
                <Link
                  href={url ? `/tech${url}` : ""}
                  prefetch={false}
                  className="header__link"
                >
                  {title}
                </Link>
                {children.length > 0 && (
                  <nav className="header__nested_nav" style={{ top: "24px" }}>
                    <ul
                      className={cn("rounded-xl bg-[#fff] text-[#0f437f]", {
                        [`${colors?.children_menu}`]: colors?.children_menu,
                      })}
                      // style={{ marginTop: "14px" }}
                      style={{
                        backgroundColor:
                          scrollPosition > 100 ? "rgba(255, 255, 255, 1)" : "",
                        color: scrollPosition > 100 ? "#0f437f" : "",
                      }}
                    >
                      {children?.map((y) => {
                        return (
                          <li key={y.order}>
                            <Link
                              prefetch={false}
                              href={y?.url ? `/tech${y?.url}` : ""}
                              className="header__link"
                            >
                              {y?.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <Link
        href={lastAttribute?.url ? `/tech/${lastAttribute?.url}` : ""}
        prefetch={false}
        className="header__button btn btn--primary btn--small"
      >
        {lastAttribute?.title}
      </Link>
      <a
        href="#sidenav-open"
        title="Open Menu"
        aria-label="Open Menu"
        className="md:hidden"
      >
        <HemburgerSvg
          className="h-12 w-12"
          style={{
            fill: scrollPosition > 100 ? "#0f437f" : `${colors?.fillcolor}`,
          }}
        />
      </a>
    </div>
  );
};

export default HeaderDesktop;
