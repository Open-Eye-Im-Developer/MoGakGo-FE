"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";
import { zodResolver } from "@hookform/resolvers/zod";

import { useQueryUserData } from "@/app/my-page/_hooks/useQueryUserData";
import { Separator } from "@/app/_common/shadcn/ui/separator";
import { Form, FormMessage } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";

import formatTime from "../_utils/formatTime";
import { FormmatedValues } from "../_types/type";
import useCreateProjectMutation from "../_hooks/useCreateProjectMutation";
import formSchema from "../_constants/formSchema";
import FormTime from "./FormTime";
import FormTag from "./FormTag";
import FormPlace from "./FormPlace";

interface ProjectCreateFormProps {
  onClose: (open: boolean) => void;
}

function ProjectCreateForm(props: ProjectCreateFormProps) {
  const { onClose } = props;
  const { createNewProject } = useCreateProjectMutation(onClose);
  const { data: user } = useQueryUserData();

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

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    const { startHour, startMinute, endHour, endMinute, ...rest } = values;
    const { meetStartTime, meetEndTime } = formatTime(
      startHour,
      startMinute,
      endHour,
      endMinute,
    );

    const formattedValues: FormmatedValues = {
      creatorId: user!.id,
      meetStartTime,
      meetEndTime,
      meetLat: rest.latitude, // rest.lat
      meetLng: rest.longitude, // rest.lng
      meetDetail: rest.place,
      tags: rest.tags,
    };

    createNewProject(formattedValues);
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
                  label="시작"
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
                  label="종료"
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
        <footer className="flex items-center justify-between gap-2 text-white">
          <div className="text-black">
            <Link
              href="https://beomahn.notion.site/24b02e4a402845b8ab9e1ed34dac31d0?pvs=4"
              className="text-xs text-[#a2a2a2]"
            >
              프로젝트 생성 방법
            </Link>
          </div>
          <aside className="flex gap-2">
            <Button type="submit" className="bg-neoBlue">
              생성
            </Button>
            <DialogClose asChild>
              <Button type="button" className="bg-neoRed">
                취소
              </Button>
            </DialogClose>
          </aside>
        </footer>
      </form>
    </Form>
  );
}

export default ProjectCreateForm;
