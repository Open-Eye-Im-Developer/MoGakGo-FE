import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { instance } from "@/app/_common/api/instance";

import { ResponseData } from "@/app/_common/types/response";

// TODO: 프로젝트 카드 생성자가 아닌 사용자가 요청한 프로젝트 목록을 가져오지 못하도록 예외 처리
function useGetRequestListQuery(id: number, cursorId: number | null) {
  const getRequestList = async () => {
    try {
      const query = `${cursorId ? `cursorId=${cursorId}&` : ""}pageSize=5`;
      const { data } = await instance.get<ResponseData<RequestList>>(
        `/projects/${id}/requests?${query}`,
      );

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data;
      }
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["requestList", cursorId] as const,
    queryFn: getRequestList,
  });

  if (isLoading || !data) return { data: null };
  return { data };
}

export default useGetRequestListQuery;
