import Image from "next/image";

import LoginForm from "./_components/LoginForm";

function LoginPage() {
  return (
    <main className="relatie flex h-screen w-full flex-col items-center bg-[#E8E8E8]">
      <Image
        className="absolute bottom-16 right-0"
        src={"/images/login_bg_imgs.png"}
        alt="게임 버튼"
        width={100}
        height={100}
      />
      <LoginForm />
    </main>
  );
}

export default LoginPage;
