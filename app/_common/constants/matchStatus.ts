const dict: { [key: string]: string } = {
  PENDING: "매칭중",
  MATCHED: "매칭됨",
  CANCELED: "취소",
  FINISHED: "종료",
};

export const MATCH_STATUS = new Proxy(dict, {
  get: function (target, prop) {
    if (typeof prop === "string" && target[prop]) {
      return target[prop];
    }
    return prop;
  },
});
