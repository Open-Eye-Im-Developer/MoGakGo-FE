import { useParams } from "next/navigation";
import dayjs from "dayjs";

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

  const startTime = dayjs(meetStartTime);
  const endTime = dayjs(meetEndTime);

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
          <div>
            🕡 {startTime.format("HH:mm")}~{endTime.format("HH:mm")}
          </div>
          <div> 🕡{startTime.format("YYYY. MM. DD")}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ProjectInfo;
