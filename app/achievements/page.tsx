import StackNavigator from "../_common/components/StackNavigator";
import AchievementList from "./_components/AchievementList";

function AchievementsPage() {
  return (
    <main className="p-4">
      <StackNavigator element="활동 업적" className="px-0 py-4" />

      <AchievementList />
    </main>
  );
}

export default AchievementsPage;
