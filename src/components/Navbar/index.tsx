import React from "react";
import MobileNavbar from "../MobileNavbar";
import Link from "next/link";
import HeaderDesktop from "../HeaderDesktop";
import Header from "../Header";
import NavLogo from "../NavLogo";

const Navbar = () => {
  return (
    <Header>
      <div className="flex justify-between items-start gap-4">
        <Link title="home-link" href="/">
          <NavLogo />
        </Link>
        {/* <--webView---> */}
        <div className="hidden lg:block w-full">
          <HeaderDesktop />
        </div>
        {/* <---Mobilview----> */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
