import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { deleteLikeProfile, postLikeProfile } from "@/app/_common/api/profile";

const useToggleLikeProfile = () => {
  const { mutate: addLikeProfile } = useMutation({
    mutationFn: postLikeProfile,
    onSuccess: (data, variables, context) => {
      console.log("onSuccess", data, variables, context);
      toast.success("찔러보기에 성공했습니다.");
    },
    onError: (error, variables, context) => {
      console.log("onError", error, variables, context);
      toast.error("찔러보기에 성공했습니다.");
    },
  });

  const { mutate: cancelLikeProfile } = useMutation({
    mutationFn: deleteLikeProfile,
    onSuccess: (data, variables, context) => {
      console.log(data, variables, context);
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });

  return { addLikeProfile, cancelLikeProfile };
};

export default useToggleLikeProfile;
