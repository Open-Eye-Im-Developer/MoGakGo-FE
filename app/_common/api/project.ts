import { ResponseError } from "../types/response.types";
import { instance } from "./instance";

interface RegionRank {
  densityRankByRegion: string[];
}

export const getRank = async () => {
  const { data } = await instance.get<RegionRank | ResponseError>(
    "projects/density/rank",
  );
  return data;
};
