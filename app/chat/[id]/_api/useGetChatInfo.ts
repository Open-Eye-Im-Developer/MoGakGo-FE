import { useQuery } from "@tanstack/react-query";

import { getChatInfo } from "./index";

const useGetChatInfo = (id: string) => {
  const { data: chatInfo, isLoading } = useQuery({
    queryKey: ["chat-info", id] as const,
    queryFn: () => getChatInfo(id),
  });
  return { chatInfo, isLoading };
};
export default useGetChatInfo;
