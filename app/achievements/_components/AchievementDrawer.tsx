import Image from "next/image";
import { IconQuestionMark } from "@tabler/icons-react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { cn } from "@/app/_common/shadcn/utils";
import {
  DrawerContent,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/app/_common/shadcn/ui/drawer";
import { Button } from "@/app/_common/shadcn/ui/button";
import { AspectRatio } from "@/app/_common/shadcn/ui/aspect-ratio";

import { Achievement } from "@/app/_common/types/user";

import { calculateAchievement } from "../_utils/calculateAchievement";
import { useMutationUserAchievement } from "../_hooks/useMutationUserAchievement";
import { AchievementProgress } from "./AchievementProgress";

interface AchievementDrawerProps {
  achievement: Achievement;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  isMyAchievement?: boolean;
}

function AchievementDrawer({
  isMyAchievement,
  achievement,
  open,
  onOpenChange,
}: AchievementDrawerProps) {
  const { user } = useAuthStore();
  const {
    achievementId,
    title,
    description,
    progressCount,
    requirementValue,
    imgUrl,
    completed: isCompleted,
  } = achievement;

  const leftToComplete = requirementValue - progressCount;
  const isThreeOrLessLeftToComplete = leftToComplete <= 3;

  const { mutate } = useMutationUserAchievement();

  const handleSubmitAchievement = () => {
    mutate({
      userId: user!.id,
      achievementId,
    });

    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent id={`${achievementId}`}>
        <DrawerHeader className="place-content-center place-items-center gap-4 pb-2">
          <div
            className={cn(
              !isCompleted
                ? "bg-secondary bg-opacity-50"
                : "border-2 border-secondary bg-transparent p-1",
              "w-[100px] rounded-xl",
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
                <IconQuestionMark
                  size={70}
                  className="absolute z-10 text-white"
                />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={imgUrl}
                  alt="업적 뱃지"
                  className="rounded-xl object-cover"
                />
              )}
            </AspectRatio>
          </div>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>획득방법: {description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="place-items-center pb-6 pt-2">
          {!isCompleted ? (
            <>
              <p
                className={cn("text-sm", {
                  "text-success": isThreeOrLessLeftToComplete,
                  "text-primary": !isThreeOrLessLeftToComplete,
                })}
              >
                달성까지 앞으로{" "}
                <span className="font-bold">{leftToComplete}</span>회
                {!isThreeOrLessLeftToComplete && " 남았어요."}
              </p>
              <AchievementProgress
                className="relative w-[300px] bg-secondary bg-opacity-30 dark:bg-opacity-50"
                value={calculateAchievement(progressCount, requirementValue)}
              ></AchievementProgress>
            </>
          ) : !isMyAchievement ? (
            <Button className="w-full" onClick={handleSubmitAchievement}>
              내 대표 업적으로 설정하기
            </Button>
          ) : (
            <></>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default AchievementDrawer;
