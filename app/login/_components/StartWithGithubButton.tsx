"use client";

import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

function StartWithGithubButton() {
  // const handleLogin = () => {
  //   if (isError) redirect("/login");
  //   // getGithubLoginUrl();
  //   if (isSuccess && githubUrlRes) {
  //     githubUrlRes.isUserAvaliable ? redirect("/") : redirect("/signup");
  //   }
  // };

  return (
    <Button className="flex w-full gap-x-2 py-6">
      <IconBrandGithub />
      깃허브로 시작하기
    </Button>
  );
}

export default StartWithGithubButton;
