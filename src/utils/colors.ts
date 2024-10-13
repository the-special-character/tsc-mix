type PageData = {
  path: string;
  bgColor: string;
  color: string;
  hover: string;
  fillcolor: string;
  bannerbg: string;
};

const data: PageData[] = [
  {
    path: "/",
    bgColor: "bg-transparent",
    color: "text-primary",
    hover: "hover:bg-background",
    fillcolor: "black",
    bannerbg: "",
  },
  {
    path: "/services/web",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-darkblue",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/services/software-engineering",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
    bannerbg: "bg-primary",
  },
  {
    path: "/services/mobile",
    bgColor: "bg-gray",
    color: "text-primary",
    hover: "hover:bg-gray",
    fillcolor: "black",
    bannerbg: "",
  },
  {
    path: "/services/saas",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/services/back-end",
    bgColor: "bg-darkblue1",
    color: "text-background",
    hover: "hover:bg-darkblue1",
    fillcolor: "white",
    bannerbg: "bg-darkblue1",
  },
  {
    path: "/services/cloud-devops",
    bgColor: "bg-primary",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
    bannerbg: "bg-primary",
  },
  {
    path: "/services/ui-ux-design",
    bgColor: "bg-yellow",
    color: "text-primary",
    hover: "hover:bg-yellow",
    fillcolor: "black",
    bannerbg: "",
  },
  {
    path: "/services/corporate-training",
    bgColor: "bg-transparent",
    color: "text-primary",
    hover: "hover:bg-background",
    fillcolor: "black",
    bannerbg: "",
  },
  {
    path: "/industry/elearning",
    bgColor: "bg-darkblue2",
    color: "text-background",
    hover: "hover:bg-darkblue2",
    fillcolor: "white",
    bannerbg: "bg-darkblue2",
  },
  {
    path: "/industry/ecommerce",
    bgColor: "bg-gray1",
    color: "text-primary",
    hover: "hover:bg-gray1",
    fillcolor: "black",
    bannerbg: "",
  },
  {
    path: "/company/about",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-darkblue",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/company/career",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/company/how-we-work",
    bgColor: "bg-transparent",
    color: "text-background",
    hover: "hover:bg-primary",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/ourthinking",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
    fillcolor: "white",
    bannerbg: "",
  },
  {
    path: "/casestudies",
    bgColor: "bg-specialblue",
    color: "text-background",
    hover: "hover:bg-specialblue",
    fillcolor: "white",
    bannerbg: "",
  },
];

const getColors = (pathname: string): PageData | undefined => {
  return data.find((x) => x.path === pathname);
};

export default getColors;
