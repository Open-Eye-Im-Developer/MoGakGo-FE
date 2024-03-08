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
  const { achievementId, title, requirementValue, progressCount } = achievement;
  const isCompleted = progressCount === requirementValue;

  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(true);
  };

  return (
    <>
      <AchievementDrawer
        isCompleted={isCompleted}
        achievement={achievement}
        open={open}
        onOpenChange={setOpen}
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
              // TODO: user db에 achievement 구조 달라지면 auth store의 achievement.imgUrl로 가져오기
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
            {/* TODO: user db에 achievement 구조 달라지면 auth store의 achievement.title로 가져오기 */}
            {title}
          </p>
        )}
      </li>
    </>
  );
}

export default AchievementItem;
