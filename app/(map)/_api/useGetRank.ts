import { useQuery } from "@tanstack/react-query";

import { getRank } from "@/app/_common/api/project";

const useGetRank = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["region-rank"],
    queryFn: getRank,
    throwOnError: false,
  });

  if (isError) return { isRankLoading: false, rank: null };

  return {
    isRankLoading: isLoading,
    rank: data?.densityRankByRegion.map(region => region.toLowerCase()),
  };
};

export default useGetRank;
