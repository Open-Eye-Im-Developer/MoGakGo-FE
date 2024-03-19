"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useQuerySignUpUser } from "@/app/signup/_hooks/useQuerySignUpUser";

import { setCookie } from "../utils/cookie";
import { useAuthStore } from "../store/useAuthStore";

const saveNewTokens = (newAccessToken: string, newRefreshToken: string) => {
  sessionStorage.setItem("accessToken", newAccessToken);
  sessionStorage.setItem("refreshToken", newRefreshToken);
};

const saveUpdatedTokens = (newAccessToken: string, newRefreshToken: string) => {
  localStorage.setItem("accessToken", newAccessToken);

  setCookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 14,
  });
};

export const useSearchTokens = (type: "local" | "session") => {
  const newAccessToken = useSearchParams().get("accessToken") ?? "";
  const newRefreshToken = useSearchParams().get("refreshToken") ?? "";

  const router = useRouter();
  const { data } = useQuerySignUpUser(!!newAccessToken);
  const { setUser, user } = useAuthStore();

  const hasNoTokens = !newAccessToken || !newRefreshToken;

  useEffect(() => {
    if (hasNoTokens) return;

    if (type === "session") {
      hasNoTokens
        ? router.push("/login")
        : saveNewTokens(newAccessToken, newRefreshToken);
    } else {
      saveUpdatedTokens(newAccessToken, newRefreshToken);
    }
    if (data && !user) setUser(data);
  }, [
    newAccessToken,
    newRefreshToken,
    type,
    data,
    setUser,
    user,
    router,
    hasNoTokens,
  ]);

  return {
    newAccessToken,
    newRefreshToken,
  };
};
