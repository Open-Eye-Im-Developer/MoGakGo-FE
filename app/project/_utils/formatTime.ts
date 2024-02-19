const formatTime = (sh: string, sm: string, eh: string, em: string) => {
  const startTime = new Date();
  const endTime = new Date();

  startTime.setUTCHours(Number(sh));
  startTime.setMinutes(Number(sm));

  endTime.setUTCHours(Number(eh));
  endTime.setMinutes(Number(em));

  const meetStartTime = startTime.toISOString().split(".")[0];
  const meetEndTime = endTime.toISOString().split(".")[0];

  return {
    meetStartTime,
    meetEndTime,
  };
};

export default formatTime;
