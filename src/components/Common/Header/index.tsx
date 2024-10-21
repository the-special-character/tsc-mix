import Link from "next/link";
import React from "react";
import "@/styles/header.css";
import TscLogoSvg from "@/public/icons/tscLogo.svg";
import TscSvg from "@/public/icons/tsc.svg";
import HemburgerSvg from "@/public/icons/hemburger.svg";
import { ScrollDiv } from "@/hooks/useScroll";
import { headerData } from "@/lib/constantData";

export const HeaderSkeleton = () => {
  return (
    <header className="header animate-pulse">
      <div className="header__svg bg-neutral-400">
        <div className="header__tsclogo h-12 w-14 bg-neutral-800"></div>
        <div className="h-12 w-14 lg:hidden"></div>
      </div>

      <nav className="header__nav">
        <ul>
          {[1, 2, 3, 4].slice(0, -1).map((x) => {
            return (
              <li key={x}>
                <div className="header__link font-cursive">Bootcamps</div>
                <nav className="header__nested_nav">
                  <ul>
                    return (
                    <li key={x}>
                      <div className="font-cursive">It services</div>
                    </li>
                    );
                  </ul>
                </nav>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="header__button btn btn--primary btn--small font-cursive ">
        HIRING
      </button>
      <div className="md:hidden">
        <div className="h-12 w-12 bg-neutral-300"></div>
      </div>
    </header>
  );
};

const Header = async () => {
  const lastAttribute = headerData.at(-1);

  return (
    <header className="header" id="header">
      <ScrollDiv />
      <Link prefetch={false} href="/tech">
        <p className="sr-only">The Special Character Logo</p>
        <TscLogoSvg className="header__tsclogo md:hidden lg:block" />
        <TscSvg className="hidden h-[56px] w-[52px] md:block lg:hidden" />
      </Link>
      <nav className="header__nav">
        <ul>
          {headerData.slice(0, -1).map((x) => {
            const { title, url, children, order } = x;
            return (
              <li key={order}>
                <Link
                  href={url ? `/tech/${url}` : ""}
                  prefetch={false}
                  className="header__link"
                >
                  {title}
                </Link>
                {children.length > 0 && (
                  <nav className="header__nested_nav">
                    <ul>
                      {children?.map((y) => {
                        return (
                          <li key={y.order}>
                            <Link
                              prefetch={false}
                              href={y?.url ? `/tech/${y?.url}` : ""}
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
        <HemburgerSvg className="h-12 w-12 fill-primary" />
      </a>
    </header>
  );
};

export default Header;
