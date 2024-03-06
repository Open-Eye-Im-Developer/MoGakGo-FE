"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

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
  const { data } = useQuerySignUpUser(!!newAccessToken);
  const { setUser, user } = useAuthStore();

  useEffect(() => {
    if (!newAccessToken || !newRefreshToken) return;

    if (type === "session") {
      saveNewTokens(newAccessToken, newRefreshToken);
    } else {
      saveUpdatedTokens(newAccessToken, newRefreshToken);
    }
    if (data && !user) setUser(data);
  }, [newAccessToken, newRefreshToken, type, data]);

  return {
    newAccessToken,
    newRefreshToken,
  };
};
