import StackNavigator from "../../_common/components/StackNavigator";
import ProjectInfo from "./_components/ProjectInfo";
import Profile from "./_components/Profile";
import MessageContainer from "./_components/MessageContainer";

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

  return (
    <main className="flex h-screen flex-col items-center">
      <StackNavigator
        element={
          <Profile avatarUrl={profileImage} username={name}>
            <span>{name}</span>
          </Profile>
        }
      />
      <ProjectInfo />
      <MessageContainer chatRoomId={id} />
    </main>
  );
}

export default ChattingRoomPage;
