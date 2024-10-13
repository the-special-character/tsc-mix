import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-subtitle2 font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue hover:bg-skyblue text-primary-foreground shadow",
        destructive:
          "bg-destructive text-destructive-foreground  shadow-sm hover:bg-destructive/90",
        outline:
          "border border-white bg-forgournd shadow-sm text-background hover:bg-skyblue hover:border-skyblue",
        secondary:
          "bg-blue text-primary-foreground hover:bg-lightblue shadow hover:bg-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:text-blue",
        builderio: "hover:bg-skyblue shadow",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6 text-xs",
        md: "px-14 md:px-16 py-2 text-base",
        lg: "h-14 px-16",
        xl: "h-10 px-10 sm:px-6 max-sm:px-4",
        xxl: "h-16 px-12 sm:px-6 max-sm:px-4",
        icon: "h-9 aspect-square",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
