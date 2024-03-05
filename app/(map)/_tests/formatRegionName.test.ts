import { formatRegionName } from "../_utils/formatRegionName";
import REGION_CODE from "../../_common/constants/regionCode";

describe("formatRegionName 함수 테스트", () => {
  const mockRegionCode = Object.values(REGION_CODE);
  const mockRegionName = Object.keys(REGION_CODE);

  test.each(mockRegionCode)(
    "법정구역코드를 보냈을 때 올바른 지역명으로 반환되는가",
    regionCode => {
      const index = mockRegionCode.indexOf(regionCode);
      const regionName = formatRegionName(regionCode);
      expect(regionName).toEqual(mockRegionName[index]);
    },
  );

  test("존재하지 않는 법정구역코드거나 지역명이 undefined인 경우 빈 문자열을 반환하는가", () => {
    expect(formatRegionName(0)).toStrictEqual("");
  });
});
