import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

import { Input } from "@/app/_common/shadcn/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_common/shadcn/ui/form";

import { editFormSchema } from "../../_util/validation";

interface UsernameFieldProps {
  form: UseFormReturn<z.infer<typeof editFormSchema>>;
}

function UsernameField({ form }: UsernameFieldProps) {
  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>이름</FormLabel>
          <FormControl>
            <Input placeholder="이름" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default UsernameField;
