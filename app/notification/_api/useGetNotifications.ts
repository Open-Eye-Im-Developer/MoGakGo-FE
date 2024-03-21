import { useInfiniteQuery } from "@tanstack/react-query";

import { ResponseData } from "@/app/_common/types/response";

import { NotificationType } from "../_types/notification";
import { getNotifications } from "../_api/index";

const useGetNotifications = () => {
  return useInfiniteQuery<ResponseData<NotificationType> | undefined>({
    queryKey: ["notifications"] as const,
    queryFn: context => {
      const cursorId = context.pageParam as NotificationType;
      return getNotifications(cursorId.id);
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

export default useGetNotifications;
