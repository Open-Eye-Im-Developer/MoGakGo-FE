"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import LoadingSpinner from "@/app/_common/components/LoadingSpinner";
import Icon from "@/app/_common/components/Icon";

import { toast } from "@/app/_common/utils/toast";

import { useQueryAchievements } from "../_hooks/useQueryAchievements";
import MyAchievement from "./MyAchievement";
import ListSortSelect from "./ListSortSelect";
import AchievementItem from "./AchievementItem";

function AchievementList() {
  const { achievements, myAchievement } = useQueryAchievements();

  const handleClickMyAchievement = () => {
    toast.info("아직 설정된 업적이 없어요.");
  };

  if (!achievements) return <LoadingSpinner />;

  return (
    <main className="flex flex-col">
      <header className="grid w-full place-content-center place-items-center gap-1 rounded-none py-6">
        <small className="text-center text-xs text-gray-500">
          {!myAchievement && (
            <p>
              현재 대표로 설정한 뱃지가 없어요.
              <br />
              획득한 업적으로 &apos;대표 뱃지&apos;를 변경할 수 있어요.
            </p>
          )}
        </small>

        {myAchievement ? (
          <MyAchievement achievement={myAchievement} />
        ) : (
          <div
            className="mt-2 w-[100px] rounded-full bg-white"
            onClick={hanldeClickMyAchievement}
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
        )}
      </header>
      <section className="flex justify-end text-start">
        <ListSortSelect />
      </section>
      <ul className="mt-3 grid w-full grid-cols-1 gap-4">
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
