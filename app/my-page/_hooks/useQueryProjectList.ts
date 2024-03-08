import { useQuery } from "@tanstack/react-query";

import { getProjectListByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { ProjectSummary } from "@/app/_common/types/project";

export const useQueryProjectList = (
  creatorId?: number,
  pageSize: number = 5,
) => {
  return useQuery<ResponseData<ProjectSummary> | undefined>({
    queryFn: () =>
      creatorId
        ? getProjectListByCreatorId(creatorId, null, pageSize)
        : undefined,
    queryKey: ["getProjectListByCreatorId", creatorId],
    enabled: typeof creatorId === "number",
  });
};
