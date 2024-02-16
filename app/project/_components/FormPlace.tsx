import React from "react";

import { Input } from "@/app/_common/shadcn/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/_common/shadcn/ui/form";

interface FormTagProps extends IFormProps {}

function FormPlace(props: FormTagProps) {
  const { form } = props;

  return (
    <FormField
      control={form.control}
      name="place"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">📍 장소</FormLabel>
          <FormControl>
            <Input
              placeholder="장소를 입력하세요."
              onClick={(e) => e.stopPropagation()}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default FormPlace;
