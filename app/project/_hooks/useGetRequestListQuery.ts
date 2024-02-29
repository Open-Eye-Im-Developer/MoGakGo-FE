import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";

function useGetRequestListQuery(id: number, creatorId: number) {
  const { user } = useAuthStore();

  const queryFunction = async () => {
    const response = await fetch(`/api/project/request/find?id=${id}`);
    const data: RequestListResponseData = await response.json();
    return data;
  };

  return useQuery({
    queryKey: ["requestList"] as const,
    queryFn: queryFunction,
    enabled: user.id === creatorId,
  });
}

export default useGetRequestListQuery;
