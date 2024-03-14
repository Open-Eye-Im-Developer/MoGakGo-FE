import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { instance } from "@/app/_common/api/instance";

import { ResponseError } from "@/app/_common/types/response";

function useAcceptRequestMutation() {
  const { toast } = useToast();

  const acceptRequest = async (projectRequestId: number) => {
    const { data } = await instance.post(
      `/project-requests/${projectRequestId}/accept`,
    );
    return data;
  };

  const { mutate: createAcceptRequest } = useMutation({
    mutationFn: acceptRequest,
    onSuccess: () => {
      toast({
        title: "요청을 수락했습니다.",
        description: "매칭이 되었어요! 채팅방으로 가볼까요?",
      });
    },
    onError: (error: AxiosError<ResponseError>) => {
      const errorMessage = error.response?.data.message;

      toast({
        title: "요청 수락에 실패했습니다.",
        description: errorMessage,
        variant: "destructive",
      });
    },
    throwOnError: false,
  });

  return { createAcceptRequest };
}

export default useAcceptRequestMutation;
