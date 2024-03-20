import { useQuery } from "@tanstack/react-query";

import { instance } from "@/app/_common/api/instance";

export const useQueryCurrentMatchingProject = (userId?: number) => {
  const getCurrentMatchingProject = async () => {
    const { data } = await instance.get(`/matches/my/${userId}/now`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["current-match-project", userId],
    queryFn: getCurrentMatchingProject,
    enabled: userId !== null && typeof userId === "number",
    throwOnError: false,
  });

  if (isLoading || !data) return { matchingId: null, project: null, isLoading };

  const { matchingId, response } = data;

  if (matchingId === null) return { matchingId: null, project: null, isLoading };

  return { matchingId, project: response, isLoading };
};
