import Image from "next/image";
import { IconQuestionMark } from "@tabler/icons-react";

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

import { calculateAchievement } from "../_utils/calculateAchievement";
import { AchievementProgress } from "./AchievementProgress";
import { Achievement } from "./AchievementList";

interface AchievementDrawerProps {
  achievement: Achievement;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}
function AchievementDrawer({
  achievement,
  open,
  onOpenChange,
}: AchievementDrawerProps) {
  const { id, title, isCompleted, description, nowGrade, total } = achievement;

  const handleCloseDrawer = () => {
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent id={`${id}`}>
        <DrawerHeader className="place-content-center place-items-center gap-6">
          <div className="w-[100px] rounded-xl bg-secondary">
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
                  src="/images/cat.webp"
                  alt="업적 뱃지"
                  className="rounded-xl object-cover"
                />
              )}
            </AspectRatio>
          </div>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>획득방법: {description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="place-items-center">
          {isCompleted ? (
            <Button className="w-full" onClick={handleCloseDrawer}>
              내 대표 업적으로 설정하기
            </Button>
          ) : (
            <AchievementProgress
              className="w-[300px] bg-secondary bg-opacity-30 dark:bg-opacity-50"
              value={calculateAchievement(nowGrade, total)}
            />
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default AchievementDrawer;
