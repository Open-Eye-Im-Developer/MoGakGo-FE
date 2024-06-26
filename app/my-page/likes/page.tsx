"use client";

import { useMemo } from "react";

import { Button } from "@/app/_common/shadcn/ui/button";

import StackNavigator from "@/app/_common/components/StackNavigator";

import { useQuerySignUpUser } from "@/app/_common/hooks/queries/useQuerySignUpUser";

import { useInfiniteQueryLikes } from "../_hooks/useInfiniteQueryLikes";
import UserCardSkeleton from "../_components/UserCardSkeleton";
import UserCard from "../_components/UserCard";

function LikesPage() {
  const { data: user } = useQuerySignUpUser();
  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useInfiniteQueryLikes(user?.id);

  const users = useMemo(
    () => data?.pages.map(page => (page ? page.data : [])).flat(),
    [data],
  );

  return (
    <>
      <StackNavigator element={"내가 찔러보기한 사람"} />
      <main className="container flex min-h-full max-w-2xl flex-col gap-8 pb-8">
        <section className="flex flex-col gap-2">
          {users
            ? users.map(el => <UserCard key={el.createdAt} data={el} />)
            : null}
          {isPending || isFetching
            ? Array.from({ length: 5 }).map((_, i) => (
                <UserCardSkeleton key={i} />
              ))
            : null}
        </section>
        <Button
          className="w-full"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetching}
        >
          더보기
        </Button>
      </main>
    </>
  );
}

export default LikesPage;
