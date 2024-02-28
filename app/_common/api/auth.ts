import { toast } from "sonner";

import { SignUpUser, SignupRequest } from "@/app/signup/_type/signup";
import { reIssueAccessTokenResponse } from "@/app/login/_types/login.types";

import { instance } from "../api/instance";

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
  const { data } = await instance.get<SignUpUser>("/user");

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

    return data.accessToken;
  } catch (error) {
    console.error(error);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    toast.error("인증이 만료되었습니다. 재로그인이 필요합니다.");
  }
};
