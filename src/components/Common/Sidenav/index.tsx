import React from "react";
import "@/styles/sideNav.css";
import "@/styles/header.css";
import TscLogoSvg from "@/public/icons/tscLogo.svg";
import Link from "next/link";
import { headerData } from "@/lib/constantData";

export const SideNavSkeleton = () => {
  return (
    <aside id="sidenav-open">
      <nav>
        <div>
          <div>
            <div className="h-[56px] w-[184px] bg-neutral-300"></div>
          </div>
        </div>

        <ul>
          {[1, 2, 3, 4].map((x) => {
            return (
              <li key={x}>
                <div className="font-cursive text-neutral-700">Bootcamps</div>
              </li>
            );
          })}
        </ul>
        <button className=" btn btn--primary btn--small mx-auto my-3 font-cursive">
          Hiring
        </button>
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

const SideNav = async () => {
  const lastAttribute = headerData.at(-1);
  return (
    <aside
      id="sidenav-open"
      style={{ position: "fixed", top: "0px", left: "0px", width: "100%" }}
    >
      <nav>
        <Link prefetch={false} href="/tech">
          <TscLogoSvg className="h-[40px] w-[180px]" />
        </Link>

        <ul>
          {headerData?.slice(0, -1).map((x) => {
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
                    </details>
                  </>
                ) : (
                  <a
                    href={url ? `/tech/${url}` : ""}
                    // prefetch={false}
                    className="header__link font-bold"
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
          href={lastAttribute?.url ? `/tech/${lastAttribute?.url}` : ""}
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

export default SideNav;
