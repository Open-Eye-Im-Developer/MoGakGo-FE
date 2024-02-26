const formatMeetingTime = (isoStartTime: string, isoEndTime: string) => {
  try {
    const startTime = isoStartTime.split("T")[1].slice(0, 5);
    const endTime = isoEndTime.split("T")[1].slice(0, 5);
    return `${startTime} ~ ${endTime}`;
  } catch (error) {
    return "유효하지 않은 시간 입니다.";
  }
};

export default formatMeetingTime;
