import { AxiosError } from "axios";

import { generateQueryString } from "@/app/my-page/_util/generateQueryString";

import { ResponseData } from "../types/response";
import {
  Creator,
  Like,
  LikeCount,
  Profile,
  ProfileLikeInfo,
} from "../types/profile";
import { instance } from "./instance";

interface ProfileCardRequest {
  region: string;
  cursorId?: number;
  isPublic: boolean;
}

export const getProfileCard = async ({
  region,
  cursorId,
  isPublic,
}: ProfileCardRequest) => {
  const query = `${cursorId ? `cursorId=${cursorId}&` : ""}pageSize=5&sortOrder=ASC`;
  const publicUrl = isPublic ? "/public" : "";
  const { data } = await instance.get<ResponseData<Profile>>(
    `${publicUrl}/profiles/${region}?${query}`,
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

  const queryString = generateQueryString(query);

  const { data } = await instance.get<ResponseData<Like>>(
    `profiles/list/${userId}/like?${queryString}`,
  );

  return data;
};

export const cancelLike = async (payload: {
  senderId: number;
  receiverId: number;
}) => {
  const { data } = await instance.delete("profiles/like", {
    data: payload,
  });

  return data;
};

interface ProfileLikeResponse {
  id: Creator["id"];
}

export const postLikeProfile = async ({
  senderId,
  receiverId,
}: ProfileLikeInfo) => {
  const { data } = await instance.post<ProfileLikeResponse>("/profiles/like", {
    senderId,
    receiverId,
  });
  return data;
};

export const deleteLikeProfile = async ({
  senderId,
  receiverId,
}: ProfileLikeInfo) => {
  await instance.delete("/profiles/like", { data: { senderId, receiverId } });
};
