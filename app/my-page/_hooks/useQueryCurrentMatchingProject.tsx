import { useQuery } from "@tanstack/react-query";

import { instance } from "@/app/_common/api/instance";

import { Project } from "@/app/_common/types/project";

interface CurrentMatchingProjectResponse {
  matchingId: number;
  response: Project;
  projectRequesterId: number;
}

export const useQueryCurrentMatchingProject = (userId?: number) => {
  const getCurrentMatchingProject = async () => {
    const { data } = await instance.get<CurrentMatchingProjectResponse>(
      `/matches/my/${userId}/now`,
    );
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["current-match-project", userId],
    queryFn: getCurrentMatchingProject,
    enabled: userId !== null && typeof userId === "number",
    throwOnError: false,
  });

  if (isLoading || !data)
    return { matchingId: null, project: null, isLoading, isError };

  const { matchingId, response } = data;

  if (matchingId === null)
    return { matchingId: null, project: null, isLoading, isError };

  return { matchingId, project: response, isLoading, isError };
};
