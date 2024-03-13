"use client";

import { useMemo } from "react";

import { useAuthStore } from "@/app/_common/store/useAuthStore";
import { Button } from "@/app/_common/shadcn/ui/button";

import StackNavigator from "@/app/_common/components/StackNavigator";

import { useInfiniteQueryLikes } from "../_hooks/useInfiniteQueryLikes";
import UserCardSkeleton from "../_components/UserCardSkeleton";
import UserCard from "../_components/UserCard";

function LikesPage() {
  const { user } = useAuthStore();
  const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
    useInfiniteQueryLikes(user?.id);

  const users = useMemo(
    () => data?.pages.map(page => (page ? page.data : [])).flat(),
    [data],
  );

  return (
    <main className="container flex min-h-screen max-w-2xl flex-col gap-8 bg-gray-50 pb-8 dark:bg-gray-950">
      <StackNavigator content={"내가 찔러보기한 사람"} />
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
  );
}

export default LikesPage;
