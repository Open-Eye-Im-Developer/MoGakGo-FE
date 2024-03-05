import { AxiosError } from "axios";

import { ResponseData, ResponseError } from "../types/response";
import { Project } from "../types/project";
import { Review } from "../components/types/review";
import { instance } from "./instance";

interface RegionRank {
  densityRankByRegion: string[];
}

export const getRank = async (): Promise<
  RegionRank | ResponseError | undefined
> => {
  try {
    const { data } = await instance.get<RegionRank>("/projects/density/rank");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getProjectCard = async (
  region: string,
): Promise<ResponseData<Project> | ResponseError | undefined> => {
  try {
    const { data } = await instance.get<ResponseData<Project>>(
      `/projects/${region}?cursorId=1&pageSize=5&sortOrder=ASC`,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const postReview = async ({
  projectId,
  rating,
  senderId,
  receiverId,
}: Review) => {
  const { data } = await instance.post(`/review`, {
    rating,
    projectId,
    senderId,
    receiverId,
  });

  return data;
};
