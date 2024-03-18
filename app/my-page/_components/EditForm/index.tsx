import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_common/shadcn/ui/avatar";

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
          <div className="flex max-w-2xl flex-col items-center">
            <Avatar className="h-28 w-28">
              <AvatarImage
                src={defaultValues?.avatarUrl}
                alt={`${defaultValues?.username}'s avatar image`}
              />
              <AvatarFallback></AvatarFallback>
            </Avatar>
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
