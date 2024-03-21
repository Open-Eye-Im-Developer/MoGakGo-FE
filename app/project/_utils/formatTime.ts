import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";

dayjs.extend(utc);
dayjs.locale("ko");

const formatTime = (
  startHour: string,
  startMinute: string,
  endHour: string,
  endMinute: string,
) => {
  const startTime = dayjs()
    .utcOffset(9)
    .hour(Number(startHour))
    .minute(Number(startMinute));
  const endTime = dayjs()
    .utcOffset(9)
    .hour(Number(endHour))
    .minute(Number(endMinute));

  const meetStartTime = startTime.format("YYYY-MM-DDTHH:mm:ss")
  const meetEndTime = endTime.format("YYYY-MM-DDTHH:mm:ss")

  return {
    meetStartTime,
    meetEndTime,
  };
};

export default formatTime;
