import { DUMMY_USER_DATA } from "./constants";
import MyPageLayout from "./_components/MyPageLayout";

function MyPage() {
  return <MyPageLayout data={DUMMY_USER_DATA} />;
}

export default MyPage;
