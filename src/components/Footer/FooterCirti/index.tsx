import React from "react";
import { footerdata } from "@/lib/constData";
import Image from "next/image";

type Props = {};

const FooterCirti = () => {
  return (
    <>
      {footerdata?.data.map((i) => (
        <div key={i.id} className="relative ">
          <Image src={i.icon} title={i.title} alt={i.title}height={70} width={70} />
        </div>
      ))}
    </>
  );
};

export default FooterCirti;
