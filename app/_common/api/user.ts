import { z } from "zod";

import { editFormSchema } from "@/app/my-page/_util/validation";

import { UserJandiRating } from "../types/user";
import { instance } from "./instance";

export const getJandiRatingByUserId = async (userId?: number) => {
  if (typeof userId !== "number") return;

  const { data } = await instance.get<UserJandiRating>(
    `/user/jandi-rating/${userId}`,
  );

  return data;
};

export const updateUser = async (body: z.infer<typeof editFormSchema>) => {
  const { data } = await instance.patch("/user", body);

  return data;
};
