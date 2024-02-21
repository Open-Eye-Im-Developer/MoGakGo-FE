import { SignUpUser, SignupRequest } from "@/app/signup/_type/signup.types";
import { reIssueAccessTokenResponse } from "@/app/login/_types/login.types";

import { getCookie } from "../utils/cookie";
import { instance } from "../api/instance";

export const patchSignup = async ({ username, wantedJobs }: SignupRequest) => {
  const { data } = await instance.patch("/user/sign", {
    headers: {
      ignoreGlobalCatch: true,
    },
    username,
    wantedJobs,
  });

  return data;
};

export const deleteUser = async () => {
  const { data } = await instance.delete("/user");

  return data;
};

export const getSignUpUser = async () => {
  const { data } = await instance.get<SignUpUser>("/user");

  return data;
};

export const reIssueAccessToken = async () => {
  const refreshToken = getCookie("refreshToken");

  const { data } = await instance.post<reIssueAccessTokenResponse>(
    "/auth/reissue",
    {
      refreshToken,
    },
  );

  return data;
};
