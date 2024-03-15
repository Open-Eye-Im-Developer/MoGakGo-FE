"use client";

import Link from "next/link";

import StartWithGithubButton from "./StartWithGithubButton";
import LoginLogo from "./LoginLogo";

function LoginForm() {
  return (
    <form className="mt-16 flex w-full flex-col place-items-center space-y-16">
      <div>
        <LoginLogo />
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
