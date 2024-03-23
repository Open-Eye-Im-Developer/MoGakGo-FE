import { useQuery } from "@tanstack/react-query";

import { useQuerySignUpUser } from "@/app/signup/_hooks/useQuerySignUpUser";
import { getAchievements } from "@/app/_common/api/achievements";

import { Achievement } from "@/app/_common/types/user";

export const useQueryAchievements = (staticUserId?: number) => {
  const { data: userData } = useQuerySignUpUser(!!staticUserId);
  const userId = staticUserId ?? userData?.id;

  const { data, isLoading, isFetching, isPending, isFetched } = useQuery<
    Achievement[]
  >({
    queryKey: ["achievements", userId],
    enabled: !!userId,
    queryFn: () => getAchievements(userId),
  });

  if (!data || !userData) return { achievements: [], myAchievement: null };

  return {
    achievements: data,
    myCurrentAchievement: data.find(
      achievement => achievement.achievementId === userData?.achievementId,
    ),
    isLoading,
    isFetching,
    isPending,
    isFetched,
    userId,
  };
};
