import { toast } from "sonner";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { deleteLikeProfile, postLikeProfile } from "@/app/_common/api/profile";

import { ResponseError } from "@/app/_common/types/response";

interface ToggleLike {
  isLiked: boolean;
  likeInfo: { senderId: number; receiverId: number };
}

const useToggleLikeProfile = () => {
  const { mutate: addLikeProfile } = useMutation({
    mutationFn: postLikeProfile,
    onSuccess: () => {
      toast.success("찔러보기에 성공했습니다.");
    },
    onError: (error: AxiosError<ResponseError>) => {
      if (error.response) toast.error(error.response.data.message);
      else toast.error("찔러보기에 실패했습니다, 다시 시도해주세요.");
    },
    throwOnError: false,
  });

  const { mutate: cancelLikeProfile } = useMutation({
    mutationFn: deleteLikeProfile,
    onSuccess: () => {
      toast.success("찔러보기에 삭제에 성공했습니다.");
    },
    onError: (error: AxiosError<ResponseError>) => {
      if (error.response) toast.error(error.response.data.message);
      else toast.error("찔러보기 삭제에 실패했습니다, 다시 시도해주세요.");
    },
    throwOnError: false,
  });

  const toggleLikeProfile = ({ isLiked, likeInfo }: ToggleLike) => {
    if (isLiked) cancelLikeProfile(likeInfo);
    else addLikeProfile(likeInfo);
  };

  return { toggleLikeProfile };
};

export default useToggleLikeProfile;
