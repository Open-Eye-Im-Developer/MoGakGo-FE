"use client";

import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

function StartWithGithubButton() {
  const envGithubUrl = process.env.NEXT_PUBLIC_GITHUB_LOGIN_URL;

  if (!envGithubUrl) {
    throw new Error("envGithubUrl이 존재하지 않습니다.");
  }

  const githubUrl = new URL(envGithubUrl);

  return (
    <Button className="w-full py-6">
      <Link className="flex w-full justify-center gap-x-2" href={githubUrl}>
        <IconBrandGithub />
        깃허브로 시작하기
      </Link>
    </Button>
  );
}

export default StartWithGithubButton;
