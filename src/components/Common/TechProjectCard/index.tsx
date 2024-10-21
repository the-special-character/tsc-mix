import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/courseCard.css";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  project: {
    id: number;
    image: string | StaticImport;
    title: string;
    description: string;
    url?: string;
  };
  isHorizontal?: boolean;
};

export const TechProjectCardSkeleton = ({
  isHorizontal,
}: {
  isHorizontal?: boolean;
}) => {
  return (
    <div
      className={clsx("course_card", {
        "course_card--hoz": !!isHorizontal,
      })}
    >
      <div className="animate-pulse">
        <div className="course_card__img bg-neutral-300">
          <div></div>
          <div className="course_card__chips">
            <span className="chip chip--white font-cursive">4 months</span>
            <span className="chip chip--primary font-cursive">5,000/Month</span>
          </div>
        </div>
      </div>
      <div className="course_card__body">
        <div className="course_card__main">
          <h3 className="course_card__title font-cursive">
            Full-stack Development
          </h3>
          <p className="course_card__desc font-cursive">
            Full-stack development refers to the end-to-end application software
            development, including the front end and back end. The front end
            consists of the user interface, and the back end takes care of the
            business logic and application workflows.
          </p>
        </div>
        <div className="course_card__footer">
          <div className="course_card__action font-cursive">
            <div></div>
            Download Curriculum
          </div>
        </div>
      </div>
    </div>
  );
};

const TechProjectCard = ({ project, isHorizontal }: Props) => {
  const { title, description, url, image } = project;

  return (
    <div
      className={clsx("course_card", {
        "course_card--hoz": !!isHorizontal,
      })}
    >
      <Link href={url ? url : ""}>
        <figure className="course_card__img">
          <Image
            src={image ? image : ""}
            alt={`${title || "course card"}`}
            title={`${title || "course card"}`}
            fill
            sizes="(max-width: 640px) 100vw,576px"
          />
        </figure>
      </Link>
      <div className="course_card__body">
        <Link href={url ? url : ""} className="course_card__main">
          <h3 className="course_card__title text-heading6">
            {title ? title : "title"}
          </h3>
          <p className="course_card__desc text-subtitle2">
            {description ? description : "description"}
          </p>
        </Link>

        {/* ***{Dont Remove It This Code , no Body Touch it }*** */}

        {/* <div className="course_card__footer">
          {brochureUrl && (
            <Link
              href={brochureUrl}
              
              className="course_card__action"
              download
            >
              <Icon name="download" height={24} width={24} />
              Download Curriculum
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TechProjectCard;
