import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_common/shadcn/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_common/shadcn/ui/form";

import { editFormSchema } from "../../_util/validation";

interface AchievementFieldProps {
  form: UseFormReturn<z.infer<typeof editFormSchema>>;
}

function AchievementField({ form }: AchievementFieldProps) {
  return (
    <FormField
      control={form.control}
      name="achievementId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>칭호</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="칭호를 선택해주세요" />
              </SelectTrigger>
              <SelectContent
                ref={ref =>
                  ref?.addEventListener("touchend", e => e.preventDefault())
                }
              >
                <SelectGroup>
                  <SelectLabel>칭호</SelectLabel>
                  <SelectItem value="0">모각코도 한걸음부터</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default AchievementField;
