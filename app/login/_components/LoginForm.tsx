"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import LoadingSpinner from "@/app/_common/components/LoadingSpinner";

import { useMutationLogin } from "../_hooks/useMutationLogin";
import StartWithGithubButton from "./StartWithGithubButton";
import LoginLogo from "./LoginLogo";

function LoginForm() {
  const code = useSearchParams().get("code");
  const { mutate } = useMutationLogin();

  useEffect(() => {
    if (!code) return;

    mutate(code);
  }, [mutate, code]);

  if (code) return <LoadingSpinner />;

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
