import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVER_VERSION = "/api/v1";

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // validateStatus: status => status < 500, // 서버에서 보내주는 에러를 data 처리하여 일단 주석처리함.
});

instance.interceptors.request.use(
  config => {
    const accessToken =
      localStorage.getItem("accessToken") ??
      sessionStorage.getItem("accessToken");

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  // 에러 처리
  async error => {
    return Promise.reject(error);
  },
);
