import StackNavigator from "../../_common/components/StackNavigator";
import ProjectInfo from "./_components/ProjectInfo";
import Profile from "./_components/Profile";
import MessageList from "./_components/MessageList";
function page() {
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
      <MessageList />
    </>
  );
}

export default page;
