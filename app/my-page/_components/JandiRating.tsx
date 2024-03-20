import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";
import { Progress } from "@/app/_common/shadcn/ui/progress";

import { useQueryUserData } from "../_hooks/useQueryUserData";
import { useQueryJandiRating } from "../_hooks/useQueryJandiRating";

function JandiRating() {
  const { data: userData } = useQueryUserData();
  const { data } = useQueryJandiRating(userData?.id);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-md font-bold">나의 잔디력</div>
      <div className="flex flex-grow items-center">
        <div className="flex flex-grow flex-col gap-2">
          {data ? (
            <>
              <Progress className="h-2.5" value={data.jandiRate} />
              <div className="text-xs">{data.jandiRate}</div>
            </>
          ) : (
            <>
              <Skeleton className="h-[10px] w-full" />
              <Skeleton className="h-[16px] w-[30px] rounded-none" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default JandiRating;
