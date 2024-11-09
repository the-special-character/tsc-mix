import { Button } from "@/components/ui/button";
import Image from "next/image";
import HiringImage from "@/public/images/blog1.webp";
import Serviceimage from "@/public/images/blog6.webp";
import Learnimage from "@/public/images/cloudBanner.webp";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import DesktopBentoDashboard from "./DesktopBentoDashboard";
import MobileBentoDashboard from "./MobileBentoDashboard";

const Dashboard = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileBentoDashboard />
      </div>
      <div className="hidden md:block">
        <DesktopBentoDashboard />
      </div>
    </>
  );
};

export default Dashboard;
