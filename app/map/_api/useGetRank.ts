import { useQuery } from "@tanstack/react-query";

import { getRank } from "@/app/_common/api/project";

import { checkInstanceOfResponseError } from "@/app/_common/utils/checkInstanceOfResponseError";

const useGetRank = () => {
  const response = useQuery({
    queryKey: ["region-rank"],
    queryFn: getRank,
  });
  const { data, isLoading } = response;

  if (isLoading || !data) return { ...response };

  if (checkInstanceOfResponseError(data)) {
    return {
      ...response,
      data: undefined,
      isError: true,
      error: data,
    };
  } else {
    return {
      ...response,
      data: data.densityRankByRegion.map(region => region.toLowerCase()),
    };
  }
};

export default useGetRank;
