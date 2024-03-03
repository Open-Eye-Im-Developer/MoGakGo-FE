"use client";
import StackNavigator from "../../_common/components/StackNavigator";
import ProjectInfo from "./_components/ProjectInfo";
import Profile from "./_components/Profile";
import MessageContainer from "./_components/MessageContainer";

function ChattingRoomPage() {
  return (
    <>
      <StackNavigator
        content={
          <Profile avatarUrl={"https://github.com/shadcn.png"} username={"e"}>
            <span>name</span>
          </Profile>
        }
      />
      <ProjectInfo />
      <MessageContainer />
    </>
  );
}

export default ChattingRoomPage;
