"use server";

import { redirect } from "next/navigation";

import { toast } from "../utils/toast";
import { getCookie } from "../utils/cookie";

export async function navigate(path: string) {
  redirect(path);
}

export const checkAuthNavigate = async (path: string) => {
  const refreshToken = await getCookie("refreshToken", "");
  if (refreshToken === "") return toast.warning("로그인하고 이용할 수 있어요!");
  navigate(path);
};
