import StackNavigator from "../../_common/components/StackNavigator";
import ProjectInfo from "./_components/ProjectInfo";
import Profile from "./_components/Profile";
import MessageContainer from "./_components/MessageContainer";

// TODO 배포 도메인 주소로 변경하여 API 호출
async function getPreviousChatMessageList(chatRoomId: string) {
  const response = await fetch(
    `http://localhost:3000/api/chat?chatRoomId=${chatRoomId}`,
  );
  const { data } = await response.json();

  return {
    props: {
      chatMessageList: data,
    },
  };
}

async function ChattingRoomPage({ params }: { params: { id: string } }) {
  const {
    props: { chatMessageList },
  } = await getPreviousChatMessageList(params.id);
  return (
    <main>
      <StackNavigator
        content={
          <Profile avatarUrl={"https://github.com/shadcn.png"} username={"e"}>
            <span>name</span>
          </Profile>
        }
      />
      <ProjectInfo chatRoomId={params.id} />
      <MessageContainer chatRoomId={params.id} prevChatMessageList={chatMessageList} />
    </main>
  );
}

export default ChattingRoomPage;
