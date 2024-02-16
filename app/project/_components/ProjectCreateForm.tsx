"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { DialogClose } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";

import { Separator } from "@/app/_common/shadcn/ui/separator";
import { Form, FormMessage } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";

import FormTime from "./FormTime";
import FormTag from "./FormTag";
import FormPlace from "./FormPlace";

const formSchema = z
  .object({
    place: z.string().min(2, {
      message: "장소를 설정하세요.",
    }),
    startHour: z.string(),
    startMinute: z.string(),
    endHour: z.string(),
    endMinute: z.string(),
    tags: z.undefined(),
  })
  .refine(
    data => {
      if (data.startHour === data.endHour) {
        return data.startMinute < data.endMinute;
      }
      return data.startHour < data.endHour;
    },
    {
      message: "종료 시각이 시작 시각보다 이릅니다.",
      path: ["startMinute"],
    },
  );

interface ProjectCreateFormProps {
  onClose: (open: boolean) => void;
}

function ProjectCreateForm(props: ProjectCreateFormProps) {
  const { onClose } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startHour: new Date().getHours().toString(),
      startMinute: "0",
      endHour: new Date().getHours().toString(),
      endMinute: "0",
    },
  });

  // TODO: 서버로 form 데이터 전송하는 로직 추가
  const handleOnSubmit = () => {
    onClose && onClose(false);
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
          <main className="flex flex-col gap-7">
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
                <FormMessage>종료 시각이 시작 시각보다 이릅니다.</FormMessage>
              )}
            </aside>
            <FormTag form={form} />
          </main>
        </section>
        <footer className="flex justify-end gap-1">
          <Button type="submit" onClick={e => e.stopPropagation()}>
            생성
          </Button>
          <DialogClose asChild>
            <Button type="button" onClick={e => e.stopPropagation()}>
              취소
            </Button>
          </DialogClose>
        </footer>
      </form>
    </Form>
  );
}

export default ProjectCreateForm;
