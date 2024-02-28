import { instance } from "./instance";

export const getDevelopLanguages = async () => {
  const { data } = await instance.get("/user/develop-language");

  return data;
};
