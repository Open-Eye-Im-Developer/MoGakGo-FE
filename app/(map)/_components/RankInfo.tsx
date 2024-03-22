function RankInfo() {
  return (
    <aside className="absolute bottom-0 left-4 text-[0.65rem] text-primary">
      <div>모각고 밀집도 순위</div>
      <ul>
        <li className="flex items-center">
          <span className="mr-1 mt-0.5 inline-block h-4 w-8 rounded-sm bg-mapRankFirst"></span>
          <span className="w-5">1위</span>
        </li>
        <li className="flex items-center">
          <span className="mr-1 mt-0.5 inline-block h-4 w-8 rounded-sm bg-mapRankSecond"></span>
          <span className="w-5">2위</span>
        </li>
        <li className="flex items-center">
          <span className="mr-1 mt-0.5 inline-block h-4 w-8 rounded-sm bg-mapRankThird"></span>
          <span className="w-5">3위</span>
        </li>
      </ul>
    </aside>
  );
}

export default RankInfo;
