import { useQuery } from "@tanstack/react-query";

import { getDevelopLanguage } from "@/app/_common/api/user";

import { DevelopLanguage } from "@/app/_common/types/user";

export const useQueryDevelopLanguage = () => {
  return useQuery<DevelopLanguage[] | undefined>({
    queryFn: getDevelopLanguage,
    throwOnError: false,
    queryKey: ["getDevelopLanguage"],
  });
};
