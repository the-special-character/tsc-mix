"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import getColors from "@/utils/colors";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
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
    <header
      className={cn(
        `w-full fixed max-w-screen z-20 top-0 py-2 bg-primary text-background ${colors?.hover} transition-all ease-in-out duration-300 ${colors?.color}`,
        {
          [`${colors?.bgColor}`]: visible,
          ["-translate-y-full"]: !visible,
        }
      )}
      style={{
        backgroundColor: scrollPosition > 100 ? "rgba(0, 0, 0, 1)" : "",
        color: scrollPosition > 100 ? "rgba(255, 255, 255, 1)" : "",
      }}
    >
      {children}
    </header>
  );
};

export default Header;

// "use client";
// import React, { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import getColors from "@/utils/colors";
// import { usePathname } from "next/navigation";

// type Props = {
//   children: React.ReactNode;
//   background_color?: string;
//   text_color?: string;
//   hover?: {
//     background_color?: string;
//     text_color?: string;
//   };
// };

// const Header = ({ background_color, text_color, hover, children }: Props) => {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   // const pathname = usePathname();
//   // const colors = getColors(pathname);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 100);
//       setPrevScrollPos(currentScrollPos);
//     };

//     const handleScrollPosition = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("scroll", handleScrollPosition);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("scroll", handleScrollPosition);
//     };
//   }, [prevScrollPos]);

//   return (
//     <header
//       className={cn(
//         `w-full fixed max-w-screen z-20 top-0 py-2 transition-all ease-in-out duration-300`,
//         {
//           ["-translate-y-full"]: !visible,
//         }
//       )}
//       style={{
//         backgroundColor: visible
//           ? `${background_color}`
//           : scrollPosition > 100
//           ? "rgba(0, 0, 0, 1)"
//           : "transparent",
//         color: scrollPosition > 100 ? "rgba(255, 255, 255, 1)" : text_color,
//       }}
//       onMouseEnter={() => {
//         // Change background and text color on hover
//         document.body.style.setProperty(
//           "--header-bg-color",
//           hover?.background_color || null
//         );
//         document.body.style.setProperty(
//           "--header-text-color",
//           hover?.text_color || null
//         );
//       }}
//       onMouseLeave={() => {
//         // Reset to original colors
//         document.body.style.setProperty(
//           "--header-bg-color",
//           background_color || "transparent"
//         );
//         document.body.style.setProperty(
//           "--header-text-color",
//           text_color || "inherit"
//         );
//       }}
//     >
//       {children}
//     </header>
//   );
// };

// export default Header;
