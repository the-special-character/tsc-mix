"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/header.css";
import { headerData } from "@/lib/constantData";
import HemburgerSvg from "@/public/icons/hemburger.svg";
import TscLogoSvg from "@/public/icons/tscLogo.svg";
import TscSvg from "@/public/icons/tsc.svg";
import { ScrollDiv } from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import getColors from "@/utils/colors";
import { cn } from "@/lib/utils";

const HeaderDesktop = () => {
  const lastAttribute = headerData.at(-1);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
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

  return (
    <div className="sticky z-40 flex items-center justify-between py-2  duration-300">
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
        href={lastAttribute?.url ? `${lastAttribute?.url}` : ""}
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

// import React from "react";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import { accordionItems } from "@/lib/constData";
// import Link from "next/link";
// import { Button } from "../ui/button";

// const HeaderDesktop = () => {
//   return (
//     <div className="h-full w-full flex justify-between ">
//       <div className="flex justify-between w-full items-start">
//         {accordionItems.data.map((item, index) => (
//           <div key={index} className="flex flex-col pt-3 group">
//             <div className="flex items-center text-subtitle1 gap-x-1">
//               <LinkButton
//                 asbtn={item?.asbtn || false}
//                 link={item?.link?.toLowerCase() || ""}
//                 title={item.title}
//               />
//               {item?.content && (
//                 <ChevronDownIcon className="transition-transform duration-300 transform group-hover:rotate-180 " />
//               )}
//             </div>
//             <ul
//               className={` text-subtitle2 top-full left-0 mt-1 group-hover:${
//                 item.content ? "mb-3" : "mb-0"
//               } max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-screen flex flex-col gap-y-4 pt-2`}
//             >
//               {item?.content?.map((itemContent, subindex) => (
//                 <li key={subindex} className="">
//                   <Link
//                     key={subindex}
//                     title={item.content[subindex].url}
//                     href={`/${item.title.toLowerCase()}/${item.content[
//                       subindex
//                     ].url.toLocaleLowerCase()}`}
//                   >
//                     <span className=" flex flex-col flex-wrap">
//                       {itemContent?.title}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const LinkButton = ({
//   link,
//   title,
//   asbtn = false,
// }: {
//   link: string;
//   title: string;
//   asbtn: boolean;
// }) => {
//   return (
//     <>
//       <Link title={title} href={link}>
//         {asbtn ? (
//           <Button variant={"default"} size={"xl"}>
//             {title}
//           </Button>
//         ) : (
//           <span>{title}</span>
//         )}
//       </Link>
//     </>
//   );
// };

// export default HeaderDesktop;
