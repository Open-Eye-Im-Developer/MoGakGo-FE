import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/app/_common/shadcn/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-black bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950  dark:placeholder:text-slate-400",
  {
    variants: {
      variant: {
        default: "shadow-neo focus:outline-none",
        outline: "border-2 focus:outline-none shadow-neo",
        noShadow:
          "shadow-none border-2 ring-offset-white focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950  dark:focus-visible:ring-slate-300 dark:ring-offset-slate-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
