"use client";
import React from "react";
import Link from "next/link";
import FooterLogo from "@/public/icons/Logo New Website.svg";
import { FooterdataType } from "@/utils/types";
import SocialIcon from "./SocialIcon";
import FooterCirti from "./FooterCirti";

const Footer = ({ data }: FooterdataType) => {
  return (
    <footer className="z-20 h-[90vh] max-md:min-h-screen overflow-hidden flex bg-specialblue justify-center items-center">
      <div className=" text-background w-full grid md:grid-cols-[30%_1fr] grid-cols-1 md:gap-x-20 max-md:gap-y-9 md:gap-y-20">
        <div className="overflow-hidden">
          <Link title="home-link" href={"/"}>
            <FooterLogo className="lg:-ml-4 lg:w-64 max-lg:w-48 " />
          </Link>
        </div>
        <div className="flex font-bold  md:text-heading4  max-md:text-heading5 ">
          <div className=" flex flex-wrap">{data.title}</div>
        </div>
        <div className="">
          <p className="text-subtitle1">Office:</p>
          <Link
            className="text-offwhite"
            href={"https://g.co/kgs/CDMwEXk"}
            title="address"
          >
            {data.address}
          </Link>
        </div>
        <div className="flex flex-col max-md:justify-between gap-y-8">
          <div className="flex flex-col lg:text-subtitle1">
            <div>
              <Link title="email" href="mailto:contact@thespecialcharacter.com">
                {data.email}
              </Link>
            </div>
            <div>
              <Link title="mobile" href={"tel:7600096432"}>
                {data.mobile}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8 max-sm:gap-10">
            <SocialIcon />
          </div>
        </div>
        <div className="flex flex-col md:w-64 text-background">
          <p>
            <Link
              title="privacy"
              href={"#"}
              className=" text-background lg:text-subtitle1"
            >
              {data.privacy}
            </Link>
          </p>
          <p className="text-offwhite">&copy;{data.copyright}</p>
        </div>
        <div className="flex flex-row overflow-x-auto gap-10">
          <FooterCirti />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
