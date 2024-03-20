import { useQuery } from "@tanstack/react-query";

import { getNotifications } from "./index";

const useGetNotifications = () => {
  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notifications"] as const,
    queryFn: getNotifications,
  });
  return { notifications, isLoading };
};
export default useGetNotifications;
