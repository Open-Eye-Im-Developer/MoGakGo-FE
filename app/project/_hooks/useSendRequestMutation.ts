import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { instance } from "@/app/_common/api/instance";

import { ResponseError } from "@/app/_common/types/response";


function useSendRequestMutation(
  senderId: number | undefined,
  projectId: number,
) {
  const { toast } = useToast();

  const sendRequest = async () => {
    const { data } = await instance.post("/project-requests", {
      senderId: senderId,
      projectId: projectId,
    });

    return data;
  };
  const { mutate: createSendRequest } = useMutation({
    mutationFn: sendRequest,
    onSuccess: () => {
      toast({
        title: "요청이 완료되었습니다.",
        description: "요청을 수락할 때까지 기다려주세요!",
      });
    },
    onError: (error: AxiosError<ResponseError>) => {
      const errorMessage = error.response?.data.message;

      toast({
        title: "요청에 실패했습니다.",
        description: errorMessage,
        variant: "destructive",
      });
    },
    throwOnError: false,
  });

  return { createSendRequest };
}

export default useSendRequestMutation;
