"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { DialogClose } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";

import { ToastAction } from "@/app/_common/shadcn/ui/toast";
import { Separator } from "@/app/_common/shadcn/ui/separator";
import { Form, FormMessage } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";

import formatTime from "../_utils/formatTime";
import usePopupToast from "../_hooks/usePopupToast";
import FormTime from "./FormTime";
import FormTag from "./FormTag";
import FormPlace from "./FormPlace";

const formSchema = z
  .object({
    place: z.string().min(1),
    startHour: z.string(),
    startMinute: z.string(),
    endHour: z.string(),
    endMinute: z.string(),
    tags: z.any(),
    lat: z.number(),
    lng: z.number(),
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

interface ProjectCreateFormProps {
  onClose: (open: boolean) => void;
}

function ProjectCreateForm(props: ProjectCreateFormProps) {
  const { onClose } = props;
  const { showToast } = usePopupToast(
    <ToastAction altText="다시 시도">다시 시도</ToastAction>,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startHour: new Date().getHours().toString(),
      startMinute: "0",
      endHour: new Date().getHours().toString(),
      endMinute: "0",
      tags: [],
    },
  });

  // TODO: 서버로 form 데이터 전송하는 로직 추가 & form의 시간정보 처리
  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    const { startHour, startMinute, endHour, endMinute, ...rest } = values;
    const { meetStartTime, meetEndTime } = formatTime(
      startHour,
      startMinute,
      endHour,
      endMinute,
    );

    // TODO: meetLat, meetLng를 사용자 위치 정보(geolocation)로 변경
    const formattedValues = {
      creatorId: 2,
      meetStartTime,
      meetEndTime,
      meetLat: 37.63338336616322, // rest.lat
      meetLng: 127.0783098757533, // rest.lng
      meetDetail: rest.place,
      tags: rest.tags,
    };

    // TODO: 사용자 위치 정보(geolocation)을 전송하여, 범위에 맞는 장소 찾기
    const response = await fetch("/api/project/create", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formattedValues }),
    });

    const { data, status } = await response.json();

    showToast(data, status);

    if (status === 201) {
      onClose && onClose(false);
    }
  };

  const handleOnPressEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        onKeyDown={handleOnPressEnter}
        className="flex h-full w-full flex-col justify-between space-y-5"
      >
        <section>
          <main className="flex flex-col gap-5">
            <FormPlace form={form} />
            <aside className="flex flex-col gap-5">
              <div className="flex justify-between gap-3">
                <FormTime
                  form={form}
                  label="🕡 시작"
                  hourFieldName="startHour"
                  minuteFieldName="startMinute"
                />
                <Separator
                  orientation="vertical"
                  color="black"
                  className="h-20 self-end"
                />
                <FormTime
                  form={form}
                  label="🕡 종료"
                  hourFieldName="endHour"
                  minuteFieldName="endMinute"
                />
              </div>
              {form.formState.errors.startMinute && (
                <FormMessage>
                  {form.formState.errors.startMinute.message}
                </FormMessage>
              )}
            </aside>
            <FormTag form={form} />
          </main>
        </section>
        <footer className="flex justify-end gap-1">
          <Button type="submit">생성</Button>
          <DialogClose asChild>
            <Button type="button">취소</Button>
          </DialogClose>
        </footer>
      </form>
    </Form>
  );
}

export default ProjectCreateForm;
