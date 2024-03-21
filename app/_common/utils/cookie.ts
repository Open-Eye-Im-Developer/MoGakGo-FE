import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import axios from "axios";

export async function setCookie<T>(
  key: string,
  value: T,
  options?: { "max-age"?: number } & Partial<Omit<ResponseCookie, "maxAge">>,
) {
  try {
    const response = await axios.post("/api/set-cookie", {
      key,
      value,
      options,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export function getCookie<T>(key: string): Promise<T> | undefined;
export function getCookie<T>(key: string, defaultValue: T): Promise<T>;
export async function getCookie<T>(key: string, defaultValue?: Promise<T>) {
  try {
    const response = await axios.post("/api/get-cookie", {
      key,
    });

    return response.data;
  } catch (error) {
    console.error(error);

    return defaultValue;
  }
}

export async function deleteCookie(key: string) {
  try {
    const response = await axios.post("/api/delete-cookie", {
      key,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
