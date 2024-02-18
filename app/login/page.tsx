// import { useEffect }from "react";
import Link from "next/link";

// import { useQueryGithubLoginUrl } from "./_hooks/useQueryGithubLoginUrl";
import StartWithGithubButton from "./_components/StartWithGithubButton";

function SignUpPage() {
  // 여기서 10분간 안움직이고 있으면, url은 만료 기간이 있는지?
  //  useEffect(() => {
  //   useQueryGithubLoginUrl();
  //  }, [])

  return (
    <main className="flex h-full min-h-[740px] flex-col items-center justify-center">
      <div className="flex min-h-[360px] w-full flex-col justify-between gap-y-3">
        <section className="text-center text-3xl">로고</section>
        <section className="mx-10 flex flex-col items-center gap-2">
          <StartWithGithubButton />
          <Link href={"/"} className="text-xs text-gray-400">
            회원가입 없이 계속 둘러보기
          </Link>
        </section>
      </div>
    </main>
  );
}

export default SignUpPage;
