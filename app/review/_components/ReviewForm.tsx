"use client";

import { useForm } from "react-hook-form";
import { MouseEventHandler } from "react";
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
import { Ratings } from "../_constants/rating";
import RatingItem from "./RatingItem";

function ReviewForm() {
  // TODO: 1. 나가기 버튼 누를시, useRouter의 query params로 projectId와 receiverId를 받아와야 함
  // TODO: 2. 상대 유저의 경우, 알람을 클릭할 때 projectId와 receiverId를 받아와야 함

  // TODO: 1,2번이 될 시에 주석 해제
  // const projectId = useSearchParams().get("projectId");
  // const receiverId = useSearchParams().get("receiverId");
  // const router = useRouter();

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
    const rating = form.getValues("rating");
    if (!user) return;

    // if (
    //   !rating ||
    //   typeof receiverId !== "string" ||
    //   typeof projectId !== "string"
    // ) {
    //   return;
    // }

    mutate({
      rating,
      receiverId: 2,
      projectId: 110,
      senderId: user.id,
    });
  };

  // if (!projectId || !receiverId) {
  //   router.back();

  //   return <LoadingSpinner />;
  // }

  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col place-content-center p-4"
        onSubmit={form.handleSubmit(onSubmitReview)}
      >
        <header>
          <h2 className="text-2xl font-semibold text-primary">이 친구 어때?</h2>
          <FormDescription className="text-gray-500">
            오늘의 만난 친구에 대해서 리뷰를 남겨주세요.
          </FormDescription>
        </header>
        <FormField
          name="rating"
          control={form.control}
          render={({ field }) => (
            <FormItem className="space-y-5">
              <FormControl className="flex w-full items-center px-2">
                <ul className="flex w-full justify-center gap-5 py-5">
                  {Ratings.map(({ type, content }, index) => (
                    <li
                      className="flex cursor-pointer flex-col items-center"
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
                      <small className="text-[0.7rem] text-gray-600">
                        {content}
                      </small>
                    </li>
                  ))}
                </ul>
              </FormControl>
              <small className="my-5 flex w-full flex-col text-end text-gray-500">
                <p className="text-xs">
                  여러분의 리뷰가 상대방의 잔디력에 영향을 줍니다.
                </p>
                <p className="text-xs">신중하게 결정해주세요!</p>
              </small>
              <footer className="flex items-end justify-between">
                <small className="cursor-pointer text-gray-500 hover:font-semibold">
                  <Link href={"/"}>리뷰 안하기</Link>
                </small>
                <Button type="submit" disabled={!field.value}>
                  리뷰 저장하기
                </Button>
              </footer>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default ReviewForm;
