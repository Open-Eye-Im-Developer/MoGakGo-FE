import { useQuery } from "@tanstack/react-query";

// TODO: 프로젝트 카드 생성자가 아닌 사용자가 요청한 프로젝트 목록을 가져오지 못하도록 예외 처리
function useGetRequestListQuery(id: number, cursorId: number) {
  const queryFunction = async () => {
    const response = await fetch(
      `/api/project/request/find?id=${id}&cursorId=${cursorId}`,
    );
    const data: RequestListResponseData = await response.json();
    return data;
  };

  return useQuery({
    queryKey: ["requestList", cursorId] as const,
    queryFn: queryFunction,
  });
}

export default useGetRequestListQuery;
