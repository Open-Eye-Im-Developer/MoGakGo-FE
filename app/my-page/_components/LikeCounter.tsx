import Link from "next/link";

import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";

import { LikeCount } from "@/app/_common/types/profile";

interface LikeCountProps {
  sendLikeCount?: LikeCount;
  receiveLikeCount?: LikeCount;
}

function LikeCounter({ sendLikeCount, receiveLikeCount }: LikeCountProps) {
  return (
    <div className="flex w-full justify-center gap-4">
      {receiveLikeCount ? (
        <PokeCount
          count={receiveLikeCount.likeCount}
          label="나를 찔러보기 한 사람"
        />
      ) : (
        <PokeCountSkeleton />
      )}
      {sendLikeCount ? (
        <Link href={"/my-page/likes"}>
          <PokeCount
            count={sendLikeCount.likeCount}
            label="내가 찔러보기 한 사람"
          />
        </Link>
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

export default LikeCounter;
