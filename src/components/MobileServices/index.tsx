import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/mobileServicesTabs";
import React from "react";
import { mobileServicesdata } from "@/lib/constData";
import style from "./style.module.css";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Index() {
  return (
    <section className="gap-y-10 flex flex-col">
      <div>
        <Tabs defaultValue="Development" className={style.tabContainer}>
          <TabsList className={style.container}>
            {mobileServicesdata.data.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.title}
                className={style.tab}
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className={style.contentdiv}>
            {mobileServicesdata.data.map((item) => (
              <TabsContent
                key={item.id}
                value={item.title}
                className={style.tabsContent}
              >
                {item.description}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
      <div>
        <Link title="hire-mobile-app-developer" href={"#Contact"}>
          <Button variant={"secondary"}>
            <span>Hire mobile app developers </span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
