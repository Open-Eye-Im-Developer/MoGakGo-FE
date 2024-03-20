import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { instance } from "@/app/_common/api/instance";

import { ResponseError } from "@/app/_common/types/response";

import { FormmatedValues } from "../_types/type";
import useInvalidateQuery from "./useInvalidateQuery";

function useCreateProjectMutation(onClose: (open: boolean) => void) {
  const { toast } = useToast();
  const { invalidateQuery } = useInvalidateQuery();

  const createProject = async (values: FormmatedValues) => {
    const { data } = await instance.post("/projects", values);

    return data;
  };

  const { mutate: createNewProject } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      toast({
        title: "프로젝트가 생성되었습니다.",
        description: "매칭 요청을 기다려볼까요?",
      });

      onClose && onClose(false);
      invalidateQuery(["current-project"]);
    },
    onError: (error: AxiosError<ResponseError>) => {
      const errorMessage = error.response?.data.message;

      toast({
        title: "프로젝트 생성에 실패했습니다.",
        description: errorMessage,
        variant: "destructive",
      });
    },
    throwOnError: false,
  });

  return { createNewProject };
}

export default useCreateProjectMutation;
