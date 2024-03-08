import { useQuery } from "@tanstack/react-query";

import { getAchievements } from "@/app/_common/api/achievements";

import { Achievement } from "@/app/_common/types/user";

export const useQueryAchievements = (userId: Achievement["userId"]) => {
  const query = useQuery<Achievement[]>({
    queryKey: ["achievements", userId],
    queryFn: () => getAchievements(userId),
  });

  return query;
};
