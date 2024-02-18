import { SignupRequest } from "@/app/signup/_type/signup.types";
import { GithubUrlResponse } from "@/app/login/_types/login.types";

import { getCookie } from "../utils/cookie";
import { instance } from "../api/instance";

export const postSignup = async (request: SignupRequest) => {
  const { username, wanted_job, bio, github_url, github_id, avatar_url } =
    request;

  await instance.post("/signup", {
    username,
    wanted_job,
    bio,
    github_id,
    avatar_url,
    github_url,
  });
};

export const postLogin = async () => {
  const { data } = await instance.post("/login");

  return data;
};

export const getGithubLoginUrl = async () => {
  const { data } = await instance.get<GithubUrlResponse>("/login");

  return data;
};

export const getUser = async () => {
  const accessToken = getCookie("accessToken");

  const { data } = await instance.get("/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const getAccessToken = async () => {
  const { data } = await instance.get(`/accessToken`);

  return data;
};
