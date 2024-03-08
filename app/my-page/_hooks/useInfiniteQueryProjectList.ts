import { useInfiniteQuery } from "@tanstack/react-query";

import { getProjectListByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { ProjectSummary } from "@/app/_common/types/project";

export const useInfiniteQueryProjectList = (
  creatorId?: number,
  pageSize: number = 5,
) => {
  return useInfiniteQuery<ResponseData<ProjectSummary> | undefined>({
    queryFn: context => {
      const cursorId = context.pageParam as number | undefined;
      return creatorId
        ? getProjectListByCreatorId(creatorId, cursorId, pageSize)
        : undefined;
    },
    queryKey: ["getProjectListByCreatorId"],
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
