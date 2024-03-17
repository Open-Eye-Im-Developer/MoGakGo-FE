import { IconDots } from "@tabler/icons-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_common/shadcn/ui/dropdown-menu";

import { useDeleteChatRoom } from "../_api/useDeleteChatRoom";

interface OptionButtonProp {
  chatRoomId: string;
}

function OptionButton({ chatRoomId }: OptionButtonProp) {
  const { mutate } = useDeleteChatRoom();

  const handleClickLeaveButton = () => {
    mutate(chatRoomId);
  };

  return (
    <div className="absolute bottom-0 right-0 px-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <IconDots className="w-4 text-gray-500" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-2">
          <DropdownMenuItem onClick={handleClickLeaveButton}>
            채팅방 나가기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default OptionButton;
