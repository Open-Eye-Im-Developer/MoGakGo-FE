import { useState } from "react";
import dayjs from "dayjs";

import { MessageType, CustomMessageType } from "../_types/message";

export const useCustomMessage = () => {
  const MY_ID = "1";

  const [messageList, setMessageList] = useState<CustomMessageType[]>([]);
  const [currentSender, setCurrentSender] = useState(MY_ID);

  const checkOption = (newList: CustomMessageType[], message: MessageType) => {
    const prevTime = newList[newList.length - 1]?.createdAt;
    const prevSender = newList[newList.length - 1]?.senderId;
    return !(
      message.senderId === prevSender &&
      dayjs(message.createdAt).isSame(dayjs(prevTime), "minute")
    );
  };

  const addNewMessage = (newMessages: MessageType[]) => {
    newMessages.forEach((message: MessageType) => {
      return setMessageList(prev => {
        setCurrentSender(message.senderId);
        if (prev.length === 0) return [{ ...message, isTime: true }];
        return filterCustomMessages([...prev], message);
      });
    });
  };

  const filterCustomMessages = (
    newList: CustomMessageType[],
    message: MessageType,
  ) => {
    const isTime = checkOption(newList, message);
    const prevMessage = { ...newList[newList.length - 1], isTime: isTime };
    const newMessage = { ...message, isTime: true };

    newList.pop();
    newList.push(prevMessage);
    newList.push(newMessage);
    return newList;
  };

  return { messageList, addNewMessage, currentSender };
};
