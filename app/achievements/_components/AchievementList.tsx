import AchievementItem from "./AchievementItem";

export interface Achievement {
  title: string;
  description: string;
  total: number;
  nowGrade: number;
  isCompleted: boolean;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "모각코도 한걸음부터",
    description: "접속 30일 이상 시 획득",
    total: 1,
    nowGrade: 1,
    isCompleted: true,
  },
  {
    title: "너는 내 운명",
    description: "동일한 상대와 3회 이상 매칭될 시 획득",
    total: 3,
    nowGrade: 1,
    isCompleted: false,
  },
  {
    title: "포획 실패는 존재합니다",
    description: "첫 포획 실패 시 획득",
    total: 1,
    nowGrade: 1,
    isCompleted: true,
  },
];

function AchievementList() {
  return (
    <ul className="mt-2 flex flex-col gap-4 p-4">
      {ACHIEVEMENTS.sort((a, b) => {
        if (a.isCompleted === b.isCompleted) {
          return 0;
        }
        return a.isCompleted ? 1 : -1;
      }).map((achievement, index) => (
        <AchievementItem achievement={achievement} key={index} />
      ))}
    </ul>
  );
}

export default AchievementList;
