import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteChatRoom } from ".";

export const useDeleteChatRoom = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteChatRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chats"] as const,
      });
      toast.success("채팅방 나가기를 성공했어요");
    },
    onError: error => {
      console.error(error);
      toast.success("채팅방 나가기에 실패했어요");
    },
  });

  return { mutate };
};
