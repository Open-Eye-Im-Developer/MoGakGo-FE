import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";

// TODO: 프로젝트 카드 참가 요청이 왔을 때만, query가 호출되도록 로직 추가
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
    refetchInterval: 5000,
  });
}

export default useGetRequestListQuery;
