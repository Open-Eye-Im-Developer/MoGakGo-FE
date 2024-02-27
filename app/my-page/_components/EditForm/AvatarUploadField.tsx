"use client";

import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { useRef } from "react";

import { Input } from "@/app/_common/shadcn/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/_common/shadcn/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_common/shadcn/ui/dialog";
import { Button } from "@/app/_common/shadcn/ui/button";

import { editFormSchema } from "../../_util/validation";

interface AvatarUploadFiledProps {
  form: UseFormReturn<z.infer<typeof editFormSchema>>;
}

function AvatarUploadFiled({ form }: AvatarUploadFiledProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => fileRef.current?.click();
  const handleResetProfile = () => form.setValue("isResetAvator", true);

  return (
    <FormField
      control={form.control}
      name="avatar"
      render={({ field }) => (
        <FormItem>
          <Dialog>
            <DialogTrigger>프로필 이미지 변경</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>프로필 이미지</DialogTitle>
                <DialogDescription>
                  프로필 이미지를 변경하거나 초기화 할 수 있습니다.
                </DialogDescription>
                <FormControl>
                  <Input
                    ref={fileRef}
                    type="file"
                    onChange={e =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                    // className="hidden"
                  />
                </FormControl>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-52 w-52 bg-gray-500 ">
                    {/* (isResetAvatar && 기본 아바타 이미지) || avatar || 기존 아바타 */}
                  </div>
                  <div className="space-x-2">
                    <Button type="button" onClick={handleFileSelect}>
                      사진 선택
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleResetProfile}
                    >
                      기본 프로필
                    </Button>
                  </div>
                </div>

                <div className="space-x-2 text-right">
                  <Button type="button">적용</Button>
                  <Button type="button" variant="outline">
                    취소
                  </Button>
                </div>
                <FormMessage />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </FormItem>
      )}
    />
  );
}

export default AvatarUploadFiled;
