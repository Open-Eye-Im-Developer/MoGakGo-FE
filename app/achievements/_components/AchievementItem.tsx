import { cn } from "@/app/_common/shadcn/utils";

import { AchievementProgress } from "./AchievementProgress";
import { Achievement } from "./AchievementList";

interface AchievementItemProps {
  achievement: Achievement;
}

const calculateProgress = (nowGrade: number, total: number) => {
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  const percentage = (nowGrade / total) * 100;
  return Math.floor(percentage);
};

function AchievementItem({
  achievement: { title, description, total, nowGrade, isCompleted },
}: AchievementItemProps) {
  return (
    <li
      className={cn(
        isCompleted ? "bg-slate-200" : "bg-white",
        "flex flex-col rounded-md border px-4 py-3 shadow-md",
      )}
    >
      <header className="mb-2 font-semibold">
        <h3 className={cn(isCompleted ? "text-gray-400" : "text-primary")}>
          {title}
        </h3>
        <small className={cn(isCompleted ? "text-gray-400" : "text-gray-500")}>
          {description}
        </small>
      </header>
      <section className="text-right">
        <AchievementProgress
          value={calculateProgress(nowGrade, total)}
          className="bg-secondary bg-opacity-30 dark:bg-slate-50 dark:bg-opacity-50"
          defaultChecked={isCompleted}
        />
        <small className="pr-1 text-gray-500">
          {nowGrade}/{total}
        </small>
      </section>
    </li>
  );
}

export default AchievementItem;
