import { redirect } from "next/navigation";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVER_VERSION = "/api/v1";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

instance.interceptors.request.use(
  config => {
    if (config.headers.ignoreGlobalCatch) {
      config.headers["Content-Type"] = "application/json";
      config.headers.Accept = "application/json";
      config.baseURL = `${BASE_URL}`;

      return config;
    }

    return config;
  },
  error => {
    if (error.response.status === 401) {
      redirect("/login");
    }

    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;

    if (response.status === 401) {
      redirect("/login");
    }

    return Promise.reject(error);
  },
);
