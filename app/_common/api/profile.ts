import { ResponseData } from "../types/response";
import { Creator } from "../types/profile";
import { instance } from "./instance";

interface ProfileCardRequest {
  region: string;
  cursorId?: number;
}

export const getProfileCard = async ({
  region,
  cursorId,
}: ProfileCardRequest) => {
  const query = `${cursorId ? `cursorId=${cursorId}&` : ""}pageSize=5&sortOrder=ASC`;
  const { data } = await instance.get<ResponseData<Creator>>(
    `/profiles/${region}?${query}`,
  );
  return data;
};
