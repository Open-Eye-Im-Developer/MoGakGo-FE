import { cn } from "@/app/_common/shadcn/utils";
import { Button } from "@/app/_common/shadcn/ui/button";

import Icon from "@/app/_common/components/Icon";

interface ButtonLikeProps {
  onClick: () => void;
  isLiked: boolean;
}

function ButtonLike({ onClick, isLiked }: ButtonLikeProps) {
  return (
    <Button
      onClick={onClick}
      className={cn("w-full", isLiked ? "text-neoRed" : "text-black")}
    >
      <Icon id="follow-fulfill" />
    </Button>
  );
}

export default ButtonLike;
