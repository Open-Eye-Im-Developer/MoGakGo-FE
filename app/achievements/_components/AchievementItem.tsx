"use client";

import { ComponentProps, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { SignUpUser } from "@/app/signup/_type/signup";
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
import { useMutationUserAchievement } from "../_hooks/useMutationUserAchievement";

interface AchievementItemProps {
  userId: SignUpUser["id"];
  styleType: "main" | "item";
  achievement: Achievement;
  myAchievement?: Achievement | undefined;
  className?: ComponentProps<typeof cn>;
  setMyAchievement: Dispatch<SetStateAction<Achievement | undefined>>;
}

function AchievementItem({
  styleType,
  achievement,
  className,
  myAchievement,
  setMyAchievement,
}: AchievementItemProps) {
  const {
    userId,
    achievementId,
    title,
    imgUrl,
    completed: isCompleted,
    description,
    requirementValue,
    progressCount,
  } = achievement;

  const { mutate } = useMutationUserAchievement(setMyAchievement);

  const leftToComplete =
    requirementValue - progressCount < 0 ? 0 : requirementValue - progressCount;

  const isThreeOrLessLeftToComplete = leftToComplete <= 3;

  const handleSubmitAchievement = () => {
    mutate({
      userId,
      achievementId,
    });
  };

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
                myAchievement
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
              {!isCompleted && leftToComplete !== 0 && (
                <p
                  className={cn("text-xs", {
                    "font-semibold text-white": isThreeOrLessLeftToComplete,
                    "text-black/80": !isThreeOrLessLeftToComplete,
                  })}
                >
                  달성까지 앞으로 {leftToComplete}회 남았어요
                  {isThreeOrLessLeftToComplete && "!"}
                </p>
              )}

              {isCompleted &&
                myAchievement?.achievementId !== achievementId && (
                  <Button
                    className="row-span-3"
                    variant={"outline"}
                    onClick={handleSubmitAchievement}
                  >
                    변경
                  </Button>
                )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
}

export default AchievementItem;
