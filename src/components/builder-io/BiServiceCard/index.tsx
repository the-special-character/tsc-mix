import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  image?: string | StaticImport;
  titleLine?: { title: string; titleColor?: string };
  description?: { descriptionText: string; descriptionColor?: string };
  language?: { languageText: string; languageColor?: string };
};

const BiServiceCard = ({ image, titleLine, description, language }: Props) => {
  return (
    <div className="flex flex-col gap-6 max-sm:gap-4 h-full justify-between">
      {image && (
        <Image
          title="service-images"
          src={image}
          height={50}
          width={50}
          alt="image"
        />
      )}
      {titleLine?.title && (
        <h3
          className="font-bold text-heading5"
          style={{ color: titleLine?.titleColor }}
        >
          {titleLine?.title}
        </h3>
      )}
      {description?.descriptionText && (
        <p
          className="text-subtitle2 text-primary"
          style={{ color: description?.descriptionColor }}
        >
          {description?.descriptionText}
        </p>
      )}
      {language?.languageText && (
        <p
          className="lg:text-xl md:text-sm sm:text-sm font-extrabold gap-3"
          style={{ color: language?.languageColor }}
        >
          {language?.languageText}
        </p>
      )}
    </div>
  );
};

export default BiServiceCard;
