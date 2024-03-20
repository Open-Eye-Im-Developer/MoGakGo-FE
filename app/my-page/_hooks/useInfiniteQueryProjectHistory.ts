import { useInfiniteQuery } from "@tanstack/react-query";

import { getMatchesByUserId } from "@/app/_common/api/matching";

import { ResponseData } from "@/app/_common/types/response";
import { Match, MatchStatus } from "@/app/_common/types/matching";

export const useInfiniteQueryProjectHistory = (
  creatorId?: number,
  status?: MatchStatus | undefined,
  pageSize: number = 5,
  sortOrder?: "ASC" | "DESC",
) => {
  return useInfiniteQuery<ResponseData<Match> | undefined>({
    queryFn: context => {
      const cursorId = context.pageParam as number | undefined;
      return creatorId
        ? getMatchesByUserId(creatorId, status, cursorId, pageSize, sortOrder)
        : undefined;
    },
    queryKey: ["getMatchesByUserId", status],
    initialPageParam: undefined,
    getNextPageParam: (lastPage): number | null => {
      if (lastPage && lastPage.hasNext) {
        return lastPage.data[lastPage.data.length - 1].matchingId;
      }
      return null;
    },
    throwOnError: false,
    enabled: typeof creatorId === "number",
  });
};
