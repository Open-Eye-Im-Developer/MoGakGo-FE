export const calculateAchievement = (nowGrade: number, total: number) => {
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  const percentage = (nowGrade / total) * 100;
  return Math.floor(percentage);
};
