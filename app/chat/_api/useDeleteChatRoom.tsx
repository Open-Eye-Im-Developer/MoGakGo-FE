import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "@/app/_common/utils/toast";

import { deleteChatRoom } from ".";

export const useDeleteChatRoom = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chats"] as const,
      });
      toast.success("채팅방을 나갔어요.");
    },
    onError: error => {
      console.error(error);
      toast.error(
        "문제가 발생해 채팅방을 나가지 못했어요. 잠시 후, 다시 시도해주세요.",
      );
    },
  });

  return { mutate };
};
