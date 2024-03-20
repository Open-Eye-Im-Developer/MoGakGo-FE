import { useQuery } from "@tanstack/react-query";

import { instance } from "@/app/_common/api/instance";

import { ResponseData } from "@/app/_common/types/response";

export const useGetPrevMessageList = (chatRoomId: string) => {
  const getPreviousChatMessageList = async (chatRoomId: string) => {
    let cursorId: number | null = null;
    let hasData = true;
    const messages = [];

    while (hasData) {
      const query: string = `${cursorId ? `&cursorId=${cursorId}` : ""}&pageSize=5`;

      const { data } = await instance.get<ResponseData<ChatMessage>>(
        `/chat/${chatRoomId}?${query}`,
      );

      const { data: prevMessages, hasNext } = data;

      messages.push(...prevMessages);

      cursorId = Number(prevMessages[prevMessages.length - 1]?.id);
      hasData = hasNext;
    }

    const formattedMessages = messages
      .map(message => {
        return {
          id: message.id,
          message: message.message,
          senderId: message.senderId,
          createdAt: message.createdAt,
          isTime: false,
        };
      })
      .reverse();

    return formattedMessages;
  };

  return useQuery({
    queryKey: ["chatMessageList", chatRoomId],
    queryFn: () => getPreviousChatMessageList(chatRoomId),
  });
};
