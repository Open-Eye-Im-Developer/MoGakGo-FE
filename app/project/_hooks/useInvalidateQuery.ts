import { useQueryClient } from "@tanstack/react-query";

function useInvalidateQuery() {
  const queryClient = useQueryClient();

  const invalidateQuery = (queryKey: string[]) => {
    queryClient.invalidateQueries({ queryKey });
  };

  return { invalidateQuery };
}

export default useInvalidateQuery;
