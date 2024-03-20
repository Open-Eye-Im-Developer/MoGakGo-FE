import axios from "axios";

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
    return response;
  },
  async error => {
    // TODO: refreshtoken, cookie 버그 해결될 때까지 주석 유지
    // const { status, config } = error.response;

    // const refreshToken = await getCookie("refreshToken", "");

    // if (status === 404) {
    //   const newAccessToken = await reIssueAccessToken(refreshToken);

    //   if (newAccessToken) {
    //     localStorage.setItem("accessToken", newAccessToken);

    //     config.headers.Authorization = `Bearer ${newAccessToken}`;

    //     return instance(config);
    //   }

    //   return Promise.reject(error);
    // }

    return Promise.reject(error);
  },
);
