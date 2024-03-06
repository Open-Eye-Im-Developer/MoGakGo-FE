import { useQuery } from "@tanstack/react-query";

import { getChats } from "./index";

const useGetChats = () => {
  return useQuery({
    queryKey: ["chats"] as const,
    queryFn: getChats,
  });
};
export default useGetChats;
