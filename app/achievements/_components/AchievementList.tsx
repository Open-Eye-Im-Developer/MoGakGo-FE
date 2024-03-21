"use client";

import { useEffect, useState } from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import WithOnMounted from "@/app/_common/hoc/WithOnMounted";

import Icon from "@/app/_common/components/Icon";

import { Achievement } from "@/app/_common/types/user";

import { toast } from "@/app/_common/utils/toast";

import { useQueryAchievements } from "../_hooks/useQueryAchievements";
import AchievementSkeleton from "./skeleton/AchievementSkeleton";
import MyAchievement from "./MyAchievement";
import ListSortSelect from "./ListSortSelect";
import AchievementItemSkeleton from "./AchievementItemSkeleton";
import AchievementItem from "./AchievementItem";

function AchievementList() {
  const { achievements, myAchievement, isLoading, isFetching, isPending } =
    useQueryAchievements();

  const [sorting, setSorting] = useState<Achievement[]>([]);

  const handleClickMyAchievement = () => {
    toast.info("아직 설정된 업적이 없어요.");
  };

  useEffect(() => {
    setSorting(achievements);
  }, [achievements]);

  if (isLoading || isFetching || isPending) return <AchievementSkeleton />;

  return (
    <main className="flex flex-col">
      <header className="grid w-full place-content-center place-items-center gap-1 rounded-none py-6">
        {myAchievement ? (
          <MyAchievement achievement={myAchievement} />
        ) : (
          <>
            <small className="text-center text-xs text-gray-500">
              {!myAchievement && (
                <p>
                  현재 대표로 설정한 뱃지가 없어요.
                  <br />
                  획득한 업적으로 &apos;대표 뱃지&apos;를 변경할 수 있어요.
                </p>
              )}
            </small>
            <div
              className="mt-2 w-[100px] rounded-full bg-white"
              onClick={handleClickMyAchievement}
            >
              <AspectRatio
                ratio={1 / 1}
                className="relative grid place-content-center place-items-center"
              >
                <Icon
                  id="lock"
                  size={50}
                  className="absolute z-10 text-neoYellow"
                />
              </AspectRatio>
            </div>
          </>
        )}
      </header>
      <section className="flex justify-end text-start">
        <ListSortSelect setSorting={setSorting} achievements={achievements} />
      </section>
      <ul className="mt-3 grid w-full grid-cols-1 gap-4">
        {sorting &&
          sorting.map((achievement, index) => (
            <AchievementItem
              styleType="item"
              achievement={achievement}
              isMyAchievement={
                myAchievement?.achievementId === achievement.achievementId
              }
              key={index}
            />
          ))}
        {!achievements ||
          isFetching ||
          (isPending &&
            new Array(6)
              .fill(0)
              .map((_, index) => <AchievementItemSkeleton key={index} />))}
      </ul>
    </main>
  );
}

export default WithOnMounted(AchievementList);
