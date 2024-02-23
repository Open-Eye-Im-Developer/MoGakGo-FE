import { z } from "zod";

const formSchema = z
  .object({
    place: z.string().min(1),
    startHour: z.string(),
    startMinute: z.string(),
    endHour: z.string(),
    endMinute: z.string(),
    tags: z.any(),
    latitude: z.number(),
    longitude: z.number(),
  })
  .refine(
    data => {
      const startHour = Number(data.startHour);
      const endHour = Number(data.endHour);
      const startMinute = Number(data.startMinute);
      const endMinute = Number(data.endMinute);

      if (startHour === new Date().getHours()) {
        if (
          startMinute >= new Date().getMinutes() &&
          startHour <= endHour &&
          startMinute < endMinute
        )
          return true;
        return false;
      } else if (startHour > new Date().getHours()) {
        if (startHour <= endHour && startMinute < endMinute) return true;
        return false;
      }
      return false;
    },
    {
      message: "종료 시각이 시작 시각보다 이릅니다.",
      path: ["startMinute"],
    },
  )
  .refine(data => data.tags.length <= 3 && data.tags.length > 0, {
    message: "태그는 1개 이상 3개 이하로 설정해야 합니다.",
    path: ["tags"],
  });

export default formSchema;
