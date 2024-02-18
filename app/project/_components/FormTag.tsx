import React from "react";
import { IconCircleX } from "@tabler/icons-react";

import { Input } from "@/app/_common/shadcn/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/_common/shadcn/ui/form";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import useTagSelect from "../_hooks/useTagSelect";

interface FormTagProps extends IFormProps {}

function FormTag(props: FormTagProps) {
  const { form } = props;
  const { ref, tagList, handleAddTag, handleRemoveTag } = useTagSelect(form);

  return (
    <FormField
      control={form.control}
      name="tags"
      render={() => (
        <FormItem>
          <FormLabel className="text-base">
            <span>🏷 태그</span>
            <span className="text-xs text-[#868686]"> 최대 7글자</span>
          </FormLabel>
          <FormControl>
            <>
              <Input
                ref={ref}
                placeholder="조용한, 수다스러운, 할거하는 (최대 3개)"
                className="w-full"
                onKeyDown={handleAddTag}
              />
              <aside className="flex flex-wrap gap-1">
                {tagList.map(tag => (
                  <Badge
                    key={tag}
                    onClick={() => handleRemoveTag(tag)}
                    className="gap-1"
                  >
                    <p className="text-sm">{tag}</p>
                    <IconCircleX size={18} />
                  </Badge>
                ))}
              </aside>
            </>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default FormTag;
