import React from "react";
import MobileNavbar from "../MobileNavbar";
import HeaderDesktop from "../HeaderDesktop";
import Header from "../Header";
import { builder } from "@builder.io/sdk";

const Navbar = async () => {
  const servicesDataRes = await builder.get("header");
  const servicesData = servicesDataRes?.data?.headerData;

  return (
    <>
      <Header>
        <HeaderDesktop servicesData={servicesData} />
      </Header>
      <MobileNavbar />
    </>
  );
};

export default Navbar;

//       <div>
//         {/* <Link title="home-link" href="/">
//           <NavLogo />
//         </Link> */}
//         {/* <--webView---> */}
//         {/* <div className="hidden lg:block w-full"> */}
//         <HeaderDesktop />
//         {/* </div> */}
//         {/* <---Mobilview----> */}
//         {/* <div className="lg:hidden"> */}
//         <MobileNavbar />
//         {/* </div> */}
//       </div>
