import { useQuery } from "@tanstack/react-query";

import { getChats } from "./index";

const useGetChats = () => {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chats"] as const,
    queryFn: getChats,
  });
  return { chats, isLoading };
};
export default useGetChats;
