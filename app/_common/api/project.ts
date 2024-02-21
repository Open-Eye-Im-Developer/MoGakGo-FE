import { instance } from "./instance";

interface RegionRank {
  densityRankByRegion: string[];
}

export const getRank = async () => {
  const { data } = await instance.get<RegionRank>('projects/density/rank');
  return data;
};