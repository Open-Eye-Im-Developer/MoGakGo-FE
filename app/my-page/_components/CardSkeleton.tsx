import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";

function CardSkeleton() {
  return (
    <div className="align-center flex gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
      <div className="h-12 w-12 animate-pulse rounded-full bg-slate-200"></div>
      <div className="flex flex-col justify-center space-y-2">
        <div className="text-sm">
          <Skeleton className="h-[20px] w-[100px] rounded-none" />
        </div>
        <div className="text-xs">
          <Skeleton className="h-[16px] w-[100px] rounded-none" />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
