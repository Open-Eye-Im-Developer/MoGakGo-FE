function TempCard() {
  return (
    <div className="align-center flex gap-4 rounded-md bg-white p-3 dark:bg-gray-900">
      <div className="h-12 w-12 animate-pulse rounded-full bg-slate-200"></div>
      <div className="flex flex-col justify-center">
        <div className="text-sm">맥심플랜트 이태원점</div>
        <div className="text-xs">16:00 ~ 18:00</div>
      </div>
    </div>
  );
}

export default TempCard;
