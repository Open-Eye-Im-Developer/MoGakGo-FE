"use client";

import { useForm } from "react-hook-form";
import { MouseEventHandler } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/app/_common/shadcn/ui/form";
import { Button } from "@/app/_common/shadcn/ui/button";

import { useMutationReview } from "../_hooks/useMutationReview";
import { RATINGS } from "../_constants/rating";
import RatingItem from "./RatingItem";

function ReviewForm() {
  const projectId = useSearchParams().get("projectId");
  const receiverId = useSearchParams().get("receiverId");
  const router = useRouter();

  const { user } = useAuthStore();
  const { mutate } = useMutationReview();

  const form = useForm({
    defaultValues: {
      rating: 0,
    },
  });

  const handleClickRating: MouseEventHandler<HTMLLIElement> = event => {
    form.setValue("rating", parseInt(event.currentTarget.id) + 1);
  };

  const onSubmitReview = () => {
    if (!projectId || !receiverId)
      throw new Error("projectId 또는 receiverId가 없습니다.");

    const rating = form.getValues("rating");
    if (!user) return;

    mutate({
      rating,
      receiverId: parseInt(receiverId),
      projectId: parseInt(projectId),
      senderId: user.id,
    });
  };

  if (!projectId || !receiverId) {
    router.push("/");
  }

  return (
    <Form {...form}>
      <form
        className="z-10 flex flex-col place-content-center rounded-md border-2 border-black bg-white p-6 shadow-neo"
        onSubmit={form.handleSubmit(onSubmitReview)}
      >
        <FormField
          name="rating"
          control={form.control}
          render={({ field }) => (
            <FormItem className="space-y-14">
              <div className="space-y-2">
                <header className="space-y-1 text-left">
                  <h2 className="text-xl text-black">리뷰 남기기</h2>
                  <FormDescription className="text-xs text-gray-500">
                    오늘의 만난 친구에 대해서 리뷰를 남겨주세요.
                  </FormDescription>
                </header>
                <section className="sapce-y-1">
                  <FormControl className="flex w-full items-center">
                    <ul className="flex w-full justify-center gap-5 pt-5">
                      {RATINGS.map(({ type, content }, index) => (
                        <li
                          className="flex cursor-pointer flex-col items-center gap-1"
                          key={index}
                          id={index.toString()}
                          onClick={handleClickRating}
                        >
                          <RatingItem
                            type={type}
                            checked={field.value === index + 1}
                            onChangeChecked={() =>
                              form.setValue("rating", index + 1)
                            }
                          />
                          <small className="text-nowrap text-[0.6rem] text-gray-500">
                            {content}
                          </small>
                        </li>
                      ))}
                    </ul>
                  </FormControl>
                  <small className="my-5 block w-full text-end text-neoYellow">
                    <p className="text-xs">
                      여러분의 리뷰가 상대방의 잔디력에 영향을 줍니다.
                    </p>
                    <p className="text-xs">신중하게 결정해주세요!</p>
                  </small>
                </section>
              </div>
              <footer className="flex flex-col items-end justify-between pt-10">
                <section className="flex w-full items-center justify-between">
                  <small className="cursor-pointer text-gray-500 hover:text-neoRed">
                    <Link href={"/"}>리뷰 안하기</Link>
                  </small>
                  <Button
                    type="submit"
                    disabled={!field.value}
                    variant={"outline"}
                    className="border-2 border-white bg-neoBlue text-white"
                  >
                    저장하기
                  </Button>
                </section>
              </footer>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default ReviewForm;
