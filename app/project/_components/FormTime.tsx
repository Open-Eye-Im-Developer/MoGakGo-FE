import { FormField, FormItem, FormLabel } from "@/app/_common/shadcn/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_common/shadcn/ui/select";
import React from "react";
import useTime from "../_hooks/useTime";

interface FormTimeProps extends IFormProps {
  label: string;
  hourFieldName: string;
  minuteFieldName: string;
}

function FormTime(props: FormTimeProps) {
  const { hours, minutes } = useTime();
  const { form, label, hourFieldName, minuteFieldName } = props;

  return (
    <div className="flex w-full flex-col gap-2">
      <FormField
        control={form.control}
        name={hourFieldName}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base">{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="시" {...field} />
              </SelectTrigger>
              <SelectContent>
                {hours().map(hour => (
                  <SelectItem key={hour} value={hour.toString()}>
                    {hour} 시
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={minuteFieldName}
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="분" {...field} />
              </SelectTrigger>
              <SelectContent>
                {minutes().map(minute => (
                  <SelectItem key={minute} value={minute.toString()}>
                    {minute} 분
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  );
}

export default FormTime;
