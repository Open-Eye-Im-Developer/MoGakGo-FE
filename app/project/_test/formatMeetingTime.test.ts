import formatMeetingTime from "../_utils/formatMeetingTime";

describe("formatMeetingTime 함수 테스트", () => {
  test("유효한 데이터인 경우 올바른 시간으로 반환이 되는가", () => {
    const mockData = {
      startTime: "2024-02-26T10:30:57.760Z",
      endTime: "2024-02-26T12:45:57.760Z",
    };
    expect(
      formatMeetingTime(mockData.startTime, mockData.endTime),
    ).toStrictEqual("10:30 ~ 12:45");
  });

  test("유효하지 않은 데이터인 경우 안내 문구로 반환이 되는가", () => {
    const mockData = {
      startTime: "",
      endTime: "",
    };
    expect(
      formatMeetingTime(mockData.startTime, mockData.endTime),
    ).toStrictEqual("유효하지 않은 시간 입니다.");
  });
});
