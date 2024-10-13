import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type Props = {
  data: {
    value: string;
    title: string;
    link: string;
    asbtn?: boolean;
    content?: string[];
  }[];
};

const Navlinks = ({ data }: Props) => {
  return (
    <div className="flex items-start lg:gap-10 xl:gap-16">
      {data.map((item, index) => (
        <div key={index} className="group">
          <div className="flex gap-2 pt-3 items-center">
            <LinkButton
              asbtn={item?.asbtn || false}
              link={item.link?.toLowerCase()}
              title={item.title}
            />
            {item?.content && (
              <ChevronDownIcon className="transition-transform duration-300 transform group-hover:rotate-180 mt-1" />
            )}
          </div>
          <ul
            className={` text-subtitle2 top-full left-0 mt-1 group-hover:${
              item.content ? "mb-3" : "mb-0"
            } max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-screen flex flex-col gap-y-4 pt-2`}
          >
            {item?.content?.map((itemContent, subindex) => (
              <li key={subindex} className="">
                <Link
                  key={subindex}
                  title="desktop-nav links"
                  href={`/${item.title.toLowerCase()}/${
                    item.content && item.content[subindex].toLocaleLowerCase()
                  }`}
                >
                  <span className=" flex flex-col flex-wrap">
                    {itemContent}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;

const LinkButton = ({
  link,
  title,
  asbtn = false,
}: {
  link: string;
  title: string;
  asbtn: boolean;
}) => {
  return (
    <>
      <Link
        title={title}
        href={link}
        className={cn({
          ["pt-1"]: !asbtn,
        })}
      >
        {asbtn ? (
          <Button variant={"default"} size={"xl"} className="text-background">
            {title}
          </Button>
        ) : (
          <span>{title}</span>
        )}
      </Link>
    </>
  );
};
