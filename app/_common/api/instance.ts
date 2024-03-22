import axios from "axios";

import { getCookie } from "../utils/cookie";
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
  if (config.url?.includes("/auth/login")) {
    config.headers.Authorization = null;

    return config;
  }

  const accessToken =
    localStorage.getItem("accessToken") ??
    sessionStorage.getItem("accessToken");

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const { status, config } = error.response;

    const refreshToken = await getCookie("refreshToken", "");

    if (status === 401 && config.url.includes("/auth/login"))
      return Promise.reject(error);

    if (status === 401 && !config.url.includes("/auth/login")) {
      if (
        config.url !== "/auth/reissue" ||
        config.url.includes("/auth/login")
      ) {
        const newAccessToken = await reIssueAccessToken(refreshToken);

        if (!newAccessToken) return Promise.reject(error);

        localStorage.setItem("accessToken", newAccessToken);

        config.headers.Authorization = `Bearer ${newAccessToken}`;

        return instance(config);
      }

      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);
