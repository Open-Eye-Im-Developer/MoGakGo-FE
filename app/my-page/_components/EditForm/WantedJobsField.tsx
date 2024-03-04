import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { IconSelector } from "@tabler/icons-react";

import { toast } from "@/app/_common/shadcn/ui/use-toast";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_common/shadcn/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_common/shadcn/ui/dialog";
import { Checkbox } from "@/app/_common/shadcn/ui/checkbox";
import { Button } from "@/app/_common/shadcn/ui/button";
import { Badge } from "@/app/_common/shadcn/ui/badge";

import { WANTED_JOB } from "@/app/_common/constants/wantedJob.constants";

import { editFormSchema } from "../../_util/validation";

interface WantedJobsFieldProps {
  form: UseFormReturn<z.infer<typeof editFormSchema>>;
}

function WantedJobsField({ form }: WantedJobsFieldProps) {
  return (
    <FormField
      control={form.control}
      name="wantedJobs"
      render={() => (
        <FormItem>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col gap-2">
                <FormLabel className="font-normal">관심 직무</FormLabel>
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto justify-between px-3"
                >
                  {(form.getValues("wantedJobs") ?? []).length === 0 && (
                    <p className="flex gap-2 text-sm font-normal">
                      관심 직무를 선택해주세요.
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {(form.getValues("wantedJobs") ?? []).map(el => (
                      <Badge key={el}>
                        {WANTED_JOB.find(job => job.id === el)?.label}
                      </Badge>
                    ))}
                  </div>
                  <IconSelector className="shrink-0" size={14} />
                </Button>
                <FormMessage />
              </div>
            </DialogTrigger>
            <DialogContent className="flex max-h-full flex-col">
              <DialogHeader>
                <DialogTitle>관심 직무</DialogTitle>
                <DialogDescription>
                  관심 직무를 최소 1개, 최대 3개 선택해주세요.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 overflow-scroll">
                {WANTED_JOB.map(item => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="wantedJobs"
                    render={({ field }) => (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={checked => {
                              const newArr = checked
                                ? [...field.value, item.id]
                                : field.value?.filter(
                                    value => value !== item.id,
                                  );

                              if (newArr.length > 3) {
                                toast({
                                  description:
                                    "관심 직무는 최대 3개 까지만 선택 가능합니다,",
                                });
                                return;
                              }

                              return field.onChange(newArr);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    닫기
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </FormItem>
      )}
    />
  );
}

export default WantedJobsField;
