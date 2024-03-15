import { z } from "zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";

import { editFormSchema } from "../../_util/validation";
import { useMutationUpdateUser } from "../../_hooks/useMutationUpdateUser";
import WantedJobsField from "./WantedJobsField";
import UsernameField from "./UsernameField";
import BioField from "./BioField";

interface EditFormProps {
  defaultValues?: z.infer<typeof editFormSchema>;
  disabled?: boolean;
}

function EditForm({ defaultValues, disabled }: EditFormProps) {
  const { mutate, isPending } = useMutationUpdateUser();

  const form = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const handleSubmit = async (values: z.infer<typeof editFormSchema>) => {
    await mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <fieldset className="space-y-4" disabled={disabled || isPending}>
          <div className="flex max-w-2xl flex-col items-center gap-1.5">
            <div className="relative h-52 w-52">
              {defaultValues?.avatarUrl ? (
                <Image
                  src={defaultValues.avatarUrl}
                  alt={`${defaultValues.username}'s avatar image`}
                  width={208}
                  height={208}
                />
              ) : (
                <div className="h-full w-full bg-slate-200"></div>
              )}
            </div>
          </div>
          <UsernameField form={form} />
          <BioField form={form} />
          <WantedJobsField form={form} />
          <Button
            type="submit"
            className="w-full"
            disabled={!form.formState.isValid}
          >
            저장
          </Button>
        </fieldset>
      </form>
    </Form>
  );
}

export default EditForm;
