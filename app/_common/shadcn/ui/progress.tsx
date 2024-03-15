"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/app/_common/shadcn/utils";

const indicatorVariants = cva("h-full w-full flex-1 transition-all", {
  variants: {
    background: {
      default: "bg-neoYellow",
      green: "bg-neoGreen",
      blue: "bg-neoBlue",
      red: "bg-neoRed",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
    VariantProps<typeof indicatorVariants>
>(({ className, value, background, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full border border-black bg-slate-100 shadow-neo dark:bg-slate-800",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(indicatorVariants({ background }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
