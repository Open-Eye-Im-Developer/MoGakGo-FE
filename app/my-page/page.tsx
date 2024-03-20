"use client";

import Link from "next/link";

import WithNavigation from "../_common/hoc/WithNavigation";
import StackNavigator from "../_common/components/StackNavigator";
import Icon from "../_common/components/Icon";
import Profile from "./_components/Profile";
import MyProjectRequests from "./_components/MyProjectRequests";
import MyProjectList from "./_components/MyProjectList";
import MyAchievements from "./_components/MyAchievements";
import LoginRequestModal from "./_components/LoginRequestModal";
import LikeCounter from "./_components/LikeCounter";
import JandiRating from "./_components/JandiRating";

function MyPage() {
  return (
    <>
      <LoginRequestModal />
      <StackNavigator element={"마이페이지"} />
      <main className="container flex min-h-screen max-w-2xl flex-col gap-8 pb-24">
        <Profile />
        <LikeCounter />
        <div className="flex gap-8">
          <JandiRating />
          <MyAchievements />
        </div>
        <MyProjectList />
        <MyProjectRequests />
        <MyPageItem label="매칭 기록" href="/my-page/history" />
        <MyPageItem label="위치 인증" href="/auth-mylocation" />
        <MyPageItem
          label="자주 묻는 질문"
          href="https://beomahn.notion.site/24b02e4a402845b8ab9e1ed34dac31d0?pvs=4"
        />
        <MyPageItem label="회원 탈퇴" href="/my-page/delete" />
      </main>
    </>
  );
}

export default WithNavigation(MyPage, true);

interface MyPageItemProps {
  label: string;
  href: string;
}

function MyPageItem(props: MyPageItemProps) {
  const { label, href } = props;

  return (
    <Link href={href}>
      <div className="text-md flex items-center justify-between gap-1 font-bold">
        {label}
        <Icon id="chevron-right" size={26} />
      </div>
    </Link>
  );
}
