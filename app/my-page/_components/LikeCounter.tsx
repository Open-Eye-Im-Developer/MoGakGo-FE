import Link from "next/link";

import { Skeleton } from "@/app/_common/shadcn/ui/skeleton";

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

import { useQuerySendLikeCount } from "../_hooks/useQuerySendLikeCount";
import { useQueryReceiveLikeCount } from "../_hooks/useQueryReceiveLikeCount";

function LikeCounter() {
  const { data: userData } = useQuerySignUpUser();
  const { data: sendLikeCount } = useQuerySendLikeCount(userData?.id);
  const { data: receiveLikeCount } = useQueryReceiveLikeCount(userData?.id);

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
    <div className="flex items-center gap-4">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="text-xs font-bold">{count ?? 0}</div>
    </div>
  );
}

function PokeCountSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <div className="text-xs text-gray-400">
        <Skeleton className="h-[16px] w-[100px] rounded-none" />
      </div>
      <div className="text-xs font-bold">
        <Skeleton className="h-[16px] w-[35px] rounded-none" />
      </div>
    </div>
  );
}

export default LikeCounter;
