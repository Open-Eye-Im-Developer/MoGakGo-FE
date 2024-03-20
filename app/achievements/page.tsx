import Icon from "../_common/components/Icon";
import AchievementList from "./_components/AchievementList";
export const dynamic = "force-dynamic";

function AchievementsPage() {
  return (
    <main className="p-4">
      {/* TODO: 공통 헤더 컴포넌트로 변경 후 router 추가 */}
      <h2 className="relative py-3 text-center text-xl">
        <Icon id="chevron-left" size={24} className="absolute" />
        활동 업적
      </h2>

      <AchievementList />
    </main>
  );
}

export default AchievementsPage;
