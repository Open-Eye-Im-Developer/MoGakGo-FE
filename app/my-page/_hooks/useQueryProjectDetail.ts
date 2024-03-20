import { useQuery } from "@tanstack/react-query";

import { instance } from "@/app/_common/api/instance";

export const useQueryProjectDetail = (
  projectId: number | null,
  isModal: boolean,
  userId?: number,
) => {
  const getProjectDetail = async () => {
    const { data } = await instance.get(`/projects/${projectId}/${userId}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["get-project-detail", projectId],
    queryFn: getProjectDetail,
    enabled: projectId !== null && isModal,
    throwOnError: false,
  });

  console.log(data, isLoading);
  return { projectDetail: data, isLoading };
};
