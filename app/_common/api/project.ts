import { AxiosError } from "axios";

import { ResponseData, ResponseError } from "../types/response";
import { Project } from "../types/project";
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
      `/projects/${region}?pageSize=5&sortOrder=ASC`,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
