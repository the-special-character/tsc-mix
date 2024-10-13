import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

const BICustomBanner = withChildren((props: PropsWithChildren) => {
  return (
    <div className="relative overflow-hidden h-screen">{props.children}</div>
  );
});

export default BICustomBanner;
