"use client";

import { ComponentProps } from "react";

type MoodId = "sad-dizzy" | "sad" | "smile" | "happy" | "xd";

interface MoodProps extends Omit<ComponentProps<"svg">, "width" | "height"> {
  id: MoodId;
  size?: number;
}

function Rating({ id, size = 50, ...props }: MoodProps) {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`/sprite/mood-sprite-sheet.svg#mood-${id}`} />
    </svg>
  );
}

export default Rating;
