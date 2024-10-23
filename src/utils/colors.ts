type PageData = {
  path: string;
  bgColor: string;
  color: string;
  hover: string;
  fillcolor: string;
  bannerbg: string;
  children_menu?: string;
};

const data: PageData[] = [
  {
    path: "/tech",
    bgColor: "bg-transparent",
    color: "text-[#0f437f]",
    hover: "hover:bg-background",
    children_menu: "bg-background text-[#0f437f]",
    fillcolor: "#0f437f",
    bannerbg: "",
  },
  {
    path: "/tech/services/web",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-darkblue",
    children_menu: "bg-darkblue text-background",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/tech/services/software-engineering",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    children_menu: "bg-primary text-background",
    fillcolor: "white",
    bannerbg: "bg-primary",
  },
  {
    path: "/tech/services/mobile",
    bgColor: "bg-transparent",
    color: "text-[#0f437f]",
    hover: "hover:bg-gray",
    children_menu: "bg-gray text-[#0f437f]",
    fillcolor: "#0f437f",
    bannerbg: "",
  },
  {
    path: "/tech/services/saas",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-black",
    children_menu: "bg-[#000] text-background",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/tech/services/back-end",
    bgColor: "bg-darkblue1",
    color: "text-background",
    hover: "hover:bg-darkblue1",
    children_menu: "bg-darkblue1 text-background",
    fillcolor: "white",
    bannerbg: "bg-darkblue1",
  },
  {
    path: "/tech/services/cloud-devops",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    children_menu: "bg-primary text-background",
    fillcolor: "white",
    bannerbg: "bg-primary",
  },
  {
    path: "/tech/services/ui-ux-design",
    bgColor: "bg-transparent",
    color: "text-[#0f437f]",
    hover: "hover:bg-yellow",
    children_menu: "bg-yellow text-[#0f437f]",
    fillcolor: "#0f437f",
    bannerbg: "",
  },
  {
    path: "/tech/services/corporate-training",
    bgColor: "bg-transparent",
    color: "text-[#0f437f]",
    hover: "hover:bg-background",
    children_menu: "bg-background text-[#0f437f]",
    fillcolor: "#0f437f",
    bannerbg: "",
  },
  {
    path: "/tech/industry/elearning",
    bgColor: "bg-darkblue2",
    color: "text-background",
    hover: "hover:bg-darkblue2",
    children_menu: "bg-darkblue2 text-background",
    fillcolor: "white",
    bannerbg: "bg-darkblue2",
  },
  {
    path: "/tech/industry/ecommerce",
    bgColor: "bg-transparent",
    color: "text-[#0f437f]",
    hover: "hover:bg-gray1",
    children_menu: "bg-gray1 text-[#0f437f]",
    fillcolor: "#0f437f",
    bannerbg: "",
  },
  {
    path: "/tech/company/about",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-darkblue",
    children_menu: "bg-darkblue text-background",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/tech/company/career",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-transparent",
    children_menu: "bg-white text-[#0f437f]",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/tech/company/how-we-work",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-transparent",
    children_menu: "bg-white text-[#0f437f]",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/tech/ourthinking",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
    children_menu: "bg-specialblue text-background",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/tech/casestudies",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-specialblue",
    children_menu: "bg-specialblue text-background",
    fillcolor: "white",
    bannerbg: "",
  },
];

const getColors = (pathname: string): PageData | undefined => {
  return data.find((x) => x.path === pathname);
};

export default getColors;
