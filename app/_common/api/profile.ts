import { ResponseData } from "../types/response";
import { Creator } from "../types/profile";
import { instance } from "./instance";

export const getProfileCard = async (
  region: string,
): Promise<ResponseData<Creator>> => {
  const { data } = await instance.get<ResponseData<Creator>>(
    `/profiles/${region}?cursorId=1&pageSize=5&sortOrder=ASC`,
  );
  return data;
};
