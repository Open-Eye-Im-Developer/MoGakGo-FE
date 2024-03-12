"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/app/_common/shadcn/utils";

const CheckboxVariant = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-black shadow-neo-thin ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neoGreen data-[state=checked]:text-slate-50 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
  {
    variants: {
      checkedBorder: {
        default:
          "data-[state=checked]:border-black dark:data-[state=checked]:border-white",
        white:
          "data-[state=checked]:border-white dark:data-[state=checked]:border-black",
      },
    },
    defaultVariants: {
      checkedBorder: "default",
    },
  },
);

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof CheckboxVariant>
>(({ className, checkedBorder, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(CheckboxVariant({ checkedBorder }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
