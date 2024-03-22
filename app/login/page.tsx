import { Suspense } from "react";
import Image from "next/image";

import { generateViewport } from "../_common/utils/generateViewport";
import { theme } from "../_common/constants/viewPortTheme";
import LoadingSpinner from "../_common/components/LoadingSpinner";
import LoginForm from "./_components/LoginForm";

import type { Viewport } from "next";

export const viewport: Viewport = generateViewport(theme.GRAY);

function LoginPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main className="relatie flex h-full w-full flex-col items-center bg-[#E8E8E8]">
        <Image
          className="absolute bottom-16 right-0"
          src={"/images/login_bg_imgs.png"}
          alt="게임 버튼"
          width={100}
          height={100}
        />
        <LoginForm />
      </main>
    </Suspense>
  );
}

export default LoginPage;
