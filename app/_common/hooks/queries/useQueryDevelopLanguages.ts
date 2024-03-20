import { useQuery } from "@tanstack/react-query";

import { Language } from "@/app/signup/_type/signup";

import { getDevelopLanguages } from "../../api/languages";

export const useQueryDevelopLanguages = () => {
  const { data, isLoading } = useQuery<Language[]>({
    queryFn: getDevelopLanguages,
    queryKey: ["develop-language"],
  });

  return { data, isLoading };
};
