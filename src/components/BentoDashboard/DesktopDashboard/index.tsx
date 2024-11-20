import Image from "next/image";
import React from "react";
import TrainingImage from "@/public/itTraining.webp";
import ServiceImage from "@/public/itServices.webp";

type Props = {};

const DesktopDashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[40%_1fr] gap-2 w-full h-[calc(100dvh-128px)]">
      <div className=" flex flex-col justify-center gap-4 p-4 rounded-3xl">
        <h1 className="mb-0">The Special Character</h1>
        <p className="text-wrap">
          Build your path to success with our comprehensive IT Courses, exposure
          to live projects and 100% placement assurance. Learn from the finest
          in the field.
        </p>
      </div>
      <div className="grid max-sm:grid-cols-2 sm:grid-rows-2 gap-2">
        <div className="relative">
          <Image
            src={TrainingImage}
            alt="image of it training"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="relative">
          <Image
            src={ServiceImage}
            alt="image of it training"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopDashboard;
