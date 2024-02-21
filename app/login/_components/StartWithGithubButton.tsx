"use client";

import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

import { useQueryGithubLoginUrl } from "../_hooks/useQueryGithubLoginUrl";

function StartWithGithubButton() {
  const { response } = useQueryGithubLoginUrl();

  return (
    <Button className="w-full py-6">
      <Link
        className="flex w-full justify-center gap-x-2"
        href={response ? response.loginUrl : "/"}
      >
        <IconBrandGithub />
        깃허브로 시작하기
      </Link>
    </Button>
  );
}

export default StartWithGithubButton;
