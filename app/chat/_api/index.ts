import { instance } from "@/app/_common/api/instance";

import { ResponseData } from "@/app/_common/types/response";

import { ChatType } from "../_types/chat";

export const getChats = async (cursorId: number) => {
  const { data } = await instance.get<ResponseData<ChatType>>("/chat", {
    params: { pageSize: 5, cursorId },
  });
  return data;
};

export const deleteChatRoom = async (chatRoomId: string) => {
  const { data } = await instance.patch(`/chat/${chatRoomId}`);
  return data;
};
