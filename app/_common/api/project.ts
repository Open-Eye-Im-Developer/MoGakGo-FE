import { AxiosError } from "axios";

import { ResponseError } from "../types/response.types";
import { instance } from "./instance";

interface RegionRank {
  densityRankByRegion: string[];
}

export const getRank = async (): Promise<
  RegionRank | ResponseError | undefined
> => {
  try {
    const { data } = await instance.get<RegionRank>("projects/density/rank");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
