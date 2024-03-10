import { redirect } from "next/navigation";
import { deleteCookie } from "cookies-next";
import axios from "axios";

import { reIssueAccessToken } from "./auth";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVER_VERSION = "/api/v1";

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(config => {
  const accessToken =
    localStorage.getItem("accessToken") ??
    sessionStorage.getItem("accessToken");

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use(
  async response => {
    const { config, status } = response;
    const refreshToken = localStorage.getItem("refreshToken");

    if (status === 401 || status === 404) {
      if (status === 404) {
        deleteCookie("isAuthenticated");

        return redirect("/login");
      }

      const newAccessToken = await reIssueAccessToken(refreshToken ?? "");

      if (newAccessToken) {
        localStorage.setItem("accessToken", newAccessToken);

        config.headers.Authorization = `Bearer ${newAccessToken}`;

        return instance(config);
      }
    }

    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);
