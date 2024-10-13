import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { accordionItems } from "@/lib/constData";
import Link from "next/link";
import { Button } from "../ui/button";

const HeaderDesktop = () => {
  return (
    <div className="h-full w-full flex justify-between ">
      <div className="flex justify-between w-full items-start">
        {accordionItems.data.map((item, index) => (
          <div key={index} className="flex flex-col pt-3 group">
            <div className="flex items-center text-subtitle1 gap-x-1">
              <LinkButton
                asbtn={item?.asbtn || false}
                link={item?.link?.toLowerCase() || ""}
                title={item.title}
              />
              {item?.content && (
                <ChevronDownIcon className="transition-transform duration-300 transform group-hover:rotate-180 " />
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
                    title={item.content[subindex].url}
                    href={`/${item.title.toLowerCase()}/${item.content[
                      subindex
                    ].url.toLocaleLowerCase()}`}
                  >
                    <span className=" flex flex-col flex-wrap">
                      {itemContent?.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      <Link title={title} href={link}>
        {asbtn ? (
          <Button variant={"default"} size={"xl"}>
            {title}
          </Button>
        ) : (
          <span>{title}</span>
        )}
      </Link>
    </>
  );
};

export default HeaderDesktop;
