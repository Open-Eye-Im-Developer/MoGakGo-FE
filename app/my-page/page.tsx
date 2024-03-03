"use client";

import { useQuerySignUpUser } from "../signup/_hooks/useQuerySignUpUser";
import { useQueryMySendLikeCount } from "./_hooks/useQueryMySendLikeCount";
import { useQueryMyReceiveLikeCount } from "./_hooks/useQueryMyReceiveLikeCount";
import { useQueryMyProjectReqeusts } from "./_hooks/useQueryMyProjectReqeusts";
import { useQueryMyProjectList } from "./_hooks/useQueryMyProjectList";
import { useQueryMyProjectHistory } from "./_hooks/useQueryMyProjectHistory";
import Profile from "./_components/Profile";
import MyProjectReqeusts from "./_components/MyProjectReqeusts";
import MyProjectList from "./_components/MyProjectList";
import MyProjectHistory from "./_components/MyProjectHistory";
import LikeCount from "./_components/LikeCount";

function MyPage() {
  const { data: userData } = useQuerySignUpUser();
  const { data: projectList } = useQueryMyProjectList(userData?.id);
  const { data: projectRequests } = useQueryMyProjectReqeusts(userData?.id);
  const { data: sendLikeCount } = useQueryMySendLikeCount(userData?.id);
  const { data: receiveLikeCount } = useQueryMyReceiveLikeCount(userData?.id);
  const { data: projectHistory } = useQueryMyProjectHistory(userData?.id);

  console.log(projectHistory);

  return (
    <main className="container flex min-h-screen max-w-2xl flex-col gap-8 bg-gray-50 dark:bg-gray-950">
      <Profile data={userData} />
      <LikeCount
        sendLikeCount={sendLikeCount}
        receiveLikeCount={receiveLikeCount}
      />
      <MyProjectList data={projectList} />
      <MyProjectReqeusts data={projectRequests} />
      <MyProjectHistory data={projectHistory} />
    </main>
  );
}

export default MyPage;
