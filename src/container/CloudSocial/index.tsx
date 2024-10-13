import { cloudSocial } from "@/lib/constData";
import Image from "next/image";
import React from "react";

type Props = {};

const CloudSocial = (props: Props) => {
  return (
    <>
      <section className="flex flex-wrap flex-1 justify-center">
        {cloudSocial.map((i) => {
          return (
            <>
              <div
                key={i.id}
                className="border-2 broder-gray-200 flex justify-center items-center px-9 py-10"
              >
                <Image src={i.url} alt={"cloud-clients"} title="cloud-cliets-images" height={100} width={100}></Image>
              </div>
            </>
          );
        })}
        {cloudSocial.map((i) => {
          return (
            <>
              <div
                key={i.id}
                className="border-2 broder-gray-200 flex justify-center items-center px-9 py-10"
              >
                <Image src={i.url} alt={"cloud-clients"} title="cloud-cliets-images" height={100} width={100}></Image>
              </div>
            </>
          );
        })}
        {cloudSocial.map((i) => {
          return (
            <>
              <div
                key={i.id}
                className="border-2 broder-gray-200 flex justify-center items-center px-9 py-10"
              >
                <Image src={i.url} alt={"cloud-clients"} title="cloud-cliets-images" height={100} width={100}></Image>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CloudSocial;
