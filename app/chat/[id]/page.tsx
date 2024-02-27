import StackNavigator from "../../_common/components/StackNavigator";
import ProjectInfo from "./_components/ProjectInfo";
import Profile from "./_components/Profile";
import MessageList from "./_components/MessageList";
function page() {
  return (
    <>
      <StackNavigator
        content={
          <Profile imageUrl={"https://github.com/shadcn.png"} name={"e"}>
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
