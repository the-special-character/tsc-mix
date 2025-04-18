"use client";
import React from "react";
import Link from "next/link";
import "@/styles/sideNav.css";
import "@/styles/header.css";
import { mobileHeaderData } from "@/lib/constantData";
import TscLogoSvg from "@/public/icons/tscLogo.svg";
import CloseIcon from "@/public/icons/close-icon.svg";
import { Button } from "../ui/button";

const MobileNavbar = () => {
  const lastAttribute = mobileHeaderData.at(-1);

  return (
    <aside
      id="sidenav-open"
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
      }}
    >
      <nav>
        <div className="flex items-center justify-between">
          <a href="/">
            <TscLogoSvg className="h-[40px]  fill-[#064EA4]" />
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => (window.location.hash = "")}
          >
            <CloseIcon className="w-4 h-4 cursor-pointer" />
          </Button>
        </div>

        <ul>
          {mobileHeaderData?.slice(0, -1).map((x) => {
            const { title, url, children, order } = x;
            return (
              <li key={order}>
                {children.length > 0 ? (
                  <>
                    <details className="nav-item">
                      <summary className="items-center">{title}</summary>
                      <ul>
                        {children?.map((y) => {
                          return (
                            <li key={y.order}>
                              <a
                                // prefetch={false}
                                href={y?.url ? `/tech${y?.url}` : ""}
                                className="header__link"
                              >
                                {y?.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </>
                ) : (
                  <a
                    href={url ? `/tech${url}` : ""}
                    // prefetch={false}
                    className="header__link font-bold text-[#0f437f] "
                    style={{ fontSize: "24px" }}
                  >
                    {title}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <a
          href={lastAttribute?.url ? `/tech${lastAttribute?.url}` : ""}
          //   prefetch={false}
          className="btn btn--primary btn--small"
        >
          {lastAttribute?.title}
        </a>
      </nav>
      <a
        href="#"
        id="sidenav-close"
        title="Close Menu"
        aria-label="Close Menu"
      ></a>
    </aside>
  );
};

export default MobileNavbar;
