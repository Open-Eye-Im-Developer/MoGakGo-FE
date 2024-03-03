import { instance } from "@/app/_common/api/instance";

import { ChatType } from "../types/chat";

export const getChats = async () => {
  const { data } = await instance.get<ChatType[]>("/chat");
  return data;
};
