"use client";

import { ComponentProps, useState } from "react";
import Image from "next/image";
import { IconQuestionMark } from "@tabler/icons-react";

import { cn } from "@/app/_common/shadcn/utils";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import { Achievement } from "./AchievementList";
import AchievementDrawer from "./AchievementDrawer";

interface AchievementItemProps {
  achievement: Achievement;
  className?: ComponentProps<typeof cn>;
  isRepresentative?: boolean;
}

function AchievementItem({
  achievement,
  className,
  isRepresentative,
}: AchievementItemProps) {
  const { id, title, isCompleted } = achievement;
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(true);
  };

  return (
    <>
      <AchievementDrawer
        achievement={achievement}
        open={open}
        onOpenChange={setOpen}
      />
      <li
        id={`${id}`}
        className={cn(
          "flex cursor-pointer flex-col items-center gap-2 rounded-md",
          className,
        )}
        onClick={onOpenChange}
      >
        <div
          className={cn(
            !isRepresentative ? "w-[80px]" : "w-[100px]",
            "rounded-xl bg-secondary",
          )}
        >
          <AspectRatio
            ratio={1 / 1}
            className={cn(
              !isCompleted ? "grid place-items-center" : "flex ",
              "relative",
            )}
          >
            {!isCompleted ? (
              <IconQuestionMark
                size={50}
                className="absolute z-10  text-white"
              />
            ) : (
              <Image
                width={!isRepresentative ? 80 : 100}
                height={!isRepresentative ? 80 : 100}
                src="/images/cat.webp"
                alt="업적 뱃지"
                className="rounded-xl object-cover"
              />
            )}
          </AspectRatio>
        </div>
        {!isRepresentative && (
          <p
            className={cn(
              isCompleted ? "text-primary" : "text-gray-400",
              "text-balance text-center text-sm",
            )}
          >
            {title}
          </p>
        )}
      </li>
    </>
  );
}

export default AchievementItem;
