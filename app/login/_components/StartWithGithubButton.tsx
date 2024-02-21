"use client";

import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

function StartWithGithubButton() {
  return (
    <Button className="w-full py-6">
      <Link
        className="flex w-full justify-center gap-x-2"
        href={"http://3.38.76.76:8080/oauth2/authorization/github"}
      >
        <IconBrandGithub />
        깃허브로 시작하기
      </Link>
    </Button>
  );
}

export default StartWithGithubButton;
