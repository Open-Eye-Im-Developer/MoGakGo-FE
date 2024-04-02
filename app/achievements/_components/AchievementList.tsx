"use client";

import { useEffect, useState } from "react";

import WithOnMounted from "@/app/_common/hoc/WithOnMounted";

import LoadingSpinner from "@/app/_common/components/LoadingSpinner";

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

import { Achievement } from "@/app/_common/types/user";

import { useQueryAchievements } from "../_hooks/useQueryAchievements";
import AchievementItemSkeleton from "./skeleton/AchievementItemSkeleton";
import MyAchievement from "./MyAchievement";
import ListSortSelect from "./ListSortSelect";
import AchievementItem from "./AchievementItem";

function AchievementList() {
  const { data: user } = useQuerySignUpUser();

  const {
    achievements,
    myCurrentAchievement,
    isLoading,
    isFetching,
    isPending,
    isFetched,
    userId,
  } = useQueryAchievements();

  const [myAchievement, setMyAchievement] = useState(myCurrentAchievement);

  const [sorting, setSorting] = useState<Achievement[]>([]);

  useEffect(() => {
    if (isFetched) {
      setMyAchievement(myCurrentAchievement);
      setSorting(achievements);
    }
  }, [achievements, myCurrentAchievement, isFetched]);

  if (isLoading || !userId! || !user) return <LoadingSpinner />;

  return (
    <main className="flex flex-col">
      <header className="grid w-full place-content-center place-items-center gap-1 rounded-none py-6">
        <MyAchievement myAchievement={myAchievement} />
      </header>
      <section className="flex justify-end text-start">
        <ListSortSelect setSorting={setSorting} achievements={achievements} />
      </section>
      <ul className="mt-3 grid w-full grid-cols-1 gap-4">
        {isFetching || isPending
          ? new Array(6)
              .fill(0)
              .map((_, index) => <AchievementItemSkeleton key={index} />)
          : sorting.map((achievement, index) => (
              <AchievementItem
                userId={userId}
                styleType="item"
                achievement={achievement}
                myAchievement={myAchievement}
                setMyAchievement={setMyAchievement}
                key={index}
              />
            ))}
      </ul>
    </main>
  );
}

export default WithOnMounted(AchievementList);
