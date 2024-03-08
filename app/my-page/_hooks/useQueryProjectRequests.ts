import { useQuery } from "@tanstack/react-query";

import { getProjectRequestsByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { RequestProjectSummary } from "@/app/_common/types/project";

export const useQueryProjectRequests = (
  creatorId?: number,
  pageSize: number = 5,
) => {
  return useQuery<ResponseData<RequestProjectSummary> | undefined>({
    queryFn: () =>
      creatorId
        ? getProjectRequestsByCreatorId(creatorId, null, pageSize)
        : undefined,
    queryKey: ["getProjectRequestsByCreatorId", creatorId],
    enabled: typeof creatorId === "number",
  });
};
