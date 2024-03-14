import { useState } from "react";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { deleteLikeProfile, postLikeProfile } from "@/app/_common/api/profile";

import { ResponseError } from "@/app/_common/types/response";
import { ProfileLikeInfo } from "@/app/_common/types/profile";

import { sonner } from "@/app/_common/utils/sonner";

interface ToggleLike {
  isLiked: boolean;
  likeInfo: ProfileLikeInfo;
}

const useToggleLikeProfile = () => {
  const [isLiked, setIsLiked] = useState<boolean | null>(null);

  const { mutate: addLikeProfile } = useMutation({
    mutationFn: postLikeProfile,
    onSuccess: () => {
      sonner.success("찔러보기 요청을 완료했습니다.");
      setIsLiked(true);
    },
    onError: (error: AxiosError<ResponseError>) => {
      if (error.response) sonner.error(error.response.data.message);
      else sonner.error("찔러보기에 실패했습니다, 다시 시도해주세요.");
    },
    throwOnError: false,
  });

  const { mutate: cancelLikeProfile } = useMutation({
    mutationFn: deleteLikeProfile,
    onSuccess: () => {
      sonner.success("찔러보기 삭제를 완료했습니다.");
      setIsLiked(false);
    },
    onError: (error: AxiosError<ResponseError>) => {
      if (error.response) sonner.error(error.response.data.message);
      else sonner.error("찔러보기 삭제에 실패했습니다, 다시 시도해주세요.");
    },
    throwOnError: false,
  });

  const toggleLikeProfile = ({ isLiked, likeInfo }: ToggleLike) => {
    if (isLiked) cancelLikeProfile(likeInfo);
    else addLikeProfile(likeInfo);
  };

  return { toggleLikeProfile, isLiked };
};

export default useToggleLikeProfile;
