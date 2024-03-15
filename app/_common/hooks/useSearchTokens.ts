"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useQuerySignUpUser } from "@/app/signup/_hooks/useQuerySignUpUser";

import { useAuthStore } from "../store/useAuthStore";

const saveNewTokens = (newAccessToken: string, newRefreshToken: string) => {
  sessionStorage.setItem("accessToken", newAccessToken);
  sessionStorage.setItem("refreshToken", newRefreshToken);
};

const saveUpdatedTokens = (newAccessToken: string, newRefreshToken: string) => {
  localStorage.setItem("accessToken", newAccessToken);
  localStorage.setItem("refreshToken", newRefreshToken);
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
