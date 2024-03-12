function RankInfo() {
  return (
    <aside className="absolute bottom-0 left-4 text-[0.65rem] text-primary">
      <div>프로젝트 밀집도 순위</div>
      <ul>
        <li className="flex items-center">
          <span className="border-sky bg-mapRankFirst mr-1 inline-block h-4 w-8 rounded-sm border"></span>
          <span className="w-5">1위</span>
        </li>
        <li className="flex items-center">
          <span className="border-sky bg-mapRankSecond mr-1 inline-block h-4 w-8 rounded-sm border"></span>
          <span className="w-5">2위</span>
        </li>
        <li className="flex items-center">
          <span className="border-sky bg-mapRankThird mr-1 inline-block h-4 w-8 rounded-sm border"></span>
          <span className="w-5">3위</span>
        </li>
      </ul>
    </aside>
  );
}

export default RankInfo;
