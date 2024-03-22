import React from "react";

import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";

function ReviewSkeleton() {
  return (
    <main className="map-background grid h-full w-full place-items-center p-4">
      <div className="z-10 flex flex-col place-content-center rounded-md border-2 border-black bg-white p-6 shadow-neo">
        <div className="space-y-14">
          <div className="space-y-2">
            <div className="space-y-1">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-3 w-44" />
            </div>
            <div className="space-y-1">
              <div className="flex w-full items-center">
                <ul className="flex w-full justify-center gap-5 pt-5">
                  {new Array(5).fill(0).map((_, index) => (
                    <li
                      key={index}
                      className="flex h-16 w-10 flex-col items-center gap-1"
                    >
                      <Skeleton className="h-12 w-10 rounded-full" />
                      <Skeleton className="h-2 w-10" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col items-end gap-1 py-5">
                <Skeleton className="h-3 w-40" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            <div className="flex flex-row items-end justify-between pt-10">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ReviewSkeleton;
