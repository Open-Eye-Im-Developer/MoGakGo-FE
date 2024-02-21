import { useQuery } from "@tanstack/react-query";

import { getRank } from "@/app/_common/api/project";

const useGetRank = () => {
  const { data, isLoading, ...rest } = useQuery({
    queryKey: ['region-rank'],
    queryFn: getRank,
    select: (data): string[] => {
      // 만약 400번대면 그대로 return
      const { densityRankByRegion } = data;
      return densityRankByRegion.map(region => region.toLowerCase());
    }
  });

  return { data, isLoading, ...rest };
};

export default useGetRank;