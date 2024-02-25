"use client";

import { useForm } from "react-hook-form";
import { MouseEventHandler } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "../../shadcn/ui/form";
import { DialogClose } from "../../shadcn/ui/dialog";
import { Button } from "../../shadcn/ui/button";
import RatingItem from "./RatingItem";
import { Ratings } from "./constants/rating";

function ReviewForm() {
  const form = useForm({
    defaultValues: {
      rating: 0,
    },
  });

  const handleClickRating: MouseEventHandler<HTMLLIElement> = event => {
    form.setValue("rating", parseInt(event.currentTarget.id) + 1);
  };

  return (
    <Form {...form}>
      <form className="flex h-full flex-col p-4">
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
                <DialogClose asChild>
                  <small className="cursor-pointer text-gray-500 hover:font-semibold">
                    리뷰 안하기
                  </small>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" disabled={!field.value}>
                    리뷰 저장하기
                  </Button>
                </DialogClose>
              </footer>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default ReviewForm;
