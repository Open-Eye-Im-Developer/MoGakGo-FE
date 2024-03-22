export const calculateAchievement = (nowAchieved: number, total: number) => {
  if (total === 0) {
    throw new Error("총값은 0이 될 수 없습니다.");
  }

  // TODO: 데이터 초기화 이전까지 임시로 주석 처리
  // if (nowAchieved > total) {
  //   throw new Error("현재값이 총값보다 큽니다.");
  // }

  if (total - nowAchieved < 0) return 100;

  const percentage = (nowAchieved / total) * 100;
  return Math.floor(percentage);
};
