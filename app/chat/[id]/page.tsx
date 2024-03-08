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

// TODO: chatMessageList를 받아와서 MessageContainer에 props로 넘긴다.
interface ChattinRoomPageProps {
  params: { id: string };
  searchParams: { name: string; profileImage: string };
}

async function ChattingRoomPage({
  params,
  searchParams,
}: ChattinRoomPageProps) {
  const { id } = params;
  const { name, profileImage } = searchParams;

  const {
    props: { chatMessageList },
  } = await getPreviousChatMessageList(id);
  // TODO: husky로 인해 커밋이 안되므로 임시 추가됨. 삭제 필요
  console.log(chatMessageList);

  return (
    <>
      <StackNavigator
        content={
          <Profile avatarUrl={profileImage} username={name}>
            <span>{name}</span>
          </Profile>
        }
      />
      <ProjectInfo />
      <MessageContainer chatRoomId={params.id} />
    </>
  );
}

export default ChattingRoomPage;
