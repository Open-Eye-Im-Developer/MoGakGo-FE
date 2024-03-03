import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";
import { Progress } from "@/app/_common/shadcn/ui/progress";

import { UserJandiRating } from "@/app/_common/types/user";

interface JandiRatingProps {
  data?: UserJandiRating;
}

function JandiRating({ data }: JandiRatingProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-xl font-bold">🌲나의 잔디력</div>
      <div className="flex flex-col gap-2">
        {data ? (
          <>
            <Progress className="h-2.5" value={50} />
            <div className="text-xs">50%</div>
          </>
        ) : (
          <>
            <Skeleton className="h-[10px] w-full" />
            <Skeleton className="h-[16px] w-[30px] rounded-none" />
          </>
        )}
      </div>
    </div>
  );
}

export default JandiRating;
