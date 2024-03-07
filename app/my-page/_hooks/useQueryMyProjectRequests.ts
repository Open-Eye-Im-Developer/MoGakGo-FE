import { useQuery } from "@tanstack/react-query";

import { getProjectRequestsByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { RequestProjectSummary } from "@/app/_common/types/project";

export const useQueryMyProjectRequests = (creatorId?: number) => {
  const { data, isLoading } = useQuery<
    ResponseData<RequestProjectSummary> | undefined
  >({
    queryFn: () => getProjectRequestsByCreatorId(creatorId),
    queryKey: ["getProjectRequestsByCreatorId", creatorId],
    enabled: typeof creatorId === "number",
  });

  return { data, isLoading };
};
