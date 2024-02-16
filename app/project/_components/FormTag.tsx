import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/_common/shadcn/ui/form";
import { Input } from "@/app/_common/shadcn/ui/input";
import React from "react";

interface FormTagProps extends IFormProps {}

function FormTag(props: FormTagProps) {
  const { form } = props;

  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">
            <span>🏷 태그</span>
            <span className="text-xs text-[#868686]"> 최대 7글자</span>
          </FormLabel>
          <FormControl>
            <>
              <Input
                placeholder="조용한, 수다스러운, 할거하는, ... (최대 3개)"
                className="w-full"
              />
            </>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default FormTag;
