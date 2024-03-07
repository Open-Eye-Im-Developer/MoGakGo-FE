import { Achievement } from "@/app/achievements/_components/AchievementList";

import { User } from "../types/user";
import { instance } from "./instance";

export interface RequestUserAchievement {
  userId: User["id"];
  achievementId: Achievement["achievementId"];
}

export const getNotAchievedList = async (id: Achievement["achievementId"]) => {
  const { data } = await instance.get<Achievement[]>(`/achievements/${id}`);

  return data;
};

export const patchUserAchievement = async ({
  userId,
  achievementId,
}: RequestUserAchievement) => {
  const { data } = await instance.patch<Achievement>("/user/achievement", {
    userId,
    achievementId,
  });

  return data;
};
