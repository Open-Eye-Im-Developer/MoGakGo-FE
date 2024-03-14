import { useMutation, useQueryClient } from "@tanstack/react-query";

import { sonner } from "@/app/_common/utils/sonner";

import { deleteChatRoom } from ".";

export const useDeleteChatRoom = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chats"] as const,
      });
      sonner.success("채팅방을 나갔어요.");
    },
    onError: error => {
      console.error(error);
      sonner.error(
        "문제가 발생해 채팅방을 나가지 못했어요. 잠시 후, 다시 시도해주세요.",
      );
    },
  });

  return { mutate };
};
