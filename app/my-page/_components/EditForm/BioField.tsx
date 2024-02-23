import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

import { Textarea } from "@/app/_common/shadcn/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_common/shadcn/ui/form";

import { editFormSchema } from "../../_util/validation";

interface BioFieldProps {
  form: UseFormReturn<z.infer<typeof editFormSchema>>;
}

function BioField({ form }: BioFieldProps) {
  return (
    <FormField
      control={form.control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel>한 줄 소개</FormLabel>
          <FormControl>
            <Textarea
              className="resize-none"
              placeholder="한 줄 소개"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default BioField;
