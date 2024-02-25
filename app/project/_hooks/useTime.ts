import { useCallback } from "react";

function useTime() {
  const hours = useCallback(() => {
    const currentHour = new Date().getHours();
    const hourData = [];
    for (let i = currentHour; i < 24; i++) {
      hourData.push(i.toString());
    }
    return hourData;
  }, []);

  const minutes = useCallback(() => {
    const minuteData = [];
    for (let i = 0; i < 60; i += 5) {
      minuteData.push(i.toString());
    }
    return minuteData;
  }, []);

  return { hours, minutes };
}

export default useTime;