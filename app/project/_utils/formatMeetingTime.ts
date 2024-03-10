import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
import dayjs from "dayjs";

dayjs.extend(utc);
dayjs.extend(tz);
const timezone = "Asia/Seoul";

const formatMeetingTime = (isoStartTime: string, isoEndTime: string) => {
  if (!isoStartTime || !isoEndTime) return "유효하지 않은 시간 입니다.";

  const startTime = dayjs(isoStartTime).tz(timezone).format("HH:mm");
  const endTime = dayjs(isoEndTime).tz(timezone).format("HH:mm");
  return `${startTime} ~ ${endTime}`;
};

export default formatMeetingTime;
