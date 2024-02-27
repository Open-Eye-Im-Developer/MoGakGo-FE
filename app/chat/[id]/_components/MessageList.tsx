import { DUMMY } from "../data";
import Message from "./Message";

function MessageList() {
  return (
    <div className="mt-20">
      {DUMMY.map(message => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}

export default MessageList;
