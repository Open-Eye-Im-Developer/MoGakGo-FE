const formatTime = (startHour: string, startMinute: string, endHour: string, endMinute: string) => {
  const startTime = new Date();
  const endTime = new Date();

  startTime.setUTCHours(Number(startHour));
  startTime.setMinutes(Number(startMinute));

  endTime.setUTCHours(Number(endHour));
  endTime.setMinutes(Number(endMinute));

  const meetStartTime = startTime.toISOString().split(".")[0];
  const meetEndTime = endTime.toISOString().split(".")[0];

  return {
    meetStartTime,
    meetEndTime,
  };
};

export default formatTime;
