import { useQuery } from "@tanstack/react-query";

import { getChatInfo } from "./index";

const useGetChatInfo = (id: string) => {
  return useQuery({
    queryKey: ["chat-info", id] as const,
    queryFn: () => getChatInfo(id),
  });
};
export default useGetChatInfo;
