import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabdata, uiuxtabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Tab = ({ data }: tabdataType) => {
  return (
    <section>
      <Tabs className="" defaultValue="Discover">
        <TabsList className="flex  max-lg:overflow-x-scroll ">
          {uiuxtabdata.data.map((item) => {
            return (
              <TabsTrigger
                key={item.id}
                className="flex flex-col gap-5  justify-between  text-heading4 px-5  py-5  lg:px-16 md:px-8   "
                value={item.value}
              >
                <Image
                  src={item.image}
                  alt="tab-items"
                  title="tabs-svgs"
                  height={40}
                  width={40}
                  className="mx-auto"
                />
                {item.trigger}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {uiuxtabdata.data.map((item) => {
          return (
            <TabsContent
              key={item.id}
              className="text-primary lg:text-subtitle3 lg:px-1"
              value={item.value}
            >
              {item.content}
            </TabsContent>
          );
        })}
      </Tabs>

      <div className="pt-10">
        <Link className="" href={"#Contact"}>
          <Button className="">
            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
              {data.button} <span>{data.button2} </span>

            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default Tab;
