"use client";

import StackNavigator from "@/app/_common/components/StackNavigator";

import LoginRequestModal from "../_components/LoginRequestModal";
import DeleteUserButton from "../_components/DeleteUserButton";

function DeletePage() {
  return (
    <>
      <LoginRequestModal />
      <StackNavigator element={"회원 탈퇴"} />
      <main className="container flex min-h-screen max-w-2xl flex-col gap-8 pb-8">
        <div className="flex flex-col gap-4">
          {/* TODO: 추가 고지 사항 작성 */}
          <div className="text-sm">
            회원 탈퇴를 진행하려면 아래 버튼을 눌러주세요.
          </div>
          <DeleteUserButton />
        </div>
      </main>
    </>
  );
}

export default DeletePage;
