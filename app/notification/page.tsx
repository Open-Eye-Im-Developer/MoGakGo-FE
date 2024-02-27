import StackNavigator from "../_common/components/StackNavigator";
import NotificationList from "./_components/NotificationList";
import AllowBox from "./_components/AllowBox";

function Page() {
  return (
    <>
      <StackNavigator title={"알림"} />
      <AllowBox />
      <NotificationList />
    </>
  );
}
export default Page;
