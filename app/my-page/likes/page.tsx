"use client";

import { Button } from "@/app/_common/shadcn/ui/button";

import StackNavigator from "@/app/_common/components/StackNavigator";

function LikesPage() {
  // const { user } = useAuthStore();
  // const { data, fetchNextPage, hasNextPage, isFetching, isPending } =
  //   useInfiniteQueryLikes(user?.id);

  return (
    <main className="container flex min-h-screen max-w-2xl flex-col gap-8 bg-gray-50 pb-8 dark:bg-gray-950">
      <StackNavigator content={"내가 찔러보기한 사람"} />
      <section className="flex flex-col gap-2">
        {/* TODO: 찔러보기 API 확인 필요 */}
      </section>
      <Button
        className="w-full"
        disabled
        // onClick={() => fetchNextPage()}
        // disabled={!hasNextPage || isFetching}
      >
        더보기
      </Button>
    </main>
  );
}

export default LikesPage;
