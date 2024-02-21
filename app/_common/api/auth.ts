import { SignUpUser, SignupRequest } from "@/app/signup/_type/signup.types";
import {
  GithubUrlResponse,
  reIssueAccessTokenResponse,
} from "@/app/login/_types/login.types";

import { getCookie } from "../utils/cookie";
import { instance } from "../api/instance";

export const patchSignup = async (request: SignupRequest) => {
  const { username, wantedJobs } = request;

  await instance.patch("/user/sign", {
    username,
    wantedJobs,
  });
};

// TODO: CORS 에러 해결하기
export const getGithubLoginUrl = async () => {
  const { data } = await instance.get<GithubUrlResponse>("/oauth2/login", {
    headers: {
      ignoreGlobalCatch: true,
    },
  });

  return data;
};

export const getSignUpUser = async () => {
  const { data } = await instance.get<SignUpUser>("/user");

  return data;
};

export const reIssueAccessToken = async () => {
  const refreshToken = getCookie("refreshToken");

  return await instance.post<reIssueAccessTokenResponse>("/auth/reissue", {
    refreshToken,
  });
};

export const deleteUser = async () => {
  return await instance.delete("/user");
};
