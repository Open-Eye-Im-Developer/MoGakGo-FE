import { Skeleton } from "../shadcn/ui/skeleton";

function ActivityCardSkeleton() {
  return (
    <div className="m-2 flex gap-10 p-2 px-3">
      <Skeleton className="h-[48px] w-[48px] rounded-full" />
      <div>
        <Skeleton className="mb-2 h-[10px] w-[230px]" />
        <Skeleton className="h-[20px] w-[230px]" />
      </div>
    </div>
  );
}

export default ActivityCardSkeleton;
