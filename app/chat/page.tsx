import React from "react";

import WithNavigation from "../_common/hoc/WithNavigation";
import StackNavigator from "../_common/components/StackNavigator";
import ChatList from "./_components/ChatList";

function ChatPage() {
  return (
    <main>
      <StackNavigator element={"채팅"} />
      <ChatList />
    </main>
  );
}

export default WithNavigation(ChatPage, true);
