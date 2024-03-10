import { AxiosError } from "axios";

import { ResponseData } from "../types/response";
import { Creator, Like, LikeCount } from "../types/profile";
import { instance } from "./instance";

interface ProfileCardRequest {
  region: string;
  cursorId?: number;
}

export const getProfileCard = async ({
  region,
  cursorId,
}: ProfileCardRequest) => {
  const query = `${cursorId ? `cursorId=${cursorId}&` : ""}pageSize=5&sortOrder=ASC`;
  const { data } = await instance.get<ResponseData<Creator>>(
    `/profiles/${region}?${query}`,
  );
  return data;
};

export const getSendLikeCount = async (
  userId?: number,
): Promise<LikeCount | undefined> => {
  if (typeof userId !== "number") return;

  try {
    const { data } = await instance.get<LikeCount>(
      `/profiles/${userId}/send/like`,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getReceiveLikeCount = async (
  userId?: number,
): Promise<LikeCount | undefined> => {
  if (typeof userId !== "number") return;

  try {
    const { data } = await instance.get<LikeCount>(
      `/profiles/${userId}/receive/like`,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getLikes = async (
  userId: number,
  cursorId?: number,
  pageSize?: number,
  sortOrder?: "ASC" | "DESC",
): Promise<ResponseData<Like>> => {
  const query = [
    ["cursorId", cursorId],
    ["pageSize", pageSize ?? 5],
    ["sortOrder", sortOrder ?? "ASC"],
  ];

  const queryString = query
    .filter(([, value]) => value !== undefined)
    .map(q => q.join("="))
    .join("&");

  const { data } = await instance.get<ResponseData<Like>>(
    `profiles/list/${userId}/like?${queryString}`,
  );

  return data;
};
