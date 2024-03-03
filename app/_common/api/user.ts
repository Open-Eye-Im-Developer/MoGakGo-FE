import { UserJandiRating } from "../types/user";
import { instance } from "./instance";

export const getJandiRatingByUserId = async (userId?: number) => {
  if (typeof userId !== "number") return;

  const { data } = await instance.get<UserJandiRating>(
    `/user/jandi-rating/${userId}`,
  );

  return data;
};
