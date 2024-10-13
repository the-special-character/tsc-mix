import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  content?: string;
  className?: string;
  attributes?: any;
  variantOfPTag?:
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "small"
    | "sm"
    | "large";
  variantOfHeadingTag?:
    | "text-heading1"
    | "text-heading2"
    | "text-heading3"
    | "text-heading4"
    | "text-heading5"
    | "text-heading6"
    | "text-subtitle1"
    | "text-subtitle2"
    | "text-subtitle3"
    | "text-body1"
    | "text-body2"
    | "text-caption1"
    | "text-caption2";
};

const BIHeading = ({
  level = "h1",
  content,
  className,
  variantOfPTag,
  variantOfHeadingTag,
  attributes,
}: Props) => {
  const Comp = level;
  return (
    <Comp
      {...attributes}
      className={cn("", `${variantOfPTag}`, `${variantOfHeadingTag}`, {
        [`${className}`]: !!className,
      })}
    >
      {content}
    </Comp>
  );
};

export default BIHeading;
