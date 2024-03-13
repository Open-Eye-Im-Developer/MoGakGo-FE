import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { getLikes } from "@/app/_common/api/profile";

import { ResponseData } from "@/app/_common/types/response";
import { Like } from "@/app/_common/types/profile";

export const useQueryLikes = (userId?: number) => {
  return useQuery({
    queryFn: () => (userId ? getLikes(userId) : undefined),
    throwOnError: false,
    queryKey: ["getLikes"],
    refetchOnWindowFocus: true,
  });
};

export const useInfiniteQueryLikes = (
  creatorId?: number,
  pageSize: number = 5,
) => {
  return useInfiniteQuery<ResponseData<Like> | undefined>({
    queryFn: context => {
      const cursorId = context.pageParam as number | undefined;
      return creatorId ? getLikes(creatorId, cursorId, pageSize) : undefined;
    },
    queryKey: ["getLikes"],
    initialPageParam: undefined,
    getNextPageParam: (lastPage): number | null => {
      if (lastPage && lastPage.hasNext) {
        return lastPage.data[lastPage.data.length - 1].id;
      }
      return null;
    },
    throwOnError: false,
    enabled: typeof creatorId === "number",
  });
};
