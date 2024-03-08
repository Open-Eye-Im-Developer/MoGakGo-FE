import { useInfiniteQuery } from "@tanstack/react-query";

import { getMatchesByUserId } from "@/app/_common/api/matching";

import { ResponseData } from "@/app/_common/types/response";
import { Match } from "@/app/_common/types/matching";

export const useInfiniteQueryProjectHistory = (
  creatorId?: number,
  pageSize: number = 5,
) => {
  return useInfiniteQuery<ResponseData<Match> | undefined>({
    queryFn: context => {
      const cursorId = context.pageParam as number | undefined;
      return creatorId
        ? getMatchesByUserId(creatorId, cursorId, pageSize)
        : undefined;
    },
    queryKey: ["getMatchesByUserId"],
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
