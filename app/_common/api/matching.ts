import { AxiosError } from "axios";

import { ResponseData } from "../types/response";
import { Match } from "../types/matching";
import { instance } from "./instance";

export const getMatchesByUserId = async (
  userId?: number,
): Promise<ResponseData<Match> | undefined> => {
  if (typeof userId !== "number") return;

  try {
    const { data } = await instance.get<ResponseData<Match>>(
      `/matches/my/${userId}?cursorId=&pageSize=5&sortOrder=ASC`,
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const cancelMatch = async (id: number) => {
  const { data } = await instance.post(`/matches/${id}/cancel`);

  return data;
};
