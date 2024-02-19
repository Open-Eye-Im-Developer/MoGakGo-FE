import axios from "axios";

import { NotificationType } from "../_types/notification";

export const getNotifications = async () => {
  const { data } = await axios.get<NotificationType[]>(
    "https://4be422db-e835-47c2-9193-48671c47b54e.mock.pstmn.io/testapi/notifications",
  );
  return data;
};
