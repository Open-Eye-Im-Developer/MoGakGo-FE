import { IconHeartFilled } from "@tabler/icons-react";

import { cn } from "@/app/_common/shadcn/utils";
import { Button } from "@/app/_common/shadcn/ui/button";

interface ButtonLikeProps {
  onClick: () => void;
  isLiked: boolean;
}

function ButtonLike({ onClick, isLiked }: ButtonLikeProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "mt-0 flex items-center justify-center bg-[#F9679C] p-2 hover:bg-[#F9679C]",
        isLiked ? "text-secondary" : "text-white",
      )}
    >
      <IconHeartFilled />
    </Button>
  );
}

export default ButtonLike;
