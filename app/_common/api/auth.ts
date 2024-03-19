import { AxiosError } from "axios";

import { SignupRequest } from "@/app/signup/_type/signup";
import { reIssueAccessTokenResponse } from "@/app/login/_types/login.types";

import { toast } from "../utils/toast";
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
    // TODO: 백엔드 reissue api 수정 후 주석 해제
    // if (refreshToken === "") return navigate("/login");

    const { data } = await instance.post<reIssueAccessTokenResponse>(
      "/auth/reissue",
      {
        refreshToken,
      },
    );

    return data.accessToken;
  } catch (error) {
    console.error(error);

    localStorage.removeItem("accessToken");

    toast.error("인증이 만료되었습니다. 재로그인이 필요합니다.");

    // TODO: 백엔드 reissue api 수정 후 주석 해제
    // navigate("/login");
  }
};
