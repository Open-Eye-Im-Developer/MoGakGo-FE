"use client";

import Link from "next/link";

import StartWithGithubButton from "./StartWithGithubButton";

function LoginForm() {
  // const router = useRouter();
  // const { setAccessToken } = useAuthStore();
  // const { data, isLoading, isSuccess } = useQueryLoginSuccess();

  // if (isLoading) return <div>loading...</div>;

  // if (isSuccess) {
  //   router.push("signup");

  //   data && setAccessToken(data.accessToken);
  // }

  return (
    <div className="flex min-h-[360px] w-full flex-col justify-between gap-y-3">
      <section className="text-center text-3xl">로고</section>
      <section className="mx-10 flex flex-col items-center gap-2">
        <StartWithGithubButton />
        <Link href={"/"} className="text-xs text-gray-400">
          회원가입 없이 계속 둘러보기
        </Link>
      </section>
    </div>
  );
}

export default LoginForm;
