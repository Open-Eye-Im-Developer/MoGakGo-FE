import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import { editFormSchema } from "../../_util/validation";

interface DevelopLanuagesFieldProps {
  form: UseFormReturn<z.infer<typeof editFormSchema>>;
}
function DevelopLanuagesField({ form }: DevelopLanuagesFieldProps) {
  return (
    <FormField
      control={form.control}
      name="developLanguages"
      render={({ field }) => (
        <FormItem>
          <FormLabel>주 언어</FormLabel>
          <FormControl>
            <Button
              variant="outline"
              className="block w-full px-3 text-left"
              disabled
            >
              <div className="flex gap-2">
                {field.value.map(lang => (
                  <Badge key={lang}>{lang}</Badge>
                ))}
              </div>
            </Button>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DevelopLanuagesField;
