"use client";

import Link from "next/link";

import { useQuerySignUpUser } from "../_common/hooks/queries/useQuerySignUpUser";
import WithNavigation from "../_common/hoc/WithNavigation";
import StackNavigator from "../_common/components/StackNavigator";
import Icon from "../_common/components/Icon";
import Profile from "./_components/Profile";
import MyProjectRequests from "./_components/MyProjectRequests";
import MyProjectList from "./_components/MyProjectList";
import MyCurrentMatchingProject from "./_components/MyCurrentMatchingProject";
import MyAchievements from "./_components/MyAchievements";
import LogoutButton from "./_components/LogoutButton";
import LikeCounter from "./_components/LikeCounter";
import JandiRating from "./_components/JandiRating";
import Badges from "./_components/Badges";

const FAQ_URL = process.env.NEXT_PUBLIC_FAQ_URL;

function MyPage() {
  const { data: userData } = useQuerySignUpUser();

  return (
    <div className="relative">
      <StackNavigator
        element={"마이페이지"}
        rightItem={
          <Link
            href={"/notification"}
            className="absolute right-5 top-9 z-10 -translate-y-[0.1rem]"
          >
            <Icon id="notification" size={24} />
          </Link>
        }
      />
      <main className="container flex min-h-screen max-w-2xl flex-col gap-8 pb-24">
        <Profile />
        <Badges />
        <LikeCounter />
        <div className="flex gap-8">
          <JandiRating />
          <MyAchievements />
        </div>
        <MyCurrentMatchingProject />
        <MyProjectList />
        <MyProjectRequests />
        <MyPageItem label="매칭 기록" href="/my-page/history" />
        <MyPageItem label="위치 인증" href="/auth-mylocation" />
        <MyPageItem label="자주 묻는 질문" href={`${FAQ_URL}`} />
        <MyPageItem label="회원 탈퇴" href="/my-page/delete" />
        {userData ? <LogoutButton /> : null}
      </main>
    </div>
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
