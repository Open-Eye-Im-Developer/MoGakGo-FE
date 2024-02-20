import { z } from "zod";
import { useForm } from "react-hook-form";
import { IconPencil, IconSelector } from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/app/_common/shadcn/ui/use-toast";
import { Textarea } from "@/app/_common/shadcn/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_common/shadcn/ui/select";
import { Input } from "@/app/_common/shadcn/ui/input";
import {
  Form,
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

import { WANTED_JOB } from "../constants";
import { formSchema } from "../_util/validation";

interface EditFormProps {
  defaultValues: z.infer<typeof formSchema>;
}

function EditForm({ defaultValues }: EditFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert(JSON.stringify(values));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="flex max-w-2xl flex-col items-center gap-1.5">
          <div className="relative h-52 w-52">
            {/* 프로필 */}
            <div className="h-full w-full bg-slate-200"></div>
            <div className="absolute bottom-0 right-0 inline-block bg-primary p-2 text-white">
              <IconPencil />
            </div>
          </div>
        </div>
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
                      {form.getValues("wantedJobs").length === 0 && (
                        <p className="flex gap-2 text-sm font-normal">
                          관심 직무를 선택해주세요.
                        </p>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {form.getValues("wantedJobs").map(el => (
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
        <FormField
          control={form.control}
          name="achievementId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>칭호</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
        <Button
          type="submit"
          className="w-full"
          disabled={!form.formState.isValid}
        >
          저장
        </Button>
      </form>
    </Form>
  );
}

export default EditForm;
