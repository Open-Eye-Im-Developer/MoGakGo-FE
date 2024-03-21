import React from "react";

import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";

function AchievementItemSkeleton() {
  return (
    <li className="flex items-center gap-2 rounded-md bg-neoGreen p-3 shadow-neo-thin">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-2 w-52" />
      </div>
    </li>
  );
}

export default AchievementItemSkeleton;
