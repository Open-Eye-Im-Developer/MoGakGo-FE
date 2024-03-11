"use client";

import { ComponentProps, useState } from "react";
import Image from "next/image";
import { IconQuestionMark } from "@tabler/icons-react";

import { cn } from "@/app/_common/shadcn/utils";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import { Achievement } from "@/app/_common/types/user";

import AchievementDrawer from "./AchievementDrawer";

interface AchievementItemProps {
  styleType: "main" | "item";
  achievement: Achievement;
  isMyAchievement?: boolean;
  className?: ComponentProps<typeof cn>;
}

function AchievementItem({
  styleType,
  achievement,
  className,
  isMyAchievement,
}: AchievementItemProps) {
  const { achievementId, title, imgUrl, completed: isCompleted } = achievement;

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
        isMyAchievement={isMyAchievement}
      />
      <li
        id={`${achievementId}`}
        className={cn(
          "flex cursor-pointer flex-col items-center gap-2 rounded-md",
          className,
        )}
        onClick={onOpenChange}
      >
        <div
          className={cn(
            styleType !== "main" ? "w-[80px]" : "w-[100px]",
            !isCompleted
              ? "bg-secondary bg-opacity-50"
              : "border-2 border-secondary bg-transparent p-1",
            "rounded-xl",
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
                width={styleType !== "main" ? 80 : 100}
                height={styleType !== "main" ? 80 : 100}
                src={imgUrl}
                alt="업적 뱃지"
                className="rounded-xl object-cover"
              />
            )}
          </AspectRatio>
        </div>

        <p
          className={cn(
            isCompleted ? "text-primary" : "text-gray-400",
            "text-pretty text-center text-sm",
          )}
        >
          {title}
        </p>
      </li>
    </>
  );
}

export default AchievementItem;
