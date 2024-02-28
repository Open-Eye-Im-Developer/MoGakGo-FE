"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

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

  useEffect(() => {
    if (!newAccessToken || !newRefreshToken) return;

    if (type === "session") {
      saveNewTokens(newAccessToken, newRefreshToken);
    } else {
      saveUpdatedTokens(newAccessToken, newRefreshToken);
    }
  }, [newAccessToken, newRefreshToken, type]);

  return {
    newAccessToken,
    newRefreshToken,
  };
};
