import StackNavigator from "../_common/components/StackNavigator";
import MyLocationAuth from "./_components/MyLocationAuth";

function AuthMylocationPage() {
  return (
    <main className="p-4">
      <StackNavigator element="내 위치 인증" className="px-0 py-4" />
      <MyLocationAuth />
    </main>
  );
}

export default AuthMylocationPage;
