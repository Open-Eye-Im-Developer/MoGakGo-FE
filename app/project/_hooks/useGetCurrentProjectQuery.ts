import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { instance } from "@/app/_common/api/instance";

// TODO: axios 400 이상 코드를 어떻게 useQuery의 error로 넘기는지
function useGetCurrentProjectQuery() {
  const { user } = useAuthStore();

  const getCurrentProject = async () => {
    const { data } = await instance.get(`/projects/12/info`);

    return data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["current-project"],
    queryFn: getCurrentProject,
    staleTime: Infinity,
    enabled: user !== null,
    throwOnError: false,
  });

  if (isLoading || !data)
    return { project: null, matchingId: null, isError, error };

  const project = data.response[0];
  const matchingId = data.matchingId;

  return { project, matchingId, isError, error };
}

export default useGetCurrentProjectQuery;
