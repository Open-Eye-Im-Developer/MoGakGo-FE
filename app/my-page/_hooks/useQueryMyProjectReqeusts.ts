import { useQuery } from "@tanstack/react-query";

import { getProjectRequestsByCreatorId } from "@/app/_common/api/project";

import { ResponseData } from "@/app/_common/types/response";
import { ReqeustProjectSummary } from "@/app/_common/types/project";

export const useQueryMyProjectReqeusts = (creatorId?: number) => {
  const { data, isLoading } = useQuery<
    ResponseData<ReqeustProjectSummary> | undefined
  >({
    queryFn: () => getProjectRequestsByCreatorId(creatorId),
    queryKey: ["getProjectReqeustsByCreatorId", creatorId],
    enabled: typeof creatorId === "number",
  });

  return { data, isLoading };
};
