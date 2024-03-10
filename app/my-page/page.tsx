"use client";

import StackNavigator from "../_common/components/StackNavigator";
import { useQueryUserData } from "./_hooks/useQueryUserData";
import { useQuerySendLikeCount } from "./_hooks/useQuerySendLikeCount";
import { useQueryReceiveLikeCount } from "./_hooks/useQueryReceiveLikeCount";
import { useQueryProjectRequests } from "./_hooks/useQueryProjectRequests";
import { useQueryProjectList } from "./_hooks/useQueryProjectList";
import { useQueryProjectHistory } from "./_hooks/useQueryProjectHistory";
import { useQueryJandiRating } from "./_hooks/useQueryJandiRating";
import Profile from "./_components/Profile";
import MyProjectRequests from "./_components/MyProjectRequests";
import MyProjectList from "./_components/MyProjectList";
import MyProjectHistory from "./_components/MyProjectHistory";
import LikeCount from "./_components/LikeCount";
import JandiRating from "./_components/JandiRating";

function MyPage() {
  const { data: userData, isError, error } = useQueryUserData();
  const { data: jandiRating } = useQueryJandiRating(userData?.id);
  const { data: sendLikeCount } = useQuerySendLikeCount(userData?.id);
  const { data: receiveLikeCount } = useQueryReceiveLikeCount(userData?.id);
  const { data: projectList } = useQueryProjectList(userData?.id, 3);
  const { data: projectRequests } = useQueryProjectRequests(userData?.id, 3);
  const { data: projectHistory } = useQueryProjectHistory(userData?.id, 3);

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <main className="container flex min-h-screen max-w-2xl flex-col gap-8 bg-gray-50 pb-8 dark:bg-gray-950">
      <StackNavigator content={"마이페이지"} />
      <Profile data={userData} />
      <LikeCount
        sendLikeCount={sendLikeCount}
        receiveLikeCount={receiveLikeCount}
      />
      <JandiRating data={jandiRating} />
      <MyProjectList data={projectList} />
      <MyProjectRequests data={projectRequests} />
      <MyProjectHistory data={projectHistory} />
    </main>
  );
}

export default MyPage;
