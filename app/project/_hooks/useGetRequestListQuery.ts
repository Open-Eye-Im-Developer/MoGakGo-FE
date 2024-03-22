import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { instance } from "@/app/_common/api/instance";

import { ResponseData } from "@/app/_common/types/response";

import { RequestList } from "../_types/type";

// TODO: 프로젝트 카드 생성자가 아닌 사용자가 요청한 프로젝트 목록을 가져오지 못하도록 예외 처리
function useGetRequestListQuery(
  id: number,
  cursorId: number | null,
  creatorId: number,
) {
  const { user } = useAuthStore();
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
    enabled: user !== null && user.id === creatorId,
    refetchInterval: 5000,
  });

  if (isLoading || !data) return { data: null };
  return { data };
}

export default useGetRequestListQuery;
