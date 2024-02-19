import { SignupRequest } from "@/app/signup/_type/signup.types";
import {
  GithubUrlResponse,
  reIssueAccessTokenResponse,
} from "@/app/login/_types/login.types";

import { getCookie } from "../utils/cookie";
import { instance } from "../api/instance";

export const postSignup = async (request: SignupRequest) => {
  const { username, wanted_job } = request;

  await instance.post("/signup", {
    username,
    wanted_job,
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

export const getUser = async () => {
  const { data } = await instance.get("/user");

  return data;
};

export const reIssueAccessToken = async () => {
  const refreshToken = getCookie("refreshToken");

  return await instance.post<reIssueAccessTokenResponse>("/auth/reissue", {
    refreshToken,
  });
};
