import { useQuery } from "@tanstack/react-query";

import { getProjectListByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { Project } from "@/app/_common/types/project";

export const useQueryMyProjectList = (creatorId?: number) => {
  const { data, isLoading } = useQuery<ResponseData<Project> | undefined>({
    queryFn: () => getProjectListByCreatorId(creatorId),
    queryKey: ["getProjectListByCreatorId", creatorId],
    enabled: typeof creatorId === "number",
  });

  return { data, isLoading };
};
