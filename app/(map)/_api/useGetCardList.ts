import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getProjectCard } from "@/app/_common/api/project";
import { getProfileCard } from "@/app/_common/api/profile";

import { formatRegionName } from "../_utils/formatRegionName";

const useGetCardList = (regionCode: number) => {
  const region = formatRegionName(regionCode).toUpperCase();
  const [isGetProfile, setIsGetProfile] = useState(false);

  const {
    data: projectList,
    isLoading: isProjectLoading,
    fetchNextPage: fetchProject,
    hasNextPage: hasNextProject,
    isFetchingNextPage: isFetchingProject,
  } = useInfiniteQuery({
    queryKey: ["project-list", region] as const,
    queryFn: ({ pageParam = 0 }) => {
      return getProjectCard({ region, cursorId: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (!lastPage.hasNext) {
        setIsGetProfile(true);
        return;
      }
      const cursorId = lastPage.data[lastPage.data.length - 1].projectId;
      return cursorId;
    },
    enabled: !!region,
  });

  const {
    data: profileList,
    isLoading: isProfileLoading,
    fetchNextPage: fetchProfile,
    hasNextPage: hasNextProfile,
    isFetchingNextPage: isFetchingProfile,
  } = useInfiniteQuery({
    queryKey: ["profile-list", region] as const,
    queryFn: ({ pageParam = 0 }) => {
      return getProfileCard({ region, cursorId: pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (!lastPage.hasNext) {
        setIsGetProfile(false);
        return;
      }
      const cursorId = lastPage.data[lastPage.data.length - 1].id;
      return cursorId;
    },
    enabled: !!region && isGetProfile,
  });

  const defaultValue = {
    isProjectLoading,
    fetchProject,
    hasNextProject,
    isFetchingProject,
    isProfileLoading,
    fetchProfile,
    hasNextProfile,
    isFetchingProfile,
  };

  if (isProjectLoading || !projectList) {
    return {
      cardList: { projectList: [], profileList: [] },
      ...defaultValue,
    };
  }

  if (isProfileLoading || !profileList) {
    return {
      cardList: { projectList, profileList: [] },
      ...defaultValue,
    };
  }

  return {
    cardList: { projectList, profileList },
    ...defaultValue,
  };
};

export default useGetCardList;
