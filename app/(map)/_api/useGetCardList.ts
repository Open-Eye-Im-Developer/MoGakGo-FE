import { useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { getProjectCard } from "@/app/_common/api/project";
import { getProfileCard } from "@/app/_common/api/profile";

import { ResponseData } from "@/app/_common/types/response";
import { Project } from "@/app/_common/types/project";
import { Profile } from "@/app/_common/types/profile";

import { formatRegionName } from "../_utils/formatRegionName";

const useGetCardList = (regionCode: number) => {
  const region = formatRegionName(regionCode).toUpperCase();
  const isGetProfile = useRef(false);
  const { getUser } = useAuthStore();

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
        isGetProfile.current = true;
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
      return getProfileCard({
        region,
        cursorId: pageParam,
        isPublic: !getUser(),
      });
    },
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (!lastPage.hasNext) {
        isGetProfile.current = false;
        return;
      }
      const cursorId = lastPage.data[lastPage.data.length - 1].response.id;
      return cursorId;
    },
    enabled: !!region && isGetProfile.current,
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
      cardList: {
        projectList: projectList.pages.reduce(
          (list: Project[], response: ResponseData<Project>) => {
            return list.concat(response.data);
          },
          [],
        ),
        profileList: [],
      },
      ...defaultValue,
    };
  }

  return {
    cardList: {
      projectList: projectList.pages.reduce(
        (list: Project[], response: ResponseData<Project>) => {
          return list.concat(response.data);
        },
        [],
      ),
      profileList: profileList.pages.reduce(
        (list: Profile[], response: ResponseData<Profile>) => {
          return list.concat(response.data);
        },
        [],
      ),
    },
    ...defaultValue,
  };
};

export default useGetCardList;
