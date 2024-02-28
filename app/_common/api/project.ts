import { AxiosError } from "axios";

import { ResponseData, ResponseError } from "../types/response";
import { Project } from "../types/project";
import { instance } from "./instance";

interface RegionRank {
  densityRankByRegion: string[];
}

export const getRank = async (): Promise<RegionRank> => {
  const { data } = await instance.get<RegionRank>("/projects/density/rank");
  return data;
};

export const getProjectCard = async (
  region: string,
): Promise<ResponseData<Project>> => {
  const { data } = await instance.get<ResponseData<Project>>(
    `/projects/${region}?cursorId=1&pageSize=5&sortOrder=ASC`,
  );
  return data;
};
