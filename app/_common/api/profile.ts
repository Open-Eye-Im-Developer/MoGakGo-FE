import { AxiosError } from "axios";

import { ResponseData, ResponseError } from "../types/response";
import { Creator } from "../types/profile";
import { instance } from "./instance";

export const getProfileCard = async (
  region: string,
): Promise<ResponseData<Creator> | ResponseError | undefined> => {
  try {
    const { data } = await instance.get<ResponseData<Creator>>(
      `/profiles/${region}?cursorId=1&pageSize=5&sortOrder=ASC`,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
