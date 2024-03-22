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
        title: "모각고가 생성되었습니다.",
        description: "매칭 요청을 기다려볼까요?",
      });

      onClose && onClose(false);
      invalidateQuery(["current-project"]);
    },
    onError: (error: AxiosError<ResponseError>) => {
      const errorMessage = error.response?.data.message;
      const isAreaAuthed = error.response?.data.code === "E030105";

      toast({
        title: "프로젝트 생성에 실패했습니다.",
        description: isAreaAuthed
          ? "마이 페이지에서 동네 인증을 진행해주세요."
          : errorMessage,
        variant: "destructive",
      });
    },
    throwOnError: false,
  });

  return { createNewProject };
}

export default useCreateProjectMutation;
