import { useQuery } from "@tanstack/react-query";

import { useQuerySignUpUser } from "@/app/signup/_hooks/useQuerySignUpUser";
import { getAchievements } from "@/app/_common/api/achievements";

import { Achievement } from "@/app/_common/types/user";

export const useQueryAchievements = () => {
  const { data: userData } = useQuerySignUpUser();
  const userId = userData?.id;

  const { data, isLoading } = useQuery<Achievement[]>({
    queryKey: ["achievements", userId],
    enabled: !!userId,
    queryFn: () => getAchievements(userId),
  });

  if (!data || !userData || isLoading)
    return { achievements: [], myAchievement: null };

  return {
    achievements: data,
    myAchievement: data.find(
      achievement => achievement.achievementId === userData?.achievementId,
    ),
  };
};