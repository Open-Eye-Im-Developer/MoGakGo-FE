"use client";

import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/app/_common/shadcn/utils";
import { Progress } from "@/app/_common/shadcn/ui/progress";
import { Button } from "@/app/_common/shadcn/ui/button";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_common/shadcn/ui/accordion";

import Icon from "@/app/_common/components/Icon";

import { Achievement } from "@/app/_common/types/user";

import { calculateAchievement } from "../_utils/calculateAchievement";

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
  const {
    achievementId,
    title,
    imgUrl,
    completed: isCompleted,
    description,
    requirementValue,
    progressCount,
  } = achievement;

  const leftToComplete = requirementValue - progressCount;
  const isThreeOrLessLeftToComplete = leftToComplete <= 3;

  return (
    <li
      id={`${achievementId}`}
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-md",
        className,
      )}
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          variant={"outline"}
          value={`${achievementId}`}
          className="bg-neoGreen px-3"
        >
          <AccordionTrigger className="space-x-2 hover:no-underline">
            <div
              className={cn(
                styleType !== "main" ? "w-[50px]" : "w-[100px]",
                isMyAchievement
                  ? "border-2 border-neoYellow"
                  : "border-2 border-white",
                "rounded-full bg-white shadow-neo-thin",
              )}
            >
              <AspectRatio
                ratio={1 / 1}
                className={cn(
                  !isCompleted ? "grid place-items-center" : "flex",
                  "relative",
                )}
              >
                {!isCompleted ? (
                  <Icon
                    id="question-mark-fill"
                    size={35}
                    className="absolute z-10 text-neoYellow"
                  />
                ) : (
                  <Image
                    width={styleType !== "main" ? 80 : 100}
                    height={styleType !== "main" ? 80 : 100}
                    src={imgUrl}
                    alt="업적 뱃지"
                    className="rounded-full object-cover"
                  />
                )}
              </AspectRatio>
            </div>
            <section className="flex w-full flex-col items-start space-y-2">
              <p className="text-pretty text-sm text-white">{title}</p>
              <Progress
                className="h-2 shadow-neo-thin"
                value={calculateAchievement(progressCount, requirementValue)}
              ></Progress>
            </section>
          </AccordionTrigger>
          <AccordionContent className="space-y-2">
            <p className="px-2 text-white">획득방법: {description}</p>
            <div className="text-end">
              {!isCompleted ? (
                <p
                  className={cn("text-xs", {
                    "font-semibold text-white": isThreeOrLessLeftToComplete,
                    "text-black/80": !isThreeOrLessLeftToComplete,
                  })}
                >
                  달성까지 앞으로 {leftToComplete}회 남았어요
                  {isThreeOrLessLeftToComplete && "!"}
                </p>
              ) : (
                !isMyAchievement && (
                  <Button className="row-span-3" variant={"outline"}>
                    변경
                  </Button>
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
}

export default AchievementItem;
