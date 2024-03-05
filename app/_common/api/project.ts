import { AxiosError } from "axios";

import { ResponseData, ResponseError } from "../types/response";
import {
  Project,
  ProjectSummary,
  ReqeustProjectSummary,
} from "../types/project";
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
): Promise<ResponseData<ReqeustProjectSummary> | undefined> => {
  if (typeof creatorId !== "number") return;

  try {
    const { data } = await instance.get<ResponseData<ReqeustProjectSummary>>(
      `/project-requests/${creatorId}?cursorId=&pageSize=5&sortOrder=ASC`,
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
