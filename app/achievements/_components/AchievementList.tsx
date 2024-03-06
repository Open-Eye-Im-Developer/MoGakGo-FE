"use client";

import { toast } from "sonner";
import { IconLock } from "@tabler/icons-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import AchievementItem from "./AchievementItem";

export interface Achievement {
  id: number;
  title: string;
  description: string;
  total: number;
  nowGrade: number;
  isCompleted: boolean;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "모각코도 한걸음부터",
    description: "접속 30일 이상 시 획득",
    total: 1,
    nowGrade: 1,
    isCompleted: true,
  },
  {
    id: 2,
    title: "너는 내 운명",
    description: "동일한 상대와 3회 이상 매칭될 시 획득",
    total: 3,
    nowGrade: 1,
    isCompleted: false,
  },
  {
    id: 3,
    title: "포획 실패는 존재합니다",
    description: "첫 포획 실패 시 획득",
    total: 1,
    nowGrade: 1,
    isCompleted: true,
  },
];

function AchievementList() {
  const myAchievement = undefined;

  const hanldeClickMyAchievement = () => {
    toast.message("아직 설정된 업적이 없어요.");
  };

  return (
    <main className="flex flex-col items-center">
      <header className="grid w-full place-content-center place-items-center gap-3 rounded-none border-y border-gray-300 py-8">
        <h3 className="font-semibold">나의 대표 뱃지</h3>
        <small className="text-center text-xs text-gray-500">
          {!ACHIEVEMENTS && <p>아직 획득한 업적이 없어요.</p>}
          <p>획득한 업적으로 &apos;대표 뱃지&apos;을 변경할 수 있어요.</p>
        </small>
        {myAchievement ? (
          <AchievementItem achievement={ACHIEVEMENTS[2]} isRepresentative />
        ) : (
          <div
            className="w-[100px] rounded-xl bg-secondary text-white"
            onClick={hanldeClickMyAchievement}
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
        {ACHIEVEMENTS.sort((a, b) => {
          if (a.isCompleted === b.isCompleted) {
            return 0;
          }
          return a.isCompleted ? 1 : -1;
        }).map((achievement, index) => (
          <AchievementItem achievement={achievement} key={index} />
        ))}
      </ul>
    </main>
  );
}

export default AchievementList;
