import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { howWeWorktabdata } from "@/lib/constData";
import { tabdataType } from "@/utils/types";
import { Button } from "../ui/button";
import Link from "next/link";
const Tab2 = ({ data }: tabdataType) => {
    return (

        <section className="">
            <div className="flex max-lg:flex-wrap md:gap-16 lg:gap-60 gap-10">
                <h2 className="text-heading1">{data.title1}</h2>
                <p className="text-primary text-subtitle1 md:pr-40">{data.title2}</p>
            </div>
            <Tabs defaultValue="Agile" className="flex flex-col pt-10">
                <TabsList className="flex justify-center">
                    {howWeWorktabdata.data.map((item) => {
                        return (

                            <TabsTrigger key={item.id} className=" flex  gap-5  border-b-2  justify-between  text-heading4 px-5  py-5  lg:px-16 md:px-8   " value={item.value}>
                                {item.trigger}
                            </TabsTrigger>
                        );
                    })}
                </TabsList>
                {howWeWorktabdata.data.map((item) => {
                    return (
                        <TabsContent key={item.id} className="text-primary" value={item.value}>
                            <div className="flex text-left flex-wrap text-subtitle2 lg:p-0 px-5 gap-10">
                                <div className=" lg:flex-1 lg:pr-20">{item.content}</div>
                                <div className="font-bold  flex  gap-3 flex-col lg:flex-1">
                                    {item.title}
                                    {item.list.map((item) =>
                                    (
                                        <ul key={item.id} className="list-square">
                                            <li className="text-primary font-medium pr-16 ">{item.text}</li>
                                        </ul>
                                    )
                                    )}
                                </div>
                            </div>
                        </TabsContent>

                    );
                })}

            </Tabs>
            <div className="pt-10"><Link title="Get a free consultation!" href={"#Contact"}><Button variant="default" size="sm" className='px-8 md:px-20 py-7 text-base '>
                {data.button}
            </Button>
            </Link>
            </div>
        </section>
    );
};
export default Tab2;

