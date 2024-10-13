import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabdata, uiuxtabdata } from "@/lib/constData";
import style from "./tabstyle.module.css";
import { cn } from "@/lib/utils";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type tabProps = {
  image?: string | StaticImport;
  title?: string;
  content?: string;
};

type Props = {
  verticalTab?: boolean;
  tab: tabProps[];
};

const BiTab = ({ verticalTab, tab }: Props) => {
  return (
    <div
      className={cn({
        "gap-y-10 flex flex-col": verticalTab,
        "": !verticalTab,
      })}
    >
      <Tabs
        className={cn({
          [style.tabContainer]: verticalTab,
          "": !verticalTab,
        })}
        defaultValue={tab && tab[0].title}
      >
        <TabsList
          className={cn({
            [style.container]: verticalTab,
            "p-0 flex max-sm:overflow-x-scroll": !verticalTab,
          })}
        >
          {tab &&
            tab.map((item) => {
              return (
                <TabsTrigger
                  key={item.title}
                  value={item.title ? item.title : ""}
                  variant={verticalTab ? "vertical" : "default"}
                  className={cn({
                    [style.tab]: verticalTab,
                    "flex flex-col gap-5 justify-between text-heading4 px-5 py-5 lg:px-16 md:px-8":
                      !verticalTab,
                  })}
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt="tab-items"
                      title="tabs-svgs"
                      height={40}
                      width={40}
                      className="mx-auto"
                    />
                  )}
                  {item.title && item.title}
                </TabsTrigger>
              );
            })}
        </TabsList>
        <div
          className={cn({ [style.contentdiv]: verticalTab, "": !verticalTab })}
        >
          {tab &&
            tab.map((item) => {
              return (
                <TabsContent
                  key={item.title}
                  variant={verticalTab ? "vertical" : "default"}
                  value={item.title ? item.title : ""}
                  className={cn({
                    [style.tabsContent]: verticalTab,
                    "text-primary lg:text-subtitle3 lg:px-1": !verticalTab,
                  })}
                >
                  {item.content && item.content}
                </TabsContent>
              );
            })}
        </div>
      </Tabs>
    </div>
  );
};
export default BiTab;
