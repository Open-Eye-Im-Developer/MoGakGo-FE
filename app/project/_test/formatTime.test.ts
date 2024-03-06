import formatTime from "../_utils/formatTime";

describe("formatTime 함수 테스트", () => {
  beforeEach(() => {
    const time = new Date("2024-02-19");
    jest.useFakeTimers({ now: time });
    jest.setSystemTime(time);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const mockData = [
    {
      sh: "10",
      sm: "30",
      eh: "12",
      em: "45",
      expectedStartTime: "2024-02-19T10:30:00",
      expectedEndTime: "2024-02-19T12:45:00",
    },
    {
      sh: "9",
      sm: "00",
      eh: "10",
      em: "30",
      expectedStartTime: "2024-02-19T09:00:00",
      expectedEndTime: "2024-02-19T10:30:00",
    },
    {
      sh: "13",
      sm: "15",
      eh: "14",
      em: "45",
      expectedStartTime: "2024-02-19T13:15:00",
      expectedEndTime: "2024-02-19T14:45:00",
    },
    {
      sh: "16",
      sm: "30",
      eh: "18",
      em: "00",
      expectedStartTime: "2024-02-19T16:30:00",
      expectedEndTime: "2024-02-19T18:00:00",
    },
    {
      sh: "11",
      sm: "00",
      eh: "12",
      em: "00",
      expectedStartTime: "2024-02-19T11:00:00",
      expectedEndTime: "2024-02-19T12:00:00",
    },
    {
      sh: "14",
      sm: "30",
      eh: "15",
      em: "30",
      expectedStartTime: "2024-02-19T14:30:00",
      expectedEndTime: "2024-02-19T15:30:00",
    },
    {
      sh: "19",
      sm: "00",
      eh: "20",
      em: "15",
      expectedStartTime: "2024-02-19T19:00:00",
      expectedEndTime: "2024-02-19T20:15:00",
    },
    {
      sh: "8",
      sm: "45",
      eh: "9",
      em: "15",
      expectedStartTime: "2024-02-19T08:45:00",
      expectedEndTime: "2024-02-19T09:15:00",
    },
    {
      sh: "15",
      sm: "45",
      eh: "16",
      em: "30",
      expectedStartTime: "2024-02-19T15:45:00",
      expectedEndTime: "2024-02-19T16:30:00",
    },
    {
      sh: "17",
      sm: "00",
      eh: "18",
      em: "30",
      expectedStartTime: "2024-02-19T17:00:00",
      expectedEndTime: "2024-02-19T18:30:00",
    },
    {
      sh: "13",
      sm: "30",
      eh: "15",
      em: "00",
      expectedStartTime: "2024-02-19T13:30:00",
      expectedEndTime: "2024-02-19T15:00:00",
    },
    // 필요한 만큼 추가적인 모의 데이터를 작성해주세요.
  ];

  test.each(mockData)("올바른간 형식으로 변환되는지 확인", data => {
    const { sh, sm, eh, em, expectedStartTime, expectedEndTime } = data;
    const result = formatTime(sh, sm, eh, em);

    expect(result.meetStartTime).toEqual(expectedStartTime);
    expect(result.meetEndTime).toEqual(expectedEndTime);
  });
});
