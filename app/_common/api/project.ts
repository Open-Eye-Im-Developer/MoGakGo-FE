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

export const getProjectListByCreatorId = async (
  creatorId: number,
  cursorId?: number,
  pageSize?: number,
  sortOrder?: "ASC" | "DESC",
): Promise<ResponseData<ProjectSummary> | undefined> => {
  const query = [
    ["cursorId", cursorId],
    ["pageSize", pageSize ?? 5],
    ["sortOrder", sortOrder ?? "ASC"],
  ];

  const queryString = query
    .filter(([, value]) => value !== undefined)
    .map(q => q.join("="))
    .join("&");

  const { data } = await instance.get<ResponseData<ProjectSummary>>(
    `/projects/list/${creatorId}?${queryString}`,
  );

  return data;
};

export const getProjectRequestsByCreatorId = async (
  creatorId: number,
  cursorId?: number,
  pageSize?: number,
  sortOrder?: "ASC" | "DESC",
): Promise<ResponseData<RequestProjectSummary> | undefined> => {
  const query = [
    ["cursorId", cursorId],
    ["pageSize", pageSize ?? 5],
    ["sortOrder", sortOrder ?? "ASC"],
  ];

  const queryString = query
    .filter(([, value]) => value !== undefined)
    .map(q => q.join("="))
    .join("&");

  const { data } = await instance.get<ResponseData<RequestProjectSummary>>(
    `/project-requests/${creatorId}?${queryString}`,
  );

  return data;
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
