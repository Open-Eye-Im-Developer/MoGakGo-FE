import { AxiosError } from "axios";

import { ResponseData, ResponseError } from "../types/response";
import { Creator, Like } from "../types/profile";
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
): Promise<Like | undefined> => {
  if (typeof userId !== "number") return;

  try {
    const { data } = await instance.get<Like>(`/profiles/${userId}/send/like`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getReceiveLikeCount = async (
  userId?: number,
): Promise<Like | undefined> => {
  if (typeof userId !== "number") return;

  try {
    const { data } = await instance.get<Like>(
      `/profiles/${userId}/receive/like`,);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
interface ProfileLikeBody {
  senderId: number;
  receiverId: number;
}

interface ProfileLikeResponse {
  id: number;
}

export const postLikeProfile = async ({
  senderId,
  receiverId,
}: ProfileLikeBody): Promise<
  ProfileLikeResponse | ResponseError | undefined
> => {
  try {
    const { data } = await instance.post<ProfileLikeResponse>(
      "/profiles/like",
      {
        senderId,
        receiverId,
      },
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const deleteLikeProfile = async ({
  senderId,
  receiverId,
}: ProfileLikeBody): Promise<ResponseError | undefined> => {
  try {
    await instance.delete("/profiles/like", { senderId, receiverId });
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
