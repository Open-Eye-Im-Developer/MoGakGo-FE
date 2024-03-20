import { useQuery } from "@tanstack/react-query";

import { instance } from "@/app/_common/api/instance";

interface ChatRoomIdResponse {
  chatRoomId: string;
}

function useGetChatRoomIdQuery(
  projectId: number,
  matchingId: number | undefined,
) {
  const getChatRoomId = async () => {
    const { data } = await instance.get<ChatRoomIdResponse>(
      `/chat/project/${projectId}`,
    );

    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["get-chatroom-id", projectId],
    queryFn: getChatRoomId,
    enabled: !!matchingId,
    throwOnError: false,
  });

  if (isLoading || !data) return { chatRoomId: null };

  return { chatRoomId: data.chatRoomId };
}

export default useGetChatRoomIdQuery;
