import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { instance } from "@/app/_common/api/instance";

import { ResponseError } from "@/app/_common/types/response";

import useInvalidateQuery from "./useInvalidateQuery";

function useCancelProjectMutation(projectId: number | undefined) {
  const { toast } = useToast();
  const { invalidateQuery } = useInvalidateQuery();

  const cancelProject = async () => {
    const { data } = await instance.patch(`/projects/${projectId}/cancel`);

    return data;
  };

  const { mutate: createCancelProject } = useMutation({
    mutationFn: cancelProject,
    onSuccess: () => {
      toast({
        title: "모각고를 취소했습니다.",
        description: "모각고가 취소되었어요!",
      });
      invalidateQuery(["current-project"]);
    },
    onError: (error: AxiosError<ResponseError>) => {
      const errorMessage = error.response?.data.message;

      toast({
        title: "모각고 취소에 실패했습니다.",
        description: errorMessage,
        variant: "destructive",
      });
    },
    throwOnError: false,
  });

  return { createCancelProject };
}

export default useCancelProjectMutation;
