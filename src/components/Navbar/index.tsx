import React from "react";
import MobileNavbar from "../MobileNavbar";
import HeaderDesktop from "../HeaderDesktop";
import Header from "../Header";

const Navbar = () => {
  return (
    <Header>
      <HeaderDesktop />
      <MobileNavbar />
    </Header>
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
