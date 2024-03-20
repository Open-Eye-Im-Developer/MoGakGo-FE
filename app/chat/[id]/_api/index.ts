import { instance } from "@/app/_common/api/instance";

import { ChatProjectType } from "../_types/chatRoom";

export const getChatInfo = async (id: string) => {
  const { data } = await instance.get<ChatProjectType>(`/chat/detail/${id}`);
  return data;
};
