import { withChildren } from "@builder.io/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  attributes: any;
};

const BIText = ({ children, attributes }: Props) => {
  return (
    <div className="" {...attributes}>
      {children}
    </div>
  );
};

export default withChildren(BIText);

// import { withChildren } from "@builder.io/react";
// import React, { PropsWithChildren } from "react";

// type Props = PropsWithChildren & {
//   attributes: any;
//   levels: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
// };

// const BIText = ({ children, attributes, levels = "p", ...props }: Props) => {
//   console.log({ attributes, type: typeof attributes });

//   const Comp = levels;
//   return (
//     <Comp className="" {...attributes}>
//       {children}
//     </Comp>
//   );
// };

// export default withChildren(BIText);
