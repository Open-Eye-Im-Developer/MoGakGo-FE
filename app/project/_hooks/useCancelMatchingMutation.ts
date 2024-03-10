import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { instance } from "@/app/_common/api/instance";

import { ResponseError } from "@/app/_common/types/response";

function useCacnelMatchingMutation(matchingId: number | undefined) {
  const { toast } = useToast();

  const cancelMatching = async () => {
    const { data } = await instance.post(`/matches/${matchingId}/cancel`);

    return data;
  };

  const { mutate: createCancelMatching } = useMutation({
    mutationFn: cancelMatching,
    onSuccess: () => {
      toast({
        title: "매칭을 취소했습니다.",
        description: "매칭이 취소되었어요!",
      });
    },
    onError: (error: AxiosError<ResponseError>) => {
      const errorMessage = error.response?.data.message;

      toast({
        title: "매칭 취소에 실패했습니다.",
        description: errorMessage,
        variant: "destructive",
      });
    },
    throwOnError: false,
  });

  return { createCancelMatching };
}

export default useCacnelMatchingMutation;
