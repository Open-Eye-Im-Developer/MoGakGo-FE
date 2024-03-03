import { useParams } from "next/navigation";
import dayjs from "dayjs";

import formatMeetingTime from "@/app/project/_utils/formatMeetingTime";

import useGetChatInfo from "../_api/useGetChatInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../_common/shadcn/ui/accordion";

function ProjectInfo() {
  const { id } = useParams<{ id: string }>();
  const { data: chatInfo } = useGetChatInfo(id);

  if (!chatInfo) return;

  const { meetDetail, meetStartTime, meetEndTime } = chatInfo;

  return (
    <Accordion
      className="absolute z-10 w-full bg-white"
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-4 hover:no-underline">
          📍 {meetDetail}
        </AccordionTrigger>
        <AccordionContent className="px-4 text-gray-500">
          <div>🕡 {formatMeetingTime(meetStartTime, meetEndTime)}</div>
          <div> 🕡 {dayjs(meetStartTime).format("YYYY. MM. DD")}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ProjectInfo;
