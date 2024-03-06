import {
  IconMoodSad,
  IconMoodSadDizzy,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodXd,
  TablerIconsProps,
} from "@tabler/icons-react";

import { cn } from "@/app/_common/shadcn/utils";

type RatingType = "sad-dizzy" | "sad" | "smile" | "happy" | "xd";

interface RatingItemProps {
  type: RatingType;
  checked?: boolean;
  onChangeChecked: () => void;
}

function RatingItem({ type, checked, onChangeChecked }: RatingItemProps) {
  return (
    <RatingIcon
      onChange={onChangeChecked}
      type={type}
      width={50}
      height={50}
      strokeWidth={1.5}
      className={cn(
        checked
          ? "text-secondary"
          : "text-primary text-opacity-60 hover:text-secondary",
      )}
    />
  );
}

function RatingIcon(props: TablerIconsProps) {
  let IconComponent: (props: TablerIconsProps) => JSX.Element;

  switch (props.type) {
    case "sad-dizzy":
      IconComponent = IconMoodSadDizzy;
      break;
    case "sad":
      IconComponent = IconMoodSad;
      break;
    case "smile":
      IconComponent = IconMoodSmile;
      break;
    case "happy":
      IconComponent = IconMoodHappy;
      break;
    case "xd":
      IconComponent = IconMoodXd;
      break;
    default:
      IconComponent = IconMoodSmile;
  }

  return <IconComponent {...props} />;
}

export default RatingItem;
