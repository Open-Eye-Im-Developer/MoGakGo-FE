"use client";

import Link from "next/link";

import StartWithGithubButton from "./StartWithGithubButton";

function LoginForm() {
  // TODO: 로그인 페이지를 url 변경으로 직접 들어가지 못하도록 next/redirects 설정

  return (
    <form className="mt-16 flex w-full flex-col place-items-center space-y-16">
      <div>
        <section className="grid h-56 w-[297px] place-content-center rounded-lg border-8 border-black bg-gradient-to-b from-[#9FB386] to-[#6F9440] text-center text-5xl">
          <h1>MOGAK</h1>
          <h1>GO</h1>
        </section>
        <p className="mt-2 text-xs">Open Eye Im Developer</p>
      </div>
      <section className="flex flex-col items-center gap-3">
        <StartWithGithubButton />
        <Link href={"/"} className="text-xs text-gray-500">
          회원가입 없이 둘러보기
        </Link>
      </section>
    </form>
  );
}

export default LoginForm;
