import { z } from "zod";
import { useForm } from "react-hook-form";
import { IconPencil } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";

import { UserType } from "../../types";
import { editFormSchema } from "../../_util/validation";
import WantedJobsField from "./WantedJobsField";
import UsernameField from "./usernameField";
import DevelopLanuagesField from "./DevelopLanguagesField";
import BioField from "./BioField";
import AchievementField from "./AchievementField";

interface EditFormProps {
  defaultValues: UserType;
}

function EditForm({ defaultValues }: EditFormProps) {
  const form = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      ...defaultValues,
      isResetAvator: false,
    },
  });

  function handleSubmit(values: z.infer<typeof editFormSchema>) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="flex max-w-2xl flex-col items-center gap-1.5">
          <div className="relative h-52 w-52">
            {/* 프로필 */}
            <div className="h-full w-full bg-slate-200"></div>
            <div className="absolute bottom-0 right-0 inline-block bg-primary p-2 text-white">
              <IconPencil />
            </div>
          </div>
        </div>
        {/* <AvatorUploadFiled form={form} /> */}
        <UsernameField form={form} />
        <BioField form={form} />
        <DevelopLanuagesField form={form} />
        <WantedJobsField form={form} />
        <AchievementField form={form} />
        <Button
          type="submit"
          className="w-full"
          disabled={!form.formState.isValid}
        >
          저장
        </Button>
      </form>
    </Form>
  );
}

export default EditForm;
