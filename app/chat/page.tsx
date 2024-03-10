import React from "react";

import StackNavigator from "../_common/components/StackNavigator";
import ChatList from "./_components/ChatList";

function ChatPage() {
  return (
    <main>
      <StackNavigator content={"채팅"} />
      <ChatList />
    </main>
  );
}

export default ChatPage;
