import Image from "next/image";
import React from "react";
import TrainingImage from "@/public/itTraining.webp";
import ServiceImage from "@/public/itServices.webp";

type Props = {};

const MobileDashboard = (props: Props) => {
  return (
    <div className="h-[calc(100dvh-104px)] flex flex-col gap-2">
      <div className=" h-[50%] flex flex-col justify-center gap-2 p-2 rounded-3xl">
        <h1 className="mb-0 text-heading4">The Special Character</h1>
        <p className="text-wrap text-body2 leading-6">
          Build your path to success with our comprehensive IT Courses, exposure
          to live projects and 100% placement assurance. Learn from the finest
          in the field.
        </p>
      </div>
      <div className="h-max grid grid-cols-2 gap-2">
        <div className="relative aspect-square">
          <Image
            src={TrainingImage}
            alt="image of it training"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="relative aspect-square">
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

export default MobileDashboard;
