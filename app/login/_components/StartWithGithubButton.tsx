"use client";

import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/app/_common/shadcn/ui/button";

function StartWithGithubButton() {
  // const { response, isError } = useQueryGithubLoginUrl();

  const handleLogin = () => {
    // getLoginUrl CORS 해결 전 임시방편
    window.location.href = "http://3.38.76.76:8080/oauth2/authorization/github";
  };

  return (
    <Button className="flex w-full gap-x-2 py-6" onClick={handleLogin}>
      <IconBrandGithub />
      깃허브로 시작하기
    </Button>
  );
}

export default StartWithGithubButton;
