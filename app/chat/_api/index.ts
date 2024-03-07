import { instance } from "@/app/_common/api/instance";

import { ChatType } from "../_types/chat";

// TODO: 무한 스크롤을 적용할 시, cursorId를 인자로 받아와서 query에 추가
export const getChats = async () => {
  const query = `pageSize=5`;
  const { data } = await instance.get<ChatType[]>(`/chat?${query}`);
  return data;
};
