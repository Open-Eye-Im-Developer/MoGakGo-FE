import { useQuery } from "@tanstack/react-query";

import { getNotAchievedList } from "@/app/_common/api/achievements";

import { Achievement } from "../_components/AchievementList";

export const useQueryNotAchievedList = (
  achievementId: Achievement["achievementId"],
) => {
  const query = useQuery<Achievement[]>({
    queryKey: ["achievements", achievementId],
    queryFn: () => getNotAchievedList(achievementId),
  });

  return query;
};
