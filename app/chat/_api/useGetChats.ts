import { useQuery } from "@tanstack/react-query";

import { getChats } from "./index";

const useGetChats = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["chats"] as const,
    queryFn: getChats,
  });

  if (isLoading || !data) return { chats: [] };

  return { chats: data.data };
};
export default useGetChats;
