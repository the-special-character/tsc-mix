import clsx from "clsx";
import React from "react";

type Props = {
  variant?: "primary" | "secondary";
  size?: "small" | "large";
  isRound?: boolean;
  children?: React.ReactNode;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({
  as: Tag = "button",
  variant = "primary",
  size,
  isRound,
  className,
  ...rest
}: Props) => {
  return (
    <Tag
      className={clsx("btn", {
        "btn--primary": variant === "primary",
        "btn--secondary": variant === "secondary",
        "btn--small": size === "small",
        "btn--large": size === "large",
        "btn--round": isRound,
        [className || ""]: !!className,
      })}
      {...rest}
    />
  );
};

export default Button;
