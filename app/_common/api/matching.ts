import { ResponseData } from "../types/response";
import { Match } from "../types/matching";
import { instance } from "./instance";

export const getMatchesByUserId = async (
  userId: number,
  cursorId?: number,
  pageSize?: number,
  sortOrder?: "ASC" | "DESC",
): Promise<ResponseData<Match>> => {
  const query = [
    ["cursorId", cursorId],
    ["pageSize", pageSize ?? 5],
    ["sortOrder", sortOrder ?? "ASC"],
  ];

  const queryString = query
    .filter(([, value]) => value !== undefined)
    .map(q => q.join("="))
    .join("&");

  const { data } = await instance.get<ResponseData<Match>>(
    `/matches/my/${userId}?${queryString}`,
  );

  return data;
};

export const cancelMatch = async (id: number) => {
  const { data } = await instance.post(`/matches/${id}/cancel`);

  return data;
};
