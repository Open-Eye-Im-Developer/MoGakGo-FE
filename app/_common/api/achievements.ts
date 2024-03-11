import { SignUpUser } from "@/app/signup/_type/signup";

import { Achievement } from "../types/user";
import { instance } from "./instance";

export interface RequestUserAchievement {
  userId: SignUpUser["id"];
  achievementId: Achievement["achievementId"];
}

export const getAchievements = async (id?: Achievement["achievementId"]) => {
  if (!id) return Promise.reject("id is required");

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
