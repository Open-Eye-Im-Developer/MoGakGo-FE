import { useQuery } from "@tanstack/react-query";

interface ChatMessagesResponseData {
  data: ChatMessage[];
  hasNext: boolean;
}

export const useGetPrevMessageList = (chatRoomId: string) => {
  const getPreviousChatMessageList = async (chatRoomId: string) => {
    const accessToken = localStorage.getItem("accessToken");
    let cursorId: number | null = null;
    let hasData = true;
    const messages = [];

    while (hasData) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/chat/${chatRoomId}` +
          "?pageSize=5" +
          `${cursorId ? `&cursorId=${cursorId}` : ""}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const data: ChatMessagesResponseData = await response.json();
      const { data: prevMessages, hasNext } = data;

      messages.push(...prevMessages);

      cursorId = prevMessages[prevMessages.length - 1]?.id;
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
