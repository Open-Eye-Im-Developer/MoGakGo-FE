"use server";

import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const cookieStore = cookies();

export async function setCookie<T>(
  key: string,
  value: T,
  options?: Partial<ResponseCookie>,
) {
  try {
    cookieStore.set(key, JSON.stringify(value), options);
  } catch (error) {
    console.error(error);
  }
}

export function getCookie<T>(key: string): T | undefined;
export function getCookie<T>(key: string, defaultValue: T): T;
export async function getCookie<T>(key: string, defaultValue?: T) {
  try {
    const data = cookieStore.get(key)?.value;
    if (!data) return defaultValue;
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}

export async function deleteCookie(key: string) {
  try {
    cookieStore.delete(key);
  } catch (error) {
    console.error(error);
  }
}
