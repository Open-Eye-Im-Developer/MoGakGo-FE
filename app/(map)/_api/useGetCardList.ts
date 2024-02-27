import { useQuery } from "@tanstack/react-query";

import { getProjectCard } from "@/app/_common/api/project";
import { getProfileCard } from "@/app/_common/api/profile";

import REGION_CODE from "@/app/_common/constants/regionCode";

import { checkInstanceOfResponseError } from "@/app/_common/utils/checkInstanceOfResponseError";

// TODO: 페이지네이션 구현
const useGetCardList = (regionCode: number) => {
  const regionName =
    Object.keys(REGION_CODE).find(
      region => REGION_CODE[region] === regionCode,
    ) ?? "";
  const region = regionName.toUpperCase();

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

  if (checkInstanceOfResponseError(projectResponse.data)) {
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      error: projectResponse.data,
    };
  }

  if (checkInstanceOfResponseError(profileResponse.data)) {
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      error: profileResponse.data,
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
