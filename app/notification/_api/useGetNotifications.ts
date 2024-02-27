import { useQuery } from "@tanstack/react-query";

import { getNotifications } from "./index";

const useGetNotifications = () => {
  return useQuery({
    queryKey: ["notifications"] as const,
    queryFn: getNotifications,
  });
};
export default useGetNotifications;
