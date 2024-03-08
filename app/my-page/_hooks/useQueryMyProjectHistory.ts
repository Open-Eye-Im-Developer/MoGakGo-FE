import { useQuery } from "@tanstack/react-query";

import { getMatchesByUserId } from "@/app/_common/api/matching";

import { ResponseData } from "@/app/_common/types/response";
import { Match } from "@/app/_common/types/matching";

export const useQueryMyProjectHistory = (creatorId?: number) => {
  const { data, isLoading } = useQuery<ResponseData<Match> | undefined>({
    queryFn: () => (creatorId ? getMatchesByUserId(creatorId) : undefined),
    queryKey: ["getProjectListByCreatorId", creatorId],
    enabled: typeof creatorId === "number",
    throwOnError: false,
  });

  return { data, isLoading };
};
