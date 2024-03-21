import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";

function MyAchievementSkeleton() {
  return (
    <div className="mb-3 flex flex-col items-center space-y-3">
      <header className="flex flex-col items-center gap-2">
        <Skeleton className="h-5 w-8" />
        <Skeleton className="h-32 w-32 rounded-full" />
      </header>
      <Skeleton className="h-4 w-40" />
      <div className="flex w-full place-content-end">
        <Skeleton className="h-8 w-12" />
      </div>
    </div>
  );
}

export default MyAchievementSkeleton;
