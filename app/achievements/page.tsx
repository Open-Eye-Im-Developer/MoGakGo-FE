import AchievementList from "./_components/AchievementList";

function AchievementsPage() {
  return (
    <main className="p-4">
      <h2 className="py-3 text-center text-2xl font-semibold">내 업적</h2>
      <AchievementList />
    </main>
  );
}

export default AchievementsPage;
