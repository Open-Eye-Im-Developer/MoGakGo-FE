import React from "react";

import StackNavigator from "../_common/components/StackNavigator";
import ChatList from "./_components/ChatList";

function page() {
  return (
    <>
      <StackNavigator content={"채팅"} />
      <ChatList />
    </>
  );
}

export default page;
