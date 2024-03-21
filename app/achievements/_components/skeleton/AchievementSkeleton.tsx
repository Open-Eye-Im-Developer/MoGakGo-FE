import MyAchievementSkeleton from "./MyAchievementSkeleton";
import AchievementItemSkeleton from "./AchievementItemSkeleton";

function AchievementSkeleton() {
  return (
    <>
      <MyAchievementSkeleton />
      <ul className="mt-3 grid w-full grid-cols-1 gap-4">
        {new Array(6).fill(0).map((_, index) => (
          <AchievementItemSkeleton key={index} />
        ))}
      </ul>
    </>
  );
}

export default AchievementSkeleton;
