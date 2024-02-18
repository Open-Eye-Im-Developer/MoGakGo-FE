import axios from "axios";

import { getAccessToken } from "./auth";

const BASE_URL = "https://api.example.com";

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  config => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      window.location.href = "/login";
      return config;
    }

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error: Error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);
