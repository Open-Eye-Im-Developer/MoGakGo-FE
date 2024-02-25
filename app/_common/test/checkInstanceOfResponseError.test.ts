import { checkInstanceOfResponseError } from "../utils/checkInstanceOfResponseError";

describe("response 객체 타입 확인", () => {
  test("response가 400번대 에러인 경우", () => {
    const response = {
      timestamp: "2024-02-21T13:39:49.373082006",
      statusCode: 401,
      code: "E010201",
      message: "사용자의 인증 정보를 찾을 수 없습니다.",
    };
    expect(checkInstanceOfResponseError(response)).toStrictEqual(true);
  });

  test("response가 200번대인 경우", () => {
    const response = {
      data: [],
    };
    expect(checkInstanceOfResponseError(response)).toStrictEqual(false);
  });
});
