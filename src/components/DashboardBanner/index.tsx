import TscContainer from "../AnimatedSections";
import TscLogo from "@/public/icons/tscTextLogo.svg";

const sections = [
  {
    title: "it service",
    description:
      "The best quality assurance for all types of your vehicle. We make sure all products pass the quality control test so there will be no problems in the future.",
    buttonText: "show more",
    link: "/tech",
    // bgActive: "bg-primary",
    bgActive: "bg-gradient-to-r from-primary to-[#d63227]",
    bgInactive: "bg-primary",
  },
  {
    title: "it training",
    description:
      "The best quality assurance for all types of your vehicle. We make sure all products pass the quality control test so there will be no problems in the future.",
    buttonText: "join now",
    link: "/learn",
    bgActive: "bg-gradient-to-r from-primary to-[#d63227]",
    bgInactive: "bg-[#d63227]",
  },
];

const DashboardBanner = () => {
  return (
    <div className="h-dvh overflow-hidden grid grid-cols-1 md:grid-cols-[30%_1fr] w-full">
      <div className="flex flex-col items-center justify-center px-8 w-full">
        <header className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center h-[80px]">
          <div className="w-[200px] h-16 sm:w-[250px] opacity-100 pl-8">
            <TscLogo />
          </div>
        </header>
        <div className="mt-2">
          <h1>The Special Character</h1>
          <p className="text-wrap">
            Build your path to success with our comprehensive IT Courses,
            exposure to live projects and 100% placement assurance. Learn from
            the finest in the field.
          </p>
        </div>
      </div>
      <TscContainer sections={sections} />
    </div>
  );
};

export default DashboardBanner;
