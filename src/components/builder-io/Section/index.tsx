import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  attributes: {
    [key: string]: any;
  };
};
const Section = withChildren((props: Props) => {
  return (
    <section className="px-container py-12" {...props.attributes}>
      {props.children}
    </section>
  );
});

export default Section;
