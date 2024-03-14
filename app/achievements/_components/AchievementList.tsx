"use client";

import { toast } from "sonner";
import { IconLock } from "@tabler/icons-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import LoadingSpinner from "@/app/_common/components/LoadingSpinner";

import { useQueryAchievements } from "../_hooks/useQueryAchievements";
import AchievementItem from "./AchievementItem";

function AchievementList() {
  const { achievements, myAchievement } = useQueryAchievements();

  if (!achievements || !myAchievement) {
    // TODO: 스켈레톤으로 대체하기
    return <LoadingSpinner />;
  }

  const handleClickMyAchievement = () => {
    toast.message("아직 설정된 업적이 없어요.");
  };

  return (
    <main className="flex flex-col items-center">
      <header className="grid w-full place-content-center place-items-center gap-3 rounded-none border-y border-gray-300 py-8">
        <h3 className="font-semibold">나의 대표 뱃지</h3>
        <small className="text-center text-xs text-gray-500">
          {!myAchievement && (
            <p>획득한 업적으로 &apos;대표 뱃지&apos;을 변경할 수 있어요.</p>
          )}
        </small>

        {myAchievement ? (
          <AchievementItem
            styleType="main"
            achievement={myAchievement}
            isMyAchievement
          />
        ) : (
          <div
            className="w-[100px] rounded-xl bg-secondary text-white"
            onClick={handleClickMyAchievement}
          >
            <AspectRatio
              ratio={1 / 1}
              className="relative grid place-content-center place-items-center"
            >
              <IconLock
                strokeWidth={1.5}
                size={50}
                className="absolute z-10 "
              />
            </AspectRatio>
          </div>
        )}
      </header>
      <ul className="mt-8 grid grid-cols-3 grid-rows-3 gap-4">
        {achievements?.map((achievement, index) => (
          <AchievementItem
            styleType="item"
            achievement={achievement}
            isMyAchievement={
              myAchievement?.achievementId === achievement.achievementId
            }
            key={index}
          />
        ))}
      </ul>
    </main>
  );
}

export default AchievementList;
