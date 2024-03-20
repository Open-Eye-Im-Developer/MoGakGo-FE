import { calculateAchievement } from "../_utils/calculateAchievement";

describe("calculateAchievement 함수 테스트", () => {
  test("total에 0이 들어가는 경우 테스트", () => {
    expect(() => calculateAchievement(10, 0)).toThrow(
      "총값은 0이 될 수 없습니다.",
    );
  });

  test("총값이 현재 달성 값보다 크면 에러를 반환하는지 테스트", () => {
    expect(() => calculateAchievement(3, 2)).toThrow(
      "현재값이 총값보다 큽니다.",
    );
  });

  test("현재 달성 값에 0이 들어가는 경우 테스트", () => {
    expect(calculateAchievement(0, 10)).toEqual(0);
  });

  test("소수점 아래 자리를 지우고 값을 반환하는지 테스트", () => {
    expect(calculateAchievement(3, 13)).toEqual(23);
  });

  test("총값과 현재 달성 값이 같으면 100을 반환하는지 테스트", () => {
    expect(calculateAchievement(10, 10)).toEqual(100);
  });

  test("정상값이 들어간 경우 예상되는 결과값 테스트", () => {
    expect(calculateAchievement(5, 10)).toEqual(50);
  });
});
