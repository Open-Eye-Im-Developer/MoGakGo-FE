import { cn } from "@/app/_common/shadcn/utils";

import Icon from "@/app/_common/components/Icon";

type RatingType =
  | "review-terrible"
  | "review-bad"
  | "review-ok"
  | "review-good"
  | "review-awesome";

interface RatingItemProps {
  type: RatingType;
  checked?: boolean;
  onChangeChecked: () => void;
}

function RatingItem({ type, checked, onChangeChecked }: RatingItemProps) {
  return (
    <Icon
      id={type}
      onChange={onChangeChecked}
      width={40}
      height={40}
      className={cn(
        checked
          ? "text-neoYellow"
          : "text-black text-opacity-60 hover:text-neoYellow",
      )}
    />
  );
}

export default RatingItem;
