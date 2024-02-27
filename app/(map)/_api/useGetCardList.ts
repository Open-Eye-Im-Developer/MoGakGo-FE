import { useQuery } from "@tanstack/react-query";

import { getProjectCard } from "@/app/_common/api/project";
import { getProfileCard } from "@/app/_common/api/profile";

import { checkInstanceOfResponseError } from "@/app/_common/utils/checkInstanceOfResponseError";

// TODO: 페이지네이션 구현
const useGetCardList = (region: string) => {
  const projectResponse = useQuery({
    queryKey: ["project-list", region] as const,
    queryFn: () => getProjectCard(region),
    enabled: !!region,
  });

  const profileResponse = useQuery({
    queryKey: ["profile-list", region] as const,
    queryFn: () => getProfileCard(region),
    enabled: !!region,
  });

  if (
    projectResponse.isLoading ||
    !projectResponse.data ||
    profileResponse.isLoading ||
    !profileResponse.data
  ) {
    return { data: undefined, isLoading: true, isError: false, error: null };
  }

  if (
    checkInstanceOfResponseError(projectResponse.data) ||
    checkInstanceOfResponseError(profileResponse.data)
  ) {
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      error: projectResponse.data,
    };
  }

  const { data: projectList } = projectResponse.data;
  const { data: profileList } = profileResponse.data;

  return {
    data: { projectList, profileList },
    isLoading: false,
    isError: false,
    error: null,
  };
};

export default useGetCardList;
