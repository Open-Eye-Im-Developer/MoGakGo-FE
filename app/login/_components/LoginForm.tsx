"use client";

import Link from "next/link";

import StartWithGithubButton from "./StartWithGithubButton";

function LoginForm() {
  // TODO: 로그인 페이지를 url 변경으로 직접 들어가지 못하도록 next/redirects 설정

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
