import { ComponentProps } from "react";
import {
  IconMoodSad,
  IconMoodSadDizzy,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodXd,
  TablerIconsProps,
} from "@tabler/icons-react";

import { cn } from "../../shadcn/utils";

type RatingType = "sad-dizzy" | "sad" | "smile" | "happy" | "xd";

interface RatingItemProps {
  type: RatingType;
  content: string;
  className?: ComponentProps<typeof cn>;
}

function RatingItem({ type, content, className }: RatingItemProps) {
  return (
    <li className={cn("flex cursor-pointer flex-col items-center", className)}>
      <RatingIcon
        type={type}
        width={50}
        height={50}
        strokeWidth={1.5}
        className="text-primary text-opacity-60 hover:text-secondary"
      />
      <small className="text-[0.7rem] text-gray-600">{content}</small>
    </li>
  );
}

function RatingIcon(props: {
  type: RatingType;
  width: number;
  height: number;
  strokeWidth: number;
  className: string;
}) {
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
