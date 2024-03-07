import StackNavigator from "../../_common/components/StackNavigator";
import Profile from "./_components/Profile";
import MessageContainer from "./_components/MessageContainer";

async function ChattingRoomPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <StackNavigator
        content={
          <Profile avatarUrl={"https://github.com/shadcn.png"} username={"e"}>
            <span>name</span>
          </Profile>
        }
      />
      {/* <ProjectInfo chatRoomId={params.id} /> */}
      <MessageContainer chatRoomId={params.id} />
    </main>
  );
}

export default ChattingRoomPage;
