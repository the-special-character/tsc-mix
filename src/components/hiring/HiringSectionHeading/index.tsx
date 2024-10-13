import React from "react";

type Props = {
  title: string;
  decription?: string;
};

const HiringSectionHeading = ({ title, decription }: Props) => {
  return (
    <div className="flex flex-col max-xl:text-center">
      <h2 className="text-blue text-heading2">{title}</h2>
      <h3 className="font-normal   xl:max-w-[60%] w-full text-subtitle1 leading-7">
        {decription}
      </h3>
    </div>
  );
};

export default HiringSectionHeading;
