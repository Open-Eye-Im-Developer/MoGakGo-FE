import { AxiosError } from "axios";

import { SignupRequest } from "@/app/signup/_type/signup";
import { reIssueAccessTokenResponse } from "@/app/login/_types/login.types";

import { navigate } from "../utils/redirect";
import { User } from "../types/user";
import { instance } from "../api/instance";

export const postLogin = async (code: string) => {
  try {
    const { data } = await instance.post("/auth/login", null, {
      params: { code },
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);

      if (error.response?.status === 500) {
        navigate("/login");
      }
    }
  }
};

export const patchSignup = async ({ username, wantedJobs }: SignupRequest) => {
  const { data } = await instance.patch("/user/sign", {
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
  const { data } = await instance.get<User>("/user");

  return data;
};

export const reIssueAccessToken = async (refreshToken: string) => {
  try {
    const { data } = await instance.post<reIssueAccessTokenResponse>(
      "/auth/reissue",
      {
        refreshToken,
      },
    );

    const { accessToken } = data;

    if (!accessToken)
      throw new Error("accessToken이 새로 발급되지 않았습니다.");

    return accessToken;
  } catch (error) {
    console.error(error);

    if (error instanceof AxiosError) {
      error.response?.status === 404 && navigate("/login");
    }
  }
};
