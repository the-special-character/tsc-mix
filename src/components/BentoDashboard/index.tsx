import React from "react";
import TscLogo from "@/public/icons/tscTextLogo.svg";
import DesktopDashboard from "./DesktopDashboard";
import MobileDashboard from "./MobileDashboard";

type Props = {};

const BentoDashboard = (props: Props) => {
  return (
    <div className="h-dvh ">
      <div className="p-2 sm:p-4 flex flex-col gap-2 sm:gap-4 h-full ">
        <header className="w-full flex items-center h-20 ">
          <TscLogo className="w-52 sm:w-60" />
        </header>
        <div className="hidden sm:block">
          <DesktopDashboard />
        </div>
        <div className="sm:hidden">
          <MobileDashboard />
        </div>
      </div>
    </div>
  );
};

export default BentoDashboard;
