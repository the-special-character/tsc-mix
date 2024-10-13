import { withChildren } from "@builder.io/react";
import React, { ReactNode } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
type Props = {
  data: string | null | undefined;
};
const BiMarkDown = withChildren(({ data }: Props) => {
  return (
    <div className="prose">
      <Markdown rehypePlugins={[rehypeRaw]}>{data}</Markdown>
    </div>
  );
});

export default BiMarkDown;
