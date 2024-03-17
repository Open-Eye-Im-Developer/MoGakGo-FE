import { useInfiniteQuery } from "@tanstack/react-query";

import { getProjectRequestsByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { RequestProjectSummary } from "@/app/_common/types/project";

export const useInfiniteQueryProjectRequests = (
  creatorId?: number,
  pageSize: number = 5,
) => {
  return useInfiniteQuery<ResponseData<RequestProjectSummary> | undefined>({
    queryFn: context => {
      const cursorId = context.pageParam as number | undefined;
      return creatorId
        ? getProjectRequestsByCreatorId(creatorId, cursorId, pageSize)
        : undefined;
    },
    queryKey: ["getProjectRequestsByCreatorId"],
    initialPageParam: undefined,
    getNextPageParam: (lastPage): number | null => {
      if (lastPage && lastPage.hasNext) {
        return lastPage.data[lastPage.data.length - 1].projectId;
      }
      return null;
    },
    throwOnError: false,
    enabled: typeof creatorId === "number",
  });
};
