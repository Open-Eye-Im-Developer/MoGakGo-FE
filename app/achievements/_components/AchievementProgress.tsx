"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/app/_common/shadcn/utils";

const AchievementProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",
      className,
    )}
    {...props}
  >
    {/* TODO: 최종 디자인이 결정되면 삭제 */}
    <p className="absolute left-1/2 z-10 -translate-x-3 translate-y-[10%] text-center text-sm leading-3 text-white">
      {props.children}
    </p>
    <ProgressPrimitive.Indicator
      className={cn(
        "relative h-full w-full flex-1 bg-secondary transition-all dark:bg-slate-50",
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    ></ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
));
AchievementProgress.displayName = ProgressPrimitive.Root.displayName;

export { AchievementProgress };
