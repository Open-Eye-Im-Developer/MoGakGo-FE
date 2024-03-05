import { useQuery } from "@tanstack/react-query";

import { getProjectListByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { ProjectSummary } from "@/app/_common/types/project";

export const useQueryMyProjectList = (creatorId?: number) => {
  const { data, isLoading } = useQuery<
    ResponseData<ProjectSummary> | undefined
  >({
    queryFn: () => getProjectListByCreatorId(creatorId),
    queryKey: ["getProjectListByCreatorId", creatorId],
    enabled: typeof creatorId === "number",
  });

  return { data, isLoading };
};
