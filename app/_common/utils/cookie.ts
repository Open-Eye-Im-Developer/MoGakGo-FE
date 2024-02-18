"use server";

import { cookies } from "next/headers";

export const getCookie = (name: string) => {
  const cookieStore = cookies();

  return cookieStore.get(name);
};

export const setCookie = (name: string, value: string, expireDate: number) => {
  return cookies().set(name, value, {
    httpOnly: true,
    expires: Date.now() - expireDate,
  });
};

export const hasCookie = (name: string) => {
  const cookieStore = cookies();

  return cookieStore.has(name);
};
