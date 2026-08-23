import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonStyles } from "./Button.styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizes;
}

export const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
      { className, variant = "primary", size = "md", children, ...props },
      ref,
    ) => {
      return (
        <button
          ref={ref}
          className={cn(
            buttonStyles.base,
            buttonStyles.variants[variant],
            buttonStyles.sizes[size],
            className,
          )}
          {...props}
        >
          {children}
        </button>
      );
    },
  ),
);

Button.displayName = "Button";
