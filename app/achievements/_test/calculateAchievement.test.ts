import { calculateAchievement } from "../_utils/calculateAchievement";

describe("calculateAchievement", () => {
  it("should calculate the percentage of nowGrade to total", () => {
    const result = calculateAchievement(50, 100);
    expect(result).toBe(50);
  });

  it("should round down the result", () => {
    const result = calculateAchievement(1, 3);
    expect(result).toBe(33);
  });

  it("should throw an error if total is zero", () => {
    expect(() => calculateAchievement(50, 0)).toThrowError(
      "Total cannot be zero",
    );
  });
});
