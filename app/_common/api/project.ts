import { ResponseData } from "../types/response";
import { Project } from "../types/project";
import { instance } from "./instance";

interface RegionRank {
  densityRankByRegion: string[];
}

export const getRank = async (): Promise<RegionRank> => {
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
