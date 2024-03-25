const dict: { [key: string]: { label: string; color: string } } = {
  PROGRESS: { label: "매칭중", color: "bg-neoGreen" },
  MATCHED: { label: "매칭됨", color: "bg-neoGreen" },
  PENDING: { label: "보류", color: "bg-neoYellow" },
  CANCELED: { label: "취소", color: "bg-neoYellow" },
  FINISHED: { label: "종료", color: "bg-neoRed" },
};

export const MATCH_STATUS = new Proxy(dict, {
  get: function (target, prop) {
    if (typeof prop === "string" && target[prop]) {
      return target[prop];
    }
    return { label: "알 수 없는 상태", color: "bg-gray-400" };
  },
});
