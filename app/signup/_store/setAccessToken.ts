import { setCookie } from "@/app/_common/utils/cookie";

const expireDate = 1000 * 60 * 60;

export const setAccessToken = (accessToken: string) => {
  return setCookie("accessToken", accessToken, expireDate);
};
