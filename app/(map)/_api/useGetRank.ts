import { useQuery } from "@tanstack/react-query";

import { getRank } from "@/app/_common/api/project";

const useGetRank = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["region-rank"],
    queryFn: getRank,
  });

  return {
    isRankLoading: isLoading,
    rank: data?.densityRankByRegion.map(region => region.toLowerCase()),
  };
};

export default useGetRank;
