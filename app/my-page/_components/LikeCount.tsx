import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";

import { Like } from "@/app/_common/types/profile";

interface LikeCountProps {
  sendLikeCount?: Like;
  receiveLikeCount?: Like;
}

function LikeCount({ sendLikeCount, receiveLikeCount }: LikeCountProps) {
  return (
    <div className="flex w-full justify-center gap-4">
      {sendLikeCount ? (
        <PokeCount
          count={sendLikeCount.likeCount}
          label="나를 찔러보기 한 사람"
        />
      ) : (
        <PokeCountSkeleton />
      )}
      {receiveLikeCount ? (
        <PokeCount
          count={receiveLikeCount.likeCount}
          label="내가 찔러보기 한 사람"
        />
      ) : (
        <PokeCountSkeleton />
      )}
    </div>
  );
}

interface PokeCountProps {
  count: number;
  label: string;
}

function PokeCount({ count, label }: PokeCountProps) {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-xl font-bold">{count ?? 0}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}

function PokeCountSkeleton() {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-xl font-bold">
        <Skeleton className="h-[28px] w-[35px] rounded-none" />
      </div>
      <div className="text-xs text-gray-400">
        <Skeleton className="h-[16px] w-[100px] rounded-none" />
      </div>
    </div>
  );
}

export default LikeCount;
