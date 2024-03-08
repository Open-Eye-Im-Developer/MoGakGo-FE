import { AxiosError } from "axios";

import { ResponseData } from "../types/response";
import {
  Project,
  ProjectSummary,
  RequestProjectSummary,
} from "../types/project";
import { Review } from "../components/types/review";
import { instance } from "./instance";

interface RegionRank {
  densityRankByRegion: string[];
}

export const getRank = async () => {
  const { data } = await instance.get<RegionRank>("/projects/density/rank");
  return data;
};

interface ProjectCardRequest {
  region: string;
  cursorId?: number;
}

export const getProjectCard = async ({
  region,
  cursorId,
}: ProjectCardRequest) => {
  const query = `${cursorId ? `cursorId=${cursorId}&` : ""}pageSize=5&sortOrder=ASC`;
  const { data } = await instance.get<ResponseData<Project>>(
    `/projects/${region}?${query}`,
  );
  return data;
};

export const getProjectListByCreatorId = async (
  creatorId?: number,
): Promise<ResponseData<ProjectSummary> | undefined> => {
  if (typeof creatorId !== "number") return;

  try {
    const { data } = await instance.get<ResponseData<ProjectSummary>>(
      `/projects/list/${creatorId}?cursorId=&pageSize=5&sortOrder=ASC`,
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getProjectRequestsByCreatorId = async (
  creatorId?: number,
): Promise<ResponseData<RequestProjectSummary> | undefined> => {
  if (typeof creatorId !== "number") return;

  try {
    const { data } = await instance.get<ResponseData<RequestProjectSummary>>(
      `/project-requests/${creatorId}?cursorId=&pageSize=5&sortOrder=ASC`,
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
