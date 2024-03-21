import { useInfiniteQuery } from "@tanstack/react-query";

import { ResponseData } from "@/app/_common/types/response";

import { ChatType } from "../_types/chat";
import { getChats } from "./index";

const useGetChats = () => {
  return useInfiniteQuery<ResponseData<ChatType> | undefined>({
    queryKey: ["chats"] as const,
    queryFn: context => {
      const cursorId = context.pageParam as ChatType;
      return getChats(cursorId.cursorId);
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage && lastPage.hasNext) {
        return lastPage.data[lastPage.data.length - 1];
      }
      return null;
    },
  });
};
export default useGetChats;
