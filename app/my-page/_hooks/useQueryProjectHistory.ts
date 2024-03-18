import { useQuery } from "@tanstack/react-query";

import { getMatchesByUserId } from "@/app/_common/api/matching";

import { ResponseData } from "@/app/_common/types/response";
import { Match } from "@/app/_common/types/matching";

export const useQueryProjectHistory = (
  creatorId?: number,
  pageSize: number = 5,
) => {
  return useQuery<ResponseData<Match> | undefined>({
    queryFn: () =>
      creatorId
        ? getMatchesByUserId(creatorId, undefined, undefined, pageSize)
        : undefined,
    queryKey: ["getMatchesByUserId", creatorId],
    enabled: typeof creatorId === "number",
    throwOnError: false,
  });
};
